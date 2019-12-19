/*
 * @Author: Mr.yao
 * @Date: 2019-12-18 18:58:16
 */
class Dep {
    constructor () {
        this.subs = [];
    }

    addSub (sub) {
        console.log(`addSub == `)
        this.subs.push(sub);
    }

    notify () {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}

class Watcher {
    constructor () {
        console.log(`绑定 target == `)
        Dep.target = this;
    }

    update () {
        console.log("视图更新啦～");
    }
}



function defineReactive (obj, key, val) {
    const dep = new Dep(); // 每一个属性都会有一个自己的 dep  那 watcher 呢 => 目前来看 watcher 只有一个
    
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            dep.addSub(Dep.target); // 这里是统一的一个入口去更新视图 每个属性值的变化调用的都是同一个wacher的update 这样不会有问题吗？？？
            return val;         
        },
        set: function reactiveSetter (newVal) {
            if (newVal === val) return;
            val = newVal;
            dep.notify();
        }
    });
}
function observer (value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }
    
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}
class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        new Watcher();
        console.log('render~', this._data.test);
        console.log('render~', this._data.tes1t);
    }
}

let o = new Vue({
    data: {
        test: "I am test.",
        tes1t: "I am test1."
    }
});
o._data.test = "hello,test.";
o._data.tes1t = "hello,test.1";

Dep.target = null;