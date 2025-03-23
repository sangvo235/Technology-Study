// Hash Table Implementation
// set to store a key-value pair
// get to retrieve a value given its key
// remove to delete a key value pair
// hashing function to convert a string key to a numeric index

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
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

// removing a value based on key
table.remove("age");

table.set("mane", "Charlie"); // collision here!
table.display();