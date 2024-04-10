// The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.
test("Object.values", () => {

	const object1 = {
		property1: 42,
	  };
	  
	const descriptors1 = Object.getOwnPropertyDescriptors(object1);
	expect(descriptors1.property1.writable).toEqual(true);
	expect(descriptors1.property1.enumerable).toEqual(true);
	expect(descriptors1.property1.configurable).toEqual(true);
	expect(descriptors1.property1.value).toEqual(42);
});


// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values. 
test("Object.values", () => {

	const obj = { foo: "bar", baz: 42 };
	expect(Object.values(obj)).toEqual(['bar', 42]);

	const arrayLike = { 0: "a", 1: "b", 2: "c" };
	expect(Object.values(arrayLike)).toEqual(['a','b','c']);
	
	const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
	expect(Object.values(randomKeyOrder)).toEqual(['b','c','a']);
});


// The Object.fromEntries() static method transforms a list of key-value pairs into an object.
// The iterable argument is expected to be an object that implements an @@iterator method. 
test("Object.fromEntries", () => {

	{
		const arr = [ ["0", "a"], ["1", "b"], ["2", "c"],];
		expect(Object.fromEntries(arr)).toEqual( { 0: "a", 1: "b", 2: "c" });
	}

	{
		const map: Map<string, string> = new Map([ ["foo", "bar"], ["baz", "42"],]);
		expect(Object.fromEntries(map)).toEqual( { foo: "bar", baz: "42" });
	}
});


// The Object.entries() static method returns an array of a given object's 
// own enumerable string-keyed property key-value pairs.
// Each key-value pair is an array with two elements: the first element is the property key 
// (which is always a string), and the second element is the property value.
test("Object.entries", () => {

	const obj = { foo: "bar", baz: 42 };
	expect(Object.entries(obj)).toEqual([ ['foo', 'bar'], ['baz', 42] ]);

	const arrayLike = { 0: "a", 1: "b", 2: "c" };
	expect(Object.entries(arrayLike)).toEqual([ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]);
	
	const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
	expect(Object.entries(randomKeyOrder)).toEqual([ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]);

	// Non-object arguments are coerced to objects. undefined and null cannot be coerced 
	// to objects and throw a TypeError upfront. 

	// Strings have indices as enumerable own properties
	expect(Object.entries("foo")).toEqual([ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]);
	
	expect(Object.entries(100)).toEqual([]);

    // Converting an Object to a Map
    const obj1 = { foo: "bar", baz: 42 };
    const map = new Map(Object.entries(obj1));
	expect(map.toString()).toEqual("[object Map]");


	// Iterating through an Object
	// Using array destructuring, you can iterate through objects easily.
	const obj2 = { a: 5};
	for (const [key, value] of Object.entries(obj2)) {
	  const str = `${key}:${value}`;
	  expect(str).toEqual("a:5");
	}

	// keys are arranged randomly
	// keys are numbers: will be converted to strings
	const obj3 = { 142: "a", 22: "b", 71: "c" };
	const entries1 = Object.entries(obj3);
	expect(entries1).toEqual([ ["22", "b"], ["71", "c"], ["142", "a"] ]);


	// keys are arranged randomly
	const obj4 = { "142": "a", "22": "b", "71": "c" };
	const entries2 = Object.entries(obj3);
	expect(entries2).toEqual([ ["22", "b"], ["71", "c"], ["142", "a"] ]);

	/*
	const parent = {
		name: "John",
		familyNname: "Doe",
		getFullName(): string {
		  return `${this.name} ${this.familyNname}`;
		},
	};

	const entries = Object.entries(parent);
	expect(entries).toEqual([ ['name', 'John'], ['familyNname', "Doe"], ["getFullName", "[Function getFullName]"]]);*/

	{

		const parent = {
			name: "John",
			familyNname: "Doe",
			get FullName(): string {
			  return `${this.name} ${this.familyNname}`;
			},
		};
	
		const entries = Object.entries(parent);
		expect(entries).toEqual([ ['name', 'John'], ['familyNname', "Doe"], ["FullName", "John Doe"]]);
	}


	// inheritade properties will NOT be take into account
	const parent = {
		value: 2,
		method() {
		  return this.value + 1;
		},
	};
	const child = {
		name: "John",
		__proto__: parent,
	};
	const entries4 = Object.entries(child);
	expect(entries4).toEqual([ ['name', 'John']]);


	// Symbol will NOT be take into account
	const person = {
		name: "John",
		[Symbol.for("password")]: "qwerty",
	}
	const entries5 = Object.entries(person);
	expect(entries5).toEqual([ ['name', 'John']]);
});