function mergeSort(arr) {

    if(arr.length < 2) {
        return arr; // base case
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    console.log("Splitting:", arr, "=>", leftArr, "and", rightArr);

    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    
    console.log("Merging:", leftArr, rightArr);

    while(leftArr.length && rightArr.length) {
        console.log("Left array length:", leftArr.length);
        console.log("Right array length:", rightArr.length);

        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
            console.log("sortedArr left add:", sortedArr);
        } else {
            sortedArr.push(rightArr.shift());
            console.log("sortedArr right add:", sortedArr);
        }
    }

    console.log("Merged:", [...sortedArr, ...leftArr, ...rightArr]);
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

// Time Complexity = O(nlogn)
// Space Complexity = O(n)