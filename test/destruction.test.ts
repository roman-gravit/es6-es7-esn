
// The destructuring assignment syntax is a JavaScript expression that makes 
// it possible to unpack values from arrays, or properties from objects, into distinct variables.

test("destructing objects", function () {

	{
		const person = {
			name: "Jack",
			age: 30
		};
		const { name, age } = person;
		expect(name).toEqual("Jack");
		expect(age).toEqual(30);
	}

	// default values
	{
		const { name = "Jack", age = 30 } = {};
		expect(name).toEqual("Jack");
		expect(age).toEqual(30);
	}

	// change variable name
	{
		interface IPerson {
			name: string;
			age: number;
		}

		const person: IPerson = {
			name: "Jack",
			age: 30
		}

		const { name: firstName, age: years } = person;
		expect(firstName).toEqual("Jack");
		expect(years).toEqual(30);
	}

	// ...rest
	{
		interface IPerson {
			name: string;
			age: number;
			hobby: string;
		}

		const person: IPerson = {
			name: "Jack",
			age: 30,
			hobby: "reading"
		}

		const { name, ...others} = person;
		expect(name).toEqual("Jack");
		expect(others).toEqual({ age: 30, hobby: "reading"});
	}

	// nested objects
	{
		interface IPerson {
			name: string;
			age: number;
			hobbies: {
				hobby: string;
				price: number;
			};

		}

		const person: IPerson = {
			name: "Jack",
			age: 30,
			hobbies: {
				hobby: "swim",
				price: 20
			}
		}

		const { name, hobbies: { hobby } } = person;
		expect(name).toEqual("Jack");
		expect(hobby).toEqual("swim");
	}

	// use object destructuring in function parameters,
	{
		interface IPerson {
			name: string;
			age: number;
		}

		function greet({ name, age }: IPerson) {
			expect(name).toEqual("Jack");
			expect(age).toEqual(30);
		}

		greet({name: "Jack", age: 30});
	}

	// use object destructuring as return result from function
	{
		interface IPerson {
			name: string;
			age: number;
		}

		function greet({ name, age }: IPerson) {
			expect(name).toEqual("Jack");
			expect(age).toEqual(30);
			return {name, age};
		}

		const res = greet({name: "Jack", age: 30});
		expect(res).toEqual({ name: "Jack", age: 30});
	}

});

test("destructing array", () => {

	{
		const people = ["Mike", "Anna", "John"];
		const [mike, anna, john] = people;
		expect(mike).toEqual("Mike");
		expect(anna).toEqual("Anna");
		expect(john).toEqual("John");
	}

	// ignore middle
	{
		const people = ["Mike", "Anna", "John"];
		const [mike, , john] = people;
		expect(mike).toEqual("Mike");
		expect(john).toEqual("John");
	}

	// use ...rest
	{
		const people = ["Mike", "Anna", "John"];
		const [mike, ...rest] = people;
		expect(mike).toEqual("Mike");
		expect(rest).toEqual(["Anna", "John"]);
	}

	// swap values
	{
		let mike = "Mike";
		let anna = "Anna";
		[mike, anna] = [anna, mike];
		expect(mike).toEqual("Anna");
		expect(anna).toEqual("Mike");
	}

	// if there is no such value in array => i will be undefined after destruction
	{
		const rating = [1, 50, 100];
		let [low, middle, high, very_high] = rating;
		expect(low).toEqual(1);
		expect(middle).toEqual(50);
		expect(high).toEqual(100);
		expect(very_high).toEqual(undefined);
	}
	
	//  Value by default can be set
	{
		const rating = [1, 50, 100];
		let [low, middle, high, very_high = 500] = rating;
		expect(low).toEqual(1);
		expect(middle).toEqual(50);
		expect(high).toEqual(100);
		expect(very_high).toEqual(500);
	}

	// Multi dimesnion array
	{
		const rating_multi: any = [1, 50, 100, [1000, 2000]];
		let [low, middle, high, [higher1, higher2]] = rating_multi;
		expect(low).toEqual(1);
		expect(middle).toEqual(50);
		expect(high).toEqual(100);
		expect(higher1).toEqual(1000);
		expect(higher2).toEqual(2000);
	}

	// We can use destructuring in function parameter
	{
		let students = ["Mike", "Anna", "John"];

		function printStudent([first, second, third]: string[]) {
			expect(first).toEqual("Mike");
			expect(second).toEqual("Anna");
			expect(third).toEqual("John");
		}

		printStudent(students);
	}

	//  Destructuring can be used for array returned from function
	{
		const name = "john doe";
		let [first, last] = name.split(" ");
		expect(first).toEqual("john");
		expect(last).toEqual("doe");
	}

});



