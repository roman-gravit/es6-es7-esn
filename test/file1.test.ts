test("this", () => {

	function sum(a: number, b: number, c: number) {
		return a + b + c;
	}

	expect(sum(1,2,3)).toEqual(6);
});
