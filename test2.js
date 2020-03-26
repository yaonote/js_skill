/*
 * @Author: Mr.yao
 * @Date: 2019-10-15 16:15:54
 */

// 冒泡排序 深拷贝

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
// var foo = {
//     a: 40,
//     init: function () {
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

// test.init()
// foo.init()


// const omit = (obj,key) => Object.keys(obj).reduce((acc, curr) => curr === key ? acc : {...acc, [curr]: obj[curr]}, {})

// const obj = {
//     a: ';',
//     b: 'ss',
//     c: [{
//         "aaa":'aaa'
//     }]
// }
// const res = omit(obj,'a')

// console.log('res -> ',res)

// let str = '';

// const test = 'PENFING';

/**
 * 
 * 
 */



const numberMap = {
    '零': 0,
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
}
const unitMap = {
    '十': 10,
    '百': 100,
    '千': 1000
}
const quotMap = {
    '万': 10000,
    '亿': 100000000
}
function toChangeChNumber(chNum) {
    let result = 0;
    const arr = chNum.split('');
    for(let i = arr.length-1; i > 0; i--){
        if(numberMap[arr[i]]){
            result += numberMap[arr[i]]
        }else if(unitMap[arr[i]]){
            result += unitMap[arr[i]]*numberMap[arr[i-1]]
            i--;
        }
    }
    return result
}
const chNum = "八千万八千四百三十七";
const [quot,unit] = chNum.split('万');
const res = toChangeChNumber(quot)*10000+toChangeChNumber(unit)
console.log('res =>',res)