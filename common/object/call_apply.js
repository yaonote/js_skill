Function.prototype.myCall = function(content = window, ...args) {
    let func = this;
    let fn = Symbol('fn');
    content[fn] = func;
    let res = content[fn](...args);
    delete content[fn];
    return res;
}

Function.prototype.myApply = function(content = window, ...args) {
    let func = this;
    let fn = Symbol('fn');
    content[fn] = func;
    let res = content[fn](args);
    delete content[fn];
    return res;
}