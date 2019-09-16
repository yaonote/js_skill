
const isArray = data => Object.prototype.toString.call(data) === '[object Array]';
Array.prototype.myFlat = function() {
    let res = [];
    for(var i=0; i<this.length; i++){
        if(isArray(this[i])){
            res = res.concat(this[i].myFlat())
        }else{
            res.push(this[i])
        }
    }
    return res;
}
const res = [1,[1,2],[1,2,3,[4]]].myFlat();
console.log('yao-coding res =>',res)