# INFINITY
min_value = float('inf')    # Positive infinity
max_value = float('-inf')   # Negative infinity

# DIVISION
a = 7 / 2                   # 3.5 (regular division)
b = 7 // 2                  # 3 (floor division)
c = 7 % 2                   # 1 (remainder / modulo)

# MIDPOINT (BINARY SEARCH)
mid = (l + r) // 2          # Integer midpoint
mid = l + (r - l) // 2      # Alternative midpoint formula

# MULTIPLE ASSIGNMENT
l, r = 0, len(nums) - 1     # Assign both at once

# SWAP VALUES
a, b = b, a

# LIST SORTING
nums.sort()                 # Sort in place, ascending
nums.sort(reverse=True)     # Sort in place, descending
new_nums = sorted(nums)     # Create a new sorted list

# WHILE LOOP
while l < r:
    mid = (l + r) // 2
    # Update l or r to make progress
