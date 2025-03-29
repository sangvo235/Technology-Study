// Node
// Trie:
// insert, contains, startsWithPrefix

class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i];

            if(!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new Node();
            }

            curr = curr.children[charToInsert];
        }

        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i];

            if(!(charToFind in curr.children)) {
                return false;
            }

            curr = curr.children[charToFind];
        }

        return curr.isWordEnd;
    }
    
    startsWithPrefix(prefix) {
        let curr = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];

            if(!(charToFind in curr.children)) {
                return false;
            }

            curr = curr.children[charToFind];
        }

        return true;    
    }

}

// Creation
const trie = new Trie();

// Insertion
trie.insert("hello");
trie.insert("world");

// Contains
console.log("Contains 'hello':", trie.contains("hello")); // true
console.log("Contains 'hell':", trie.contains("hell"));  // false
console.log("Contains 'world':", trie.contains("world")); // true
console.log("Contains 'old':", trie.contains("old"));  // false

// Prefix search
console.log("Starts with 'hel':", trie.startsWithPrefix("hel")); // true
console.log("Starts with 'ello':", trie.startsWithPrefix("ello")); // false
console.log("Starts with 'wor':", trie.startsWithPrefix("wor")); // true
console.log("Starts with 'orl':", trie.startsWithPrefix("orl")); // false