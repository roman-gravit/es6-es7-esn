export { searchBinaryIndexOf };

/**
 * Return -1 if empty array
 * @param array 
 * @returns index of the element
 */
function searchBinaryIndexOf(array: number[], numToFind: number): number {
	if(array.length === 0) {
		return -1;
	}

	let left = 0;
	let right = array.length;
	let index = -1;

	while(right > left) {
		let middle = Math.floor((right + left) / 2);

		if(array[middle] < numToFind) {
            left = middle + 1;

		} else if (array[middle] > numToFind) {
			right = middle;

		} else {
			index = middle;
			break;
		}
	}

	return index;
}