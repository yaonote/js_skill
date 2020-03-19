class Node {
    constructor(v, next) {
        this.value= v;
        this.next = next;
    }
}

class linkList {
    constructor() {
        this.size = 0;
        this.dummyNode = new Node(null, null)
    }

    find(header, index, currentIndex) {
        if(index === currentIndex) return header;
        return this.find(header.next, index, currentIndex + 1)
    }
    
    checkIndex(index) {
        if(index < 0 || index > this.size) throw Error('index error')
    }
    addNode(value, index) {
        this.checkIndex(index);
        let prev = this.find(this.dummyNode, index, 0);
        prev.next = new Node(value, prev.next);
        this.size++;
        return prev.next
    }
}