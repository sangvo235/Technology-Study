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

    push(val) {
        this.data.push(val);
        this.heapifyUp();
    }
    
    heapifyUp () {
        let i = this.data.length - 1;
        while( i > 0) {
            let parent = this.getParentIndex(i);
            if (this.data[i] <= this.data[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    heapifyDown() {
        let i = 0;
        const n = this.data.length;

        while (this.getLeftChildIndex(i) < n) {
            let largestChild = this.getLeftChildIndex(i);
            let right = this.getRightChildIndex(i);

            if (right < n && this.data[right] > this.data[largestChild]) {
                largestChild = right;
            }

            if (this.data[i] >= this.data[largestChild]) break;

            this.swap(i, largestChild);
            i = largestChild;
        }        
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const maxValue = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return maxValue;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new maxHeap();
    for (let num of nums) heap.push(num);
    for (let i = 0; i < k - 1; i++) heap.poll();
    return heap.poll();
};

// MaxHeap - Incremental Push + HeapifyUp + Poll --> suitable for dynamic data (not for this question though)
// Time Complexity: O(nlogn + klogn)
// Space Complexity: O(n)