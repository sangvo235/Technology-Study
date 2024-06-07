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
    
    // Eg. [1,2,3,4,5] with n = 2

    // Creating node with value 0 and mapping it to the head
    let dummy = new ListNode(0);
    dummy.next = head;

    let left = dummy, right = head;

    while (right && n > 0) {
        right = right.next;
        n--;
        console.log("right", right)         // stop at [3,4,5]
    }

    while (right) {
        left = left.next;
        right = right.next;
        console.log("left", left)           // stop at [3,4,5]
        console.log("right cont", right)    // stop at null
    }

    // skipping the node                    // 3 --> 5
    left.next = left.next.next;             
    // return dummy.next                    [1,2,3,5] 
    return dummy.next;

};

// Time Complexity: O(n)
// Space Complexity: O(1)