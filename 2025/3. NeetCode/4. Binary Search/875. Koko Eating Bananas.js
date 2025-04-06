/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // minimum speed
    let left = 1; 
    // max speed 
    let right = Math.max(...piles);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let hours = 0;

        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }

        if (hours > h) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
     
    // return left because it will give you the minimum value
    return left;

};

// Time Complexity: O(n*logm)
// Space Complexity: O(1)