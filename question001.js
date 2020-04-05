//1，输入：“get1_install2_app3_list4_by5_android6”
// （每个单词后面总会携带一个数字，只有偶数才删掉），
// 我不用循环只用正则怎么实现输出"get1InstallApp3ListBy5Android"

function bar(str) {
    return str.replace(/(_\w)/g, (str) => {
        return str.replace('_', '').toUpperCase();
    }).replace(/[0,2,4,6,8]/g, "")
}
const res = bar('get1_install2_app3_list4_by5_android6')
console.log(res)

//2，不能使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值。
function test(start, end, arr) {
    if (start > end) {
        return arr
    } else {
        arr.push(start);
        return test(start + 1, end, arr)
    }
}
console.log(test(0, 1000, []))

//3，判断两个对象（注意特殊对象的处理）找出不一致的是哪个变量，
//返回的格式类似："root变量-父变量-...-不一致的变量"的字符串；

function judgeObj(origin, data) {
    return (function inner(origin, data, father = "root", result = {}) {
        Object.keys(origin).forEach((key) => {
            if (typeof origin[key] === 'object') {
                result = inner(origin[key], data[key], `${father}-${key}`, result)
            } else {
                if (origin[key] !== data[key]) {
                    result = { ...result, [`${father}-${key}`]: data[key] }
                }
            }
        })
        return result
    })(origin, data)
}


let obj = {
    a: 1,
    b: 2,
    c: {
        e: 2
    }
}
let obj2 = {
    a: 2,
    b: 2,
    c: {
        e: 6
    }
}
const res = judgeObj(obj, obj2)
console.log('res =>', res)