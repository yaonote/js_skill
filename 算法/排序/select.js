/**
 * 选择排序的思想
 *  先找到最大的 然后和最后一个做交换
 *  第一位到倒数第一位重复上面的操作
 * 
 */

// const selectMaxPos = (arr,n) => {
//     let pos = 0;
//     let max = arr[0];
//     for(let i = 0; i < n; i++){
//         if(arr[i] > max){
//             max = arr[i]
//             pos = i;
//         }
//     }
//     return pos;
// }


// const selectSort = (arr) => {
//     let len = arr.length;
//     while(len>1){
//         const maxPos = selectMaxPos(arr,len);
//         [arr[len-1],arr[maxPos]] = [arr[maxPos],arr[len-1]]
//         len--;
//     }
//     return arr;
// }
// console.log('yao-coding  selectMaxPos=>',selectSort(arr,arr.length))


function  findMaxPos(arr,length) {
    let maxPos = 0;
    let max = arr[0];
    let temp;
    for(let i=1; i<length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxPos = i;
        }
    }
    return maxPos;
}

function selectSort(arr) {
    let n = arr.length;
    while (n>1) {
        let maxPos = findMaxPos(arr,n);
        [arr[n-1],arr[maxPos]] = [arr[maxPos],arr[n-1]]
        n--;
    }
    return arr;
}

console.log('yao-coding selectSort  =>',selectSort([10,6,5,1,2,3,9,8,4,7]))