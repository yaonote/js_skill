Array.prototype.myReduce = function(cb,init) {
    let pre = init;
    let i = 0;
    if(init === undefined){
        pre = this[0];
        i = 1;
    }   
    for(i; i<this.length; i++){
        pre = cb(pre,this[i],i,this)
    }
    return pre; 
}
const res = [1,2,3,4].myReduce((acc,curr,index,origin) => {
    return {
        ...acc,
        [index]: curr
    }
},{})

console.log('yao-coding res =>',res)