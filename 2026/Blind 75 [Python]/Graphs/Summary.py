import collections

# Double-ended Queue
q = collections.deque()
q.append((1,0))
q.append((2,0))
q.append((3,0))
print(q)

# Can pop left
q.popleft()
print(q)

# Default is right
q.pop() 
print(q)
