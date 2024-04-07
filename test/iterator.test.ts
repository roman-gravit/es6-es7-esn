// An Iterator object is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object.
// All built-in iterators inherit from the Iterator class.
// The Iterator class provides a @@iterator method that returns the iterator object itself, making the iterator also iterable. 
// It also provides some helper methods for working with iterators.
// An object is deemed iterable if it has an implementation for the Symbol.iterator property. 

test("Iterator", () => {


	interface IIteratorReturnResult<T> {
		done:   boolean;
		value?: T;
	}

	const numbers = {
		start: 1,
		end: 10,

		[Symbol.iterator]: function() {
			let current = this.start;
			let last = this.end;

			return {
				next(): IIteratorReturnResult<number> {
					if(current<=last) {
						return {
							done: false,
							value: current++
						}
					} else {
						return {
							done: true
						}
					}
				}
			}
		}
	}

	for(let number of numbers) {
		console.log(number);
	}

});


// The Generator object is returned by a generator function and it conforms to both the iterable protocol 
// and the iterator protocol. Generator is a subclass of the hidden Iterator class.
// With a generator function, values are not evaluated until they are needed. Therefore a generator 
// allows us to define a potentially infinite data structure.
test("Generator", () => {

	{

		function *generate(): Iterator<number>  {
			yield 1;
			yield 2;
			return 3;
		}
	
		const iterator = generate();
	
		expect(iterator.next()).toEqual({"done": false, "value": 1});
		expect(iterator.next()).toEqual({"done": false, "value": 2});
		expect(iterator.next()).toEqual({"done": true, "value": 3});

	}	

	// iterator return and throw
	{
		function *generate(): Iterator<number>  {
			yield 1;
			yield 2;
			yield 3;
		}
	
		const iterator = generate();
	
		expect(iterator.next()).toEqual({"done": false, "value": 1});
		expect(iterator.return!()).toEqual({"done": true, "value": undefined});
		expect(iterator.next()).toEqual({"done": true, "value": undefined});		
	}


});