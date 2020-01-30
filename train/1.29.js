function New2(fn,...args) {
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
    left = left.__proto__;
    while(true) {
        if(left === null) return false;
        if(left === rightProto) return true;
        left = left.__proto__;
    }
}


function create2(proto) {
    function F() {};
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F();
}



Function.prototype.call2 = function(context = window, ...args) {
    let fn = this;
    context.fn = fn;
    let res = context.fn(...args);
    delete context.fn;
    return res
}

Function.prototype.bind2 = function(context = window,...args) {
    let thatFn = this;
    return (...innerArgs) => {
        const params = args.concat(innerArgs);
        return thatFn.apply(context,params)
    }
}

/**组合继承 */
function Super(name) {
    this.name = name
}
Super.prototype.sayName = function() {
    console.log(this.name)
}
function Sub(name,age) {
    Super.call(this,name);
    this.age = age;
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

Sub.prototype.sayAge = function() {
    console.log(this.age)
}
/* ************************************* */

/** 寄生组合式继承 */

function object(proto) {
    function F() {};
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F()
}
function inherit(superType,subType) {
    let proto = object(super.prototype);
    subType.prototype = proto;
    subType.prototype.constructor = subType;
}


function Super(name) {
    this.name = name
}
Super.prototype.sayName = function() {
    console.log(this.name)
}
function Sub(name,age) {
    Super.call(this,name);
    this.age = age;
}
inherit(Super,Sub)
Sub.prototype.sayAge = function() {
    console.log(this.age)
}


function hidePhone(num) {
    let str = ''+num;
    return str.replace(/(\d{3})\d{4}(\d{4})/g,'$1****$2') 
}
const res = hidePhone(12345678901)
console.log(res)
