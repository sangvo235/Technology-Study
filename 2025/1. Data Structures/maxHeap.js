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
        this.data[this.data.length] = key;
        this.heapifyUp();
    }

    heapifyUp () {
        let currentIndex = this.data.length - 1;

        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    
    poll() {
        const maxValue = this.data[0];

        // Replace first element with last element i.e. replace 90 with 25
        this.data[0] = this.data[this.data.length - 1]; 
        // Now the duplicate 25 at the end is no longer part of the heap
        this.data.length--;
        // reforming heap --> getting 25 to the correct position
        this.heapifyDown();

        return maxValue;
    }

    heapifyDown() {
        let currentIndex = 0;

        // 3rd iteration 25 has no child so does not go through the while loop
        while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);

            if (this.data[this.getRightChildIndex(currentIndex)] !== undefined
                && this.data[this.getRightChildIndex(currentIndex)]
                > this.data[this.getLeftChildIndex(currentIndex)]) {
                biggestChildIndex = this.getRightChildIndex(currentIndex);
            }
            
            // 1st iteration 25 < 70 --> we swap
            // 2nd iteration 25 < 40 --> we swap
            if (this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            } else {
                return;
            }
        }
    }
}

const heap = new maxHeap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(','));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('Top 5 items: ', a);
console.log(heap.data.join(','));