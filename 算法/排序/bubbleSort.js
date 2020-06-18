/**
 * 冒泡排序
 * 复杂度是 O(n * n)
 * 从第一个元素开始，把当前元素和下一个索引元素进行比较。
 * 如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素，
 * 那么此时最后一个元素就是该数组中最大的数。
 * 下一轮重复以上操作，但是此时最后一个元素已经是最大数了，所以不需要再比较最后一个元素，只需要比较到 length - 2 的位置。
 */

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }


console.log(bubbleSort([1, 5, 3, 7, 8, 4, 2, 9]));
