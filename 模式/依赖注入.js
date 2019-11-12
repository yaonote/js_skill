// 获取func的参数列表(依赖列表) 



var getFuncParams = function (func) { 
    var matches = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m); 
    if (matches && matches.length > 1){
        var res = matches[1].replace(/\s+/, '').split(',');
        return res; 
    }
    return []; 
}
// 根据名字去找 services
var setFuncParams = function (params) { 
    for (var i in params) {  //依次对应服务中的项进行查找返回结果。
        params[i] = services[params[i]]; 
    } 
    return params; 
}; 
// 注射器 
function Activitor(func, scope) { 
    return () => {
        func.apply(scope || {}, setFuncParams(getFuncParams(func)));
    } 
 } 
// 提供了一些服务
var services = { 
    A: () => {console.log(1)}, 
    B: () => {console.log(2)},
    C: () => {console.log(3)}
} 
// 目标函数 
function Service(A, B) { 
    A()
    B()
} 
 // 实例化Service并调用方法 
 var service = Activitor(Service); 
 service();//1 2