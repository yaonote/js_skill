class EventEmitter {
    constructor(){
        this._events = {};
    }

    on(eventName, handle) {
        if(!this._events[eventName]){
            this._events[eventName] = []
        }
        this._events[eventName].push(handle)
    }

    off(eventName, handle) {
        if(!this._events[eventName]) return;
        if(!handle) {
            this._events[eventName] = undefined;
        }
        let index = this._events[eventName].indexOf(handle);
        this._events[eventName].splice(index, 1);
    }

    emit(eventName) {
        if(!this._events[eventName]) return;
        this._events[eventName].forEach(fn=>fn())
    }

    once(eventName, handle) {
        let that = this;
        let _handle = () => {
            handle.apply(that, arguments);
            that.off(eventName);
        };
        this.on(eventName, _handle);
    }
}