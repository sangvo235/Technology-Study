function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
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

    for (let i = parentIndex; i >= 0; i--) {
        heapify(arr, length, i);
    }

    // same as poll
    for (let i = length - 1; i > 0; i--) {
        // swapping root with last element
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // heapify the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

const arr = [8, 20, -2, 4, -6];
heapSort(arr);
console.log(arr);