/*
Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

function minSubArrayLen(target: number, nums: number[]): number {
	// Sliding window where sum >= target
	let minLength: number = Number.MAX_VALUE;
	let sum: number = 0;
	let left: number = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		while (sum >= target) {
			minLength = Math.min(minLength, i - left + 1);
			sum -= nums[left];
			left++;
		}
	}

	return minLength === Number.MAX_VALUE ? 0 : minLength;
}
