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
var diameterOfBinaryTree = function(root) {

    let maxDiameter = 0

    function traverse(currentNode) {

        if(!currentNode) return 0;

        let left = traverse(currentNode.left)
        let right = traverse(currentNode.right)

        let currentDiameter = left + right
        maxDiameter = Math.max(currentDiameter, maxDiameter)

        return Math.max(left+1,right+1);

    }

    traverse(root);

    return maxDiameter;

};

// Time Complexity: O(n)
// Space Complexity: O(n)