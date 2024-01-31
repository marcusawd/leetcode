/*
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
	const hashmap: Map<number, number> = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement: number = target - nums[i];
		if (hashmap.has(complement)) return [hashmap.get(complement)!, i];
		hashmap.set(nums[i], i);
	}
	return [];
}

//! 12min 24sec
