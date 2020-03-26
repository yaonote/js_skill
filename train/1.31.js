function New2(fn,...args) {
    let res = {};
    if(fn.prototype){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,args);
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res
}

function instanceOf2(left,right) {
    let rightProto = right.prototype;
    let leftVal = left.__proto__;
    while(true){
        if(leftVal === null){
            return false;
        }
        if(leftVal === rightProto){
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
Function.prototype.apply2 = function(context = window,...args) {
    context.fn = this;
    let res = context.fn(...args)
    delete context.fn;
    return res;
}
Function.prototype.bind2 = function(context = window, ...args) {
    let thatFn = this;
    return function(...innerArgs) {
        const params = args.concat(innerArgs);
        return thatFn.apply(context,params)
    }
}


function UrlString(obj) {
    return Object.keys(obj).reduce((acc,key) => {
        return acc.concat(`${key}=${obj[key]}`)
    },[]).join('&')
}

function UrlParse(url) {
    return url.replace(/^.*\?/g,'').split('&').reduce((acc,curr) => {
        let [key,val] = curr.split('=');
        return {
            ...acc,
            [key]:val
        }
    },{})
}
console.log(UrlParse('http://www.baidu.com:8080?a=1&b=3'))







































