/*
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest
substring
 without repeating characters.
*/

function lengthOfLongestSubstring(s: string): number {
	let left = 0;
	let longest = 0;
	const substring = new Set();
	for (let i = 0; i < s.length; i++) {
		while (substring.has(s[i])) {
			substring.delete(s[left]);
			left++;
		}
		substring.add(s[i]);
		longest = Math.max(longest, i - left + 1);
	}
	return longest;
}

//! 9min 21sec
