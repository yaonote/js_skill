
let arr1 = [10,6,5,1,2,3,9,8,4,7];
function bubbleSort(arr) {
    let len = arr.length;
    for(let i = len; i > 1; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(arr));

function selectSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len-1; i++){
        for(let j = i; j < len; j++){
            if(arr[j] < arr[i]){
                [arr[j],arr[i]] = [arr[i],arr[j]] 
            }
        }
    }
    return arr;
}
// console.log(selectSort(arr));


function insertSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }
        }
    }
    return arr;
}
// console.log(insertSort(arr));


function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let left = [], right = [], curr = arr.splice(0,1);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < curr){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(curr).concat(quickSort(right))
}
// console.log(quickSort(arr));


Array.prototype.reduce2 = function(fn,init) {
    let len = this.length;
    let n = 0;
    let acc = init;
    if(init === undefined){
         acc = this[0];
         n = 1;
    }
    for(i = n; i < len; i++ ){
        acc = fn(acc,this[i],i,this)
    }
    return acc;
}

// var arr = [1, 2, 5, 50, 3];
// var add = arr.reduce2(function(preTotal, ele, index, arr) {
//     return preTotal + ele;
// })
// console.log(add);


Array.prototype.flat2 = function() {
    let self = this, len = this.length, res = [];
    for(let i = 0; i < len; i++){
        if(Array.isArray(self[i])){
            res = [...res,...self[i].flat2()]
        }else{
            res = [...res,self[i]]
        }
    }
    return res;
}


// const res = [1,[1,2],[1,2,3,[4]]].flat2();
// console.log('yao-coding res =>',res)


function debounce(fn,delay = 500) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null,args)
        }, delay);
    }
}

function throttle(fn,delay = 500) {
    let flag = true;
    return (...args) => {
        if(!falg) return ;
        falg = false;
        setTimeout(() => {
            fn.apply(null,args)
            flag = true;
        }, delay);
    }
}