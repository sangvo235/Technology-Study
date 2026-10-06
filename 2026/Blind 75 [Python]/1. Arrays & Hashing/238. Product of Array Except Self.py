class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        res = [1] * (len(nums))

        leftProduct  = 1
        for i in range(len(nums)):
            res[i] = leftProduct
            leftProduct *= nums[i]

        # start at len - 1, decrement by 1, stop before -1
        rightProduct = 1
        for i in range(len(nums) -1, -1, -1):
            res[i] *= rightProduct
            rightProduct *= nums[i]

        return res

# Time Complexity: O(N)
# Space Complexity: O(1)