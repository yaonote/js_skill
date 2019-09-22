class EventEmitter {
    constructor() {
        this._event = this._event || new Map();
        this._maxListeners = this._maxListeners || 10;
    }
    addListener(eventName, cb) {
        let handle = this._event.get(eventName);
        if(!handle){
            this._event.set(eventName,[cb])
        }else{
            handle.push(cb)
        }
    }
    emit(eventName,...args) {
        let handle = this._event.get(eventName);
        if(!handle){ return new Error('请先 addListener 该事件')};
        handle.forEach(event => {
            event.apply(this,args)
        });
    }
    removeListener(eventName,cb) {
        let handle = this._event.get(eventName);
        handle = handle.filter(item => item !== cb)
        this._event.set(eventName,handle)
    }

}