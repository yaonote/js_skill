function Promise(constructor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved'
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected'
        }
    }

    try {
        constructor(resolve, reject);
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    switch (self.status) {
        case "resolved":
            onFullfilled(self.value);
            break;
        case "rejected":
            onRejected(self.reason);
            break;
        default:
    }
}

var p = new Promise((resolve, reject) => {
    resolve(2)
})
p.then(res => {
    console.log(res)
}, err => {
    console.log(err)
})