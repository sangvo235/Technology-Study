class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Enqueue: add to the end of the queue.
    enqueue(element) {
        this.items[this.count] = element;
        console.log(`${element} added to index ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Dequeue: remove from the front of the queue.
    dequeue() {
        if (this.count === 0) return undefined;
        let deleteItem = this.items[0];

        for (let i = 0; i < this.count - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        delete this.items[this.count - 1];

        this.count--;

        console.log(`${deleteItem} removed`)
        return deleteItem;
    }

    // Check first element in queue
    peek() {
        console.log(`First element is ${this.items[0]}`)
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        console.log(this.count === 0 ? 'Queue is empty' : 'Queue is not empty');
        return this.count === 0;
    }    

    // Check size of queue
    size() {
        console.log(`${this.count} elements in queue`);
        return this.count;
    }    

}

const queue = new Queue();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.isEmpty();
queue.peek();
queue.size();
queue.dequeue();
queue.dequeue();
queue.size();
queue.dequeue();
queue.isEmpty();