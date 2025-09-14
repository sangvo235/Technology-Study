/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const splitter = ',';
const NULL = 'n';

var serialize = function(root) {
    let output = '';

    function dfs(node) {
        if(!node) {
            output += NULL + splitter;
            return null;
        }

        output += node.val + splitter;

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const vals = data.split(',');
    // remove last ","
    vals.pop();

    let pointer = 0;

    function dfs() {
        if(pointer >= vals.length) return null;

        const currVal = vals[pointer];

        if(currVal === NULL) {
            pointer++;
            return null;
        }

        // current val is a string need to convert to a number
        let newNode = new TreeNode(Number(currVal));
        pointer++;

        newNode.left = dfs();
        newNode.right = dfs();

        return newNode;
    };

    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Time Complexity: O(n)
// Space Complexity: O(n)