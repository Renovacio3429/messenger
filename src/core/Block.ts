import {v4 as makeUUID} from 'uuid';
import Handlebars from "handlebars";
import EventBus from "./EventBus";

export default abstract class Block<Props extends Record<string, any>> {
    private static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    public id: string = makeUUID();
    protected props: Props;
    protected children: Record<string, any>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;

    constructor(propsWithChildren?: Props) {
        const eventBus = new EventBus();
        const {props, children} = this._getChildrenAndProps(propsWithChildren);
        this.children = children;
        this.props = this._makePropsProxy(<Props>props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _getChildrenAndProps(childrenAndProps: Record<string, any> = {}): {props: Record<string, any>, children: Record<string, any> } {
        const props: Record<string, any> = {};
        const children: Record<string, any> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (Array.isArray(value) || value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {props, children};
    }

    private _addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init(): void {}

    private _componentDidMount(): void {
        this.componentDidMount();
    }

    protected componentDidMount(): void {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps?: Props, newProps?: Props): void {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps?: Props, newProps?: Props): boolean {
        return true;
    }

    public setProps = (nextProps: Record<string, any>) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    public get element(): HTMLElement | null {
        return this._element;
    }

    private _render(): void {
        const block = this.render();
        const newElement = block.firstElementChild as HTMLElement;

        this._element?.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }

    protected compile(template: string, context: Record<string, any>): DocumentFragment {
        const propsAndStubs = {...context};

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                child.forEach(c => {

                    if (!propsAndStubs[key])
                        propsAndStubs[key] = [];

                    propsAndStubs[key].push(`<div data-id="${c.id}"></div>`);
                });
            } else {
                propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
            }
        });

        const html = Handlebars.compile(template)(propsAndStubs);
        const fragment = document.createElement("template");

        fragment.innerHTML = html;

        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((item) => {
                    const stub = fragment.content.querySelector(`[data-id="${item.id}"]`);

                    if (stub)
                        stub.replaceWith(item.getContent());
                });
            } else {
                const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
                if (stub)
                    stub.replaceWith(<Node>child.getContent());
            }
        });
        return fragment.content;
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    public getContent(): HTMLElement | null {
        return this.element;
    }

    private _makePropsProxy(props: Props): Props {
        return new Proxy(props, {
            get: (target: Props, prop: string) => {
                const value: any = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target: Props, prop: string, value) => {
                const oldTarget: Props = {...target};
                target[prop as keyof typeof props] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },

            deleteProperty(): boolean {
                throw new Error("Access Denied!");
            },
        });
    }

    public showFlex(): void {
        this.getContent()!.style.display = "flex";
    }

    public showBlock(): void {
        this.getContent()!.style.display = "block";
    }

    public hide(): void {
        this.getContent()!.style.display = "hide";
    }

    public none(): void {
        this.getContent()!.style.display = "none";
    }
}
