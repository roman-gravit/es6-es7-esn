
## History 

 - **ECMAScript 2009**, also known as **ES5**, was the first major revision to JavaScript.
 
 - **ECMAScript 2015** was the second major revision to JavaScript. ECMAScript 2015 is also known as **ES6** and ECMAScript 6.

 - Old ECMAScript versions was named by numbers: ES5 and ES6. From 2016, versions are named by year: **ES2016, 2018, 2020..**


### ES6

 - The **let** and **const** keywords

 - **Arrow Functions** : (a, b) => {return a+b;}. 
       a) It cannot be used as object constructor
       b) There is no arguments pseudo-array
       c) apply | bind | call is make NO sense => **this** wiil not be pass to arrow function

 - **Map** : Any value (both objects and primitive values) may be used as either a key or a value.

 - **WeakMap** : A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, 
                 with values of any arbitrary JavaScript type, and which does not create strong references to its keys.
                 That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. 

 - **Set** : The Set object lets you store **unique** values of any type, whether primitive values or object references.

 - **WeakSet** : A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols. 

 - **Symbol** : Symbol is a built-in object whose constructor returns a symbol primitive, that's guaranteed to be unique

 - **Default Parameters** :  ```function multiply(a, b = 1)```

 - **String.includes()** : performs a case-sensitive search to determine whether a given string may be found within this string. return true/false
 
 - **String.startsWith(searchString, startPosition)**
 
 - **String.endsWith(searchString, endPosition)** 

 - Array.from()  keys()  find() findIndex()

 - **New Math Methods** : Math.trunc()  Math.sign()   Math.cbrt()  Math.log2()  Math.log10()

 - **New Number Properties**:  Number.EPSILON, Number.MAX_VALUE, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY...

 - **New Number Methods** : isFinite  isInteger  isSafeInteger;  
                            Safe integers consist of all integers from -(2^53 - 1) to 2^53 - 1

 - **Object.entries()** : returns an array of a given object's own enumerable string-keyed property key-value pairs.

 - **Array and Object destructing**

 - **Rest** Parameter for function: Allows a function to accept an indefinite number of arguments as an array, 
                                    providing a way to represent variadic functions in JavaScript.

 - The ... (**spread**) :  spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, 
                           while rest syntax collects multiple elements and "condenses" them into a single element.

 - **Iterator** : is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object.

 - **Generator** : object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol. 
                   Generator is a subclass of the hidden Iterator class.

 - **For/of** : The for...of statement executes a loop that operates on a sequence of values sourced from an **iterable object.**

 - **JavaScript Modules**  :  export =>  export class Car...   export { Car };  export { Car as CarExported} ; 
                              import =>  import * as numbers from "car.js" : export all from module car.js
                              Default export/import:  export default { Car } =>  import Car from "car.js" (without braces)

 - Classes

 - **Promises**


### ES2016

 - **Exponentiation** :   ```**```      **Was:**  ```Math.pow(7,2)```   **Now:** ```7**2```

 - **Exponentiation assignment** : (**=)

 - **Array.includes(searchElement, fromIndex)** : determines whether an array includes a certain value among its entries, returning true or false as appropriate.


### ES2017

 - **String.padStart()** : ``` "abc".padStart(10); // "       abc" ```
 
 - **String.padEnd()** :    ``` "abc".padEnd(10); // "abc       "  ```

 - **Object.entries()** : returns an array of a given object's own enumerable string-keyed property key-value pairs
 
 - **Object.values()** :  returns an array of a given object's own enumerable string-keyed property values.

 - **async and await** : to simplify asynchronous code, it makes the code look and behave more like synchronous code

 - **Trailing Commas in Functions:**  Trailing commas (sometimes called "final commas") can be useful when adding new elements,
                parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying 
                the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing 
                code might be less troublesome.

 - **Object.getOwnPropertyDescriptors** :   returns all own property descriptors of a given object.
                                            Use this method and Object.create() for a shallow copy between two unknown objects.


### ES2018

 - **Asynchronous Iteration** : ```for await () {} ```

 - **Promise Finally**  : schedules a function to be called when the promise is settled (either fulfilled or rejected)

 - **Object Rest Properties** : This allows us to destruct an object and collect the leftovers onto a new object
      
      ```
      let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      x; // 1  y; // 2  z; // { a: 3, b: 4 }

      ```

 - **New RegExp Features**

 - **JavaScript Shared Memory** : Shared memory is a feature that allows threads (different parts of a program) to access and update the same
                                  data in the same memory. Instead of passing data between threads, you can pass a SharedArrayBuffer 
                                  object that points to the memory where data is saved.


### ES2019

 - **String.trimStart()** :  removes whitespace from the beginning of this string 
 
 - **String.trimEnd()** : removes whitespace from the end of this string and returns a new string

 - **Object.fromEntries** : transforms a list of key-value pairs into an object

 - **Optional catch binding** : From ES2019 you can omit the catch parameter if you don't need it: 
   
   ```
   try {
      // code
   } catch {
      // code
   }

   ```

 - **Array.flat([depth])** : creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

 - **Array.flatMap()** :  It is identical to a map() followed by a flat() of depth 1  ```(arr.map(...args).flat())```

 - **Revised Array.Sort()** : After ES2019, browsers must use a **stable sorting algorithm**

 - **Revised JSON.stringify()** :  Well-formed JSON.stringify: JSON.stringify('\u{D800}')

 - **Separator symbols allowed in string litterals** : // This is valid in ES2019: let text = "\u2028";

 - **Revised Function.toString()** : From 2019, toString() must return the source code of the function **including comments, spaces, and syntax details**.


