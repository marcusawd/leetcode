/*
Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

function sortedSquares(nums: number[]): number[] {
	// Use two pointers, left and right, check which value is higher, square it and put it into the result array
	const result: number[] = new Array(nums.length).fill(0);
	let left: number = 0;
	let right: number = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		// Iterate from the back and see who is bigger
		let bigger: number;
		if (Math.abs(nums[left]) > Math.abs(nums[right])) {
			bigger = nums[left];
			left++;
		} else {
			bigger = nums[right];
			right--;
		}
		result[i] = bigger * bigger;
	}
	return result;
}

//! 0(n) solution took 13min 55 sec
