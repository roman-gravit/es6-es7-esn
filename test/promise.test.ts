
// .................................................................
//  Promise INSTANCE methods are: 
//    then(onFulfilled, onRejected)  : Returns a new Promise immediately. 
//								     onFulfilled: A function to asynchronously execute when this promise becomes fulfilled
//                                   onRejected: A function to asynchronously execute when this promise becomes rejected
//
//    catch(onRejected)              : Returns a new Promise immediately
//                                   onRejected: A function to asynchronously execute when this promise becomes rejected
//
//    finally(onFinally)             : Returns a new Promise immediately
//                                   onFinally: A function to asynchronously execute when this promise becomes settled. 
//                                   Its return value is ignored unless the returned value is a rejected promise. 
//                                   The function is called with no arguments.
//
//  STATIC methdos
//   constructor
//   all(iterable)
//   allSettled(iterable)
//   race(iterable)
//   any(iterable)
//   reject(reason)
//   resolve(value)

// .................................................................
// Promise.all( )
//
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.


// .................................................................
// Promise.race( )
// 
// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the first promise that settles.
// .................................................................

// Rule 1:  new Promise body will done SYNC
// Rule 2: Promise is microtask(priority),  setTimeout - macrotask(not priority)
//         Promise.then is async and will done with priority

/*
*  Promise is an object - some kind of simple abstraction to round the more
*  complex things.
* 
*  1. PENDING status: just after creating of the Promise
*  2. RESOLVED status: the job is done
*  3. REJECTED status:  smth goes wrong 
* 
*  Promise Chain
*  In the case of error => it will go down to the first catch
*/


test("async-await", async () => {

	{
		const fetchText = () => new Promise(resolve => {
			setTimeout(()=> {
				resolve("Hello");
			}, 1000)
		});
	
	
		const showText = async() => {
			const text: any = await fetchText();
			expect(text.toString()).toEqual("Hello");
		}
	
		showText();
	}

	{

		const fetchText = () => new Promise(resolve => {
			setTimeout(()=> {
				resolve("Hello");
			}, 1000)
		});
	
	
		const showText = () => {
			const text = fetchText();
			expect(text.toString()).toEqual("[object Promise]");
		}
	
		showText();

	}

});

// The then() method of Promise instances takes up to two arguments: 
// callback functions for the fulfilled and rejected cases of the Promise. 
test("promise.then", async () => {

	{
		let result = "";

		Promise.resolve("1")
		.then(data => {
			result+=data;
		})
		.then(data => {
			result+=data;
			return "2";
		})
		.then(data => {
			result+=data;
			expect(result).toBe("1undefined2");
		})
	}

	{
		let result = "";
		Promise.reject(1)
		.then(data => {
			console.log(data);
			result+=data;
		})
		// Next then will catch the error
		.then(null, data => { 
			result+=data;
		})
		.then(() => { 
			expect(result).toBe("1");
		});
	}

	//  callback functions for the fulfilled and rejected cases of the Promise
	{
		let result = "";
		Promise.reject()
		.then(
			function onFulfilled(data) { 
				result+="ok";
			},  
			function onRejected(data) { 
				result+="error";
				expect(result).toBe("error");
			}
		)

	}

	//  null in .then
	{
		let result = "";
		Promise.resolve(1)
		.then(null)
		.then((data) => { 
			result+=data;
			expect(result).toBe("1");
		});
	}


});
// The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). 
// It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
// This lets you avoid duplicating code in both the promise's then() and catch() handlers.
test("promise.finally", async () => {

	function _Checkmail() {
		return new Promise((resolve, reject) => {
		  	if (Math.random() > 0.5) {
				resolve('Mail has arrived');
		  	} else {
				reject('Failed to arrive');
		  	}
		});
	}

	_Checkmail()
	.then((mail) => {
	  	console.log(mail);
	})
	.catch((err) => {
	  	console.error(err);
	})
	.finally(() => {
		expect(5).toBe(5);
	});
  
	{
		let result = "";
		Promise.resolve()
		.then(() => {
			result+="";
			return "1";
		})

		// .then return "1", but .finally will throw it in 
		.finally(() => { 
			result+="";
			return "2";
		})
	
		// from .finally returns "2", but result will be taken from previous .then или .catch
		.then(data => {
			result+=data;
			expect(result).toEqual("1");
		}
		) // => "1"

	}


	// Every time you call then() or catch() you create a new promise. When you create a promise chain, 
	// you create multiple promises responding to one another, later promises able to handle fulfilled or rejected 
	// values from those before it. Usually these chains end in a catch so the last promise can handle any error 
	// from any other promise within the chain.
	{
		const p = Promise.reject(101);
	
		const p2 = p.catch((error) => {
			console.log('catch #1. Error:' + error);
		});
	

		// New promise created from that promise with the then() is not. 
		// There's nothing in that chain that is able to handle the error so it is seen as unhandled.

		// ALSO: Simply, handled errors are not recognized at the error level, rather they're seen at the promise level. 
		// it cannot be handled via common try - catch
		const p1 = p.then((data) => {
			console.log('ok:' + data);
		});
		p1.catch((error) => {
			console.log('catch #2. Error:' + error);
		});
		
	}

});


// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the FIRST promise that SETTLES(fulfilled or rejected).
// It's useful when you want the first async task to complete, but do not care about its eventual state
test("promise.race", async () => {

	// empty: must catch
	Promise.race([])
		.then((values) => {
			throw new Error("Promise.race empty fulfilled");
		})
		.catch((error) => {
			throw new Error("Promise.race empty catched");
		});

	// First fulfilled
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((resolve, reject) => {
		  setTimeout(resolve, 100, "foo");
		});


		// The fulfillment value is an array of fulfillment values, in the order of the promises passed, 
		// regardless of completion order.
		Promise.race([promise1, promise2, promise3]).then((values) => {
			expect(values).toEqual(3);
		});

		Promise.race([promise3, promise2, promise1]).then((values) => {
			expect(values).toEqual(42);
		});
	}

	// First fulfilled, Reject doesnt matter
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((_resolve, reject) => {
		  setTimeout(reject, 100, "error");
		});	
		const promise4 = new Promise((resolve, _reject) => {
			setTimeout(resolve, 300, "foo");
		});		
		
		Promise.race([promise1, promise2, promise3, promise4])
			.then((values) => {
				expect(values).toEqual(3);
			})
			.catch((error) => {
				throw new Error("Promise.race catch");
			});
	}

	// First rejected, any others doesnt matter
	{
		const promise1 = new Promise((_resolve, reject) => {
		  setTimeout(reject, 100, "error");
		});	
		const promise2 = new Promise((resolve, _reject) => {
			setTimeout(resolve, 300, "foo");
		});		
		
		Promise.race([promise1, promise2])
			.then((values) => {
				throw new Error("Promise.race fulfilled");
			})
			.catch((error) => {
				expect(error).toEqual("error");
			});
	}



	// .any is async
	{

		function _test(callback: (res: string)=>void): void {
			let result = "start";
			// Passing an array of promises that are already resolved,
			// to trigger Promise.all as soon as possible
			const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

			const p = Promise.race(resolvedPromisesArray).then((values) => {
				result+="race";
				expect(values).toEqual(33);
			});

			// Immediately logging the value of p
			result+="1";

			// Using setTimeout, we can execute code after the queue is empty
			setTimeout(() => {
				result+="tm1";
				callback(result);
			});
		}

		_test(function(res: string) {
			expect(res).toEqual("start1racetm1");
		});
	}
});


// ES2021
//  The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
//  This returned promise fulfills when ANY of the input's promises FULFILL, with this first fulfillment value.
//  It rejects when ALL of the input's promises REJECTED (including when an empty iterable is passed), 
//  with an AggregateError containing an array of rejection reasons.
test("promise.any", async () => {

	// empty: must catch
	Promise.any([])
		.then((values) => {
			throw new Error("Promise.any empty fulfilled");
		})
		.catch((error) => {
			expect(error.message).toEqual("All promises were rejected");
			
		});

	// First fulfilled
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((resolve, reject) => {
		  setTimeout(resolve, 100, "foo");
		});


		// The fulfillment value is an array of fulfillment values, in the order of the promises passed, 
		// regardless of completion order.
		Promise.any([promise1, promise2, promise3]).then((values) => {
			expect(values).toEqual(3);
		});

		Promise.any([promise3, promise2, promise1]).then((values) => {
			expect(values).toEqual(42);
		});
	}

	// First fulfilled, Reject doesnt matter
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((_resolve, reject) => {
		  setTimeout(reject, 100, "error");
		});	
		const promise4 = new Promise((resolve, _reject) => {
			setTimeout(resolve, 300, "foo");
		});		
		
		Promise.any([promise1, promise2, promise3, promise4])
			.then((values) => {
				expect(values).toEqual(3);
			})
			.catch((error) => {
				throw new Error("Promise.allSettled catch");
			});
	}


	// .any is async
	{

		function _test(callback: (res: string)=>void): void {
			let result = "start";
			// Passing an array of promises that are already resolved,
			// to trigger Promise.all as soon as possible
			const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

			const p = Promise.any(resolvedPromisesArray).then((values) => {
				result+="any";
				expect(values).toEqual(33);
			});

			// Immediately logging the value of p
			result+="1";

			// Using setTimeout, we can execute code after the queue is empty
			setTimeout(() => {
				result+="tm1";
				callback(result);
			});
		}

		_test(function(res: string) {
			expect(res).toEqual("start1anytm1");
		});
	}
});


