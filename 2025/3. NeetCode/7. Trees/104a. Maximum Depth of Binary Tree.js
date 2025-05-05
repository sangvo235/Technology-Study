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
var maxDepth = function(root) {
    if(root === null) return 0;

    let queue = [root];
    let depth = 0;

    while(queue.length > 0) {
        // Number of nodes in the current level
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            if(curr.left) {
                queue.push(curr.left);
            }

            if(curr.right) {
                queue.push(curr.right);
            }        
        }

        depth++;
    }

    return depth;
};

// BFS Method
// Time Complexity: O(n)
// Space Complexity: O(n)