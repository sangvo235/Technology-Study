# PYTHON STACK

stack = []

stack.append(x)      # PUSH - add to top/right
stack.pop()          # POP - remove top/right, O(1)
stack[-1]            # PEEK - view top, O(1)
not stack            # EMPTY? True if empty
len(stack)           # SIZE

# Check before pop/peek if stack might be empty
if not stack:
    return False

# pop(0) removes from left - O(N)
# use deque.popleft() for efficient left removal

# Iterate directly over values (not index):
for x in stack:

# Python booleans:
True / False         # not true / false

# Membership:
x in "({["
x not in "({["