class _Promise{
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        /**
         * 这两个队列主要用来解决一个实例 多个.then调用 不是用来处理链式调用的
         */
        this.resolvedQueue = []; 
        this.rejectedQueue = [];

        let resolve = value => {
            if(this.status !== 'pending') return;
            this.status = 'fulfilled';
            this.value = value;
            this.resolvedQueue.forEach(event => event())
        }
        let reject = reason => {
            if(this.status !== 'pending') return;
            this.status = 'rejected';
            this.reason = reason;
            this.rejectedQueue.forEach(event => event())
        }

        executor(resolve, reject)
    }
    then(onResolve,onReject) {
        let promise2 = new _Promise((resolve, reject) => {
            if(this.status === 'fulfilled'){
                let x = onResolve(this.value);
                resolvePromise(promise2,x,resolve,reject)
            }

            if(this.status === 'rejected'){
                let x = onReject(this.value);
                resolvePromise(promise2,x,resolve,reject)
            }

            if(this.status === 'pending'){
                this.resolvedQueue.push(() => {
                    let x = onResolve(this.value);
                    resolvePromise(promise2,x,resolve,reject)
                })
                this.rejectedQueue.push(() => {
                    let x = onReject(this.value);
                    resolvePromise(promise2,x,resolve,reject)
                })
            }
        })
    }
}


function resolvePromise(promise2,x,resolve,reject) {
    if(promise2 === x) return reject(new Error('循环调用了'))
    let flag = false;
    if(!x || !['object','function'].includes(typeof x)){return resolve(x)}

    try{
        //  主要思想就是 递归去获取then的结果 然后用 promise2的 resolve方法传递出去
        let then = x.then;
        if(typeof then !== 'function') resolve(x);

        then.call(x,(y) => {
            if(flag) return ;
            flag = true;
            // 这里是精髓啊 y 就是上面的onResolve
            resolvePromise(promise2,y,resolve,reject)
        },(err) => {
            if(flag) return ;
            flag = true;
            reject(err)
        })

    }catch(err){
        if(flag) return ;
        flag = true;
        reject(err)
    }

}