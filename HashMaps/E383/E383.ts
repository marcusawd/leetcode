/*
Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
	const hashmap = new Map();
	for (const ch of magazine) {
		hashmap.set(ch, (hashmap.get(ch) || 0) + 1);
	}

	for (const ch of ransomNote) {
		if (hashmap.has(ch)) {
			const count = hashmap.get(ch);
			if (count === 1) hashmap.delete(ch);
			else {
				hashmap.set(ch, count - 1);
			}
		} else {
			return false;
		}
	}
	return true;
}

//! 5min 1sec
