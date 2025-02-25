/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    // First Pass: Creating the Cloned Nodes
    if(!head) return null;

    const clones = new Map();
    let curr = head;

    while (curr) {
        clones.set(curr, new Node(curr.val))
        curr = curr.next;
    }

    // Second Pass: Setting Next and Random Pointers
    curr = head;

    while(curr) {
        clones.get(curr).next = clones.get(curr.next) || null;
        clones.get(curr).random = clones.get(curr.random) || null;
        curr = curr.next;
    }

    return clones.get(head);

};

// Time Complexity: O(n)
// Space Complexity: O(n)