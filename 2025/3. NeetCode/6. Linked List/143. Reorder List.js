/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    // 1. Find mid point using Floyd's algorithm.
    let slow = head, fast = head;

    while(fast.next && fast.next.next)  {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Break linked list and reverse second half
    let curr = slow.next;
    slow.next = null;
    let prev = null;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp; 
    }

    // 3. Merge two linked list
    let h1 = head;
    let h2 = prev;

    while (h2) {
        let temp1 = h1.next;
        let temp2 = h2.next;

        h1.next = h2;
        h2.next = temp1;

        h1 = temp1;
        h2 = temp2;
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)