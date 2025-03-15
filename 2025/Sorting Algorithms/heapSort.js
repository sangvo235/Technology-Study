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
    let lastParentNode = Math.floor(length / 2 - 1);
    let lastChildNode = length - 1;

    while (lastParentNode >= 0) {
        heapify(arr, length, lastParentNode);
        lastParentNode--;
    }

    while (lastChildNode >= 0) {
        [arr[0], arr[lastChildNode]] =  [arr[lastChildNode], arr[0]];
        heapify(arr, lastChildNode, 0);
        lastChildNode--;
    }
    return arr;
}

const arr = [8, 20, -2, 4, -6];
heapSort(arr);
console.log(arr);