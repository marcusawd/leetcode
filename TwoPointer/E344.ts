/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

function reverseString(s: string[]): void {
	let left: number = 0;
	let right: number = s.length - 1;

	while (left < right) {
		const tmp: string = s[left];
		s[left] = s[right];
		s[right] = tmp;
		left++;
		right--;
	}
}

//! 2min
