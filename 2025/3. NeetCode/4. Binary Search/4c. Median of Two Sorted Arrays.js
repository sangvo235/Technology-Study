/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    // need to ensure num1 is the smaller array.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const len1 = nums1.length;
    const len2 = nums2.length;

    let left = 0;
    let right = len1;

    while (left <= right) {
        let partition1 = Math.floor((left + right) / 2); 
        let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1; 

        let left1 = partition1 > 0 ? nums1[partition1 - 1] : -Infinity;
        let right1 = partition1 < len1 ? nums1[partition1] : Infinity;

        let left2 = partition2 > 0 ? nums2[partition2 - 1] : -Infinity;
        let right2 = partition2 < len2 ? nums2[partition2] : Infinity;
        
        if (left1 <= right2 && left2 <= right1) {
            if ((len1 + len2) % 2 === 0) {
                // even number --> leftEnd1 + rightStart2
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                // odd number
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            // The left side of nums1 is too big to be on the left side of the partition.
            // Move partition1 to the left to decrease left1.
            right = partition1 - 1;
        } else {
            // left2 > right1
            // The left side of nums2 is too big to be on the left side of the partition.
            // Move partition1 to the right to increase left1.
            left = partition1 + 1;
        }
    }
};

// Time Complexity: O(log(min(m, n))) 
// Space Complexity: O(1)