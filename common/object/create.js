 Object.prototype.create = function(ptoto) {
    function F() {};
    F.prototype  = proto;
    return new F();
 }