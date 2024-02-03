/*
Max Sum of a Pair With Equal Sum of Digits

You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.
*/
function maximumSum(nums: number[]): number {
	const sumDigits = (number: number): number => {
		let total = 0;
		while (number > 0) {
			total += number % 10;
			number = Math.floor(number / 10);
		}
		return total;
	};
	// Use hashmap to store the sum of digits as key, store the highest seen number as the value
	const hashmap = new Map();
	let maxVal = -1;
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		const sum = sumDigits(curr);
		if (hashmap.has(sum)) {
			const prev = hashmap.get(sum);
			hashmap.set(sum, Math.max(prev, curr));
			maxVal = Math.max(maxVal, prev + curr);
		} else {
			hashmap.set(sum, curr);
		}
	}

	return maxVal;
}

//! 10min 9sec
