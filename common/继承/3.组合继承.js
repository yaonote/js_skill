function SuperType(name) {
    this.name = name;
    this.colors = ["res","blue","green"];
}

SuperType.prototype.sayName = function () {
    console.log('yao-coding this.name =>',this.name)
}


function Subtype(name,age) {
    SuperType.call(this,name);
    this.age = age;
}

Subtype.prototype = new SuperType();
Subtype.prototype.constructor = Subtype;

Subtype.prototype.sayAge = function () {
    console.log('yao-coding this.age =>',this.age)
}

const instance1 = new Subtype('test',12);


