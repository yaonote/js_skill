function New2(func) {
    let res = {};
    if(func.prototype){
        res.__proto__ = func.prototype;
    }
    const ret = func.apply(res,Array.prototype.slice.call(arguments,1))
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res;
}
function instanceOf2(left,right) {
    let rightProto = right.prototype;
    left = left.__proto__;
    while (true) {
        if(left === null){
            return false
        }
        if(left === rightProto){
            return true
        }
        left = left.__proto__;
    }
}
function create2(proto) {
    function F() {};
    F.prototype = proto; 
    F.prototype.constructor = F;
    return new F()
}
Function.prototype.call2 = function(context = window,...args) {
    const func = this;
    const fn = Symbol('fn');
    context[fn] = func;
    const res = context[fn](...args)
    delete context[fn];
    return res;
}
Function.prototype.bind2 = function(context = window,...args) {
    let self = this;
    let resultFn = function() {
        let _content = this instanceof resultFn ? this : context;
        return self.apply(_content,args)
    }
    resultFn.prototype = Object.create(this.prototype)
    return resultFn;
}
function deepClone(data) {
    let res = {};
    Object.keys(data).forEach(key => {
        if(typeof data[key] === 'object'){
            res[key] = deepClone(data[key])
        }else{
            res[key] = data[key]
        }
    })
    return res;
}

class EventEmitter{
    constructor() {
        this._event = new Map();
    }
    on(eventName,cb){
        let handle = this._event.get(eventName);
        if(!handle){
            this._event.set(eventName,[cb]);
        }else{
            handle.push([cb]);
        }
    }
    emit(eventName,...args){
        let handle = this._event.get(eventName);
        if(!handle){ return new Error(`请先 on ${eventName}`)};
        handle.forEach(event => {
            event.apply(null,args)
        })
    }
    removeEvent(eventName){
         let handle = this._event.get(eventName);
         handle = handle.filter(handler => handler !== handle);
         this._event.set(eventName,handle);
    }
}