### ES2020

 - BigInt

 - String.matchAll()

 - **The Nullish Coalescing Operator (??)** :  returns its right-hand side operand when its left-hand side operand is null or undefined, 
                                               and otherwise returns its left-hand side operand.

 - **The Optional Chaining Operator (?.)** : accesses an object's property or calls a function. If the object accessed or function called using this operator 
                                             is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

 - **Nullish Coalescing Assignment (??=)** : only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

 - **Logical AND Assignment Operator (&&=)** : only evaluates the right operand and assigns to the left if the left operand is truthy.

 - **Logical OR Assignment (||=)** : only evaluates the right operand and assigns to the left if the left operand is falsy.


 - **Promise.allSettled()** : This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
                              with an array of objects that describe the outcome of each promise.

 - **Dynamic Import**  : import(path).then  or  await import(path)


### ES2021

 - **Promise.any()** : This method is useful for returning the first promise that fulfills. 
                       fulfills with the first promise to fulfill, even if a promise rejects first.
                       This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
                       It rejects when all of the input's promises reject (including when an empty iterable is passed), 
                       with an AggregateError containing an array of rejection reasons.

 - **String.replaceAll()** : The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement

 - **Numeric Separators (_)** : 1_000_000


### ES2022

  - **Array at()** : The at() method of Array instances takes an integer value and returns the item at that index, allowing for 
                     positive and negative integers. Negative integers count back from the last item in the array.

  - **String at()** : The at() method of String values takes an integer value and returns a new String consisting of the 
                      single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. 
                      Negative integers count back from the last string character.

  - RegExp /d

  - Object.hasOwn()

  - error.cause

  - **await import** : await import(path), dynamic import

  - Class field declarations

  - Private methods and fields


### ES2023

  - Array findLast()  findLastIndex()  toReversed() toSorted()  toSpliced()  with()

  - #! (Shebang)



##  JS scope 

Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: **let** and **const**

   - Block scope
	    Variables declared inside a { } block cannot be accessed from outside the block.
	    Variables declared with the **var** keyword can NOT have block scope.

   - Function(local) scope
		Variables declared within a JavaScript function, are local to the function.
		
		They can only be accessed from within the function. Each function creates a new scope.
		
		Variables defined inside a function are NOT accessible (visible) from OUTSIDE THE FUNCTION.

   - Global scope
        A variable declared outside a function, becomes GLOBAL. In HTML, the global scope is the **window** object.
		
		Global variables defined with the **var** keyword belong to the **window** object.
		
		Global variables defined with the **let** keyword do NOT belong to the **window** object:


NOTE:  Automatically Global:
       If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
	   
	   ```
	   function myFunction() {
	    	carName = "Volvo";
	   }
	   ```


In "Strict Mode", undeclared variables are NOT automatically global.

https://habr.com/ru/companies/lanit/articles/718130/


##  Hoisting

In JavaScript, a variable can be declared after it has been used.

 - let  
    Variables defined with *let*  and *const* are hoisted to the top of the block, but NOT initialized.
	
	Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
    
	Using a *const* variable before it is declared will result in a ReferenceError.
    
	The variable is in a "temporal dead zone" from the start of the block until it is declared:

 - const
    Using a const variable before it is declared, is a syntax error, so the code will simply not run.

 - var
    Using a *var* variable before it is declared will result *undefined*

  NOTE1: JavaScript only hoists declarations, not initializations.


##  Symbol 

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol 
— that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't 
collide with keys any other code might add to the object, and which are hidden from any mechanisms other 
code will typically use to access the object. 

Every Symbol() call is guaranteed to return a unique Symbol. 
Every Symbol.for("key") call will always return the same Symbol for a given value of "key". 
When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, 
that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry
under the given key, and returned.

	```
	const sym1 = Symbol();
	const sym2 = Symbol("foo");
	const sym3 = Symbol("foo");

	Symbol("foo") === Symbol("foo"); // false

	const sym = new Symbol(); // TypeError
	
	```

The **Symbol.for()** static method searches for existing symbols in a runtime-wide symbol registry 
with the given key and returns it if found. 
Otherwise a new symbol gets created in the global symbol registry with this key.

The method **Object.getOwnPropertySymbols()** returns an array of Symbols and lets you find 
Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, 
so that this array will be empty unless you've set Symbol properties on the object.


##  Data types in JS
   At current moment:
    - string
	- number 
	- BigInt (..n)
	- boolean
	- Symbol
	- Object
	- null  (typeof == object)
	- undefined 	


##  Difference between == and ===
   ==  : abstract equality comparison operator
   === : is the strict equality comparison operator (take care about data types)

   Highly recommended to add strict mode:
   - add *use strict* at the start of the js document
   - add *use strict* at the start of the js function
   - in the ES6 for modules its ON by default


##  Difference between function DECLARATION and function EXPRESSION

The main difference between a function expression and a function declaration is 
the function name, which can be omitted in function expressions to create anonymous functions. 
   
 - Declaration:  use the function keyword and specify a name:
     function sum(a, b) { return a+b; }

 - Expression: - create a function expression and MUST assign it to a variable that can be called. 
     const sum  = function(a, b) { return a+b; }
     const sum2  = (a, b) => { a+b;}  Arrow function expressions

   NOTE: Function expressions in JavaScript are NOT HOISTED. 
         You can't use function expressions before you create them!
		 Therefore, only declared functions can be used before initialization.


##  Difference between null and undefined
   - undefined: the variable was declared but no value was set
   - null: definite set the the value is null (typeof null=='object')


##  What is ES6 modules 

Approach to organize JS code for more convinient work and to maintain the clean global scope of the app.
Main two things:   

- import (from other file)

- export(from this file)

*CommonJS*  *NodeJs*


https://habr.com/ru/companies/ruvds/articles/492510/  [2020]   

https://habr.com/ru/companies/netologyru/articles/351704/ [2018]
