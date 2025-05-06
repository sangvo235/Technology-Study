/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // note: p != q and p & q will exist in BST.

    if (p.val < root.val && q.val < root.val) {          // root = 6, p = 2, q = 4
        return lowestCommonAncestor(root.left, p, q); 
    } else if (p.val > root.val && q.val > root.val) {   // root = 6, p = 7, q = 9
        return lowestCommonAncestor(root.right, p, q);
    } else { // root = 6, p = 4, q = 9
        return root;
    }
    
};

// Time Complexity: O(logn)
// Space Complexity: O(1)