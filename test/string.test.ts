test("Javascript conversions in + operations", () => {

		// string vs number => NUMBER ALWAYS CONVERTS TO STRING 
		{
			let a: any = "12";
			let b: any = 10;
			// "12" + "10"
			expect(a + b).toBe("1210");
		
			a = "0";
			b = 0;
			// "0" + "0"
			expect(a + b).toBe("00");
		
			a = "1";
			b = -5;
			// "0" + "-5"
			expect(a + b).toBe("1-5");
	
			a = "1";
			b = null;
			// "1" + "null"
			expect(a + b).toBe("1null");

			a = "1";
			b = undefined;
			// "1" + "undefined"
			expect(a + b).toBe("1undefined");

			a = "101";
			b = [];
			// "101" + ""
			let res = a + b;
			expect(res).toBe("101");

			a = "22";
			b = [33];
			// "22" + "33"
			res = a + b;
			expect(res).toBe("2233");

			a = "22";
			b = [1, 2];
			// "22" + "1,2"
			res = a + b;
			expect(res).toBe("221,2");

			a = "303";
			b = ["a", "b"];
			// "303" + "a,b"
			res = a + b;
			expect(res).toBe("303a,b");

			a = "11";
			b = {};
			// "11" + "[object Object]"
			res = a + b;
			expect(res).toBe("11[object Object]");

			a = "11";
			b = {a: 234};
			// "11" + "[object Object]"
			res = a + b;
			expect(res).toBe("11[object Object]");

			a = "11";
			b = (c:any, d:any)=>c+d;
			// "11" + "[object Object]"
			res = a + b;
			expect(res).toBe("11(c, d) => c + d");
		}

		// Number
		{
			let a: any = 5;
			let b: any = null;
			// 5 + 0
			expect(a + b).toBe(5);
		
			a = 6;
			b = undefined;
			// 6 + 0
			let res = a + b;
			expect(res).toBe(NaN);

			a = 61;
			b = [];
			// 61 + ""
			res = a + b;
			expect(res).toBe("61");

			a = 6;
			b = [11];
			// 6 + "11"
			res = a + b;
			expect(res).toBe("611");

			a = 6;
			b = [1,2];
			// 6 + "1,2"
			res = a + b;
			expect(res).toBe("61,2");
		}
});

test("Javascript conversions in compare", () => {

	// Compare

	// string vs number => STRING ALWAYS CONVERTS TO NUMBER and compare with second number
	{
		let a: any = "1";
		let b: any = 1;
		// 1 == 1
		expect(a == b).toBe(true);
	
		a= "aa";
		b = 1;
		// NaN  == 1
		expect(a == b).toBe(false);
	
		a= "12";
		b = 11;
		// 12  == 11
		expect(a == b).toBe(false);

		a= "";
		b = 11;
		// 0  == 11
		expect(a == b).toBe(false);

		a= "";
		b = 0;
		// 0  == 0
		expect(a == b).toBe(true);
	}

	// Array
	{
		let a: any = [];
		let b: any = 0;
		// 0  == 0
		expect(a == b).toBe(true);

		a = [];
		b = 1;
		// 0  == 1
		expect(a == b).toBe(false);

		a = [21];
		b = 21;
		// 21  == 21
		expect(a == b).toBe(true);

		a = [1, 2];
		b = 21;
		// Nan  == 21
		expect(a == b).toBe(false);

		a = [1, 2];
		b = 0;
		// Nan  == 0
		expect(a == b).toBe(false);
	}

	// Object
	{
		let a: any = {};
		let b: any = 0;
		// NaN  == 0
		expect(a == b).toBe(false);

		a = {};
		b = 1;
		// NaN  == 1
		expect(a == b).toBe(false);

		a = {a: 1};
		b = 0;
		// NaN  == 0
		expect(a == b).toBe(false);

		a = {a: 1};
		b = 1;
		// NaN  == 1
		expect(a == b).toBe(false);		

	}

	// Null and undefined
	{
		let a: any = null;
		let b: any = 0;
		// 0  == 0
		expect(a == b).toBe(false);

		a = null;
		b = 1;
		// 0  == 1
		expect(a == b).toBe(false);

		a = undefined;
		b = 0;
		// NaN  == 0
		expect(a == b).toBe(false);

		a = undefined;
		b = 1;
		// NaN  == 1
		expect(a == b).toBe(false);

		a = undefined;
		b = null;
		// undefined  == null
		expect(a == b).toBe(true);
	}

	// Boolean vs any other => BOOLEAN CONVERTS TO NUMBER and compare with second parameter
	{
		let a: any = true;
		let b: any = 1;
		// 1 == 1
		expect(a == b).toBe(true);
	
		a = false;
		b = 1;
		// 0  == 1
		expect(a == b).toBe(false);
	
		a= true;
		b = "11";
		// 1  == 11
		expect(a == b).toBe(false);

		a = true;
		b = "1";
		// 1  == 1
		expect(a == b).toBe(true);

		a = false;
		b = "0";
		// 1  == 1
		expect(a == b).toBe(true);
	}

});

// The padStart() method 
// pads this string with another string (multiple times, if needed) until the resulting 
// string reaches the given length. The padding is applied from the start of this string.

test("string padStart", () => {
	{
		expect("abc".padStart(10)).toEqual("       abc");
		expect("abc".padStart(10, "foo")).toEqual("foofoofabc");
		expect("abc".padStart(6, "123465")).toEqual("123abc");
		expect("abc".padStart(8, "0")).toEqual("00000abc");
		expect("abc".padStart(1)).toEqual("abc");
	}
});


//  The padEnd() method 
//  pads this string with a given string (repeated, if needed)
//  so that the resulting string reaches a given length. The padding is applied from the end of this string.

test("string padEnd", () => {
	{
		expect("abc".padEnd(10)).toEqual("abc       ");
		expect("abc".padEnd(10, "foo")).toEqual("abcfoofoof");
		expect("abc".padEnd(6, "123456")).toEqual("abc123");
		expect("abc".padEnd(1)).toEqual("abc");
	}
});