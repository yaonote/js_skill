function new2(fn,...args) {
    let res = {};
    if(fn.prototype !== null){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,args)
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res;
}
function instanceof2(left,right) {
    const rightProto = right.prototype;
    left = left.__proto__;
    while (true) {
        if(left === null){
            return false;
        }
        if(left === rightProto){
            return true;
        }
        left = left.__proto__;
    }
}

Object.prototype.create2 = function(o) {
    function F() {};
    F.prototype = o;
    F.prototype.constructor = F;
    return new F();
}

Function.prototype.apply2 = function(context = window, ...args) {
    context.fn = this;
    let res = context.fn(...args)
    delete context.fn;
    return res
} 

Function.prototype.bind2 = function(context = window, ...args) {
    let resFn, self = this;
    resFn = function() {
        context = this instanceof resFn ? this : context;
        return self.apply(context,args)
    }
    resFn.prototype = Object.create(self.prototype)
    return resFn;
}

function deepClone(data) {
    let res = {};
    Object.keys(data).forEach(function(key) {
        if(typeof data[key] === 'object'){
            res[key] = deepClone(data[key])
        }else{
            res[key] = data[key];
        }
    })
    return res;
}



class EventBus{
    constructor() {
        this.events = new Map();
    }
    on(eventName,cb) {
        let handle = this.events.get(eventName);
        if(!handle){
            this.events.set(eventName,[cb])
        }else{
            handle.push(cb)
        }
    }
    emit(eventName){
        let handle = this.events.get(eventName);
        if(handle){
            handle.forEach(fn)
        }else{
            return new Error('no have this handle')
        }
    }

}
function query2data(str) {
    return str.replace(/^\?/,'').split('&').reduce((acc,curr) => {
        const [key,val] = curr.split('=');
        return {
            ...acc,
            [key]: val
        }
    },{})
}
function query2Data(params) {
    return Object.keys(params).reduce((acc,curr) => {
        return [
            ...acc,
            `${curr}=${params[curr]}`
        ]
    },[]).join('&')
}


function numFormat(num) {
    return String(num).replace(/(?!^)(?=(\d{3})+$)/gu,',')
}

function hidePhone(phone) {
    return String(phone).replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')
}

// console.log(numFormat(12345678909))

function toUpper(str) { 
    return str.replace(/\_(\w)/g,(_,needUp) => needUp.toUpperCase())
}
console.log(toUpper('need_up'))

function to_(str) {
    return str.replace(/([A-Z])/g,'_$1').toLowerCase();
}
console.log(to_('needUp'))


Array.prototype.reduce2 = fucntion(fn,init) {
    let res = init, i = 0;
    if(init !== undefined){
        res = this[0]
        i = 1;
    }
    for(j = i; j<this.length; j++){
        res = fn(res,this[i],i,this)
    }
    return res
}


function debounce(fn,delay = 500) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null,args)            
        }, delay);
    }
}

function throttle(fn,delay = 500) {
    let flag = true;
    return (...args) => {
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(null,args)
            flag = true;
        },delay)
    } 
}

let arr = [3,4,2,6,8,9,1,5,7]
function bubbleSort(arr) {
    let len = arr.length;
    for(let i = len-1; i > 1; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

// console.log(bubbleSort(arr))

let arr = [3,4,2,6,8,9,1,5,7]
function selectSort(arr) {
   let len = arr.length;
   for(let i = 0; i<len-1; i++){
       for(let j = i; j < len; j++){
           if(arr[j] < arr[i]){
               [arr[j],arr[i]] = [arr[i],arr[j]];
           }
       }
   }
   return arr;
}

let arr = [3,4,2,6,8,9,1,5,7]
function insertSort(arr) {
   let len = arr.length;
   for(let i = 1; i < len; i++){
       for(let j = i; j > 0; j--){
           if(arr[j] < arr[j-1]){
               [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
           }else{
               break;
           }
       }
   }
   return arr;
}
console.log(insertSort(arr))





