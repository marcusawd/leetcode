/*
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
*/

function removeStars(s: string): string {
	// Push items into stack. If curr = star and prev != star, pop from the stack as long as stack.length
	const stack: string[] = [];

	for (const char of s) {
		if (stack.length && char === "*") {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join("");
}

//! 5min 56 sec