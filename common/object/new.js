/**
 * 创建了一个全新的对象
 * 将新对象的 __proto__ 指向了 构造函数的 原型对象
 * 生成的新对象会被执行绑定到函数调用的this 
 * 通过 new 创建的每个对象将 最终被 [[Prototype]] 链接到这个函数的 prototype 对象上
 * 对返回值的判断
 * 
 */

function New(fn) {
    let res = {};
    if (fn.prototype != null) {
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res, Array.prototype.slice.call(arguments, 1));
    return ret instanceof Object ? ret : res
}


