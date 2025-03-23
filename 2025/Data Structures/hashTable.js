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
}

const table = new HashTable(50);