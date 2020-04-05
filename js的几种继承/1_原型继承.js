function Parent(name) {
    this.name = name;
    this.color = ['red','black']
    this.sayName = function () {
        console.log(this.name)
    }
}

Parent.prototype.age = 10;

function Child() {
    this.name = 'child'
}

Child.prototype = new Parent();

var child1 = new Child();
var child2 = new Child();

console.log(child1.name);
child1.color.push('yellow');
child1.name = 'aaa'

console.log(child2.color);
console.log(child2.name);
child1.sayName();