/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
*/

function removeDuplicates(s: string): string {
	// LIFO.
	const stack: string[] = [];
	for (const item of s) {
		if (stack.length && item === stack[stack.length - 1]) {
			stack.pop();
		} else {
			stack.push(item);
		}
	}

	return stack.join("");
}

//! 3min 52sec
