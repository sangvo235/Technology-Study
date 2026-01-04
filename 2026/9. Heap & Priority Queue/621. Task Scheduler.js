/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // Count frequency of each task
    const freq = new Array(26).fill(0);
    for (let t of tasks) {
        freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    // Sort descending
    freq.sort((a, b) => b - a);

    // Most frequent task count
    const maxFreq = freq[0];

    // Number of gaps between the most frequent tasks Eg. 4 A's -> there will be 3 gaps A_A_A_A
    const gaps = maxFreq - 1;

    // Total slots that MUST be at least 'n' apart Eg. n = 2 A__A etc..
    let emptySlots = gaps * n;

    // Fill empty slots using remaining tasks
    for (let i = 1; i < 26 && emptySlots > 0; i++) {
        emptySlots -= Math.min(gaps, freq[i]);
    }

    // If we filled all slots, no idle needed
    return emptySlots > 0 ? tasks.length + emptySlots : tasks.length;
};

// Greedy
// Time Complexity: O(26log26) --> O(1) quick sort is nlogn but we know max for n = 26.
// Space Complexity: O(1)