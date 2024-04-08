
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