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

    if (root === null) return [];

    let queue = [root];
    let results = [];

    while (queue.length) {
        let levelArray = [];
        let levelSize = queue.length;

        while (levelSize) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

            levelArray.push(currentNode.val);
            levelSize--;
        }
        results.push(levelArray);
    }
    return results;

};

// Time Complexity: O(n)
// Space Complexity: O(n)