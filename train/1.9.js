function unique1(arr) {
    return [...new Set(arr)]
}
function unique2(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
       if(!res.includes(arr[i])){
           res.push(arr[i])
       }
    }
    return res;
}



let arr = [3,4,2,6,8,9,1,5,7]
// console.log('bubble =>',bubble(arr))
function quickSort(arr) {
    arr = arr.slice();
    if(arr.length < 2){
        return arr
    }
    let left = [],
        right = [],
        curr = arr.splice(0,1);
    arr.forEach(item => {
        if(item > curr){
            right.push(item)
        }else{
            left.push(item)
        }
    })
    return quickSort(left).concat(curr).concat(quickSort(right))
}

console.log('quickSort =>',quickSort(arr))
console.log('quickSort arr=>',arr)

function insertSort(arr) {
    let length = arr.length; 
    for(let i = 0; i < length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
// console.log('insertSort =>',insertSort(arr))

function selectSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = i; j < length; j++){
            if(arr[j] < arr[i]){
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    }
    return arr
}
// console.log('selectSort =>',selectSort(arr))

function bubble(arr) {
    let length = arr.length;
    for(let i = length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}
// console.log('bubble =>',bubble(arr))




