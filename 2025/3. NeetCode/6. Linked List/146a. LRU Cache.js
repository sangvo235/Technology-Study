/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    // The map functionality in JS keeps the order. 
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // You check if the map has that key then delete and set it so it's MRU.
    // The value is returned.  
    if (this.map.has(key)) {
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    } else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // If key exist we need to remove and reinsert to mark as MRU.
    if (this.map.has(key)) {
        this.map.delete(key);
    } else if (this.map.size === this.capacity) {
        // Remove LRU (first inserted) 
        // .next returns { value, done }
        const oldestKey = this.map.keys().next().value;
        this.map.delete(oldestKey);
    }

    // Insert as MRU
    this.map.set(key, value); 
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// JS Map Method
// Time Complexity: O(1)
// Space Complexity: O(n)