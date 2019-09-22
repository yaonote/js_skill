const cloneDeep = (obj) => {
    if(typeof obj !== 'object') return;
    let result = {};
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object'){
            result[key] = cloneDeep(obj[key])
        }else{
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
console.log(JSON.stringify(cloneDeep(obj)))