/*
Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

function longestOnes(nums: number[], k: number): number {
	// Keep a counter of how many times you flipped. If it exceeds k, window broken
	// Store max number
	let ans: number = 0;
	let left: number = 0;
	let flipped: number = 0;

	for (let right = 0; right < nums.length; right++) {
		// Keep moving until window breaks
		if (nums[right] === 0) {
			flipped++;
		}
		while (flipped > k) {
			if (nums[left] === 0) {
				flipped--;
			}
			left++;
		}
		let currWindow = right - left + 1;
		ans = Math.max(ans, currWindow);
	}

	return ans;
}

//! 10min 24sec
