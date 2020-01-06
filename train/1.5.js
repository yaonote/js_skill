Function.prototype.bind2 = function(context,...args) {
    let self = this;
    let resultFn = function() {
        context = self instanceof resultFn ? this : context;
        return self.apply(context,args)
    }
    resultFn.prototype = Object.create(self.prototype);
    return resultFn;
}


