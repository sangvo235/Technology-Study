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