function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let leftChildIndex = parentIndex * 2 + 1;
    let rightChildIndex = leftChildIndex + 1;

    if (leftChildIndex < length && arr[leftChildIndex] > arr[largest]) {
        largest = leftChildIndex;
    }

    if (rightChildIndex < length && arr[rightChildIndex] > arr[largest]) {
        largest = rightChildIndex;
    }

    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        
        heapify(arr, length, largest);
    }
    return arr;
}

function heapSort(arr) {
    let length = arr.length;
    let parentIndex = Math.floor(length / 2 - 1);

    // Unsorted array --> Max-heap
    for (let i = parentIndex; i >= 0; i--) {
        heapify(arr, length, i);
    }

    // Max-heap is achieved so we know the root value is largest
    for (let i = length - 1; i > 0; i--) {
        // swapping root with last element: [20, 8, -2, 4, -6] --> [-6, 8, -2, 4, 20]
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // heapify the reduced heap: [-6, 8, -2, 4]
        heapify(arr, i, 0);
    }
    // Output: [-6, -2, 4, 8, 20]
    return arr;
}

const arr = [8, 20, -2, 4, -6];
heapSort(arr);
console.log(arr);