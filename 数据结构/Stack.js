
/** 栈  后进先出
 * @class Stack  
    push()
    pop()
    peek()
    isEmpty()
    clear()
    size()
 */
class StackArr {
    constructor(){
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
}
// const stack = new StackArr();

/** ---------------------- object Stack --------------- */


class StackObj {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(item) {
        this.items[this.count] = item;
        this.count++;
    }
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count]
        delete this.items[this.count];
        return result;
    }
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1]
    }
    toString() {
        if(this.isEmpty()){
            return '';
        }
        
        return Object.keys(this.items).reduce((acc,key) => {
            return `${acc}${this.items[key]}`
        },``)
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }

}

const stack = new StackObj();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toString());