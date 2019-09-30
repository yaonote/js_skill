const Status = {
    Pending: 'pending',
    Resolved: 'resolved',
    Rejected: 'rejected'
}

class MyPromise {
    constructor(executor){
        this.status = Status.Pending;
        this.data = undefined;
        this.reason = undefined;

        this.resolvedCbList = [];
        this.rejectedCbList = [];

        const resolve = (data) => {
            if(this.status === Status.Pending){
                this.data = data;
                this.status = Status.Resolved;
                this.resolvedCbList.forEach(event => {
                    event()
                });
            }
        }
        const reject = (data) => {
            
        }
        executor(resolve, reject)
    }

    then(onResolved,onRejected) {
        let promise2;
        if(this.status === Status.Pending){
            return promise2 = new MyPromise((resolve, reject) => {
                this.resolvedCbList.push(() => {
                    try{
                        const x = onResolved(this.data);
                        if(x instanceof MyPromise){
                            x.then(resolve, reject)
                        }else{
                            resolve(this.data)
                        }

                    }catch(err){
                        reject(err)
                    }
                })
                this.rejectedCbList.push((value) => {
                    try{
                        const x = onRejected(this.data);
                        if(x instanceof MyPromise){
                            x.then(resolve, reject)
                        }
                    }catch(err) {
                        reject(err)
                    }
                })
            })
        }
        if(this.status === Status.Resolved){
            onResolved(this.data)
        }
        if(this.status === Status.Rejected){
            onRejected(this.data)
        }
    }
}

const test = () => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('test')
        },1000)
    })
}
test().then(res => {
    return new MyPromise((resolve) => {
        resolve(`${res}-then-resolve`)
    })
}).then(res => {
    return new MyPromise((resolve) => {
        resolve(`${res}-then-resolve`)
    })
}).then(res => {
    console.log('yao-coding res2 =>',res)
})