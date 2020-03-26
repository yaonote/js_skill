let specs = [{
    "id": "17",
    "caption": "颜色",
    "types": ["黑", "棕"]
},
{
    "id": "23",
    "caption": "材质",
    "types": ["牛皮"]
},
{
    "id": "24",
    "caption": "尺码",
    "types": ["40", "41", "42"]
}
]
// const res = specs.reduce((acc,curr) => {
//     const types = curr.types.map(item => {
//         return {[curr.id]: item}
//     })
//     return [
//         ...acc,
//         types
//     ]
// },[])
// console.log('res =>',res)
// var result = [];
// res[0].forEach((item0) => {
//     res[1].forEach((item1) => {
//         res[2].forEach((item2) => {
//             result.push({...item0,...item1,...item2})
//         })
//     })
// })

// console.log('result =>',result)
// [{"17":"黑","23":"牛皮","24":"40"},
// {"17":"黑","23":"牛皮","24":"41"},
// {"17":"黑","23":"牛皮","24":"42"},
// {"17":"棕","23":"牛皮","24":"40"},
// {"17":"棕","23":"牛皮","24":"41"},
// {"17":"棕","23":"牛皮","24":"42"}]



// function produceItem(cate, index, result) {
//     let arr = []
//     if (index === 0) {
//         arr = cate.types.map(type => {
//             return { [cate.id]: type }
//         })
//     } else {
//         const length = cate.types.length       // 要遍历的分类的types长度
//         const equalLengthArr = new Array(length * result.length).fill(null)    // 这一级遍历的结果的长度
        
//         arr = equalLengthArr.map((_, index) => {
//             return { [cate.id] :cate.types[index % length], ...result[Math.floor(index / length)] }
//         })
        
//     }
//     if (index + 1 === specs.length) {
//         // console.log(arr)
//         return arr
//     } else {
//         return produceItem(specs[index + 1], index + 1, arr)
//     }
// }

// console.log(produceItem(specs[0], 0))



function bar(data) {
    return (function inner(currentObj = {}, idx = 0, result = []){
        const isEnd = idx === data.length - 1;
        const {id, types} = data[idx];
        types.forEach(type => {
            currentObj = {...currentObj,[id]: type};
            if(isEnd){
                result = [...result, currentObj]
            }else{
                result = inner(currentObj,idx+1,result)
            }
        })
        return result
    })()
}

console.log(bar(specs))