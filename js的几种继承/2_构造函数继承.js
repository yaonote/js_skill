/**
 * 构造函数继承只能继承父类的属性方法，不能继承原型上的属性方法
 */

function Parent(name) {
    this.name = name;
    this.color = ['red','black']
    this.sayName = function () {
        console.log(this.name)
    }
}

Parent.prototype.age = 10;

function Child(name) {
    Parent.call(this, name);
    // this.age = 'child age'
}

child1 = new Child('child name')
child2 = new Child('child name')
child1.color.push('yellow');
console.log(child2.color)
console.log(child1.name)
console.log(child1.age)