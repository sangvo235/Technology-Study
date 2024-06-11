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
var isValidBST = function(root) {
    
    let prev = -Infinity;

    function dfsInOrder(currentNode) {
        if (!currentNode) return true;

        if (!dfsInOrder(currentNode.left)) return false;
        if (prev >= currentNode.val) return false;
        prev = currentNode.val;
        if (!dfsInOrder(currentNode.right)) return false;

        return true;
    }

    return dfsInOrder(root);
};

// Time Complexity: O(n)
// Space Complexity: O(n)