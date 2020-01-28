function New2(fn,...args) {
    let res = {};
    if(fn.prototype){
        res.__proto__ = fn.prototype
    }
    let ret = fn.apply(res,args);
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res;
}

function Test(age) {
    this.name = 'lly';
    this.age = age;
}
// let people = new Test(18)
// console.log('people =>',people)
// let people2 = New2(Test,18)
// console.log('people2 =>',people2)


function instanceOf2(left,right) {
    let rightPrototype = right.prototype,
        leftProto = left.__proto__;
    while(true){
        if(leftProto === null){
            return false;
        }
        if(leftProto === rightPrototype){
            return true;
        }
        leftProto = leftProto.__proto__;
    }
}


Object.prototype.create2 = function(o) {
    function F() {};
    F.prototype = o;
    F.prototype.constructor = F;
    return new F();
}
/**
 * 
 */
Function.prototype.call2 = function(context = window, ...args) {
    context.fn = this;
    let res = context.fn(...args);
    delete context.fn;
    return res;
}

Function.prototype.apply2 = function(context = window, args) {
    context.fn = this;
    let res = context.fn(...args);
    delete context.fn;
    return res;
}
Function.prototype.bind2 = function() {
    let slice = Array.prototype.slice;
    let thatFunc = this,
        that = arguments[0], //绑定的this
        args = slice.call(arguments,1);
    return function() {
        const funcArgs = args.concat(slice.call(arguments))
        return thatFunc.apply(that,funcArgs)
    }
}

function deepClone(obj) {
    let res = {};
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object'){
            res[key] = deepClone(obj[key])            
        }else{
            res[key] = obj[key];
        }
    })
    return res;
}


























