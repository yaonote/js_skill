class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(eventName, cb) {
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        this._events[eventName].push(cb);
    }

    off(eventName, cb) {
        if (!this._events[eventName]) return;
        if (!cb) {
            this._events[eventName] = undefined;
        }
        let index = this._events[eventName].indexOf(cb);
        this._events[eventName].splice(index, 1);
    }

    emit(eventName) {
        if (!this._events[eventName]) return;
        this._events[eventName].forEach(fn => fn())
    }

    once(eventName, cb) {
        let that = this;
        let _cb = () => {
            cb.apply(that, arguments);
            that.off(eventName)
        };
        this.on(eventName, _cb);
    }
}