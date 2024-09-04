export { factorsOf };

function factorsOf(num: number): number[]  {
	const factors = Array<number>();
	
	for(let divisor = 2; num > 1; divisor++) {
		for( ; num % divisor === 0; num = num / divisor) {
			factors.push(divisor);
		}	
	}

	return factors;
}