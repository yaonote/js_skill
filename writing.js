function _New(fn, ...args) {
    const res = {};
    if (fn.prototype) {
        res.__proto__ = fn.prototype;
    }
    const ret = fn.apply(res, args)
    return ret instanceof Object ? ret : res;
}

function _instanceof(left, right) {
    const rightProto = right.prototype;
    left = left.__proto__;
    while (true) {
        if (left === rightProto) return true;

        if (left === null) return fasle;

        left = left.__proto__;
    }
}
Object.prototype.create2 = function (proto) {
    function F() { };
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F();
}

Function.prototype.call2 = function (context = window, ...args) {
    const thatFn = this;
    context.fn = thatFn;
    const res = context.fn(...args)
    delete context.fn;
    return res;
}

Function.prototype.bind2 = function (context = window, ...args) {
    const thatFn = this;
    return function (...innerArgs) {
        return thatFn.apply(context, args.concat(innerArgs))
    }
}

//完整的解释:  https://blog.csdn.net/YZ0826/article/details/80176169
Function.prototype.bind3 = function (context = window, ...args) {
    const thatFn = this;
    const resultFn = function (...innerArgs) {
        if (this instanceof resultFn) { //作为构造函数 再次调用的时候不需要再绑定this了
            return thatFn.apply(this, args.concat(innerArgs))
        } else {
            return thatFn.apply(context, args.concat(innerArgs))
        }
    }
    return resultFn;
}


function deepClone(obj) {
    let copyObj = {};
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'object') {
            copyObj[key] = deepClone(obj[key])
        } else {
            copyObj[key] = obj[key]
        }
    })

    return copyObj;
}



Promise.all = function (promises) {
    let result = [];
    let i = 0;
    function handleData(index, data) {
        result[index] = data;
        i++;
        if (i === promises.length) {
            resolve(result)
        }
    }
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((res) => {
                handleData(i, res)
            }).catch(reject)
        }
    })
}


Array.prototype.myFilter = function (cb) {
    let res = [];
    this.forEach(function (item, index) {
        if (cb.call(this, item, index, this)) {
            res.push(item)
        }
    })
    return res;
}


const isArray = data => Object.prototype.toString.call(data) === '[object Array]';
Array.prototype.myFlat = function () {
    let res = [];
    for (var i = 0; i < this.length; i++) {
        if (isArray(this[i])) {
            res = res.concat(this[i].myFlat())
        } else {
            res.push(this[i])
        }
    }
    return res;
}



Array.prototype.myMap = function (cb) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        res[i] = cb.call(this, this[i], i, this);
    }
    return res
}


Array.prototype.myReduce = function (cb, init) {
    let pre = init;
    let i = 0;
    if (init === undefined) {
        pre = this[0];
        i = 1;
    }
    for (i; i < this.length; i++) {
        pre = cb(pre, this[i], i, this)
    }
    return pre;
}


