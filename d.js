function copyobj(obj) {
    let type = Object.prototype.toString.call(obj)
    if (type === '[object Object]') {
        let res = {}
        for (key in obj) {
            if (typeof obj[key] !== 'object') {
                res[key] = obj[key]
            } else {
                res[key] = copyobj(obj[key])
            }
        }
        return res
    } else if (type === '[object Array]') {
        let res = []
        obj.forEach(item => {
            if (typeof item != 'object') {
                res.push(item)
            } else {
                res.push(copyobj(item))
            }
        })
        return res
    } else {
        return obj
    }
}

const obj = {
    id: {
        1: {
            2: {
                3: 'rest'
            },
            test: [1, 2, 3, 4]
        }
    },
    name: 'name',
    arr: ['age', 'hello', {
        name:"lujx",
        age:"29"
    }]
}
console.log(JSON.stringify(copyobj(obj)))