/**
 * 节流 
 *  多次触发只有一次生效
 *  保证在间隔时间内最多只触发一次 （像子弹发射）
 * 
 *  防抖会执行最后一次
 *  节流只会执行时间间隔内的第一次 
 *  之后再找个delay内就不会再执行了
 *  直到下一个delay 内的第一次触发的事件
 */
const throttle = (fn, delay = 500) => {
    let flag = true;
    return (...args) => {
        if(!flag) return ;
        flag = false;
        setTimeout(_ => {
            fn.apply(null,args)
            flag = true;
        },delay)
    } 
}
const foo = () => console.log('run foo');
const throttleDelay = throttle(foo);


// setInterval(() => {
//     throttleDelay()
// }, 400)

