// Create a monotonic decreasing stack
// Compare current with stack.top. If current is smaller, put its index into stack
// While current > stack.top, pop the top. As long as stack has length, current index minus new stack.top. Otherwise just return 1
// [100, 80, 60, 70, 60, 75, 85];

class StockSpanner {
	private stack: number[][];
	constructor() {
		this.stack = [];
	}

	next(price: number): number {
		let ans = 1;
		while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
			const accDays = this.stack.pop()![1];
			ans += accDays;
		}
		this.stack.push([price, ans]);

		return ans;
	}
}

//! 16min (With assistance for logic)
