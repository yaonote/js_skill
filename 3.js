// let timer = null;
// function setIntervalWaitable(callback,wait){
//     callback().then(res => {
//         console.log('res =>',res)
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             setIntervalWaitable(callback,wait)
//         },wait)
//     })
// }
// function bar(){
//     return new Promise(resolve => {
//         resolve('bar')
//     })
// }
// setIntervalWaitable(bar,1000)


// Number.prototype.add = function(num){
//     return this.valueOf()+num;
// }
// Number.prototype.minus = function(num){
//     return this.valueOf() - num;
// }

// console.log((9).add(5).minus(4))


function Man() {
    this.promise = null;
}

Man.prototype.sleep = function(time) {
    if(!this.promise){
        this.promise = new Promise(resolve => {
            setTimeout(() => {
                resolve()
            },time)
        })
    }else{
        this.promise = this.promise.then(res => {
            return new Promise(resolve => {
                setTimeout(_ => {
                    resolve()
                },time)
            })
        })
    }
    return this;
}
const jake = new Man();
jake.sleep(2000).sleep(5000).promise.then(res => {
    console.log('over')
})