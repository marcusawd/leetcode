/*
Largest Unique Number

Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.
*/

function largestUniqueNumber(nums: number[]): number {
	const hashmap = new Map<number, number>();
	for (const num of nums) {
		hashmap.set(num, (hashmap.get(num) || 0) + 1);
	}
	let answer = -1;
	for (const [num, count] of hashmap) {
		if (count === 1) {
			answer = Math.max(answer, num);
		}
	}
	return answer;
}

//! 3min 41sec
