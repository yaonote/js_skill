
function object(o) {
    function F(){};
    F.prototype = o;
    return new F();
}
function inheritPrototype(subType,superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function () {
    console.log('yao-coding this.name =>',this.name)
}
function SubType(name,age) {
    SuperType.call(this,name)
    this.age = age;
}
inheritPrototype(SubType,SuperType);

subType.prototype.sayAge = function () {
    console.log('yao-coding this.age =>',this.age)
}