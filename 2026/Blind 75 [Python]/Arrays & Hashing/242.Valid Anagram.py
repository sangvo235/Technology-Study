from collections import defaultdict

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        s_map = defaultdict(int)
        t_map = defaultdict(int)

        for char in s:
            s_map[char] += 1        

        for char in t: 
            t_map[char] += 1
        
        return (t_map == s_map)

# Time Complexity: O(N)
# Space Complexity: O(1) - only 26 keys are possible