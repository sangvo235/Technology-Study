from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numSet = set(nums)

        if len(numSet) != len(nums):
            return True
        else:
            return False


# Test cases
solution = Solution()

print(solution.containsDuplicate([1, 2, 3, 1]))  # True
print(solution.containsDuplicate([1, 2, 3, 4]))  # False
print(solution.containsDuplicate([1, 1]))        # True
print(solution.containsDuplicate([]))            # False


# Time Complexity: O(N)
# Space Complexity: O(N)