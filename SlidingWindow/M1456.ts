/*
Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

function maxVowels(s: string, k: number): number {
	const vowels: string = "aeiou";
	// Sliding window of size k. Store max vowel count, when broken move left
	let windowCount: number = 0;
	let maxCount: number = 0;

	// Build window
	for (let i = 0; i < k; i++) {
		if (vowels.includes(s[i])) maxCount++;
	}

	windowCount = maxCount;
	for (let i = k; i < s.length; i++) {
		if (vowels.includes(s[i])) windowCount++;
		if (vowels.includes(s[i - k])) windowCount--;
		maxCount = Math.max(maxCount, windowCount);
	}
	return maxCount;
}

//! 16min 23sec
