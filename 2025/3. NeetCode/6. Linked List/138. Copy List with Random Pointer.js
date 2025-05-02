/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    // 1. First Pass: Creating Node Copies
    if(!head) return null;
    const copy = new Map();
    let curr = head;
    
    // edge case if null
    copy.set(null, null);

    while(curr) {
        copy.set(curr, new Node(curr.val))
        curr = curr.next;
    }

    // 2. Second Pass: Setting Next and Random Pointers
    curr = head;

    while(curr) {
        copy.get(curr).next = copy.get(curr.next);
        copy.get(curr).random = copy.get(curr.random);
        curr = curr.next;
    }

    // 3. Return head of copy
    return copy.get(head);
};

// Time Complexity: O(n)
// Space Complexity: O(n)