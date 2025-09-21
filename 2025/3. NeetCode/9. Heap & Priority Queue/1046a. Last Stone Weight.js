/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxPriorityQueue();

    for(const stone of stones) heap.enqueue(stone);

    while (heap.size() > 1) {
        const y = heap.dequeue(); // heaviest
        const x = heap.dequeue(); // second heaviest
        if (y !== x) {
            heap.enqueue(y - x);
        }
    }

    return heap.size() === 0 ? 0 : heap.front();
};

// MaxPriorityQueue Method from LeetCode JS Library
// Time Complexity: O(nlogn)
// Space Complexity: O(n)