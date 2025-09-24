class minHeap {
    constructor() {
        this.data = [];
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
        this.data.push(val);
        this.heapifyUp(); 
    }
    
    heapifyUp () {
        let i = this.data.length - 1;
        while(i > 0) {
            let parent = this.getParentIndex(i);
            // COMPARE DISTANCE
            if (this.data[i].distance >= this.data[parent].distance) break;
            // if (this.data[i] >= this.data[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    poll() {
        if (!this.data.length) return null;
        if (this.data.length === 1) return this.data.pop();

        const minValue = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return minValue;
    }

    heapifyDown() {
        let i = 0;
        const n = this.data.length;

        while (this.getLeftChildIndex(i) < n) {
            let smallestChild = this.getLeftChildIndex(i);
            let right = this.getRightChildIndex(i);

            // COMPARE DISTANCE
            if (right < n && this.data[right].distance < this.data[smallestChild].distance) {
                smallestChild = right;
            }

            // COMPARE DISTANCE
            if (this.data[i].distance <= this.data[smallestChild].distance) break;

            this.swap(i, smallestChild);
            i = smallestChild;
        }        
    }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new minHeap();

    points.forEach(p => {
        const x = p[0];
        const y = p[1];
        const d = Math.abs(x)**2 + Math.abs(y)**2;
        heap.push({ distance: d, point: [x, y] });
    });
    
    let result = [];
    for (let i = 0; i < k; i++) {
        // return just the point
        result.push(heap.poll().point);
    }

    return result;
};

// Min-Heap
// Time Complexity: push O(nlogn) + poll O(klogn) --> O(nlogn)
// Space Complexity: O(n + k) --> O(n)