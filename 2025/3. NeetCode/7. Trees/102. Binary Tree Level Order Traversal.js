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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (!root) return [];
    
    const queue = [root];
    const result = [];

    while(queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for(let i = 0; i < levelSize; i++) {
            const curr = queue.shift();
            currentLevel.push(curr.val);

            if(curr.left) {
                queue.push(curr.left);
            }

            if (curr.right) {
                queue.push(curr.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
};

// BFS Method
// Time Complexity: O(n)
// Space Complexity: O(n)