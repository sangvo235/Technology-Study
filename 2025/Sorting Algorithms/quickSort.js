function quickSort(arr) {

    // base case to exit out of the recursion
    if(arr.length < 2) {
        return arr;
    }

    // can be any but in this case for simplicity taking the last index
    let pivot = arr[arr.length - 1];

    // creating arrays
    let left = [];
    let right = [];

    // comparison with pivot value
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // recursion
    console.log("left: " + left);
    console.log("right: " + right);
    console.log("arr: " + arr);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6, 7];
console.log(quickSort(arr));

// Time Complexity = O(nlogn)
// Space Complexity = O(logn)
