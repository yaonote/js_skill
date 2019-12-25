function New(func) {
    let res = {};
    if(func.prototype !== null){
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, [].slice.call(arguments,1));
    if(['object','function'].includes(typeof ret) && ret !== null){
        return ret
    }
    return res
}
function Test(){
    this.name = 'aa';
    this.age = 18;
}
// let res = New(Test)
// console.log(res)

function parse(str) {
    return ( new Function(`return ${str}`) )()
}
// console.log(parse(JSON.stringify({name: '齐三炮'})))

Function.prototype.call2 = function(content = window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
}

Function.prototype.apply2 = function(content = window){
    content.fn = this;
    let result;
    if(arguments[1]){
        result = content.fn(...arguments[1]);
    }else{
        result = content.fn();
    }
    delete content.fn;
    return result
}

Function.prototype.bind2 = function(content = window) {
    let args = [...arguments].slice(1);
    let fn = this;
    let resFn = function(){
        let that = this instanceof resFn ? this : content;
        let argsData = args.concat(...arguments);
        return fn.apply(that,argsData)
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    // resFn.prototype = this.prototype  这样也是可以的
    // 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
    function Tmp() {};
    Tmp.prototype = this.prototype;
    resFn.prototype = new Tmp();
    return resFn;
}
let obj = { name: 'lly' };
function test(params) {
    console.log(this.name,params)
}
// const res = test.bind2(obj,'nb');
function curry(fn,args) {
    let length = fn.length;
    args = args || [];
    return function() {
        let newArgs = args.concat([].slice.call(arguments));
        if(newArgs.length < length){
            return curry.call(this,fn,newArgs)
        }else{
            return fn.apply(this,newArgs)
        }
    }

}
function multiFn(a,b,c) {
    return a * b * c
}
let curryMultiFn = curry(multiFn);
// console.log(curryMultiFn(2)(3)(4))
// console.log(curryMultiFn(2,3,4))
// console.log(curryMultiFn(2)(3,4))
// console.log(curryMultiFn(2,3)(4))
// 防抖
function debounce(fn,wait = 50,immediate){
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,[...arguments])
        }, wait);
    }
}
// 节流
function throttle(fn,wait) {
    let prev = new Date();
    return function() {
        const args = arguments;
        const now = new Date();
        if(now - prev > wait){
            fn.apply(this,[...args])
            prev = new Date();
        }
    }
}



const PENDINF = "pending";
const FULLFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise2(excutor) {
    let that = this;
    that.status = PENDINF;
    that.value = undefined;
    that.reason = undefined;
    that.onFulfilledCallbacks = [];
    that.onRejectedCallbacks = [];
    function resolve(value) {
        if(value instanceof Promise2){
            return value.then(resolve,reject)
        }
        setTimeout(() => {
            if(that.status === PENDINF){
                that.status = FULLFILLED;
                that.value = value;
                that.onFulfilledCallbacks.forEach(cb => cb(that.value));
            }   
        });
    }
    function reject(reason) {
        setTimeout(() => {
            if(that.status === PENDINF){
                that.status = REJECTED;
                that.reason = reason;
                that.onRejectedCallbacks.forEach(cb => cb(that.resaon))
            }   
        });
    }
    try {
        excutor(resolve,reject)
    } catch (error) {
        reject(error)
    }
}






