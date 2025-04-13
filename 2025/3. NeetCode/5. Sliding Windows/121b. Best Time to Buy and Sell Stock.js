/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let base = prices[0];
    let sum = 0;
    let maxSum = 0;

    if (prices.length === 1) return 0;

    for (let i = 1; i < prices.length; i++) {
        if (base < prices[i]) {
            sum = prices[i] - base;
            maxSum = Math.max(sum, maxSum);
        } else {
            base = prices[i];
        }
    }
    
    return maxSum;
};

// Greedy Approach
// Time Complexity: O(n)
// Space Complexity: O(1)