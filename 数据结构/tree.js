/**
 * 
 * 根节点: 树顶部的节点
 * 内部节点: 至少有一个子节点
 * 外部节点(叶子节点): 没有子节点 
 * 子树: 由节点和它的后代构成 
 * 
 * 节点深度: 祖先节点的数量
 * 树的高度: 多有节点深度的最大值 
 * 
 */
const { Node,defaultEquals } = require('./utils')
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        
    }
}















