export { sort, flat };


function flat<T>(array: T[], depth: number): T[] {
	let result = array;
	let inner_array_exists = true;
	while (depth > 0 && inner_array_exists) {
		depth--;
		result = iterateArray(result);
	}
	
	return result;
	
	function iterateArray(input: T[]): T[] {
		const result = Array<T>();
		inner_array_exists = false;
		for(let value of input) {
			if(Array.isArray(value)) {
				inner_array_exists = true;
				result.push(...value);
			} else {
				result.push(value);
			}
		}
		return result;
	}
}


function sort(list: number[]): number[] {
	let result = new Array<number>();

	if(list.length ===0) {
		return result;
	}
	
	const middle = list[0];	
	let middles = list.filter(elem => elem === middle);
	let lessers = list.filter(elem => elem < middle);
	let greaters = list.filter(elem => elem > middle);
		
	lessers = sort(lessers);
	greaters = sort(greaters);

	result = [...lessers];
	result = [...result, ...middles];
	result = [...result, ...greaters];
	return result;
}