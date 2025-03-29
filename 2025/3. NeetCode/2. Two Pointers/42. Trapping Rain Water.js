/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let leftArr = [];
    let rightArr = [];
    
    let maxHeightLeft = 0;
    let maxHeightRight = 0;

    for (let i = 0; i < height.length; i++) {
        let j = height.length - i - 1;
        leftArr.push(maxHeightLeft);
        rightArr.push(maxHeightRight);
        maxHeightLeft = Math.max(maxHeightLeft, height[i]);
        maxHeightRight = Math.max(maxHeightRight, height[j]);
    }

    rightArr = rightArr.reverse();
    let trappedWater = 0;

    for (let i = 0; i < height.length; i++) {
        let amount = Math.min(leftArr[i], rightArr[i]) - height[i];
        if (amount > 0) trappedWater += amount;
    }

    return trappedWater;
};

// Time Complexity: 3n --> O(n)
// Space Complexity: 2n --> O(n)