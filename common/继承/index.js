/**
 * 工厂模式 
 *      解决了重复复制代码 
 *      没有解决类型的问题
 * 构造函数 
 *      在工厂模式的前提下 解决了类型的问题 
 *      没有解决 方法的重复生产的问题
 * 原型链继承
 *      
 */

 function Test() {
     this.name = 'test';
 }
Test.prototype.test1 = function (params) {
     console.log('yao-coding tets =>')
 }
 Test.foo = function (params) {
     console.log('yao-coding tets =>')
 }
 const test = new Test()
 test.test1()