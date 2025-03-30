class Stack {
    constructor () {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to index ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty 
    pop() {
        if(this.count === 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deleteItem} removed`)
        return deleteItem;
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count === 0 ? 'Stack is empty' : 'Stack is not empty');
        return this.count === 0;
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }
}

const stack = new Stack();
stack.isEmpty();
stack.push(100);
stack.push(200);
stack.isEmpty();
stack.push(300);
stack.peek();
stack.size();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());
stack.peek();