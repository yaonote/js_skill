/**
 * 函数的继承
 * 原型链+对象冒充的组合继承模式
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    // 实例方法
    this.sayHi = function () {
        console.log(this.name + '你好')
    }
}

Person.prototype.working = function () {
    console.log(this.name + '正在工作')
}

//静态方法
Person.job = function () {
    console.log('这里的this是Person,这是一个静态方法')
}

function ObjInherit(name,age) {
    Person.call(this,name,age);
}

ObjInherit.prototype = new Person();
let o = new ObjInherit('lujx', 26);

console.log(o.name); //lujx
o.sayHi(); //lujx你好
