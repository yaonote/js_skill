/**
 * 描述： 创建一个新对象 使用现有的对象来提供 __proto__
 */

Object.prototype.myCreate = function(proto) {
    function F() {};
    F.prototype = proto;
    F.prototype.constructor = F;
    return new F();
}
