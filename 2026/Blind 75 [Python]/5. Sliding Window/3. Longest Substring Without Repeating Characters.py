class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        i, j = 0, 0
        longest = 0
        seen = set()

        while j < len(s):
            if s[j] not in seen:
                seen.add(s[j])
                longest = max(longest, j - i + 1)
                j += 1
            else:
                seen.remove(s[i])
                i += 1

        return longest

# Time Complexity: O(N)
# Space Complexity: O(N)