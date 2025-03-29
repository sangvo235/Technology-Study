function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currInsertion = arr[i];
        console.log("current array: " + arr);
        let j = i - 1;
        console.log("current j-index: " + j);

        while(j >= 0 && arr[j] > currInsertion) {
            arr[j+1] = arr[j];
            j = j - 1;
            console.log("current array: " + arr);
            console.log("j-index " + j);
            console.log("current array[j]: " + arr[j+1]);
        }

        arr[j+1] = currInsertion;
        console.log("current insertion: " + arr[j+1]);
    }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);

// Time Complexity = O(n^2)
// Space Complexity = O(1)