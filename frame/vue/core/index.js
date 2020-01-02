function Vue1(options = {}) {
    this.$options = options;
    var data = this._data = this.$options.data;
    observe(data)
    for(let key in data){
        Object.defineProperty(this,key,{
            enumerable: true,
            get() {
                return this._data[key]
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }
    new Compile(options.el,this)
}

function Compile(el,vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while(child = vm.$el.firstChild){
        fragment.appendChild(child);
    }
    replace(fragment);
    vm.$el.appendChild(fragment);
    function replace(fragment) {
        Array.from(fragment.childNodes).forEach(function (node) {
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            if(node.nodeType === 1 && reg.test(text)){
                let exp = RegExp.$1;
                let arr = exp.split('.');
                let val = vm;
                arr.forEach(function (key) {
                     val = val[key]
                })
                new Watcher(vm,exp,function (newVal) {
                    node.textContent = text.replace(reg,newVal)
                })
                node.textContent = text.replace(reg,val)
            }
            if(node.childNodes){
                replace(node)
            }
        })
    }
}
function observe(data) {
    if(typeof data !== 'object') return;
    return new Observe(data);
}
function Observe(data) {
    let dep = new Dep();
    for (const key in data) {
        let val = data[key];
        observe(val)
        Object.defineProperty(data,key,{
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target) // 一个带有update方法的 Watcher 实例
                return val
            },
            set(newVal) {
                if(newVal === val) return;
                console.log(`set key => ${key} val => ${val}`);
                val = newVal;
                observe(newVal)
                dep.notify(); // 执行所有watcher的update方法
            }
        })
    }
}

function Dep() {
    this.subs = [];
}

Dep.prototype.addSub = function (sub) {
    this.subs.push(sub)
}

Dep.prototype.notify = function () {
    this.subs.forEach(function (sub) {
        sub.update();
    })
}

function Watcher(vm,exp,fn) {
    this.fn = fn; 
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;
    let val = vm;
    exp.split('.').forEach(function(key) {
        val = val[key] // 触发 get 方法
    })  
    Dep.target = null;
}
Watcher.prototype.update = function () {
    let val = this.vm;
    this.exp.split('.').forEach(function(key) {
        val = val[key] // 触发 get 方法
    }) 
    console.log('yao-coding update =>',val)
    this.fn(val)
}