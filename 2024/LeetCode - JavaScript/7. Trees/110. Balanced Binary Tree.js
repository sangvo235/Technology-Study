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
 * @return {boolean}
 */

var isBalanced = function(root) {

    if (!root) return true;

    let leftHeight = isBalanced(root.left);
    let rightHeight = isBalanced(root.right);
    // to progate that it is imbalanced
    if (leftHeight === false || rightHeight === false) return false;
    // caclulate if height diff > 1
    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return Math.max(leftHeight, rightHeight) + 1;
};

// Time Complexity: O(n)
// Space Complexity: O(n)