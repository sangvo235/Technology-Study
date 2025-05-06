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
    if(!root) return true;
    let result = true;

    function dfs(node) {
        // dfs(9) --> left = null, right = null
        // stays as result = true
        // math.max(0,0) + 1

        // dfs(root) --> left = 1, right = dfs(20)
        // stays as result = true
        // math.max(1, right) + 1;

        if(!node) return 0;
        
        let left = dfs(node.left); 
        let right = dfs(node.right);

        if(Math.abs(left - right) > 1) return result = false;

        return Math.max(left, right) + 1;
    }

    dfs(root);
    return result;
};

// Time Complexity: O(n)
// Space Complexity: O(n)