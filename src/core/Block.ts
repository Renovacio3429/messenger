import {EventBus} from "./eventBus";
import {v4 as makeUUID} from 'uuid';
import Handlebars from "handlebars";

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    public id: string = makeUUID();
    protected props: Record<string, any>;
    protected children: Record<string, Block>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;

    constructor(propsWithChildren: object = {} ) {
        const eventBus = new EventBus();
        const {props, children} = this._getChildrenAndProps(propsWithChildren);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _getChildrenAndProps(childrenAndProps: any = {}) {
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
        const {events = {}} = this.props as {events: Record<string, () => void>};

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

    protected init() {}

    private _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps?: any, newProps?: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    public setProps = (nextProps: any) => {
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const block = this.render();
        const newElement = block.firstElementChild as HTMLElement;

        this._element?.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }

    protected compile(template: string, context: any) {
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

    private _makePropsProxy(props: Record<string, any>) {
        const self = this;
        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                const oldTarget = { ...target };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },

            deleteProperty() {
                throw new Error("Access Denied!");
            },
        });
    }

    public showFlex() {
        this.getContent()!.style.display = "flex";
    }

    public showBlock() {
        this.getContent()!.style.display = "block";
    }

    public hide() {
        this.getContent()!.style.display = "hide";
    }

    public none() {
        this.getContent()!.style.display = "none";
    }
}
