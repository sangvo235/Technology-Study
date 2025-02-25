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

    let results = new ListNode(0);
    let head = results;
    console.log(head)

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            results.next = list1;
            list1 = list1.next;
            console.log("list1",list1)
        } else {
            results.next = list2;
            list2 = list2.next;
            console.log("list2", list2)
        }
        results = results.next;
    }

    if(list1 !== null) {
        results.next = list1;
    } else {
        results.next = list2;
    }

    return head.next;
    
};

// Time Complexity: O(n)
// Space Complexity: O(1)