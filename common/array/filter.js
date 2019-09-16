Array.prototype.myFilter = function(cb) {
    let res = [];
    this.forEach(function(item,index) {
        if(cb.call(this,item,index,this)){
            res.push(item)
        }
    })  
    return res;
}

const res = [1,2,3,4].myFilter((item,index,origin) => {
    return item>2
})
console.log('yao-coding res =>',res)