export { searchLinearIndexOf };

/**
 * Return -1 if empty array
 * @param array 
 * @returns index of the element or -1
 */
function searchLinearIndexOf(array: number[], numToFind: number): number {
	let indexNotFound = -1;
	if(array.length === 0) {
		return indexNotFound;
	}
	
	for(let i = 0; i < array.length; i++) {
		if(array[i] === numToFind) {
			return i;
		} 
	}

	return indexNotFound;
}