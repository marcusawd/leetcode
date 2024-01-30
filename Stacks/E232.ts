class MyQueue {
	private stack: number[];
	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.push(x);
	}

	pop(): number {
		return this.stack.shift()!;
	}

	peek(): number {
		return this.stack[0];
	}

	empty(): boolean {
		if (this.stack.length) {
			return true;
		}
		return false;
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

//! 7min 26sec
