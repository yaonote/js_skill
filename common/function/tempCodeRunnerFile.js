function curry(fn, args) {
    let length = fn.length;
    let args = args || [];
    console.log("args:" + args)
    return function () {
        console.log('arguments:' + arguments)
        let newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs)
        } else {
            return fn.apply(this, newArgs)
        }
    }
}
function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);