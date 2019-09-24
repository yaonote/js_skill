/**
 * 创建了一个全新的对象
 * 将新对象的 __proto__ 指向了 构造函数的 原型对象
 * 生成的新对象会被执行绑定到函数调用的this 
 * 通过 new 创建的每个对象将 最终被 [[Prototype]] 链接到这个函数的 prototype 对象上
 * 对返回值的判断
 * 
 */

 function newOperator(_constructor) {
    newOperator.target = _constructor;
    let newObj = Object.create(_constructor.prototype);
    let argsArr = [].slice.call(arguments,1);
    let result = _constructor.apply(newObj, argsArr);
    if(typeof result === 'object'){
        return result;
    }
    return newObj;
 }

function _new(func) {
    let res = {};
    res.__proto__ = func.prototype; // 为了判断类型
    const result = func.apply(res,[].slice.call(arguments,1)) // 这一步就是在往中间变量上添加属性和方法
    if((typeof result === 'object' || typeof ret === 'function') && ret !== null){
        console.log('yao-coding result =>',result)
        return result
    }
    return res
}
function Person(name,age) {
    this.name = name;
    this.age = age;
}
var p1 = _new(Person,'tom',20)

console.log('yao-coding  p1=>',p1)