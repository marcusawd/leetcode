/*
Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

function pivotIndex(nums: number[]): number {
	// Find the prefix sum where you minus the value at that index, the max sum is twice the value of the prefix sum running up to that index
	const prefix: number[] = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		prefix.push(nums[i] + prefix[i - 1]);
	}
	const maxSum: number = prefix[prefix.length - 1];

	for (let i = 0; i < nums.length; i++) {
		const left: number = prefix[i] - nums[i];
		const right: number = maxSum - prefix[i];
		if (left === right) return i;
	}
	return -1;
}

//! 12min 45sec
