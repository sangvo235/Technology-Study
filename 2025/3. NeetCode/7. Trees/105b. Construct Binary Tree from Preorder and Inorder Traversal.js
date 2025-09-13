/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // build a value -> index map for inorder
    let inMap = new Map();
    // inMap = { 9 -> 0, 3 -> 1, 15 -> 2, 20 -> 3, 7 -> 4}
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i)
    }

    function recurse(pStart, pEnd, inStart, inEnd){

        if(pStart > pEnd || inStart > inEnd) return null;

        // we know that the root will be index 0 of preorder
        let rootVal = preorder[pStart];
        // can use this to find the where it is located index wise for inorder - O(1) lookup instead of O(n) indexOf
        let inIndex = inMap.get(rootVal);
        // for inorder: everything from start till root index is left side
        let nLeft = inIndex - inStart;

        let root = new TreeNode(rootVal);
        root.left = recurse(pStart+1, pStart+nLeft, inStart, inIndex-1);
        root.right = recurse(pStart+nLeft+1, pEnd, inIndex+1, inEnd);

        return root;
    }

    return recurse(0, preorder.length-1, 0, inorder.length-1);
};

// Time Complexity: O(n) using Hash Map will be O(1) look up instead
// Space Complexity: O(n)