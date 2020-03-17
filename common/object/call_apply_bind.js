// call
Function.prototype.call = function (content = window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
}




//apply
Function.prototype.apply = function (content = window) {
    content.fn = this;
    let result;
    if (arguments[1]) {
        result = content.fn(arguments[1]);
    } else {
        result = content.fn()
    }
    delete content.fn;
    return result;
}

Function.prototype.apply = function (content = window) {
    content.fn = this;
    let result;
    if (arguments[1]) {
        result = content.fn(arguments[1]);
    } else {
        result = content.fn();
    }
    delete content.fn;
    return result;
}







//bind
Function.prototype.bind = function (content = window, ...args) {
    let fn = this;
    let resultFn = function () {
        // this instanceof resultFn 构造函数的情况 new fn.bind(obj)
        let _content = this instanceof resultFn ? this : content;
        return fn.apply(_content, args);
    }
    resultFn.prototype = Object.create(this.prototype); // 保证原函数原型对象上的属性不丢
    return resultFn;
}