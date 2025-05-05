/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Edge case 1: if empty ListNode or k = 1    
    if (!head || k === 1) return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let end = dummy;

    while(true) {
        // Move 'end' k steps ahead
        for (let i = 0; i < k && end != null; i++) {
            end = end.next;
        }

        // If there are fewer than k nodes, break
        if (end === null) break;

        // Logic for current group
        let start = prev.next;
        let temp = end.next;
        end.next = null;

        // Reversing the group
        prev.next = reverse(start);

        // Connect the reversed group to the next part
        start.next = temp;

        // Prev and end re-initialised for next group
        prev = start;
        end = start;
    }

    return dummy.next;
};

// Helper function to reverse a linked list
function reverse(head) {
    let prev = null;
    let current = head;

    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}

// Time Complexity: O(n)
// Space Complexity: O(1)