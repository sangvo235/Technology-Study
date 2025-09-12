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
    let max = root.val;

    function dfs(root, max){
        if(root === null) return;

        if(root.val >= max) {
            max = Math.max(max, root.val);
            count++;
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }

    dfs(root, max);
    
    return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)