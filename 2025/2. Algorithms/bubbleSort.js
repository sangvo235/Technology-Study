function bubbleSort(arr) {

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                console.log(arr);
            }
        }
    }
    return arr;
};

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);

// Time Complexity = O(n^2)
// Space Complexity = O(1)
