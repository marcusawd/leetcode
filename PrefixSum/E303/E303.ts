/*
Range Sum Query - Immutable

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

*/

class NumArray {
	private prefix: number[];
	constructor(nums: number[]) {
		this.prefix = [nums[0]];
		for (let i = 1; i < nums.length; i++) {
			this.prefix[i] = nums[i] + this.prefix[i - 1];
		}
	}

	sumRange(left: number, right: number): number {
		if (left === 0) {
			return this.prefix[right];
		} else {
			return this.prefix[right] - this.prefix[left - 1];
		}
	}
}

//! 12min 16sec

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
