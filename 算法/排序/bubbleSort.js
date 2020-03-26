/**
 * 冒泡排序
 * 将数组中的最大值放到最后一位
 * @param {*} arr 
 */
function bubble(arr, length) {
    for (let i = 0; i < length; i++) {
        let temp;
        if(arr[i] > arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }        
    }
}


function bubbleSort(arr) {
    let _length = arr.length;
    for(let i=_length; i>=1; i--){
        bubble(arr, i);
    }
    return arr
}

console.log(bubbleSort([1,5,3,7,8,4,2,9]))