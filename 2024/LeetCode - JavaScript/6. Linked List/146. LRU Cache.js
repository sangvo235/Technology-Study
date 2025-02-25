// Using ES6 Map V8 as it is simplier solution than using Object + Doubly Linked List
// Variant of hash tables that generally have a O(1) time complexity for get, set, add, has methods. 
// Only in the event of collision it is O(n) but a good hash function should control for this.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); 
    }

    get(key) {
        if(!this.map.has(key)) return -1
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if(this.map.size > this.capacity) {
            const firstItem = this.map.keys().next().value;
            this.map.delete(firstItem);
        }
    }
}

// Time Complexity: O(1)
// Space Complexity: O(n)