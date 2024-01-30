/*
Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

function runningSum(nums: number[]): number[] {
	// Just a simple prefix sum
	const prefix: number[] = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		prefix[i] = nums[i] + prefix[prefix.length - 1];
	}

	return prefix;
}

//! 2min 11sec
