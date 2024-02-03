/*
Count Number of Nice Subarrays

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.
*/
function numberOfSubarrays(nums: number[], k: number): number {
	// Use a prefix odd counter and store it as a key, if curr -k exist in hashmap, add its value
	let prefix = 0;
	let answer = 0;
	const hashmap = new Map();
	hashmap.set(0, 1);

	for (const num of nums) {
		prefix += num % 2;
		answer += hashmap.get(prefix - k) || 0;
		hashmap.set(prefix, (hashmap.get(prefix) || 0) + 1);
	}
	return answer;
}
