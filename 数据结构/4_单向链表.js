/**
 * 链表是一个线性结构，也是一个递归结构（空间开销比较大）
 */

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        // 链表长度
        this.size = 0;
        // 虚拟头部
        this.dummyNode = new Node(null, null)
    }

    find(header, index, currentIndex) {
        if (index === currentIndex) return header;
        return this.find(header.next, index, currentIndex + 1)
    }
    addNode(value, index) {
        this.checkIndex(index);
        /**
         * 当往链表末尾插入时，prev和next为空
         * 当其他情况时，因为要插入节点，所以插入的节点的next应该是prev.next
         * 然后设置prev.next 为插入的节点
         */
        let prev = this.find(this.dummyNode, index, 0);
        prev.next = new Node(value, prev.next);
        this.size++;
        return prev.next
    }

    insertNode(value, index) {
        return this.addNode(value, index)
    }
    addToFirst(value) {
        return this.addNode(value, 0)
    }
    addToLast(value) {
        return this.addNode(value, this.size)
    }

    removeNode(index, isLast) {
        this.checkIndex(index);
        index = isLast ? index - 1 : index;
        let prev = this.find(this.dummyNode, index, 0);
        let node = prev.next;
        prev.next = node.next;
        node.next = null;
        this.size--;
        return node;
    }

    removeFirstNode() {
        return this.removeNode(0)
    }
    removeLastNode() {
        return this.removeNode(this.size, true)
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) throw Error('Index error')
    }

    getNode(index) {
        this.checkIndex(index);
        if (this.Empty()) return;
        return this.find(this.dummyNode, index, 0).next
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
}