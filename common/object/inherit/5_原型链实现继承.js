/**
 * 函数的继承
 * 原型链实现继承
 */

function Person() {
    this.name = 'lujx';
    this.age = 26;
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
let o = new ObjInherit();

/**
 * 原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
 */
console.log(o.name);
o.sayHi(); 
o.working();