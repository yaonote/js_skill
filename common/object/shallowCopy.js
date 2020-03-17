/**
 * 浅拷贝
 * Object.assign
 * 展开运算符(...)
 */

let obj = {
    name: "lujx",
    age: 26,
    innerObj: {
        test: 124
    }
}

let cloneObj = Object.assign({}, obj);
let cloneObj2 = { ...obj };

cloneObj.name = 'name changed'
cloneObj.innerObj.test = 'value changed'
cloneObj2.name = 'name2 changed'
cloneObj2.innerObj.test = 'value2 changed'
console.log(obj)
console.log(cloneObj)
console.log(cloneObj2)

