// const bubble = (arr,n) => {
//     for(let i = 0; i<n; i++){
//         if(arr[i] > arr[i+1]){
//             [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
//         }
//     }
//     return arr
// }

// /**
//  * 一次循环下来 最大的就会被放到最后面
//  * 接下来 递归去执行就好了 也不是递归
//  */
// const bubbleSort = (arr) => {
//     // bubble(arr,n)
//     // bubble(arr,n-1)
//     // bubble(arr,n-2)
//     // ...
//     // bubble(arr,1)
//     for(let i = arr.length; i>=1; i--){
//         bubble(arr,i)
//     }
//     return arr
// }

function bubble(arr,len) {
    let temp;
    for(let i = 0; i<len; i++){
        if(arr[i] > arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}
function bubbleSort(arr) {
    let len = arr.length, res = [];
    for(let i=len; i > 1; i--){
        res = bubble(arr,i)
    }
    return res; 
}

console.log('yao-coding bubbleSort  =>',bubbleSort([10,6,5,1,2,3,9,8,4,7]))

