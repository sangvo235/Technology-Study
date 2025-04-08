/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let pointer1 = 0;
    let pointer2 = 0;
    let n = nums1.length + nums2.length;
    let mid = Math.floor(n / 2); 
    
    let prev = 0;
    let curr = 0;

    for (let i = 0; i <= mid; i++) {
        prev = curr;

        if (pointer1 < nums1.length && (nums1[pointer1] <= nums2[pointer2] || pointer2 >= nums2.length)) {
            curr = nums1[pointer1];
            pointer1++;
        } else {
            curr = nums2[pointer2];
            pointer2++;
        }
    }

    if (n % 2 !== 0) {
        return curr;
    } else {
        return ((prev + curr) / 2);
    }
};

// Time Complexity: (m + n) / 2 --> O(m+n)
// Space Complexity: O(1)