
var TimeMap = function() {
    // creating map
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []); // because the key can contain multiple value so need an array
    }
    this.map.get(key).push([value, timestamp]); // get key, push params
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // check if there is a key in the map
    if (!this.map.has(key)) {
        return "";
    }

    // return the list of timestamps & values in that key.
    const list = this.map.get(key);

    let left = 0;
    let right = list.length - 1;
    let result = "";

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (timestamp >= list[mid][1]) {
            result = list[mid][0];
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

// Time Complexity: set = O(1)  | get = O(log n)
// Space Complexity: set = O(n) | get = O(1)