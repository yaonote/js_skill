// call
Function.prototype.call = function (context = window, ...args) {
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}



//apply
Function.prototype.apply = function (context = window, args) {
    context.fn = this;
    const result = args ? context.fn(args) : context.fn();
    delete context.fn;
    return result;
}



//bind
Function.prototype.bind = function (context = window, ...args) {
    const that = this;
    const reusltFn = (...innerArgs) => {
        if (this instanceof resultFn) {
            return that.apply(this, args.concat(innerArgs));
        } else {
            return that.apply(context, args.concat(innerArgs));
        }
    }
    return reusltFn;
}