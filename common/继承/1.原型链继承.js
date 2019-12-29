// 原型链继承

<!-- ####  问题
* 引用类型的属性值会共享
* 没有办法在不影响所有对象实例的前提下给超类的构造函数传递参数 
-->

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function Subtype() {
    this.subpropertype = false;
}

Subtype.prototype = new SuperType();

Subtype.prototype.getSubValue = function () {
    return this.subpropertype;      
}

var instance = new Subtype();
console.log(instance.getSuperValue())
