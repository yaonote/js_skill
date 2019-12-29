// 构造函数继承  经典继承

function SuperType() {
    this.colors = ["red","blue","green"]
}

function Subtype() {
    Subtype.call(this);
}

// 问题

//  这样的话  所有的方法就得都 写在构造函数里了  函数的复用性就没有了  
// 原型中的方法子类也没有办法获取