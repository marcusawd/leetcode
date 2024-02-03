/*
Equal Row and Column Pairs

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
*/

function equalPairs(grid: number[][]): number {
	// Use two hashmaps, one for row and one for col. Multiply their occurances
	const rowsMap = new Map();
	for (const rows of grid) {
		const rowsKey = rows.join(",") + ",";
		rowsMap.set(rowsKey, (rowsMap.get(rowsKey) || 0) + 1);
	}

	const colsMap = new Map();
	for (let col = 0; col < grid.length; col++) {
		let colsKey: string = "";
		for (let row = 0; row < grid.length; row++) {
			colsKey += grid[row][col] + ",";
		}
		colsMap.set(colsKey, (colsMap.get(colsKey) || 0) + 1);
	}

	let ans = 0;
	for (const [key, value] of rowsMap) {
		ans += value * (colsMap.get(key) || 0);
	}
	return ans;
}

//! 12min 32sec
