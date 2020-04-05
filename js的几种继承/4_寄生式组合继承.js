function Parent(name){
    this.name = name;
}
Parent.prototype.getName = function(){
    console.log(this.name);
}
function Child(name){
    Parent.call(this, name);
}



Child.prototype = Object.create(Parent.prototype, {
    constructor:{
        value:Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
})


/**
Object.create 原理
将传入的对象作为原型
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}
 */

