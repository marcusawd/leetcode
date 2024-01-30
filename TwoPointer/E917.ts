/*
Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
*/

function reverseOnlyLetters(s: string): string {
	const isLetter = (char: string): boolean => {
		let n = char.charCodeAt(0);
		return (n >= 65 && n < 91) || (n >= 97 && n < 123);
	};

	const chars = s.split("");
	let left: number = 0;
	let right: number = chars.length - 1;
	while (left < right) {
		if (!isLetter(chars[left])) {
			left++;
			continue;
		}
		if (!isLetter(chars[right])) {
			right--;
			continue;
		}

		const temp = chars[left];
		chars[left] = chars[right];
		chars[right] = temp;
		left++;
		right--;
	}
	return chars.join("");
}

//! 7min 46sec
