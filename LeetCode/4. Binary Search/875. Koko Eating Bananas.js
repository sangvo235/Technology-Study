/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles); 

    console.log(left, right);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let hours = 0;

        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }

        if (hours <= h) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};

// Time Complexity: O(n * log m)
// Space Complexity: O(1)