/**
 * 简单方式：JSON.parse(JSON.stringify(obj))
 */

/**
 * 递归的方式
 */
const deepClone = (obj) => {
    if (typeof obj !== 'object') return undefined;
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            result[key] = deepClone(obj[key])
        } else {
            result[key] = obj[key]
        }
    })
    return result;
}

const obj = {
    id: {
        1: {
            2: {
                3: 'rest'
            }
        }
    },
    name: 'name'
}
console.log(JSON.stringify(deepClone(obj)))