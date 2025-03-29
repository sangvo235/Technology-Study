// Hash Table Implementation
// constructor to allow: const table = new HashTable(int);
// hashing function to convert a string key to a numeric index
// set to store a key-value pair --> added buckets for collision cases
// get to retrieve a value given its key --> adjust for buckets
// remove to delete a value given its key --> adjust for buckets
// display() results function 

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i); // convert to ASCII value
        }
        return total % this.size; // ensure ASCII values are transformed to be in the array size range
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];

        // check if the bucket exist or not
        if(!bucket) { 
            this.table[index] = [[key, value]];
        } else { 
            // check if the keys are the same --> "name" and "mane" although same bucket is not the same key.
            // If we are inserting ["name", "Diana"] and there is ["name", "John"] already we need to replace the value only.
            const sameKeyItem = bucket.find(item => item[0] === key);

            if(sameKeyItem) { 
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            // check if there is the same existing key in the bucket to retrieve
            const sameKeyItem = bucket.find(item => item[0] === key);

            if(sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            // check if there is the same existing key in the bucket to remove
            const sameKeyItem = bucket.find(item => item[0] === key);

            if(sameKeyItem) {
              bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
            return console.log("No valid key found for removal!");
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

// retrieving a value based on key
console.log(table.get("name"));

// adding collisions to check handling
table.set("mane", "Charlie");
table.set("nema", "Saint");
table.set("name", "Diana");

// removing a value based on key
table.remove("name");
table.remove("ss");

table.display();

// Time Complexity = O(1) --> set, get, and remove (worst case is O(n) if they are all in the same bucket but unlikely if the hash function is done properly)
// Space Complexity = O(n) --> due to the buckets