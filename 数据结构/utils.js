class Node{
    constructor(ele) {
        this.element = ele;
        this.next = undefined;
    }
}

exports.defaultEquals = (a,b) => a === b;
exports.Node = Node;