/**
 * 函数的继承
 * 原型链实现继承的问题
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

function ObjInherit() {

}

ObjInherit.prototype = new Person();
let o = new ObjInherit('lujx', 26);

/**
 * 实例化子类的时候没法给父类传参!!!
 */
console.log(o.name); //undefined
o.sayHi(); //undefined你好
