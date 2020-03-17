Array.prototype.myMap = function(cb) {
    var res = [];
    for(var i=0; i<this.length; i++){
        res[i] = cb.call(this,this[i],i,this);
    }
    return res
}
const result = [1,2,3].myMap((item,index,origin) => {
    return item+index
})
console.log('  result=>',result)