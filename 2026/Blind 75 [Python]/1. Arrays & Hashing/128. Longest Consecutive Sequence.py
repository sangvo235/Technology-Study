class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        num_set = set(nums)
        longest = 0

        for number in num_set:
            if number - 1 not in num_set:
                current = number

                while current + 1 in num_set:
                    current += 1
            
                longest = max(longest, current - number + 1)

        return longest

# Time Complexity: O(N)
# Space Complexity: O(N)