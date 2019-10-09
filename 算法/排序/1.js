/**
 * 基本排序
 * 
 * 1、 冒泡排序
 */
const bubbleSort = (arrOrigin) => {
    let arr = arrOrigin;
    let len = arr.length;
    for(let outer = len; outer >= 2 ; outer-- ){
        for( let inner = 0; inner < outer - 1; inner++ ){
            if(arr[inner] > arr[inner+1]){
                [arr[inner+1],arr[inner]] = [arr[inner],arr[inner+1]];
            }
        }
    }
    return arr;
}


console.log('yao-coding  =>',bubbleSort([1,4,3,5,6,2]))

 /**
  * @param {*} arr
  * 
  * 选择排序
  *   外层循环 两两比较 
  *   n-1+n-2+...+1
  *  
  */
const selectSort = (arr) => {
    let result = arr;
    // let temp;
    for(let i = 0; i < result.length-1 ; i++){ // 外层循环从0开始
        for(let j = i+1; j<result.length;j++){ // 内层循环从1开始
            if(result[i] > result[j]){
                // temp = result[i];
                // result[i] = result[j];
                // result[j] = temp;
                [result[j],result[i]] = [result[i],result[j]]
            }
        }
    }
    return result;
}



const insertSort = (arr) => {
    for(let outer = 1; outer < arr.length; outer++){
        for(let inner = outer; inner > 0; inner--){
            if(arr[inner] < arr[inner-1] ) {
                [arr[inner],arr[inner-1]] = [arr[inner-1],arr[inner]]
            }else{
                break;
            }
        }
    }
    return arr
}

console.log('yao-coding  =>',insertSort([1,4,3,5,6,2]))