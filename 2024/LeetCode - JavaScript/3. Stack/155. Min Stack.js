class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        // check if the stack is empty
        if(!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            // compare values and only push in if the val is smaller than top of minstack
            this.minStack.push(Math.min(this.minStack[this.minStack.length-1], val))
        }
    }

    pop() {
        if(!this.stack.length) return null;
        this.minStack.pop();
        return this.stack.pop();                    
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Time Complexity: O(1)
// Space Complexity: O(N)