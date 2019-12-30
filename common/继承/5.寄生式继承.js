function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    var clone = object(original)
    clone.sayHi = function (params) {
        console.log('yao-coding params =>',params)
    }
    return clone;
}

// 不使用构造函数去继承