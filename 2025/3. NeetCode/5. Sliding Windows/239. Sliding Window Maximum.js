/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // queue storing the indices not actual value
    const queue = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // remove indices whose value <= nums[i]
        while (nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }

        queue.push(i);

        // remove first element in queue if its outside the window
        if (queue[0] === i - k) {
            queue.shift();
        }

        // after first full window is formed --> push results, queue[0] is always the max value in the window
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }

    }

    return result;
};

// Monotonic Deque Solution
// Time Complexity: O(n)
// Space Complexity: O(n)