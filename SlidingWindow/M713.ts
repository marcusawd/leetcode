/*
Subarray Product Less Than K

Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
*/

function numSubarrayProductLessThanK(nums: number[], k: number): number {
	// Have a counter to track subarrays
	// Have a curr to track product less than k
	let answer: number = 0;
	let curr: number = 1;
	let left: number = 0;
	let right: number = 0;

	while (right < nums.length) {
		if (k <= 1) {
			return 0;
		}
		curr *= nums[right];
		while (curr >= k) {
			// Window broken, start removing from the left
			curr /= nums[left];
			left++;
		}
		answer += right - left + 1;
		right++;
	}
	return answer;
}

//! 11min 55sec
