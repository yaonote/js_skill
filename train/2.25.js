function New2(fn,...args) {
    let res = {};
    if(fn.prototype){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,args);
    if(ret !== null && ['function','object'].includes(typeof ret)){
        return ret;
    }
    return res;
}
function instanceof2(left,right) {
    let leftValue = left.__proto__,
        rightValue = right.prototype;
    while(true){
        if(leftValue === null) return false;
        if(leftValue === rightValue) return true;
        leftValue = leftValue.__proto__;
    }
}
function create(proto) {
    function F() {};
    F.prototype = proto;
    F.constructor = F;
    return new F();
}

Function.prototype.call2 = function(context = window,...args) {
    let fn = this;
    context.fn = fn;
    let res = context.fn(...args);
    delete context.fn;
    return res;
}

Function.prototype.bind = function(context = window,...args){
    let fn = this;
    let resultFn = function(...innerArgs){
        fn.apply(context,[...args,...innerArgs])
    }
    return resultFn;
}

function deepClone(data) {
    let result = {};
    if(typeof data !== 'object') return;
    Object.keys(data).forEach(key => {
        if(typeof data[key] === 'object'){
            result[key] = deepClone(data[key])
        }else{
            result[key] = data[key];
        }
    })
    return result;
}


function Event() {
    this.eventMap = {}
}

Event.prototype.$on = function(name,handle){
    if(!this.eventMap[name]){
        this.eventMap[name] = [handle]
    }else{
        this.eventMap[name].push(handle)
    }
}

Event.prototype.$emit = function(name){
    if(this.eventMap[name]){
        this.eventMap[name].forEach(handle => handle())
    }
}




// sub.prototype = new Super()


function Super(name) {
    this.name = name;
    this.colors = ['red','blue','green'];
}







