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
    if (root === null) return 0;

    let queue = [{ currentNode: root, maxVal: root.val }];
    let count = 0;

    while (queue.length) {
        let { currentNode, maxVal } = queue.shift();

        if (currentNode.val >= maxVal) {
            count++;
        }

        maxVal = Math.max(maxVal, currentNode.val);

        if (currentNode.left) queue.push({ currentNode: currentNode.left, maxVal: maxVal });
        if (currentNode.right) queue.push({ currentNode: currentNode.right, maxVal: maxVal });

    }
    return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)