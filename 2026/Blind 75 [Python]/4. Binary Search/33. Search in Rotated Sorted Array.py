class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
    
        l, r = 0, len(nums) - 1
        
        while l <= r:
            m = (l + r) // 2
            if target == nums[m]:
                return m
            
            # Left sorted - [1, 2, 3, 4, 5] -> target = 0 or target = 5
            if nums[l] <= nums[m]:
                # target >= nums[l] and target < nums[m]
                if nums[l] <= target < nums[m]:
                    r = m - 1
                # target < nums[l] or target > nums[m]
                else:
                    l = m + 1
            # Right sorted - [4, 5, 1, 2, 3] -> target = 0 or target = 4
            else:
                # target > nums[m] and target <= nums[r]
                if nums[m] < target <= nums[r]:
                    l = m + 1
                # target < nums[m] or target > nums[r]
                else:
                    r = m - 1
        return -1

# Time Complexity: O(log(N))
# Space Complexity: O(1)