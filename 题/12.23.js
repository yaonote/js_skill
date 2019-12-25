/*
 * @Author: Mr.yao
 * @Date: 2019-10-15 16:15:54
 */

// 冒泡排序 深拷贝

// function deepClone(data) {
//     if(typeof data !== 'object') return;
//     let result = {};
//     Object.keys(data).forEach(key => {
//         if(typeof data[key] === 'object'){
//             result[key] = deepClone(data[key])
//         }else{
//             result[key] = data[key]    
//         }
//     });
//     return result;
// }
// const bar = {
//     a: 2,
//     b: 3,
//     c: {
//         d: 4
//     }
// }
// const result = deepClone(bar)

// console.log('result =>',JSON.stringify(result))


function bubble(arr) {
    let result = arr.slice();
    for (let i = 0; i < result.length; i++) {
        if(result[i] > result[i+1]){
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
            // [result[i],result[i+1]] = [result[i+1],result[i]]
        }
    }
    return result
}
let result = [3,2,6,1,9,0];
// console.log(bubble(result))
for (let i = 0; i < result.length; i++) {
   for (let i = 0; i < result.length; i++) {
        if(result[i] > result[i+1]){
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
            // [result[i],result[i+1]] = [result[i+1],result[i]]
        }
    }
}
console.log(result);





// var Container = function (x) {
//     this._value = x;
// }
// Container.of = x => new Container(x);
// Container.prototype.map = function (f) {
//     return Container.of(f(this._value))
// }
// var obj = Container.of(3)
//     .map(x => x+1)
//     .map(x => 1+x)
//     .map(x => `result is ${x}`);

// console.log(obj._value)


// this.a = 20;
// var test = {
//     a: 40,
//     init: () => {
//         console.log('init ->',this.a);
//         function go() {
//             // this.a = 60;
//             console.log('go ->',this.a)
//         }
//         go.prototype.a = 50;
//         return go;
//     }
// }
// var p = test.init();
// p();
// new (test.init())();
