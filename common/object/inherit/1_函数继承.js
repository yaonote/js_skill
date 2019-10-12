/**
 * 函数的继承
 * 函数继承(最简单的类)
 */

 function Person() {
    this.name = 'lujx';
    this.age = 26;
    this.sayHi = function () {
        console.log(this.name + '你好')
    }
}

let p = new Person();

console.log(p.name);
p.sayHi();