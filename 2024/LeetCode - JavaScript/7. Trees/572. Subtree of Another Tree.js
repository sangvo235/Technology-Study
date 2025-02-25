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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    function isSame(root1, root2) {
        if(!root1 && !root2) return true;
        if(!root1 || !root2 || root1.val !== root2.val) return false;

        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }

    if (!root) return false;
    if (isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Time Complexity: O(m * n)
// Space Complexity: O(m + n)