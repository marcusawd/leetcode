/*
K Radius Subarray Averages

You are given a 0-indexed array nums of n integers, and an integer k.

The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
*/

function getAverages(nums: number[], k: number): number[] {
	// For each number in array, if there isnt 2*k+1 elements in it, that position returns -1
	// Create prefix sum array, starting from index k, loop and check sum of i+k to i-k
	const prefix: number[] = [nums[0]];
	const output: number[] = new Array(nums.length).fill(-1);
	for (let i = 1; i < nums.length; i++) {
		prefix[i] = nums[i] + prefix[prefix.length - 1];
	}

	for (let i = k; i < nums.length - k; i++) {
		const sum: number = prefix[i + k] - prefix[i - k] + nums[i - k];
		output[i] = Math.trunc(sum / (2 * k + 1));
	}
	return output;
}

//! 24min 22sec
