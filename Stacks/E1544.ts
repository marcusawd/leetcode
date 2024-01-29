/*
Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.
*/

function makeGood(s: string): string {
	const stack: string[] = [];
	for (let i = 0; i < s.length; i++) {
		const curr = s[i];
		const prev = stack.length ? stack[stack.length - 1] : "";

		if (curr.toLowerCase() === prev.toLowerCase() && curr !== prev) {
			// Bad pair, remove
			stack.pop();
		} else {
			stack.push(curr);
		}
	}
	return stack.join("");
}

//! 17min 45sec
