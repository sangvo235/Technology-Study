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
        // this.table[index] = value;
        const bucket = this.table[index];
        if(!bucket) { // bucket does not exist 
            this.table[index] = [[key, value]];
        } else { // bucket exist
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) { // with a key
                sameKeyItem[1] = value;
            } else { // without a key
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
              bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
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

table.display();