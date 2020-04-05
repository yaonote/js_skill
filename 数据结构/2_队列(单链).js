/**
 * 队列是一个线性结构
 * 队列的特点是在某一端添加数据，在另一端删除数据，遵循先进先出的原则
 * 时间复杂度O(n)
 */

class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(item) {
        this.queue.push(item)
    }
    deQueue() {
        this.queue.shift()
    }
    getHeader() {
        return this.queue[0]
    }
    getLength() {
        return this.queue.length
    }
    isEmpty() {
        return this.getLength() === 0
    }
}