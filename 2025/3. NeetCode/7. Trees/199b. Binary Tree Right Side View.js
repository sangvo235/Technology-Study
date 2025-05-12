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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];

    function dfs(curr, height) {
        if (!curr) return;
        
        // Ensures we push only 1 right most node at each height
        if (height === result.length) {
            result.push(curr.val);
        }

        dfs(curr.right, height + 1);
        dfs(curr.left, height + 1);
    }

    dfs(root, 0);

    return result;
};

// DFS Pre-Order with Right-First Method
// Time Complexity: O(n)
// Space Complexity: O(h) --> height of tree