function missingNumber(nums: number[]): number {
	const n: number = nums.length;
	let total = Math.floor((n * (n + 1)) / 2);
	return total - nums.reduce((acc, curr) => acc + curr, 0);
}
