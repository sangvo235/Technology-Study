class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // LRU
        this.head = new Node(0,0);

        // MRU
        this.tail = new Node(0,0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        // Connects the prev node to the next node (skipping over current node)
        node.prev.next = node.next;
        // Connects the next node to the prev node (skipping over current node)
        node.next.prev = node.prev;
    }

    insert(node) {
        let prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail
        this.tail.prev = node;
    }

    get(key) {
        // Get if key exist in the map
        if (this.map.has(key)) {
            const node = this.map.get(key);
            // Remove from current position
            this.remove(node);
            // Move to MRU position
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.map.has(key)) {
            // Remove old node from existing keys
            this.remove(this.map.get(key));
        } else if (this.map.size === this.capacity) {
            // Only evict if it's a new key and we're at capacity
            const lru = this.head.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }

        const newNode = new Node(key, value);
        this.insert(newNode);
        this.map.set(key, newNode);
    }
}

// Hash Map with Doubly-Linked List Method
// Time Complexity: O(1)
// Space Complexity: O(n)