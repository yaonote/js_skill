// 1 set 大发


const unique = () => {

}

// 对象数组去重
//reduce版本
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

const objArr = [{id:1}, {id:2},{id:1}, {id:3}];

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
console.log(uniqueWith((x, y) => x.id === y.id, objArr))