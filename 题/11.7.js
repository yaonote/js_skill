
const test = () => {
    ['1','3','10'].map(parseInt)  // 1 NAN 2
}

const test2 = () => {
    var number = 10;
    function fn() {
        console.log(this.number)
    }
    var obj = {
        number: 2,
        show: function(fn) {
            this.number = 3;
            fn();
            arguments[0]();
        }
    }
    obj.show(fn)
}

test2()

/**
 * 用 arguments 去调用函数
 */


/**
 * 深拷贝
 * @param {*} data 
 */
const deepCopy = (data) => {

}

/**
 * 发布订阅模式 EventEmitter
 */
const eventEmitter = () => {

}

/**
 * 实现一个周岁函数，例如 fn('2018-8-8') 输出 1，只要是过了生日就 +1。
 */




 /**
  * vue 双向数据绑定原理，依赖收集是在什么时候收集的？

     是在 created 生命周期之前，render 生成虚拟 dom 的时候。


 1、浏览器渲染 js，html，css 的顺序。

 2、react dom diff 算法，list 比较首先比较的是什么？
 
      首先比较同层级元素，从左到右。
 
 3、为什么 react 要做成异步的呢？
 
 因为 state 更新会导致组件重新渲染，在渲染后，才能把新的 props 传递到子组件上，所以即使 state 做成同步，props 也做不成，为了保证 state 和 props 的一致性。
 为了性能优化，state 会根据不同的优先级进行更新。
 为了让 react 更加灵活，如实现异步过渡，例如页面在切换的时候，如果延时很小，就在后台自动渲染了，渲染好之后再进行跳转；如果延时相对较长，可以加一个 loading。
 4、对象的 {…} 解构，是 rest 吗？ 是。

6、options 头是在什么时候会进行发送。

检测服务器所支持的请求方法
CORS 中的预检请求
7、sessionStorage 在两个 tab 窗口能共享吗？

     不能，和后端的 session 类似，每一个窗口对应一个会话层。

8、localStorage 存放的只能是 string 类型。

     插入时需要将对象转换为字符串，读取时需要做 JSON.parse 转换。

9、写一个 0-100 的正则表达式。 /^(\d|[1-9]\d|100)$/;
  */


const test3 = () => {
async function a() {
    var result = Promise.resolve();
    result.abort = function() {
        console.log('xxx');
    };
    return result;
    }
    var p = a();
    p.abort();
}


/** 节流 防抖 */
/** reduce */
/** 模板字符串替换方法 */

/**
 * 技术面试一般分为三面。

一面：考察基础，必须过硬，如：js、css、html、tcp/ip 协议栈、浏览器渲染等。

二面：结合实际项目考察技术深度，如：react、vue、koa、ts、webpack 等。

三面：结合实际项目考察项目思考，如：react 的优缺点、前端方向的思考、以及解决问题的思考方式等。
 */