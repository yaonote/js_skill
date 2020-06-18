function Object(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

function _New(fn) {
    
}