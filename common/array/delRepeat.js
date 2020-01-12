
//reduce版本
// 对象数组去重
function uniqueArr(){
   return oldArr.reduce((acc,curr) => {
         if(!acc.hash[curr.id]){
             return {
                 hash: {...curr.hash, [curr.id]: true},
                 result: [...acc.result,curr]
             }
         }else{
             return acc;
         }
   },{result: [],hash: {}}).result
}

//递归的做法

// const objArr = [{id:1}, {id:2},{id:1}, {id:3}];

function uniqueWith(fn, arr) {
   return (function _uniqueWith(_arr, _fn, _result = []) {
       if (_arr.length === 0) {
           return _result;
       }
       _fn = _fn || ((x, y) => x === y);
       const [cur, ...rest] = _arr;
       const newResult = _result.find(item => fn(cur, item))
           ? _result
           : [..._result, cur];
       return _uniqueWith(rest, _fn, newResult)
   })(arr, fn)
}
// console.log(uniqueWith((x, y) => x.id === y.id, objArr))



function unique1(arr) {
    return [...new Set(arr)]
}
function unique2(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
       if(!res.includes(arr[i])){
           res.push(arr[i])
       }
    }
    return res;
}

function unique3(arr) {
    let res = [], isRepeat;
    for(let i = 0; i< arr.length; i++){
        isRepeat = false;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]) {
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            res.push(arr[i])
        }
    }
    return res;
}
/**
 * 
 * @param {*} arr 这是啥意思 
 */
function unique4(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] === arr[i]){
                j = ++i;
            }
        }
        console.log(`res before=> ${JSON.parse(JSON.stringify(res))}`)
        console.log(`res arr[i]=> ${JSON.parse(JSON.stringify(arr[i]))}`)
        res.push(arr[i])
        console.log(`res after => ${JSON.parse(JSON.stringify(res))}`)
    }
    return res; 
}

function unique(arr) {
    // 保留true的过滤false的项
    return arr.filter((item,index) => {
        let flag = arr.indexOf(item) === index
        return flag
    })
}

const arr = [1,2, 3,2,3,4]
console.log('arr =>',unique(arr))