/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];
    inOrder(root, arr);
    return arr[k - 1];    
};

function inOrder(root, arr) {
    if(!root) return;

    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

// Time Complexity: O(n)
// Space Complexity: O(n)