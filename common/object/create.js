Object.prototype.myCreate = function(proto) {
    function F() {};
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F();
 }


function object(o) {
    function F(){};
    F.prototype = o;
    return new F();
}