// Promise.allSettled() will wait for ALL input promises to COMPLETE, 
// regardless of whether or not one rejects. 
// Use allSettled() if you need the final result of every promise in the input iterable.
test("promise.allSettled", async () => {

	// empty 
	Promise.allSettled([]).then((values) => {
		expect(values).toEqual([]);
	});

	// Resolve order
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((resolve, reject) => {
		  setTimeout(resolve, 100, "foo");
		});


		// The fulfillment value is an array of fulfillment values, in the order of the promises passed, 
		// regardless of completion order.
		Promise.allSettled([promise1, promise2, promise3]).then((values) => {
			expect(values).toEqual([ {status: "fulfilled", value: 3}, {status: "fulfilled", value: 42}, {status: "fulfilled", value: "foo"} ]);
		});

		Promise.allSettled([promise3, promise2, promise1]).then((values) => {
			expect(values).toEqual([ {status: "fulfilled", value: "foo"}, {status: "fulfilled", value: 42}, {status: "fulfilled", value: 3} ]);
		});
	}

	// Reject
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((_resolve, reject) => {
		  setTimeout(reject, 100, "error");
		});	
		const promise4 = new Promise((resolve, _reject) => {
			setTimeout(resolve, 300, "foo");
		});		
		
		Promise.allSettled([promise1, promise2, promise3, promise4])
			.then((values) => {
				expect(values).toEqual([ 
					{status: "fulfilled", value: 3}, 
					{status: "fulfilled", value: 42}, 
					{status: "rejected", reason: "error"},
					{status: "fulfilled", value: "foo"} 
				]);
			})
			.catch((error) => {
				throw new Error("Promise.allSettled catch");
			});
	}


	// .all  is async
	{

		function _test(callback: (res: string)=>void): void {
			let result = "start";
			// Passing an array of promises that are already resolved,
			// to trigger Promise.all as soon as possible
			const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

			const p = Promise.allSettled(resolvedPromisesArray).then((values) => {
				result+="all";
				expect(values).toEqual([{status: "fulfilled", value: 33}, {status: "fulfilled", value: 44}]);
			});

			// Immediately logging the value of p
			result+="1";

			// Using setTimeout, we can execute code after the queue is empty
			setTimeout(() => {
				result+="tm1";
				callback(result);
			});
		}

		_test(function(res: string) {
			expect(res).toEqual("start1alltm1");
		});


	}



});


//  It is typically used when there are multiple related asynchronous tasks 
//  that the overall code relies on to work successfully 
//  — ALL of whom we want to FULFILL before the code execution continues.
//  Promise.all() will reject immediately upon ANY of the input promises REJECTING.
test("promise.all", async () => {

	// empty 
	Promise.all([]).then((values) => {
		expect(values).toEqual([]);
	});

	// Reject
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((_resolve, reject) => {
		  setTimeout(reject, 100, "error");
		});	
		const promise4 = new Promise((resolve, _reject) => {
			setTimeout(resolve, 300, "foo");
		});		
		
		Promise.all([promise1, promise2, promise3, promise4])
			.then((_values) => {
				throw new Error("Promise.all fullfilled");
			})
			.catch((error) => {
				expect(error).toEqual("error");
			});
	}

	// Reject
	{
		const promise1 = Promise.resolve(3);
		const promise2 = 42;
		const promise3 = new Promise((resolve, reject) => {
		  setTimeout(resolve, 100, "foo");
		});


		// The fulfillment value is an array of fulfillment values, in the order of the promises passed, 
		// regardless of completion order.
		Promise.all([promise1, promise2, promise3]).then((values) => {
			expect(values).toEqual([3, 42, "foo"]);
		});

		Promise.all([promise3, promise2, promise1]).then((values) => {
			expect(values).toEqual(["foo", 42, 3]);
		});
	}

	// .all  is async
	{

		function _test(callback: (res: string)=>void): void {
			let result = "start";
			// Passing an array of promises that are already resolved,
			// to trigger Promise.all as soon as possible
			const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

			const p = Promise.all(resolvedPromisesArray).then((values) => {
				result+="all";
				expect(values).toEqual([33, 44]);
			});

			// Immediately logging the value of p
			result+="1";

			// Using setTimeout, we can execute code after the queue is empty
			setTimeout(() => {
				result+="tm1";
				callback(result);
			});
		}

		_test(function(res: string) {
			expect(res).toEqual("start1alltm1");
		});


	}



});


