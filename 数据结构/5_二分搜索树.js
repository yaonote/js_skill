/**
 * 二分搜索树也是二叉树，拥有二叉树的特性
 * 区别在于二分搜索树每个节点的值都比他的左子树的值大，比右子树的值小
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    addNode(value) {
        this.root = this_addChilde(this.root, value)
    }

    /**
     * 添加节点时，需要比较添加节点的值和当前节点值的大小
     */
    _getSize(node) {
        return node ? node.size : 0
    }
    _addChild(node, value) {
        if (!node) {
            this.size++;
            return new Node(value)
        }

        if (node.value > value) {
            node.size++;
            node.left = this._addChild(node.left, value)
        } else {
            node.size++
            node.right = this._addChild(node.right, value)
        }
        return node
    }

    /**
     * 先序遍历可用于打印树的结构
     * 先序遍历先访问根节点，然后访问左节点，最后访问右节点
     */
    preTraversal() {
        this._pre(this.root)
    }
    _pre(node) {
        if (node) {
            console.log(node.value);
            this._pre(node.left);
            this._pre(node.right);
        }
    }

    /**
     * 中序遍历可用于排序
     * 对于BST来说，中序遍历可以实现一次遍历就得到有序的值
     * 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点
     */
    midTraversal() {
        this._mid(this.root)
    }
    _mid(node) {
        if (node) {
            this._mid(node.left);
            console.log(node.value);
            this._mid(node.right);
        }
    }

    /**
     * 后续遍历可用于先操作子节点再操作父节点的场景
     * 后续遍历表示先访问左节点，然后访问右节点，最后访问根节点
     */
    backTraversal() {
        this._back(this.root)
    }
    _back(node) {
        if (node) {
            this._back(node.left);
            this._back(node.right);
            console.log(node.value);
        }
    }

    /**
     * 以上的几种遍历都可以叫做深度遍历，
     * 还有广度遍历：就是一层一层的遍历树
     */
    breadthTraversal() {
        if (!this.root) return null;
        let q = new Queue();
        // 将根节点入队
        q.enQueue(this.root);
        //循环判断队列是否为空，为空则代表树遍历完毕
        while (!q.isEmpty) {
            //将队首出队，判断是否有左右树，有的话就先左后右入队
            let n = q.deQueue();
            console.log(n.value);
            if (n.left) q.enQueue(n.left);
            if (n.right) q.enQueue(n.right);
        }

    }

    /**
     * 寻找最小值，最小值一定在根节点的最左边
     */
    getMin() {
        return this._getMin(this.root).value
    }
    _getMin(node) {
        if (!node.left) return node;
        return this._getMin(node.left);
    }

    /**
     * 寻找最大值，最大值一定在根节点的最右边
     */
    getMax() {
        return this._getMax(this.root).value
    }
    _getMax(node) {
        if (!node.right) return node;
        return this._getMax(node.right);
    }

    /**
     * 向下取整
     * 根据二分搜索树的特性，值一定在根节点的左侧，只需要一直遍历左子树
     * 直到当前的节点值不在大于等于需要的值，然后判断节点是否还拥有右子树
     * 如果有的话，继续上面的递归判断
     */
    floor(value) {
        let node = this._floor(this.root, value);
        return node ? node.value : null;
    }
    _floor(node, value) {
        if (!node) return null;
        if (node.value === value) return value;
        // 如果当前节点值还比需要的值大，就继续递归
        if (node.value > value) {
            return this._floor(node.left, value);
        }
        //判断当前节点是否有右子树
        let right = this._floor(node.right, value);
        if (right) return right;
        return node;
    }

    /**
     * 排名
     * 这是用于获取给定值的排名或者排名第几的节点的值
     */
    select(k) {
        let node = this._selece(this.root, k)
        return node ? node.value : null
    }
    _select(node) {
        if (!node) return null;
        // 先获取左子树有几个节点
        let size = node.left ? node.left.size : 0;
        // 判断size是否大于 K
        // 如果大于K，代表所需要的节点在左节点
        if (size > k) return this._select(node.left, k);
        // 如果小于K，代表所需要的节点在右节点
        // 注意这里需要重新计算k，减去根节点除了右子树的节点数量
        if (size < k) return this._select(node.right, k - size - 1);
        return node;
    }

    /**
     * 删除最小节点
     */
    deleteMin() {
        this.root = this._deleteMin(this.root);
        console.log(this.root);
    }
    _deleteMin(node) {
        /**
         * 一直递归左子树
         * 如果左子树为空，就判断节点是否拥有右子树
         * 有右子树的话就把需要删除的节点替换为右子树
         */
        if ((node != null) & !node.left) return node.right;
        node.left = this._deleteMin(node.left);
        //最后重新维护下节点的size
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
        return node;
    }

    /**
     * 删除任意节点
     */
    delect(v) {
        this.root = this._delect(this.root, v)
    }
    _delect(node, v) {
        if (!node) return null;
        // 寻找的节点比当前节点小，去左子树找
        if (node.value < v) {
            node.right = this._delect(node.right, v)
        } else if (node.value > v) {
            // 寻找的节点比当前节点大，去右子树找
            node.left = this._delect(node.left, v)
        } else {
            /**
             * 进入到这个条件说明已经找到节点
             * 先判断节点是否拥有左右子树中的一个
             * 是的话，将子树返回出去，这里和_delectMin 的操作一样
             */
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            /**
             * 进入这里，代表节点拥有左右子树
             * 先取出当前节点的后继节点，也就是取出当前节点右子树的最小值
             */
            let min = this._getMin(node.right);
            // 取出最小值后，删除最小值
            //然后把删除节点后的子树赋值给最小节点
            min.right = this._deleteMin(node.right);
            // 左子树不动
            min.left = node.left;
            node = min;
        }
        // 维护size
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
        return node;
    }

}