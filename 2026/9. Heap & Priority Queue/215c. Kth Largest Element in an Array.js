/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class maxHeap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
     [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];   
    }

    buildHeap(arr) {
        this.data = arr;
        for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    heapifyDown(i) {
        let largest = i;
        const left = this.getLeftChildIndex(i);
        const right = this.getRightChildIndex(i);
        const size = this.data.length;

        if (left < size && this.data[left] > this.data[largest]) largest = left;
        if (right < size && this.data[right] > this.data[largest]) largest = right;

        if (largest !== i) {
            this.swap(i, largest);
            this.heapifyDown(largest);
        }
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const max = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return max;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new maxHeap();
    heap.buildHeap(nums.slice());
    for (let i = 0; i < k - 1; i++) heap.poll();
    return heap.poll();
};

// MaxHeap - Bottom-up BuildHeap + HeapifyDown + Poll 
// NOTE: Rebuild is O(n) not O(nlogn) but requires knowledge of full array in advance --> static data
// Time Complexity: O(n + klogn)
// Space Complexity: O(n)