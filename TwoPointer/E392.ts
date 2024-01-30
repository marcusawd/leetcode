/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).*/

function isSubsequence(s: string, t: string): boolean {
	// Iterate through both at the same time, comparing elements.
	// If s ele !== t ele, move t pointer.
	let ptrS: number = 0;
	let ptrT: number = 0;

	while (ptrS < s.length && ptrT < t.length) {
		if (s[ptrS] === t[ptrT]) ptrS++;
		ptrT++;
	}
	return ptrS === s.length;
}

//! 10min 8sec
