function deepClone(data) {
    // let res = null;
    if (data instanceof Array) {
        const res = [];
        data.forEach((el, i) => {
            res.push(deepClone(el))
        })
        return res
    } else if (data instanceof Object) {
        const res = {};
        for (let key in data) {
            res[key] = deepClone(data[key]);
        }
        return res;
    } else {
        return data
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
        name: "lujx",
        age: "29"
    }]
}
let tree = [{
    id: 1,
    name: "name_1",
    children: [{
        id: 11,
        name: "name_11"
    }, {
        id: 12,
        name: "name_12",
        children: [{
            id: 121,
            name: "name_121"
        }]
    }]
}, {
    id: 2,
    name: "name_2",
    children: [{
        id: 21,
        name: "name_21"
    }]
}, {
    id: 3,
    name: "name_3"
}]
console.log(JSON.stringify(deepClone(tree)))
console.log("~~~~~~~~~~~~~")
console.log(JSON.stringify(deepClone(obj)))
