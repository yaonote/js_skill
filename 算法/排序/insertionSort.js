/**
 * 插入排序
 * @param {*} arr 
 * @param {*} length 
 */
function insert(arr, length) {
    let key = arr[length];
    let i = length;
    /**
     * 只要数组的倒数第二个值大于最后一个值
     * 两者交换位置
     */
    while (arr[i - 1] > key) {
        arr[i] = arr[i - 1];
        i--;
        if (i == 0) {
            break;
        }
    }
    arr[i] = key;
}

function insertionSort(arr) {
    let _length = arr.length;
    for (let i = 1; i < _length; i++) {
        insert(arr, i);
    }
    return arr;
}

console.log(insertionSort([2, 6, 3, 5, 0, 4]))