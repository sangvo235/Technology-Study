class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""

        target, window = {}, {}

        # target = {"A": 1, "B": 1, "C": 1}
        for c in t:
            target[c] = 1 + target.get(c, 0)

        # len(target) counts the number of distinct keys, not the total frequency values
        have, need = 0, len(target)
        min_res, min_len = [-1, -1], float("inf")
        l = 0

        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c, 0)
            
            # is it a char required in target? if yes, is the frequencies equal?
            if c in target and window[c] == target[c]:
                have += 1

            while have == need:
                if (r - l + 1) < min_len:
                    min_res = [l, r]
                    min_len = r - l + 1

                # decrement frequency of the current left key by 1
                window[s[l]] -= 1
                
                # current left key exists in target, and the frequency less than target then reduce frequency?
                if s[l] in target and window[s[l]] < target[s[l]]:
                    have -= 1

                l += 1

        if min_len == float("inf"):
            return ""

        # Extract the start and end indices
        # l = res[9], r = res[12]
        l, r = min_res
        # "BANC"
        return s[l:r+1]

# Given: N = len(s) & M = len(t)
# Time Complexity: O(M + N + N) -> O(N + M)
# Space Complexity: O(N + M)