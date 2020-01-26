function FirstAppearingOnce() {
    let arr = Array.from(arguments)[0].split('');
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === i){
            res.push(arr[i])
        }else{
            res = res.filter(item => item !== arr[i]);
        }
    }
    return res[0] || '#'
}


console.log(FirstAppearingOnce('google'))