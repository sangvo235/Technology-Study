# Lists
arr[0]       # First element
arr[-1]      # Last element
len(arr)     # Length of list

# city_map = {}
# OR
# city_map = dict()

city_map = {}

cities = ["Calgary", "Vancouver", "Toronto"]
city_map["Canada"] = []
city_map["Canada"] += cities

from collections import defaultdict

city_map = defaultdict(list)
cities = ["Calgary", "Vancouver", "Toronto"]
city_map["Canada"] += cities

city_list = city_map.values()

int_map = defaultdict(int)

# remember that mutable data types cannot be keys eg. list
# solution -> use a tuple eg. sorted_s = tuple(sort(s))

nums = [0,1,2,3]
map = {} # val : index

for i, n in enumerate(nums): # enumerate provides the index along with the number
    map[n] = i # store the index

# for n, c in count.items():
# -> go through every key-value pair in the count dictionary, and call the key n and the value c

# Python: 
        # range(start, stop, step)
        # for i in range(len(n) - 1, 0, -1)
# JavaScript: 
        # for (let i = n.length - 1; i > 0; i--)

array = [0,2,4,6,7,10,19,23]
array.append(13)
array.append(2)
array.append(4)
print(array)

if len(array) != 4:
    print("not length 4")

my_set = set(array)

# Python doesn't allow you to change the size of a set while iterating over it.
# We instead can use .copy() and iterate over it instead whilst removing in the original set
for number in my_set.copy():
        if number % 2 == 0:
             my_set.remove(number)
print(my_set)

if len(my_set) == 4:
    print("length == 4")
