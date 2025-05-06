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
    
    function dfs(node) {
        // note: p != q and p & q will exist in BST.

        // base case
        if(!node) return null;
        
        // if p or q found --> send it back
        // returns 4 === q
        if(node === p || node === q) return node;

        // post-order DFS (left --> right --> node)
        let left = dfs(node.left); 
        let right = dfs(node.right);

        // lca
        if (left && right) return node;

        // lca via descendant of itself
        return left || right;
    }

    return dfs(root);
};

// Time Complexity: O(n)
// Space Complexity: O(n)