/**
 * 函数的继承
 * 原型链里面增加方法
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
let p = new Person();

p.working();