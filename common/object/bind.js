Function.prototype.myBind = function(content = window , ...args) {
    let self = this;
    let resultFn = function() {
        // this instanceof resultFn 构造函数的情况 new fn.bind(obj)
        let _content = this instanceof resultFn ? this : content; 
        return self.apply(_content,args);
    }
    // 保证原函数原型对象上的属性不丢
    resultFn.prototype = Object.create(this.prototype); 
    return resultFn;
}