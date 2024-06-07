var TimeMap = function() {
    // store in sorted array or map
    this.hashmap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    // if key does not exist for hashmap then initialize and empty array
    if (!this.hashmap.has(key)) {
        this.hashmap.set(key,[]);
    }

    // otherwise, store value & timestamp @ index timestamp
    this.hashmap.get(key).push({value, timestamp});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.hashmap.get(key);

    // if the key doesn't exist
    if (!values) return "";

    // use binary search 
    let left = 0;
    let right = values.length - 1;
    let result = "";

    while (left <= right) {
        let mid = ~~((left + right) / 2);

        if (values[mid].timestamp <= timestamp) {
            result = values[mid].value;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Time Complexity: O(log n)
// Space Complexity: O(n)