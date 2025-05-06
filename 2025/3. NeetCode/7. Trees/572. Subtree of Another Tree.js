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
        // both null
        if (!root1 && !root2) return true;
        // one is null and one is not OR values don't match
        if(!root1 || !root2 || root1.val !== root2.val) return false;
        
        // if values match check the children
        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }

    function dfs(node) {
        // base case
        if(!node) return false;

        // check if current subtree matches subroot
        if (isSame(node, subRoot)) return true;

        // keep searching left or right
        return dfs(node.left) || dfs(node.right);
    }
    
    return dfs(root);
};

// Time Complexity: O(m+n)
// Space Complexity: O(m+n)