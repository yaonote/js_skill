var a = 1;
(function a(){
    a = 2;
    console.log('a =>',a) // 作为函数体(作用域内)的本地变量 不能被修改也不能被外部访问
})()



// b()
// var b = 1;
// function b() {
//     b = 3;
//     console.log('b =>',b)
// }
// console.log('b1 =>',b)
// b()