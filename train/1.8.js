function new2(fn,...args) {
    let res = {};
    if(fn.prototype !== null){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,args);
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret;
    }
    return res;
}
function instance0f2(left,right){
    let rightProto = right.prototype;
    left  = left.__proto__;
    while(true) {
        if(left === null){
            return false;
        }
        if(left === rightProto){
            return true;
        }
        left = left.__proto__;
    }
}

function create2(o) {
    function F();
    F.prototype = o;
    F.constructor = F;
    return new F();
}

Function.prototype.call2 = function(context = window,...args) {
    const key = Symbol('key');
    context[key] = this;    
    const res = context[key](...args);
    delete context[key];
    return res;
}

Function.prototype.bind2 = function(context = window,...args) {
    let resFn, self = this;
    resFn = function(...innerArgs) {
        context = this instanceof resFn ? this : context;
        return self.apply(context,args.concat(innerArgs))
    }
    resFn.prototype = Object.create(self.prototype)
    return resFn;
}


Array.prototype.reduce2 = function(fn,init) {
    let arr = this,
        n = 0,
        res = init;
    if(init === undefined) {
        n = 1;
        res = arr[0];
    }
    for(i = n; i < arr.length; i++){
        res = fn(res,arr[i],i,arr)
    }
    return res;
}
Array.prototype.flat2 = function() {
    let arr = this, res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res.concat(arr[i].flat2())
        }else{
            res.push(arr[i])
        }
    }
    return res;
}

function debounce(fn, delay = 500) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(null,args)
        }, delay);
    }
}

function throttle(fn,delay = 500) {
    let flag = true;
    return (...args) => {
        if(!flag) return ;
        flag = false;
        setTimeout(() => {
            fn.apply(null,args)
        }, delay);
    }
}
function bubbleSort(arr) {
    let len = arr.length;
    for(let i = len; i > 0; i--){
        for(let j = i; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return res;
}
function selectSort(arr) {
    const n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(arr[j] < arr[i]) {
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    }
    return arr;
}
function insertSort(arr) {
    let res = arr.slice();
    const n = res.length;
    for(let i = 0; i < n; i++) {
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                break;
            }
        }
    }
    return res;
}

