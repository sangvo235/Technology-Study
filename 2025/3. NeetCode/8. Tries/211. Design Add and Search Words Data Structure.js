
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;

    for(let char of word) {
        // create empty object to represent next node in the trie
        if(node[char] == null) node[char] = {};
        // move node
        node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function(word, trie, index) {
    //base case
    if(word.length === index) {
        return trie.isEnd ? true : false;
    }

    let char = word[index];

    if(char === ".") {
        for(let key in trie) {
            if(key === "isEnd") continue;
            if(this.dfs(word, trie[key], index+1)) return true;
        }
    }
    else {
        if(trie[char] != null) {
            return this.dfs(word, trie[char], index+1);
        }
    }

    return false;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, this.trie, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Time Complexity (no wild card): O(l) --> length of word
// Time Complexity (with wild card): O(b^m) --> branching factor (depends on the letters) and m = number of wild cards
// Space Complexity: O(l) --> length of word