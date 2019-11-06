/**
 * 简易版本
 */


const curry = (fn,...args1) => (...args2) => (
   arg => arg.length === fn.length ? fn(...arg) : curry(fn,...arg)
)([...args1,...args2])

const foo = (a,b,c) => a*b*c;

const res = curry(foo)(2,3,4);

console.log('yao-coding res =>',res)