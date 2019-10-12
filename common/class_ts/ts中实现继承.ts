/**
    ts中实现继承
    extends super
    public: 公有             在当前类里面、 子类  、类外面都可以访问
    protected: 保护类型       在当前类里面、子类里面可以访问 ，在类外部没法访问
    private: 私有            在当前类里面可以访问，子类、类外部都没法访问
    属性如果不加修饰符 默认就是 公有 （public）
 */

class Person {
    name:string;
    sayGoodBye():void{
        console.log(`${this.name}, see you next time `)
    }
}

class MyInherit extends Person {
    constructor(name:string){
        super(name); // 初始化父类的构造函数
    }
}

let me = new MyInherit('lly');
me.sayGoodBye();