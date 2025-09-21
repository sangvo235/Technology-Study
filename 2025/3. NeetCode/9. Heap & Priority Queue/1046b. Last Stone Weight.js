/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        // sorting descending so the heaviest stones are at the front
        stones.sort((a, b) => b - a);

        const y = stones.shift(); // heaviest
        const x = stones.shift(); // second heaviest

        if (y !== x) {
            stones.push(y - x);
        }
    }

    return stones.length === 0 ? 0 : stones[0];
};

// Heap Simulation via use of Array Method
// Time Complexity: O(n^2 * logn)
// Space Complexity: O(n)