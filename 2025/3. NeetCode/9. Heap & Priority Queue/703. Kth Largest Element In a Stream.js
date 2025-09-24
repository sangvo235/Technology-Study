class minHeap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }

    push(val) {
        this.data.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.data.length - 1; // start at last index
        while (i > 0) {
            let parent = this.getParentIndex(i);
            // for min-heap: child < parent → swap
            if (this.data[i] >= this.data[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const min = this.data[0];
        // remove last element of the array and put it at the root
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        // start at current index = 0 (root)
        let i = 0;
        const n = this.data.length;

        while (this.getLeftChildIndex(i) < n) {
            let smallestChild = this.getLeftChildIndex(i);
            let right = this.getRightChildIndex(i);

            if (right < n && this.data[right] < this.data[smallestChild]) {
                smallestChild = right;
            }

            // min-heap valid if i <= smallestChild
            if (this.data[i] <= this.data[smallestChild]) break;

            this.swap(i, smallestChild);
            i = smallestChild;
        }
    }

}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new minHeap();

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val);

    // keep only k elemetns in the heap
    if(this.heap.data.length > this.k) {
        this.heap.poll(); // remove smallest value
    }

    // root of the min-heap = kth largest
    return this.heap.data[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// Creating Min-Heap Class Method in JS
// Time Complexity: O(nlogk) --> k instead of n because we are just keeping size k at most
// Space Complexity: O(k)