/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const map = { ")": "(", "}": "{", "]": "[" };

function isValid(s: string): boolean {
	const parentheses: string[] = [];
	for (const char of s) {
		if (["(", "{", "["].includes(char)) {
			parentheses.push(char);
		} else {
			if (parentheses.pop() !== map[char]) return false;
		}
	}
	return parentheses.length === 0;
}

//! 12min 30sec
