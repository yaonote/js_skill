/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 翻转链表
 * @param {*} head 
 */

/**
 * 
 * 思路就是前驱变后继
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let temp = head;
    while(temp.next) {

    }
};
// head.next => head 

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
