/**
 * 选择排序
 * 找到当前的最大数的索引
 */

 function findMaxIndex(arr, length) {
     let _max = arr[0];
     let _index = 0;
     for (let i = 1; i < length; i++) {
         if(arr[i] > _max) {
            _max = arr[i];
            _index = i;
         }
     }
     return _index;
 }

 /**
  * 当前最大值的索引与当前数组的最后一位交换位置
  * @param {*} arr 
  */
 function selectionSort(arr) {
     let _length = arr.length;
     for (let i = _length; i > 1; i--) {
         /**
          * 找到最大值索引
          * 设置临时变量存储当前数组最后一个元素的值
          * 当前最后一个元素的值设置为最大值
          * 原最大值设置为最后一个元素的值
          */
        let _index = findMaxIndex(arr, i);
        let _temp = arr[i - 1];
        arr[i - 1] = arr[_index];
        arr[_index] = _temp;
     }
     return arr;
 }
 console.log(selectionSort([3,5,6,4,7,9,8,2,1]))

