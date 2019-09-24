
const Status = {
    Pending: 'pending',
    Resolved: 'resolved',
    Rejected: 'rejected'
}
function Promise(executor) {
    let self = this;
    self.status = Status.Pending; 
    self.data = undefined;
    self.onResolvedCallback = []; // 
    self.onRejectedCallback = [];

    function resolve(data) {
        if(self.status === 'pending'){
            self.status = Status.Resolved;
            self.data = data;
            self.onResolvedCallback.forEach(cb => {
                cb(value)
            });

        }
    }
    function reject() {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.data = reason
            for(var i = 0; i < self.onRejectedCallback.length; i++) {
              self.onRejectedCallback[i](reason)
            }
          }
    }
    try{
        executor(resolve, reject)
    }catch(err) {
        reject(err)
    }
}

Promise.prototype.then = function(onResolved, onRejected) {
    let self = this;
    let promise2;

    onRejected = typeof onRejected === 'function' ? onRejected : function() {};
    onResolved = typeof onResolved === 'function' ? onResolved : function() {};
    // pending 转态 存 回调函数
    if(self.status === 'pending'){
        return promise2 = new Promise(function(resolve, reject) {
            self.onResolvedCallback.push(function(value) {
                try{
                    let x = onResolved(self.data);
                    if(x instanceof Promise){
                        x.then(resolve,reject)
                    }                   
                }catch(err){
                    reject(err)
                }
            })

            self.onRejectedCallback.push(function(reason){
                try{
                    let x = onRejected(self.data);
                    if(x instanceof Promise){
                        x.then(resolve,reject)
                    }                   
                }catch(err){
                    reject(err)
                }
            })

        })
    }

    if(self.status === 'resolved'){
        return promise2 = new Promise(function(resolve, reject) {
            try{
                let x = onResolved(self.data);
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }  
                resolve(x)           
            }catch(err){
                reject(err)
            }
        })
    }
    if(self.status === 'rejected'){
        return promise2 = new Promise(function(resolve, reject) {
            try{
                let x = onRejected(self.data);
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }  
                reject(x)           
            }catch(err){
                reject(err)
            }
        })
    }

}

Promise.prototype.catch = function(onRejected) {
    return this.then(null,onRejected)
}