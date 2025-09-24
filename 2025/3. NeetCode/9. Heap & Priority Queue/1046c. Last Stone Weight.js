class maxHeap {
    constructor() {
        this.data = []; // empty array to store values
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2);
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

    push(key) {
        this.data.push(key); // add at the end of array
        this.heapifyUp(); // restore heap property
    }

    heapifyUp() {
        // i => start at last index        
        let i = this.data.length - 1;
        while (i > 0) {
            let parent = this.getParentIndex(i);
            if (this.data[i] <= this.data[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const max = this.data[0];
        // remove last element of the array and put it at the root
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        // start at current index = 0 (root)
        let i = 0;
        const n = this.data.length;

        while (this.getLeftChildIndex(i) < n) {
            let biggestChild = this.getLeftChildIndex(i);
            let right = this.getRightChildIndex(i);

            if (right < n && this.data[right] > this.data[biggestChild]) {
                biggestChild = right;
            }

            // max-heap valid if i >= biggestChild
            if (this.data[i] >= this.data[biggestChild]) break;

            this.swap(i, biggestChild);
            i = biggestChild;
        }
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new maxHeap();

    for (let stone of stones) {
        heap.push(stone);
    }

    while (heap.data.length > 1) {
        const y = heap.poll(); // heaviest
        const x = heap.poll(); // second heaviest

        if (y !== x) {
            heap.push(y - x);
        }
    }

    return heap.data.length === 0 ? 0 : heap.data[0];
};

// Creating Max-Heap Class Method in JS
// Time Complexity: O(nlogn)
// Space Complexity: O(n)