test("promise", async () => {

	
	const res = await PromiseConstructor();
	expect(res).toEqual("start1end");

	PromiseThen(function(res: string) {
		expect(res).toEqual("start1end2");

		PromiseResolve(function(res: string) {
			expect(res).toEqual("startendPr1Pr2Tm1Tm2");

			PromiseResolve2(function(res: string) {
				expect(res).toEqual("start13end2");

				PromiseResolve3(function(res: string) {
					expect(res).toEqual("start1end");

					PromiseWithFunction(function(res: string) {
						expect(res).toEqual("startmiddle1endsuccess");

						PromiseFullFill(function(res: string) {
							expect(res).toEqual("startend12");
						
							PromiseSetTimeout(function(res: string) {
								expect(res).toEqual("startendresolveTm");

								PromiseMicroMacro(function(res: string) {
									expect(res).toEqual("124startendsuccess");

									PromisePriority(function(res: string) {
										expect(res).toEqual("tm1pr2tm2");

										PromiseCommon(function(res: string) {
											expect(res).toEqual("startendpr1tm1pr2tm2");
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
	

	/*
	*  Task 1: Promise constructor.
	*/
	async function PromiseConstructor(): Promise<string> {
		let result = "";

		result+="start";
		
		const promise1 = new Promise((_resolve, _reject) => {
			result+="1";
		})
		
		result+="end";
		
		return result;
	};

	/*
	*  Task 2: Promise .then
	*/
	function PromiseThen(callback: (res: string)=>void): void {
		let result = "";

		result+="start";

		const promise1 = new Promise((resolve, _reject) => {
			result+="1";
			resolve(2);
		})
		
		promise1.then(res => {
			result+=res;
			callback(result);
		})
		
		result+="end";
	}

	function PromiseResolve(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
		
		setTimeout(() => {
			result+="Tm1";
		}, 0);
	
		setTimeout(() => {
			result+="Tm2";
			callback(result);
		}, 0);
	
		// executive function with two callbacks as arguments
		const pr1 = new Promise(function _callback(resolve, reject) {
			resolve("Pr1");
		});
		
		pr1.then(res => {
			result+=res;
	
		}).catch(err => console.log(err));
		
		new Promise((resolve, reject) => {
			resolve("Pr2");
		}).then(res => {
			result+=res;
	
		}).catch(err => console.log(err));
		
		result+="end";
	}
	
	function PromiseResolve2(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		const promise1 = new Promise((resolve, reject) => {
			result+="1";
			resolve(2)
			result+="3";
		})
		
		promise1.then(res => {
			result+="2";
			callback(result);
		})
		
		result+="end";
	}
	
	function PromiseResolve3(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		const promise1 = new Promise((resolve, reject) => {
		  result+="1";
		})
		
		promise1.then(res => {
		  result+="2";
		  callback(result);
		})
		
		result+="end";
		callback(result);
	}
	
	function PromiseWithFunction(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		const fn = () => (new Promise((resolve, reject) => {
		  result+=1;
		  resolve('success')
		}))
		
		result+="middle";
		
		fn().then(res => {
		  result+=res;
		  callback(result);
		})
		
		result+="end";
	}
	
	function PromiseFullFill(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		Promise.resolve(1).then((res) => {
			result+=res;
		})
		
		Promise.resolve(2).then((res) => {
			result+=res;
			callback(result);
		})
		
		result+="end";
	
	}
	
	function PromiseSetTimeout(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		setTimeout(() => {
			result+="Tm";
			callback(result);
		})
	
		Promise.resolve().then(() => {
			result+="resolve";
		})
	
		result+="end";
	}
	
	function PromiseMicroMacro(callback: (res: string)=>void): void {
		let result = "";
	
		const promise = new Promise((resolve, reject) => {
			result+="1";
	
			setTimeout(() => {
				result+="start";
				resolve("success");
				result+="end";
			}, 0);
	
			result+="2";
		});
		  
		promise.then((res) => {
			result+=res;
			callback(result);
		});
		  
		result+="4";
	} 
	
	function PromisePriority(callback: (res: string)=>void): void {
		let result = "";
	
		const timer1 = setTimeout(() => {
			result+="tm1";
			const promise1 = Promise.resolve().then(() => {
				result+="pr2";
			})
		}, 0)
		  
		const timer2 = setTimeout(() => {
			result+="tm2";
			callback(result);
		}, 0)
	}
	
	function PromiseCommon(callback: (res: string)=>void): void {
		let result = "";
		result+="start";
	
		const promise1 = Promise.resolve().then(() => {
			result+="pr1";
			const timer2 = setTimeout(() => {
				result+="tm2";
				callback(result);
			  }, 0)
		});
		
		const timer1 = setTimeout(() => {
			result+="tm1";
			const promise2 = Promise.resolve().then(() => {
				result+="pr2";
			  })
		}, 0)
		
		result+="end";
	}
	

});


// https://habr.com/ru/articles/439746/                 2019          
// https://habr.com/ru/companies/otus/articles/686670/  2022   
// https://habr.com/ru/sandbox/162207/                  2021   
// https://habr.com/ru/sandbox/162207/