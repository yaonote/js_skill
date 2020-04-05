/**
 * 能在实例的 原型对象链 中找到该构造函数的prototype属性所指向的 原型对象，就返回true。
 * 即：instance.[__proto__...] === instance.constructor.prototype
 */

function _instanceof(left, right) {
    const prototype = right.prototype;
    left = left.__proto__;
    while (1) {
        if (left == prototype) return true;
        if (left === null) return false;
        left = left.__proto__;
    }
}