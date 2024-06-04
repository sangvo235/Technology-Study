/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let mid = ~~(totalLength / 2);
    let pointer1 = 0;
    let pointer2 = 0;
    let count = 0;
    let current = 0;
    let prev = 0;
    
    while (count <= mid) {
        prev = current;
        if (pointer1 < nums1.length && (pointer2 >= nums2.length || nums1[pointer1] < nums2[pointer2])) {
            current = nums1[pointer1];
            pointer1++;
        } else {
            current = nums2[pointer2];
            pointer2++;
        }
        count++;
    }

    if (totalLength % 2 === 0) {
        return (prev + current) / 2;
    } else {
        return current;
    }
};

// Important to note that this solves for O(m+n) time complexity and does not fulfil the hard requirement of O(log(m+n)). This solution is good enough if there was no strict run time requirement.
// Time Complexity: O(n)
// Space Complexity: O(1)