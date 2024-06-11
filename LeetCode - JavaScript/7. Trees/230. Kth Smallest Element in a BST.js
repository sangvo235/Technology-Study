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

    let result = 0;
    let count = 0;

    function dfs(currentNode) {
        if (!currentNode) return;
        
        if (currentNode.left) dfs(currentNode.left);
        count++; 
        if (count === k) { 
            result = currentNode.val;
            return;
        }
        if (currentNode.right) dfs(currentNode.right);
    }
    
    dfs(root)

    return result;
};

// Time Complexity: O(n)
// Space Complexity: O(n)