export { sort };

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