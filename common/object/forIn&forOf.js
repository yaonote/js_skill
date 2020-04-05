/**
 * for in
 * for in 遍历数组
 */

const a = ['a', 'b', 'c', 'd'];
for (let i in a) {
    console.log(i);// 输出索引
    console.log(a[i]);
}


/**
 * for in
 * for in 遍历对象
 */
const obj = {
    'name': "lujx",
    'age': 25,
    'sex': "boy"
}

for (let key in obj) {
    console.log(key);// 输出key
    console.log(obj[key])
}


/**
 * for of 只能遍历数组
 * for of 遍历数组
 */

const a = ['a', 'b', 'c', 'd'];
for (let i of a) {
    console.log(i);// 元素
}

