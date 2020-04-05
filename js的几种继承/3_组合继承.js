function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function(){
    console.log(this.name);
}

function Child(name) {
    Parent.call(this, name);
}

Child.prototype = new Parent();

Child.prototype = Object.create(Parent.prototype, {
    constructor:{
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true,
    }
})

