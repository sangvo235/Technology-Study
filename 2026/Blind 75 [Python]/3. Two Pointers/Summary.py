# STRING / CHARACTER

c.isalnum()       # letter or number?
c.lower()         # lowercase

# INDEXING
s[i]              # character at index i

# TWO POINTERS
left = 0
right = len(s) - 1

left += 1         # move right
right -= 1        # move left

# MEMBERSHIP
c in "abc"        # is c in this string?
c not in "abc"    # is c NOT in this string?

# BOOLEAN
not x

nums = [10, 20, 30, 40]

# Loop through values
for a in nums:
    print(a)

# Loop through indices
for i in range(len(nums)):
    print(i, nums[i])  # index, value

# Get both index and value using enumerate()
for i, a in enumerate(nums):
    print(i, a)  # index, value

# Start index at 1
for i, a in enumerate(nums, start=1):
    print(i, a)
