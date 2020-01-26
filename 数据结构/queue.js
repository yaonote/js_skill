/**
 * 队列 先进先出
 * 双端队列
 * 向队列和双端队列添加元素、删除元素
 * 击鼓传花
 * 回文
 */

/**
 * enqueue
 * dequeue
 * peek
 * isEmpty
 * size
 */
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        } 
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }
    size() {
        if(this.isEmpty()) return 0;
        return this.count - this.lowestCount;
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}
/**
 * Deque
 * 
 * addFront
 * addBack
 * removeFront
 * removeBack
 * peekFront
 * peekBack
 */
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront() {
        if(this.isEmpty()){
            this.addBack();
        }else if(this.lowestCount > 0){
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else {
            for(let i = this.count; i>0; i--){
                this.items[i] = this.item[i - 1]
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if(this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack() {
        if(this.isEmpty()) return undefined;
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }
    peekFront() {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount]
    }
    peekBack() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count-1]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
}


function hotPotato(element, num) {
    const queue = new Queue();
    // const 
}