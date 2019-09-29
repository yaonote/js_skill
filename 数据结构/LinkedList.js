
// import {defaultEquals,Node} from './utils';
const { defaultEquals,Node } = require('./utils')
/**
 * 链表
 * //* push(element) 向链表尾部添加一个新元素
 * //* insert(element,position) 向执行位置插入一个新元素
 * //* getElementAt(index) 返回链表中特定位置的元素
 * //* remove(element) 从链表中移除一个元素
 * //* indexOf(element) 返回元素在链表中的索引
 * //* removeAt(position) 从链表的特定位置移除一个元素
 * //* isEmpty() 空返回 true 否则返回false
 * //* size() 返回元素的个数
 * //* toString() 返回整个链表的字符串
 */
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    judgeIndex(index) {
        if(index < 0 || index >= this.count) return false;
    }
    getElementAt(index) {
        if(!this.judgeIndex(index)) return undefined;
        let node = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node;

    }
    push(element) {
        const node = new Node(element);
        if(!this.head){
            this.head = node;
            return 
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
        this.count++;
    }   
    removeAt(index) {
        let current = this.head;
        if(index === 0){
            this.head = current.next;
        }else{
            let previous = this.getElementAt(index-1);
            current = previous.next;
            previous.next = current.next; // * 把前一项和后一项连起来 跳过要删除的项
        }
        this.count--;
        return current.element;
    }
    insert(element,index) {
        if(!this.judgeIndex(index)) return false;
        let node = new Node(element);
        let current = this.head;
        if(index === 0){
            node.next = current;
            this.head = node;
        }else{
            const previous = this.getElementAt(index - 1);
            const current = previous.next;
            previous.next = node;
            node.next = current;
        }
        this.count++;
        return true;
    }
}




