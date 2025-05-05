function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2);

        if (target === arr[mid]) return mid;
        else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;

};

const arr = [1, 3, 5, 9, 13, 16, 17, 20];
const target = 17;
console.log(binarySearch(arr, target));

// Time Complexity = O(logn)
// Space Complexity = O(1)