/**
 * 插入排序
 * 
 * 原有序数据 逐个往后挪一个 这样就有新插入元素的位置了
 * 
 */
const insert = (arr,key) => {
    let i = arr.length;
    while( arr[i-1] > key ){
        arr[i] = arr[i-1]
        i--;
        if(i === 0){
            break;
        }
    }
    arr[i] = key;
    console.log('yao-coding arr =>',arr)
    return arr;
}
const insertSort = (arr) => {
    let res = [arr[0]];
    for(let i = 1; i<arr.length;i++){
        res = insert(res,arr[i])
    }
    return res
}
console.log(insert([4,5,6,1,2,7,9,0]))