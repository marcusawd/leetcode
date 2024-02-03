function groupAnagrams(strs: string[]): string[][] {
	const anagramMap = new Map<string, string[]>();

	for (const word of strs) {
		// Create an array of 26, and have a unique key created from the array
		const keyArr = new Array(26).fill(0);
		for (const ch of word) {
			keyArr[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
		}
		const uniqueKey = keyArr.join(",");
		if (anagramMap.has(uniqueKey)) {
			anagramMap.get(uniqueKey)!.push(word);
		} else {
			anagramMap.set(uniqueKey, [word]);
		}
	}
	return Array.from(anagramMap.values());
}

//! 25min 49sec
