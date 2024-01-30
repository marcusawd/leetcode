/*
Number of Ways to Split Array

You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:

The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 <= i < n - 1.
Return the number of valid splits in nums.
*/

function waysToSplitArray(nums: number[]): number {
	// Use a prefix sum array, at each index, calculate the leftSplit sum and rightSplit sum
	const prefix: number[] = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		prefix.push(nums[i] + prefix[prefix.length - 1]);
	}
	let validSplits: number = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		let leftSplit: number = prefix[i];
		let rightSplit: number = prefix[prefix.length - 1] - prefix[i];
		if (leftSplit >= rightSplit) {
			validSplits++;
		}
	}

	return validSplits;
}
//! 14min 13sec

// There is a more straight forward approach without prefix sum, just use a total sum and move the index, having a left and right sum
