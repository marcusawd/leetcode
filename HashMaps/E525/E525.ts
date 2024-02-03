/*
Contiguous Array

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
*/

function findMaxLength(nums: number[]): number {
	// If you meet a 1, add 1. If you meet a zero, deduct 1 to prefix sum.
	// If prefix sum is 0, means equal 1s and 0s. If you have seen a prefix sum before, it means between those 2 indexes theres equal
	const prefix = new Map<number, number>();
	prefix.set(0, -1);
	let curr = 0;
	let answer = 0;

	for (let i = 0; i < nums.length; i++) {
		nums[i] === 1 ? curr++ : curr--;
		// If prefix doesnt have the sum in its key, add the key with its index as value
		if (!prefix.has(curr)) {
			prefix.set(curr, i);
		} else {
			answer = Math.max(answer, i - prefix.get(curr)!);
		}
	}
	return answer;
}

//! 32min 3secs
