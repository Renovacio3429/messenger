export default class EventBus {
    protected readonly listeners: Record<string, Function[]>;

    constructor() {
        this.listeners = {};
    }

    public on(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public off(event: string, callback: () => void): void {
        if (!this.listeners[event]) {
            throw new Error(`Event not found: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback
        );
    }

    public emit(event: string, ...args: unknown[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Event not found: ${event}`);
        }

        this.listeners[event].forEach(function (listener) {
            listener(...args);
        });
    }
}
