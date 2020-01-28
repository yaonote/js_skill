/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let headATemp = headA;
    let headBTemp = headB;
    while(headATemp.next){
        while(headBTemp.next){
            if(headBTemp.val === headATemp.val){
                return headATemp
            }
            headBTemp = headBTemp.next;
        }
        headATemp = headATemp.next;
        headBTemp = headB;
    }
    return null;
    
};
// [1,3,4,5] [2,3,4,5]
var node5 = {
    val: 5,
    next: null
}
var node4 = {
    val: 4,
    next: node5
}
var node3 = {
    val: 3,
    next: node4
}
var node2 = {
    val: 2,
    next: node3
}
var node1 = {
    val: 1,
    next: node3
}
var headA = {
    val: 'a',
    next: node1
}
var headB = {
    val: 'b',
    next: node2
}

const res = getIntersectionNode(headA,headB);
console.log('res ->',res)