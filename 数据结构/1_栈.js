/**
 * 栈是一个线性机构
 * 栈的特点是只能在某一端添加或删除数据，遵循先进后出的原则
 */
class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item)
    }
    pop(){
        this.stack.pop()
    }
    // 返回最后一个元素，但是不删除
    peek() {
        return this.stack[this.getCount() - 1]
    }
    getCount() {
        return this.stack.length
    }
    isEmpty() {
        return this.getCount() === 0
    }

}