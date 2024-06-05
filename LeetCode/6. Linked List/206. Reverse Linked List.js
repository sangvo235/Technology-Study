/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while(curr) {
        let nextTemp = curr.next;
        // create pointer: current is pointing to previous
        curr.next = prev;
        // added value & move previous up
        prev = curr;
        // move current up
        curr = nextTemp;
    }
    return prev;
};

// Time Complexity: O(n)
// Space Complexity: O(1)