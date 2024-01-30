/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

*/

// [7, 3, 5, 4]
// [2, 6, 5, 3, 7];
// [5,2,3,7]
// Iterate from the back of nums2, push items into stack. If curr < stack.top, next greater (Put curr as key and stack.top as value)
// If curr > stack.top, pop top and push item into stack

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const stack: number[] = [];
	const hashmap = new Map<number, number>();
	for (let i = nums2.length - 1; i >= 0; i--) {
		const curr = nums2[i];
		while (stack.length && curr > stack[stack.length - 1]) {
			stack.pop();
		}
		if (stack.length && curr < stack[stack.length - 1]) {
			hashmap.set(curr, stack[stack.length - 1]);
		}
		stack.push(curr);
	}

	const answer: number[] = new Array(nums1.length).fill(-1);
	for (let i = 0; i < nums1.length; i++) {
		if (hashmap.has(nums1[i])) {
			answer[i] = hashmap.get(nums1[i])!;
		}
	}

	return answer;
}

//! 26min 45sec
