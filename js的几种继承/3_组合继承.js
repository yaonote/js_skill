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


