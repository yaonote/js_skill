function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    }
}

function throttle(fn, delay) {
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(null, args);
            flag = true;
        }, delay);
    }
}

function _New(fn, ...args) {
    let res = {};
    if (fn.prototype) {
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res, args);
    return ret instanceof Object ? ret : res;
}

function _instanceof(left, right) {
    const prototype = right.prototype;
    left = left.__proto__;
    while (true) {
        if (left === prototype) return true;
        if (left === null) return false;
        left = left.__proto__;
    }
}

Function.prototype.call = (context = window, ...args) => {
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
}

Function.prototype.apply = (context = window, args) => {
    context.fn = this;
    const res = args ? context.fn(...args) : context.fn();
    delete context.fn;
    return res;
}

Function.prototype.bind = (context = window, ...args) => {
    const that = this;
    const resultFn = (...innerArgs) => {
        if (this instanceof resultFn) {
            return that.apply(this, args.concat(innerArgs))
        } else {
            return that.apply(context, args.concat(innerArgs))
        }
    }
    return resultFn;
}

function deepClone(data) {
    if(data instanceof Array){
        const res = [];
        data.forEach(el=>[
            res.push(deepClone(el))
        ])
        return res;
    } else if(data instanceof Object){
        const res = {};
        for (let key in data){
            res[key] = deepClone(data[key])
        }
        return res;
    } else {
        return data;
    }
}


Promise.all = function (promises) {
    let result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                result[i] = res;
                count++;
                if (count == promises.length) {
                    resolve(result);
                }
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