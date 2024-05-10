test("curry", () => {

	expect(sum(1, 2, 3, 4)).toEqual(10);

	const curSum = curry(sum);

	expect(curSum(1, 2, 3, 4)).toEqual(10);
	expect(curSum(1)(2, 3, 4)).toEqual(10);
	expect(curSum(1, 2)(3, 4)).toEqual(10);
	expect(curSum(1)(2)(3)(4)).toEqual(10);
});


function curry(func: Function) {
	return function curryfunc(...args: any[]) {

		if(args.length >= func.length) {
			return func.apply(null, args)

		} else {
			return function(...args2: any[]) {
				return curryfunc.apply(null, args.concat(args2));
			}
		}
	}
}

function sum(a: number, b: number, c: number, d: number) {
	return a + b+ c + d;
}