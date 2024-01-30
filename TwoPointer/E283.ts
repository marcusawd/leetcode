/*
Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

function moveZeroes(nums: number[]): void {
	// Iterate from the front with a pointer always pointing at a 0
	let zeroPtr: number = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			const temp = nums[zeroPtr];
			nums[zeroPtr] = nums[i];
			nums[i] = temp;
			zeroPtr++;
		}
	}
}

//! 12min 26sec
