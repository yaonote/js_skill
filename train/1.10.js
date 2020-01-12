function bubble(arr) {
    let length = arr.length;
    for(let i = length; i > 0; i-- ){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

let arr = [3,4,2,6,8,9,1,5,7]
// console.log('bubble =>',bubble(arr))

function selectSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = i; j < length; j++){
            if(arr[j] < arr[i]){
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    }
    return arr
}

// console.log('selectSort =>',selectSort(arr))

function insertSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr;
}
function quickSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let left = [], right = [], curr = arr.splice(0,1);
    arr.forEach((item,index) => {
        if(item < curr){
            left.push(item)
        }else{
            right.push(item)
        }
    })
    return quickSort(left).concat(curr,quickSort(right))
}
// console.log('quickSort =>',quickSort(arr))


function debounce(fn,delay) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null,args)
        },delay)
    }
}

function throttle(fn,delay) {
    let flag = true;
    return (...args) => {
        if(!flag) return ;
        flag = false;
        setTimeout(() => {
            fn.apply(null,args)
        },delay)
    }
}

function curry(fn,args) {
    let length = fn.length;
    let args = args || [];
    let allArgs = [];
    return function() {
        allArgs = args.concat(Array.prototype.slice.call(arguments));
        if(allArgs.length < length){
            return curry.call(this,fn,allArgs)
        }else{
            return fn.apply(this,allArgs)
        }
    }
}

/**
 * 二分查找
 * @param {*} arr 
 * @param {*} target 
 * @param {*} low 
 * @param {*} height 
 */
function binaryFind(arr,target,low = 0, high = arr.length - 1,) {
    let currIndex = Math.floor((low + high) / 2);
    let currVal = arr[currIndex];
    if(currVal === target){
        return `target -> ${currIndex}`;
    }else if(currVal > target) {// 往右查
        return binaryFind(arr,target,low,n-1)
    }else{
        return binaryFind(arr,target,n+1,high)
    }
    return -1
}


// const status = '';

class Promise{
    constructor() {
        this.status = '';
    }
}















