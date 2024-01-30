/*
Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


*/

function findMaxAverage(nums: number[], k: number): number {
	// Build the first K elements into the sum, calculate the average
	// Each step you take, add the new element and deduct out the first element using their index, calculate new average
	// Save the max average
	let sum: number = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}
	let answer: number = sum;
	for (let i = k; i < nums.length; i++) {
		sum += nums[i] - nums[i - k];
		answer = Math.max(answer, sum);
	}

	return parseFloat((answer / k).toFixed(5));
}

//! 10min 24sec
