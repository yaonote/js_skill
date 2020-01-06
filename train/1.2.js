










Function.prototype.apply2 = function(content = window) {
    content.fn = this;
    let params = Array.prototype.slice.call(arguments,1);
    let res = content.fn(params);
    return res
    delete content.fn;
}

function New2(fn) {
    let res = {};
    if(fn.prototype !== null){
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,Array.prototype.slice.call(arguments,1))
    if(ret !== null && ['object','function'].includes(typeof ret)){
        return ret
    }
    return res; 
}
function Test(a,b) {
    this.a = a;
    this.b = b;
}
const res = New2(Test,1,2)
console.log('res => ',res)
console.log('res1 =>', Test(2,6))



function instanceOf2(left,right) {
    let rightProto = right.prototype;
    left = left.__proto__;
    while (true) {
        if(left === null){
            return false;
        }        
        if(left === rightProto){
            return true
        }
        left = left.__proto__;
    }
}