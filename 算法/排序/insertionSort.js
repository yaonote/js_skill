/**
 * 插入排序
 * 第一个元素默认是已排序元素，取出下一个元素和当前元素比较，
 * 如果当前元素大就交换位置。那么此时第一个元素就是当前的最小数，
 * 所以下次取出操作从第三个元素开始，向前对比，重复之前的操作。
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}


console.log(insertionSort([2, 6, 3, 5, 0, 4]))