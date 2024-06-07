/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minValue = Infinity;
    let maxProfit = 0;
    
    if (prices.length === 0) return 0;

    for(let i = 0; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minValue);
    } 

    return maxProfit;

};

// Time Complexity: O(n)
// Space Complexity: O(1)