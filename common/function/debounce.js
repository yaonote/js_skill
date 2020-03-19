
/**
 * 防抖
 * @param {*} fn 
 * @param {*} delay 
 * 
 * thinking: 
 *   事件触发N秒后执行回调 N秒内再次触发 则重新计时 
 *   一段时间内 执行最后一次
 * 
 */

const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

const debounce = (fn, delay) =>{
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    }
}



const fn = (...arg) => {
    console.log(arg)
}
const delay = debounce(fn, 1000)
delay(1, 2, 3);
delay('aa', 'bb');