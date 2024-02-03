/*
Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
*/

function maxNumberOfBalloons(text: string): number {
	// Store all occurances of b,a,l,o,n
	// Grab each character occurances, l and o needs multiple of 2
	const hashmap = new Map<string, number>();
	for (const ch of text) {
		hashmap.set(ch, (hashmap.get(ch) || 0) + 1);
	}
	let answer = Number.MAX_VALUE;
	const required = "balloon";
	for (const ch of required) {
		const count = hashmap.get(ch) || 0;
		const requiredCount =
			ch === "l" || ch === "o" ? Math.floor(count / 2) : count;
		answer = Math.min(answer, requiredCount);
	}

	return answer === Number.MAX_VALUE ? 0 : answer;
}

//! 18min
