import {v4 as makeUUID} from 'uuid';
import Handlebars from "handlebars";
import EventBus from "./EventBus";

export default class Block<Props extends Record<string, any> = any> {
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
            if (Array.isArray(value) && value.length > 0 && value.every(v => v instanceof Block)) {
                children[key as string] = value;
            } else if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        });

        return {props: props as Props, children};
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

        Object.values(this.children).forEach(child => {
            if (Array.isArray(child)) {
                child.forEach(ch => ch.dispatchComponentDidMount());
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    private _componentDidUpdate(oldProps: Props, newProps: Props): void {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
        return true;
    }

    setProps = (nextProps: Partial<any>) => {
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

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                propsAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`);
            } else {
                propsAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });

        const html = Handlebars.compile(template)(propsAndStubs);
        const fragment = document.createElement("template");

        fragment.innerHTML = html;

        const replaceStub = (component: Block) => {
            const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }

            component.getContent()?.append(...Array.from(stub.childNodes));

            stub.replaceWith(component.getContent()!);
        };

        Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
                component.forEach(replaceStub);
            } else {
                replaceStub(component);
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
