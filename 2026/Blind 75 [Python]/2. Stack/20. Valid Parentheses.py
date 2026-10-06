class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []

        for p in s:
            if p == "(" or p == "{" or p == "[":
                stack.append(p)

            elif p == ")":
                if not stack or stack[-1] != "(":
                    return False
                stack.pop()

            elif p == "}":
                if not stack or stack[-1] != "{":
                    return False
                stack.pop()

            elif p == "]":
                if not stack or stack[-1] != "[":
                    return False
                stack.pop()

        # len(stack) == 0
        return not stack

# Time Complexity: O(N)
# Space Complexity: O(N)