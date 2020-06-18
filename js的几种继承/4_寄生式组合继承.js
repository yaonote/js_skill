function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
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
    };
}

function _New(fn, ...args) {
    const res = {};
    if (fn.prototype) {
        res.__proto__ = fn.prototype;
    }
    const ret = fn.apply(res, args);
    return ret instanceof Object ? ret : res;
}

function _instanceof(left, right) {
    const prototype = right.prototype;
    left = left.__proto__;
    while (1) {
        if (left === prototype) return true;
        if (left === null) return false;
        left = left.__proto__;
    }
}

Function.prototype.call = function (context = window, ...args) {
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
};

Function.prototype.apply = function (context = window, args) {
    context.fn = this;
    const res = args ? context.fn(...args) : context.fn();
    delete context.fn;
    return res;
};

Function.prototype.bind = function (context = window, ...args) {
    const that = this;
    const resultFn = (...innerArgs) => {
        if (this instanceof resultFn) {
            return that.apply(this, args.concat(innerArgs));
        } else {
            return that.apply(context, args.concat(innerArgs));
        }
    };
    return resultFn;
};

function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

function deepClone(data) {
    if (data instanceof Object) {
        const res = {};
        for (let key in data) {
            res[key] = deepClone(data[key]);
        }
        return res;
    } else if (data instanceof Array) {
        const res = [];
        data.forEach((el) => {
            res.push(deepClone(el));
        });
        return res;
    } else {
        return data;
    }
}

function Create(obj) {
    function F(){};
    F.prototype = obj;
    return new F();
}
