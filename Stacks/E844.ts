/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

function backspaceCompare(s: string, t: string): boolean {
	const stackBuild = (input: string): string[] => {
		const stack: string[] = [];
		for (const char of input) {
			if (char === "#") {
				stack.pop();
			} else {
				stack.push(char);
			}
		}
		return stack;
	};

	return stackBuild(s) === stackBuild(t);
}

//! 9min
