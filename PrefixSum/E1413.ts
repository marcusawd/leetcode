/*
Minimum Value to Get Positive Step by Step Sum

Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
*/
function minStartValue(nums: number[]): number {
	// Create a prefix sum, look for the lowest number in the prefix. Subtract 1 by it
	const prefix: number[] = [nums[0]];

	for (let i = 1; i < nums.length; i++) {
		prefix[i] = nums[i] + prefix[prefix.length - 1];
	}
	const lowest: number = Math.min(...prefix);
	return lowest >= 1 ? 1 : 1 - lowest;
}
//! 8min 3sec

//? A better alternative. Doesnt require extra space
function minStartValue2(nums: number[]): number {
	let sum = 0;
	let minSum = 0;
	for (let num of nums) {
		sum += num;
		minSum = Math.min(minSum, sum);
	}

	return -minSum + 1;
}
