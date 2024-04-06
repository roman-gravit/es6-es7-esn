// Symbol is a built-in object whose constructor returns a symbol primitive — 
// also called a Symbol value or just a Symbol — that's guaranteed to be unique. 
// Symbols are often used to add unique property keys to an object that won't 
// collide with keys any other code might add to the object, and which are hidden 
// from any mechanisms other code will typically use to access the object. 


test("symbol primitive", () => {

	// const sym = new Symbol(); // TypeError

	// typeof
	{
		const symbol = Symbol();
		expect(typeof symbol).toEqual("symbol");
	}

	// description
	{
		const symbol = Symbol("test");
		expect(symbol.description).toEqual("test");

		const symbol1 = Symbol();
		expect(symbol1.description).toEqual(undefined);
	}

	// Symbol("test") !== Symbol("test")
	{
		const symbol = Symbol("test");
		const symbol2 = Symbol("test");
		expect(symbol).not.toEqual(symbol2);
	}

	// Using Symbol.for 
	// Symbol.for('bar') === Symbol.for('bar')
	{
		const symbol = Symbol.for("test");
		expect(symbol.toString()).toEqual("Symbol(test)");

		const symbol1= Symbol.for("test");
		const symbol2 = Symbol.for("test");
		expect(symbol1).toEqual(symbol2);
	}

	// Using Symbol.for and Symbol.keyFor 
	{
		const symbol = Symbol.for("test");
		const res = Symbol.keyFor(symbol);
		expect(res).toEqual("test");

		const symbol1 = Symbol();
		expect(Symbol.keyFor(symbol1)).toEqual(undefined);
	}
	
    // Add symbol as object property
	{	
		const person: any = {
			name: "Jack",
			age: 30,
			[Symbol.for("password")]: "qwerty",
			[Symbol.for("ínn")]: 1234
		}

		const pwd = person[Symbol.for("password")];
		expect(pwd).toEqual("qwerty");
	}

	// Add symbol as object property
	{	
		const person = {
			name: "Jack",
			age: 30,
			[Symbol.for("password")]: "qwerty",
			[Symbol.for("ínn")]: 1234
		}

		const symbols = Object.getOwnPropertySymbols(person);
		expect(symbols.length).toEqual(2);

		expect(Symbol.keyFor(symbols[0])).toEqual("password");
		expect(Symbol.keyFor(symbols[1])).toEqual("ínn");

		expect(person[symbols[0]]).toEqual("qwerty");
		expect(person[symbols[1]]).toEqual(1234);
	}

});