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

    // finding mid
    let slow = head, fast = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // break linked list
    let curr = slow.next;
    slow.next = null;

    // reverse 2nd linked list
    let prev = null;
    while(curr) {
        let temp = curr.next; 
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Combining these list: 
    // First half: 1 -> 2 -> 3 
    // Second half (reversed): 5 -> 4
    // h1 = 1, h2 = 5
    let h1 = head, h2 = prev;

    while(h2) {
        let temp = h1.next;  // temp = [2,3] --> [4] --> [3]
        h1.next = h2;        // h1.next = 5 --> List: 1 -> 5
        h1 = h2;             // h1 [5,4] --> [2,3] --> [4]
        h2 = temp;           // h2 [2,3] --> [4] --> null
    }
    
};

// Time Complexity: O(n)
// Space Complexity: O(1)