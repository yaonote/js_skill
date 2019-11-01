/**
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

const arr = [[1,2,3],[4,5,6]]
const find1 = (arr,target) => {
    for(let i = 0; i<arr.length; i++){
        let innerArr = arr[i];
        for(let j = 0; j<innerArr.length; j++){
            if(innerArr[j] == target){
                return true
            }
        }
    }
}


/**
 * 
 * @param {*} array 
 * @param {*} target 
 * 
 *  1 2 3 
 *  4 5 6
 *  7 8 9 
 */

const find = (array/**[[],[]] */,target) => {
    let row = 0;
    let col = array[0].length;
    // 从右上角开始算  array[row][col]
    while(row<arr.length-1 && col>0) {
        if(array[row][col] === target){
            return true
        }else if(array[row][col] > target){
            col--;
        }else{
            row++;
        }
    }
    return false
}





console.log('yao-coding  =>',find(arr,4))