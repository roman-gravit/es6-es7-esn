export { SearchBinary };

/**
 * search in sorted array of numbers
 * @param arr 
 * @param num_to_search 
 * @returns index of the searched number, -1 otherwise
 */
function SearchBinary(arr: Array<number>, num_to_search: number): number {
	let not_found = -1;
	if(arr.length === 0) {
		return not_found;
	}
	
	let left = 0;
	let right = arr.length - 1;

	while(left <= right) {
		const middle_index_floor = Math.floor((right + left)/2);
		const middle_value = arr[middle_index_floor];

		if(middle_value === num_to_search) {
			return middle_index_floor;
		}

		if(middle_value > num_to_search) {
			right = middle_index_floor - 1;
		} else {
			left = middle_index_floor + 1;
		}

	}

	return not_found;
}