/**
 * 函数的继承
 * 构造函数的静态方法
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
let p = new Person();

Person.job();