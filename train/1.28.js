function new2(fn,...args) {
    let res = {};
    if(fn.prototype){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,args);
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res;
}

function instanceOf2(left,right) {
    let rightProto = right.prototype;
    let leftVal = left.__proto__;
    while(true){
        if(leftVal === null){
            return false
        }
        if(leftVal === rightProto) {
            return true
        }
        leftVal = leftVal.__proto__
    }
}
Object.prototype.create2 = function(proto) {
    function F() {};
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F();
}

Function.prototype.call2 = function(context = window,...args) {
    context.fn = this;
    let res = context.fn(...args)
    delete context.fn;
    return res;
}

Function.prototype.bind2 = function(context = window,...args) {
    const thatFn = this;
    return (...innerArgs) => {
        const params = args.concat(innerArgs);
        return thatFn.apply(context,params);
    }
}
function deepClone(data) {
    if(data !== null && typeof data !== 'object') return ;
    let res = {};
    Object.keys(data).forEach(key => {
        if(typeof data[key] === 'object'){
            res[key] = deepClone(data[key])
        }else{
            res[key] = data[key];
        }
    })
    return res;
}















































