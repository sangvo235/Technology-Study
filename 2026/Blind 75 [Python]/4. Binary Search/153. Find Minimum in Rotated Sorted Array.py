class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min_value = float('inf')

        l, r = 0, len(nums) - 1

        while l <= r:
            if nums[l] < nums[r]:
                min_value = min(min_value, nums[l])
                break
            
            m = (l + r) // 2
            min_value = min(min_value, nums[m])

            if nums[m] >= nums[l]:
                l = m + 1
            else:
                r = m - 1

        return min_value

# Time Complexity: O(log(N))
# Space Complexity: O(1)