class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []
        pairs = {")": "(", "}": "{", "]": "["}
        
        for p in s:
            if p in "({[":
                stack.append(p)
            else:
                if not stack or stack[-1] != pairs[p]:
                    return False
                stack.pop()

        # len(stack) == 0
        return not stack

# Time Complexity: O(N)
# Space Complexity: O(N)