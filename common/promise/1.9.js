const statusMap = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}
class Promise2{
    constructor(executor) {
        this.status = statusMap.PENDING;
        this.value = '';
        this.reason = '';

        this.onResolvedCallbacks = [];
        this.onRejectCallbacks = [];
        

        const resolve = (value) => {
            if(this.status !== statusMap.PENDING) return;
            this.value = value;
            this.status = statusMap.FULFILLED;
            this.onResolvedCallbacks.forEach(fn => fn())
        }
        const reject = (reason) => {
            if(this.status !== statusMap.PENDING) return;
            this.reason = reason;
            this.status = statusMap.REJECTED;
            this.onRejectCallbacks.forEach(fn => fn());
        }
        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
    }
    then(onFulfilled,onRejected) {
        onRejected = onRejected || (error => error);
        let promise2 = new Promise2((resolve,reject) => {
            if(this.status === statusMap.REJECTED){
                let x = onRejected(this.reason);
                resolvePromise(promise2,x,resolve,reject);
            }
            if(this.status === statusMap.FULFILLED){
                let x = onFulfilled(promise2,x,resolve,reject);
                resolvePromise(promise2,x,resolve,reject);
            }
            if(this.status === statusMap.PENDING){
                this.onRejectCallbacks.push(() => {
                    let x = onRejected(this.reason);
                    resolvePromise(promise2,x,resolve,reject);
                })
                this.onResolvedCallbacks.push(() => {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2,x,resolve,reject);
                })
            }
        });
        return promise2;
    }
}


function resolvePromise(promise2,x,resolve,reject) {
    if(promise2 === x){
        return reject(new Error('Chaining cycle detected for promise'))
    }
    if(x !== null || ['object','function'].includes(typeof x)){
        try{
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,(reason) => {
                    resolvePromise(promise2,reason,resolve,reject);
                },(err) => {
                    reject(err)
                })
            }else{
                resolve(x)
            }
        }catch(err) {
            reject(err)
        }
    }else{
        resolve(x)
    }
}

const bar = () => {
    return new Promise2((resolve,reject) => {
       setTimeout(() => {
            resolve('test')
       },1000)
    })
}
const foo = bar();
// foo.then(res => {
//     console.log('res =>',res)
// })
foo.then(res => {
    console.log('res =>',res)
    return '链式调用';
}).then(res => {    
    console.log('第二个 then =>',res)
})


