class Stack {
    constructor() {
        this.stack = [];
    }
    push(el) {
        this.stack.push(el);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.getCount - 1];
    }
    getCount() {
        return this.stack.length
    }
    isEmpty() {
        return this.getCount() == 0;
    }
}

/**
 * peek() 和 pop() 的区别： 都会返回栈顶的值，但是peek 不会把栈顶值删除
 */