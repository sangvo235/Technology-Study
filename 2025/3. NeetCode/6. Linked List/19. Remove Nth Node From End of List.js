/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Since these are singly linked list we cannot simply iterate backwards.
    // Technically, you can take the difference of length - n, however this requires two passes. 
    // Thus, two pointer approach needs to be used in this case.
    // Making fast pointer n-steps ahead first before iterating both.
    
    let dummy = new ListNode(0, head);
    let fast = dummy, slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};

// Time Complexity: O(n)
// Space Complexity: O(1)