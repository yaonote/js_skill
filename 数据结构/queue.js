class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(el) {
        this.queue.push(el)
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