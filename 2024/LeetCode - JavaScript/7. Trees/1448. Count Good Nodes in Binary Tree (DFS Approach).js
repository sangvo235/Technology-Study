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
 * @return {number}
 */
var goodNodes = function(root) {    
    let count = 0;

    function dfs(root, max) {
        if (root === null) return;

        if (root.val >= max) {
            max = root.val;
            count++;
        }

        if(root.left) dfs(root.left, max);
        if(root.right) dfs(root.right, max);
    }
    dfs(root, root.val);

    return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)