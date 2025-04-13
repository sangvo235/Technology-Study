/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let pointer1 = 0;
    let pointer2 = 0;
    const result = [];

    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if(nums1[pointer1] <= nums2[pointer2]) {
            result.push(nums1[pointer1]);
            pointer1++;
        } else {
            result.push(nums2[pointer2])
            pointer2++;
        }
    }

    // If one array is done then push remaining elements
    while (pointer1 < nums1.length) {
        result.push(nums1[pointer1]);
        pointer1++;
    }

    while (pointer2 < nums2.length) {
        result.push(nums2[pointer2]);
        pointer2++;
    }

    let n = result.length;
    let midLeftIndex = (n / 2) - 1;
    let midRightIndex = n / 2;

    if (n % 2 !== 0) {
        return result[Math.floor(n / 2)];
    } else {
        return (result[midLeftIndex] + result[midRightIndex]) / 2;
    }
};

// Time Complexity: O(m+n)
// Space Complexity: O(n)