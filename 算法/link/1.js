function reverseList(head) {
    if(!head || !head.next) return head;
    let curr = head;
    let pre = null;
    while(curr){
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}


