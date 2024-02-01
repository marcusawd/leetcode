function intersection(nums: number[][]): number[] {
	const hashmap = new Map<number, number>();
	const ans: number[] = [];

	for (const arr of nums) {
		for (const num of arr) {
			hashmap.set(num, (hashmap.get(num) || 0) + 1);
		}
	}

	hashmap.forEach((value, key) =>
		value === nums.length ? ans.push(key) : null,
	);

	ans.sort((a, b) => a - b);
	return ans;
}

// For future reference, you can do the check inside your double for loop.
// When looping through the last array, you can do the check for same length
