// 将数组中的最大值放到最后一位
function bubble(arr) {
    let _length = arr.length;
    for (let i = 0; i < _length; i++) {
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
    for(let i=0; i<_length - 1; i++){
        bubble(arr);
    }
    return arr
}

console.log(bubbleSort([1,5,3,7,8,4,2,9]))