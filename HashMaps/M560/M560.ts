/*
Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

function subarraySum(nums: number[], k: number): number {
	// Create prefix sum, if a prefix sum minus k exists in the prefix sum, there is one subarray sum = k
	let total: number = 0;
	const hashmap = new Map<number, number>();
	hashmap.set(0, 1);
	const prefix: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		prefix.push(nums[i] + (prefix[i - 1] ?? 0));
		if (hashmap.has(prefix[i] - k)) total += hashmap.get(prefix[i] - k)!;
		hashmap.set(prefix[i], (hashmap.get(prefix[i]) ?? 0) + 1);
	}
	return total;
}

//! 10min 56sec
