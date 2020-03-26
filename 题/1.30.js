

/**
 * 请写出匹配邮箱账号的正则表达式，
 *  邮箱可包含下划线“_”，但不能以下划线开头。
 */
const isEmail = /^(?!_)[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g

/**
 * 说说你对 HTTP 协议的理解，HTTP协议的底层实现。
 * 超文本传输协议 是一种可靠的应用层数据传输协议
 * 传输前需要进行三次握手进行客户端和服务端的验证
 *  
 * 常用的方法是 GET POST PUT DELETE
 * 常见的返回码有 200 301 302 400 403 404 500 502 503
 * 
 * 底层实现： 
 *    在应用层里 一个特殊处理的socket 建立在TCP/IP协议之上的一种广泛应用
 *    服务器先初始化一个 socket 
 *    与端口绑定 对端口进行监听
 *    调用阻塞 等待客户端连接 
 *    然后 初始化客户端的 socket 与 服务器的socket 连接
 *    需要经过三次握手
 */



/** 根据下列代码，写出结果，并说明原因。 */

/** 知识点:
 *  任务分为两种 宏任务和微任务
 *  宏任务: 
 *      script 全部代码 
 *      setTimeout 
 *      setInterVal
 *      setImmediate I/O UI Rendering
 *  微任务:
 *      Process.nextTick
 *      Promise
 *  主进程和调用栈(后进先出) 所有任务都会放到调用栈等待主线程执行
 *  
 *  单线程任务被分为 
 *      同步任务: 在调用栈中按照顺序等待主进程依次执行
 *      异步任务: 异步任务有结果以后 将注册的回调函数然
 *          放入任务队列中等待主进程空间的时候 
 *          读取到栈内等待主线程的执行
 *  执行栈在执行完同步任务后 查看执行栈是否为空
 *      ？(空) 检查微任务
 *          ？(空) 执行宏任务
 *          ：一次性执行完所有的微任务
 */



setTimeout(()=>{
    console.log(1)
},0)
new Promise((resolve,reject)=>{
    console.log(2)
    setTimeout(()=>{
        console.log(3)
        resolve(4)
    },0)
}).then((val)=>{
    console.log(val)
})
setTimeout(()=>{
    console.log(5)
},0)
console.log(6)
// 2 6 1 3 4 5

/**
 * 除了压缩代码、合并文件外，
 * 列举出你所知道的优化网站首屏显示速度的方法？
 * 
 * CDN 
 * webpack
 * 图片懒加载
 * 图表代替图片
 */

/**
 * vue 数据双向绑定原理是什么，数据劫持加上发布订阅
 * 依赖收集是如何实现的？
 */

 /**
  * 请用原生 js实现一个前端路由。
  */







// css 居中
/**
 * var a='a123',b='b234',
 * 请在不调用其他变量的情况下，互换 a,b 的值。
 */
(function(){
    var a = 'a123', b = 'b234';
    var a = [a,b];
    b = a[0];
    a = a[1]; 
    console.log(a,b)
})()


/**定义两个类A、B，其中A类有属性 type 值为'a'，
 * 使用 ES5 规范实现 B 类继承 A 类。 
 * */ 
(function(){
    function A() {
        this.type = 'a';
    }
    function B() {
        A.call();
    }
    B.prototype = createObj(A.prototype);
    B.prototype.constructor = B;

    function createObj(proto) {
        function F() {} 
        F.prototype = proto;
        F.prototype.constructor = F;
        return new F();
    }
})()

/**
 * 有 3 个基于 Promise 的异步函数，
 * A、B、C；写出按顺序 A-B-C 调用的代码
 * （前一个函数完成后，才能执行后一个函数）。
 */

(function() {
    A().then(res => {
        return B()
    }).then(res => {
        return C()
    }).then(res => {
        console.log(res)
    })
})()

/**
 * 有一个元素长度超过 10000 
 * 且类型都会 Number 的数组 args
 * 如何求其最大值的方法。
 */  // 快排

 function quickSort(arr) {
    if(arr.length === 0) return arr; 
    let left = [], right = [], curr = arr.splice(0,1);
    arr.forEach(item => {
        if(item > curr){
            right.push(item)
        }else{
            left.push(item)
        }
    });
    return quickSort(left).concat(curr,quickSort(right))
 }  
/**
 * 写出下面两段代码的输出结果
 */
for(var i=0;i<5;i++){
    (function(){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    })(i)
} // 55555
for(var i=0;i<5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    })(i)
} // 0 1 2 3 4








