from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # val : index

        for i, n in enumerate(nums): # enumerate provides the index along with the number
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i # store the index

# Time Complexity: O(N)
# Space Complexity: O(N)