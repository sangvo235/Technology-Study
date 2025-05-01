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
    // 1. Track where we currently are.
    // 2. temp variable to keep track of what's in front of the node. 
    // 3. temp variable to keep track of what's behind the node. 

    let curr = head;
    let prev = null;

    while (curr !== null) {
        // step 2
        let nextNode = curr.next;
        // step 3
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};

// Time Complexity: O(n)
// Space Complexity: O(1)