class minHeap {
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

    push(val) {
        this.data.push(val); // add at the end of array
        this.heapifyUp(); // restore heap property
    }
    
    heapifyUp () {
        // i => start at last index        
        let i = this.data.length - 1;
        while( i > 0) {
            // comparing last index to parent, for min we want the root to be = or smaller
            let parent = this.getParentIndex(i);
            if (this.data[i] >= this.data[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const minValue = this.data[0];
        // move last element to the root
        this.data[0] = this.data.pop();
        // restore heap property
        this.heapifyDown();
        return minValue;
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

const heap = new minHeap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);
console.log(heap.data.join(','));
// RESULTS!!
// 5,25,40,70,90,44

let sortedArray = [];
while (heap.data.length > 0) {
    let val = heap.poll();
    sortedArray.push(val);
    console.log(`Polled: ${val}, Heap now: [${heap.data.join(',')}]`);
}
console.log("All items in sorted order:", sortedArray.join(','));
// RESULTS!!
// Polled: 5, Heap now: [25,44,40,70,90]
// Polled: 25, Heap now: [40,44,90,70]
// Polled: 40, Heap now: [44,70,90]
// Polled: 44, Heap now: [70,90]
// Polled: 70, Heap now: [90]
// Polled: 90, Heap now: []
// All items in sorted order: 5,25,40,44,70,90