/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merge = new ListNode(0);
    let head = merge;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            // point to list1 node
            merge.next = list1;
            // move list1 pointer
            list1 = list1.next;
        } else {
            merge.next = list2;
            list2 = list2.next;
        }
        // shift the merge list node
        merge = merge.next;
    }

    if(list1 !== null) {
        merge.next = list1;
    } else {
        merge.next = list2;
    }

    return head.next;
};

// Time Complexity: O(n + m)
// Space Complexity: O(1)