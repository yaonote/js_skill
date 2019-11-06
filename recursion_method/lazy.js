class Lazy {
    constructor(name) {
        this.name = name;
        this.promise = null;
    }

    eat(food) {
        if(this.promise){
            this.promise = this.promise.then(res => {
                console.log(`${this.name} eat ${food}`)
            })
        }else{
                console.log(`${this.name} eat ${food}`)
        }

        return this;
    }

    sleep(time) {
        if(!this.promise){
            this.promise = new Promise(resolve => {
                setTimeout(() => {
                    console.log(`${this.name} sleep ${time}`)
                    resolve()
                },time)
            })
        }else{
            this.promise = this.promise.then(res => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log(`${this.name} sleep ${time}`)
                        resolve()
                    },time)   
                })
            })
        }
        return this;
    }

}

const lazy = new Lazy('测试')

lazy.eat('香蕉').sleep(1000)

lazy.eat('hah').sleep(500).eat('hahq')