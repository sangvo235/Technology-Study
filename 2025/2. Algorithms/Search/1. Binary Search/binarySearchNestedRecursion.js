function binarySearch(arr, target) {

    function recursion(left, right) {
    
        if(left > right) return "Not found!";
    
        let mid = Math.floor((left + right) / 2);
    
        if (target === arr[mid]) return `Found it at index ${mid}!`;
        else if (target < arr[mid]) {
            return recursion(left, mid - 1)
        } else {
            return recursion(mid + 1, right);
        }
    
    }
    
    return recursion(0, arr.length - 1);

}

const arr = [1, 3, 5, 9, 13, 16, 17, 20];
const target = 17;
console.log(binarySearch(arr, target));

// Time Complexity = O(logn)
// Space Complexity = O(logn)