/**
 * slice() 方法可从已有的数组中返回选定的元素。不改变原数组
 * arrayObject.slice(start,end)
 * start:规定从何处开始选取
 * end:规定从何处结束选取
 */


const arr = [4, 6, 2, 7, 9, 0, 3];
const arr2 = arr.slice(2, 3);
console.log(arr2)