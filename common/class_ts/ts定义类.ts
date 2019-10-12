/*
    ts中定义类
    public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问
    属性如果不加修饰符 默认就是 公有 （public）
*/

 class Person {
     name:string; //属性，省略了前面的修饰词public
     constructor(name:string){ // 构造函数   实例化类的时候触发的方法
        this.name = name;
     };
     sayHello():void {
        console.log(`${this.name}你好啊！！`)
     }
 }

 let p1 = new Person('lujx');
console.log(p1.sayHello);