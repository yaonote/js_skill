/************************* 问题一  *********************/
function bar(data) {
    return (function inner(currentObj = {}, idx = 0, result = []){
        const isEnd = idx === data.length - 1;
        const {id, types} = data[idx];
        types.forEach(type => {
            currentObj = {...currentObj,[id]: type};
            if(isEnd){
                result = [...result, currentObj]
            }else{
                result = inner(currentObj,idx+1,result)
            }
        })
        return result
    })()
}
/************************* 问题二 1  *********************/

let timer1 = null;
function setIntervalWaitable1(callback,wait){
    callback().then(res => {
        console.log('res =>',res)
        clearTimeout(timer1)
        timer1 = setTimeout(() => {
            setIntervalWaitable1(callback,wait)
        },wait)
    })
}
function bar(){
    return new Promise(resolve => {
        resolve('bar')
    })
}
setIntervalWaitable1(bar,1000)
setTimeout(() => {
    clearTimeout(timer1)
},7000)

/************************* 问题二 2  *********************/

let timer2 = null;
function setIntervalWaitable2(callback,wait){
    timer2 = setTimeout(() => {
        callback().then(res => {
            console.log('res =>',res)
            setIntervalWaitable2(callback,wait)
        })
    },wait)
}
function bar(){
    return new Promise(resolve => {
        resolve('bar')
    })
}
setIntervalWaitable2(bar,5000)

setTimeout(() => {
    clearTimeout(timer2)
},7000)