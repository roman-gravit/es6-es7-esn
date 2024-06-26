
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

 - **Classes**

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


## Common

###  What is ECMAScript

Standart ECMA-262 invented by ECMA international organisation.

ECMAScript is a **specification(standart) of the scripting language**, rules, recomndetations.

What the difference between JavaScript and ECMAScript: JavaScript is one of the versions of the script language which accords to EMCAScript.


###  JS scope 

Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: **let** and **const**

 - **Block scope**
	   Variables declared inside a { } block cannot be accessed from outside the block.
	   Variables declared with the **var** keyword can NOT have block scope.

 - **Function(local) scope**
		Variables declared within a JavaScript function, are local to the function.
		
		They can only be accessed from within the function. Each function creates a new scope.
		
		Variables defined inside a function are NOT accessible (visible) from OUTSIDE THE FUNCTION.

 - **Global scope**
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


###  What is event loop and how its working

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, 
collecting and processing events, and executing queued sub-tasks. 

 - **stack of functions** : Every time you invoke a function, it’s added to the stack.

 - **microtask queue** : A microtask is a short function which is executed after the function or program which created 
                         it exits and only if the JavaScript execution stack is empty (Promise, MutationObserver and queueMicrotask function)

 - **macrotask queue** : setTimeout, event handlers, most of the Browser Web API.

 - **event loop** : (which calls tasks from stack and 2 queues)

 



###  Lexical environment

When the JavaScript engine creates a new execution context for a function, 
it creates a new lexical environment to store variables defined in that function during the execution phase.

A lexical Environment is a data structure that holds an identifier-variable mapping. 
(here identifier refers to the name of variables/functions, and the variable is the reference to the actual object 
[including function type object] or primitive value).

The lexical environment contains two components:

 - **Environment record:** It is the actual place where the variable and function declarations are stored.

 - **Reference to the outer environment:** It means it has access to its outer (parent) lexical environment.


   ```
   let language = 'JavaScript';
   function a() {
       const b = "Dart";
       console.log("Inside function a");
   }
   a();
   console.log("Global execution context")
   ```

When the JavaScript engine creates a new execution context for global, it creates a new lexical environment to store variables 
and functions defined in the scope. It looks like this:

   ```
   globalLexicalEnvironment = {
   environmentRecord: {
         language    : 'JavaScript',
         a : < reference to function object >
   }
   outer: null
   }

   ```

When the JavaScript engine creates a new execution context for function a(), it creates a new lexical 
environment to store variables and functions defined in the scope. It looks like this:

   ```
   functionLexicalEnvironment = {
      environmentRecord: {
            b    : 'Dart',
      }
      outer: <globalLexicalEnvironment>
   }

   ```

When the function completes the execution it may or may not be removed from the stack, depending on if that lexical environment 
is referred to by any other lexical environments in their outer lexical environment property.


    https://dzen.ru/a/ZVfqjmXi_AVwGimN   https://habr.com/ru/articles/474852/

    https://javascript.plainenglish.io/scope-chain-and-lexical-environment-in-javascript-eb1f6e60997e



###  Hoisting

Hoisting is 'bubbling' the var or function at the top of the scope

In JavaScript, a variable can be declared after it has been used.

 - **let**  
    Variables defined with *let*  and *const* are hoisted to the top of the block, but NOT initialized.
	
 	 Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
    
	 Using a *const* variable before it is declared will result in a ReferenceError.
    
	 The variable is in a "temporal dead zone" from the start of the block until it is declared:

 - **const**
    Using a const variable before it is declared, is a syntax error, so the code will simply not run.

 - **var**
    Using a *var* variable before it is declared will result *undefined*

Note: JavaScript only hoists declarations, not initializations.


###  Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

In other words, a closure gives you access to an outer function's scope from an inner function. 

In JavaScript, closures are created every time a function is created, at function creation time.

   ```
   function init() {
      var name = "Mozilla"; // name is a local variable created by init
      function displayName() {
         // displayName() is the inner function, that forms the closure
         console.log(name); // use variable declared in the parent function
      }
      displayName();
   }
   init();

   ```
init() creates a local variable called name and a function called displayName(). 

The displayName() function is an inner function that is defined inside init() and is available only within 

the body of the init() function. Note that the displayName() function has no local variables of its own. 

However, since inner functions have access to the variables of outer functions, 

displayName() can access the variable name declared in the parent function, init().


###  this and Execution Context

There are three kinds of Execution Context in JavaScript:

   - Global Execution Context (GEC): The global execution context is created when a JavaScript script 
                                     first starts to run, and it represents the global scope in JavaScript. 

   - Function Execution Context (FEC). When the function is called the function context is created.
   
   - eval 
  
   *this*  depends on the context. 
   In the GEC  *this* is the ref to the *window*.
 

   *this*  is the object before *.*   This is reference to object in which current function was invoked.
   Function will work with the context in which it was called.
   If context was lost - *this* will be global object or undfefined('use strict' is On)


###  What is *this* is Javascript

 - Context of the call

 - reference to the current object which calls the function/its method

Problem: loss the context of the called function. Solved with:

 - **call**    function.call(context(this), param1, param2)

 - **apply**   function.apply(context(this), [param1, param2])
 
 - **bind**    let call = function.bind(context(this), param1, param2) - it will create another function-proxy which can be assigned 
 
               to varibale and call later. The bind() function creates a new function (a bound function) with the same function body 
               
               as the function it is being called on (the bound function's target function) with the this value bound to the 
               
               first argument of bind(), **which cannot be overridden.**

	
*this* inside the context of the function


###  What is ES6 modules 

Approach to organize JS code for more convinient work and to maintain the clean global scope of the app.
Main two things:   

- import (from other file)

- export(from this file)

*CommonJS*  *NodeJs*


https://habr.com/ru/companies/ruvds/articles/492510/  [2020]   

https://habr.com/ru/companies/netologyru/articles/351704/ [2018]


###  What is desrtucting (ES6)

To simplify destructing the object into vars
   
   ```
   const person = { name:"Mike" , age: 30 }
   ES5 =>  var name = person.name;  
           var age = person.age;
   ES6 =>  const {name, age} = person; 
   
   ```

###  Whats temporal dead zone(TDZ)  Inrtoduced in ES6

 - var can hoisting...

 - In ES6  let and const also do hoisting BUT they will be put to TDZ and not will be visible until the line where they declared.
     
https://www.youtube.com/watch?v=OgE3P6kEPz4


###  *use strict*

Defines that JavaScript code should be executed in "strict mode" 

Pro: 
   - Better error checking
   
   - Improved performance
   
   - More secure code: Strict mode helps to reduce the number of potential security vulnerabilities in JavaScript code. 
   
   - *this* on global context is undefined
        
Contra: 
   - Compatibility issues: : Not all JavaScript code is compatible with strict mode
        
   - Cannot use function.caller  function.arguments

Can be added via:

 - add *use strict* at the top of the file

 - add *use strict* at the top of the function: function scope

 - use ES6 modules


###  Difference between REST and SPREAD operators

- SPREAD:  to collect several values to array  ```["1", "2", "3", ...names]```
    
- REST: to pass several values to function

   ```    
   function log(a, b, ...rest) {
      ....
   }
   log(1, 2, 3, 4,)
   
   ```

###  Types of errors in JS 

 - errors during web page loading: 
   
 - runtime error
    
 - logical error 
    
EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, CustomError, ThrowError

https://habr.com/ru/companies/piter/articles/695890/  [2018]   
https://habr.com/ru/companies/reksoft/articles/518050/ [2020]


###  What is Babel

Transpiler trasform new code (ECMA) to old variants for cross browser compatibility

 
###  Memoization
    
It does this by storing computation results in cache, and retrieving that same information from the cache

the next time it's needed instead of computing it again.

In the next function call - function will not be recalculated - it just return the data from cache.
   ```
   const fib = (n, memo) => {
      memo = memo || {};

      if (memo[n]) {
         return memo[n];
      }

      if (n <= 1) {
         return 1;
      }
      return memo[n] = fib(n-1, memo) + fib(n-2, memo);
   }

   ```

###   Cookie / sessionStorage / localStorage

|                |   cookie    | sessionStorage    | localStorage  
|----------------|:-----------:|------------------:|---------------:|
|    creator     |  server     |    client         |   client       |    
|    storied     |  manualy    | before tab closed |  forever       |    
| domain check   |   +         |      -            |        -       | 
|    capacity    |   4kb       |        5mb        |    5-10mb      | 
|   avialiable   | browser     |    current tab    |    browser     |  


###  What is browser IndexedDB (Web API)

IndexedDB is a way for you to persistently store data inside a user's browser. 

Because it lets you create web applications with rich query abilities regardless of network availability, your applications can work both online and offline.

Pros: Store on client side big amount of structured data. 

Contra: More complex than sessionStorage or localStorage

https://habr.com/ru/articles/569376/ [2021]    
https://habr.com/ru/articles/500834/[2020]
https://habr.com/ru/companies/ruvds/articles/415505/ [2018]   
https://learn.javascript.ru/indexeddb


###  Modal dialogs in JS       

 - confirm (OK/Cancel)
  
 - prompt  (OK/Cancel + input) 

 - alert   (OK) 


### JS is statically Typed or dynamically typed language 

Dynamically typed language, type of the type is checked during runtime.
You can override the var to other type (weak dynamically typed)
```var name;  name = 10;  name = "mike";```


##  Data types, operators

###  Data types in JS

at current moment:

 - string

 - number 

 - boolean

 - BigInt (..n)
 
 - Object

 - null  (typeof == object)

 - undefined 	

 - Symbol


###  Difference between == and ===

 ==  : abstract equality comparison operator. just compare the values. JS compare with type changing: ``` 1=="1" ```

 === : is the strict equality comparison operator (take care about data types)

Highly recommended to add strict mode:

 - add *use strict* at the start of the js document
 
 - add *use strict* at the start of the js function

 - in the ES6 for modules its ON by default


###  Whats is !! (double negotiation) 

it can be used to *convert* a value to a boolean. The second approach is to use Boolean(...)
    
Using the double negation operator is functionally equivalent to using the Boolean() function.
    
*falsy*:   0 |  undefined |  NaN  | null  |  ""  |  false    => ALWAYS false


###  Difference between null and undefined

 - undefined: the variable was declared but no value was set

 - null: definite set the the value is null (typeof null=='object')


###  Symbol 

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol 
— that's guaranteed to be **unique**. 

Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, 

and which are hidden from any mechanisms other code will typically use to access the object. 

**Every Symbol() call is guaranteed to return a unique Symbol.**

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


###  What is boxing/unboxing in JS

- BOXING: For promitive data types if you want to use methods(toLowerCase...for ex) 
   JavaScript would automatically wrap the primitive type into the corresponding object type => AUTOBOXING
   After calling its method object will be desrtoyed
   MANUAL BOXING -  Number(10)

 - UNBOXING: Opposite operation valueOf(). The process of unboxing can be achieved implicitly (coercion).

###  && (AND)  || (OR) operators

  - AND:  will return **first false** OR **last true value**
         
          ```
          console.log(false && 2021 && 'string')    // false
          console.log(2021 && {} && 'string')       // 'string'
		    console.log(true && null && 'string')     // null
         
          ```

  - OR:  will return **first true value**

         ```
         console.log(false || 2021 || 'string')    // 2021
         console.log(2021 || {} || 'string')       // 2021
		   console.log(true || null || 'string')     // true

         ```


###  What is NaN
   
Not-A-Number.  NaN===NaN => false.   Use to check if is Nan:  isNaN(value)  true/false

###  Can we change the value of const.

 - for primitives - NO

 - for objects/array - YES


###  What is % (Remainder)  operator  (remainder after deleting of two numbers)

Returns the remainder left over when one operand is divided by a second operand. 
It always takes the sign of the dividend
   
   ```
    13 % 5  =>  3    
   -13 % 5  => -3   
    4  % 2  =>  0   
   -4  % 2  => -0
    
   Note:  1 % 7 => 1   2 % 7 => 1   3 % 7 => 1:  cannot divide, we got 0 and add 1, 2, 3 to zero.

   ```

###  Whats Template Literals

String Delimited with backtick (`) characters, allowing for 

 - multi-line strings

 - string interpolation with embedded expressions

 - special constructs called tagged templates


## Function, Array

###  Difference between function DECLARATION and function EXPRESSION

The main difference between a function expression and a function declaration is 
the function name, which can be omitted in function expressions to create anonymous functions. 
   
 - Declaration:  use the function keyword and specify a name:
   
   ```
   function sum(a, b) { 
      return a+b; 
   }
   ```

 - Expression: create a function expression and MUST assign it to a variable that can be called. 
    
   ```
   const sum  = function(a, b) { return a+b; }
   const sum2  = (a, b) => { a+b;}      
   ```
 
 - Named Function Expression
	 It allows the function to reference itself internally.
	 It is not visible outside of the function.

   ```
	var func = function sum(a, b) {
		sum(1+2);
		return a+b;
	}
   ```


   NOTE: Function expressions in JavaScript are NOT HOISTED. 
         You can't use function expressions before you create them!
		 Therefore, only declared functions can be used before initialization.


###  What is Higher Order Functions

Which return other function OR take function as input parameter.


###  What is clean function

 - No side effects

 - Return the same result with the same input parameters


###  Difference between regular and arrow functions

  - *this* for arrow is always taken from parent context, it will not create its own context
  
  - arrow function cannot be used as a constructor
  
  - arrow has no *arguments* property
  
  - can be used as class methods, and can be called as callbacks.
 
In this case *this* will not be lost:

  ```
  class Person {
	  age: 42, 
	  getAge = () => {
	      return this.age;	
	  }
  }	  
  const person = new Person();
  setTimeout(person.getAge, 1000); /// 42
  ```

###  IIFE 

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
Avoid polluting the global namespace.


   ```
   (function () {
   // …
   })();

   ```

###  Currying 

Process in functional programming where possible to reorganized function with several arguments
to several inner functions with single argument

After receiven the last argument, function do the calculaton and return result

https://learn.javascript.ru/currying-partials   

https://habr.com/ru/companies/ruvds/articles/427295/ 2018

https://thecode.media/currying/


###  Debouncing function

Debouncing is a technique used to limit the number of times a function is executed in response to an event. 

It is particularly useful for functions that are triggered by events that occur frequently, such as scrolling or resizing. 

By debouncing a function, you can ensure that it is only executed after a certain delay since the last invocation. 

This helps improve performance by reducing the number of unnecessary function calls.


###  Difference between function and method 

 - function: block of code which is called by name and not connected to any object

 - method: is called by named and determine inside the object. Its connected to object and works with its data


###  function: pseudo array arguments

Every function has *arguments*, but it has only *length* property. Because  *arguments* its simply Object with values and propertry *length*.

You can convert to array via spread operator:  [...argumnets]. ARROW functions do NOT have arguments.


###  How parameters passed to functions

Always *by value*, BUT  for objects the value passed is the value of the reference

###  Why in JS the function is called as the *first-class* objects

We can use function and pass as other simple object or variable. 
The main difference of the function is - function can be called and return result.


###  Types of timers in JS
  
 - id = setTimeout(callback, time). Only once
   
 - id = setInterval(callback, time). Call via intervals

###  Arrays

 - forEach  (callback(element, index, array))   Unmatable


	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
    	- You can do action on each element

	Return: 
		- undefined 


-  map  (callback(element, index, array))       Unmatable

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
	      Return value from the callback - it will be pushed to the result array.

	Return: 
		- result Array 


-  filter  (callback(element, index, array))       Unmatable

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
	      Return value from the callback: must be predicate (true/false)
	      True: include element to the result array
	      False: do NOT include element to the result array

	Return: 
		- filtered Array 


-  every  (callback(element, index, array))       Unmatable

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
	      Return value from the callback: must be predicate (true/false)
	  	  If at least ONE iteration returns false - result will be false.

	Return: 
		- boolean 


- some  (callback(element, index, array))       Unmatable

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
	 	  Return value from the callback: must be predicate (true/false)
	 	  If at least ONE iteration returns true - result will be true.

	Return: 
		- boolean 


- reduce  (callback(acc, element, index, array), initial)       Unmatable

	- initial: initital value of any type. Default: first element of the array

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
	  	  On each iteration need to do actions with acc and return it.

	Return: 
		- acc 


-  reduceRight  (callback(acc, element, index, array), initial)       Unmatable

    START from end of the array.
    - initial: initital value of any type. Default: first element of the array

	Action:
		- Iterate each element of the array. For each element it will call the callback function. 
		  On each iteration need to do actions with acc and return it.

	Return: 
		- acc 


###  Difference between forEach and map

   forEach - executes a provided function once for each array element
	          return UNDEFINED
	map     - executes a provided function once for each array element
	          returns new array with each element being the result of the callback function.

  

###  What is generator

Add *  before the function name. Add yield to the for loop inside the function body.

After the first call function will return generator(iterator) with the *next* method. 


https://habr.com/ru/companies/otus/articles/685528/

https://habr.com/ru/companies/ruvds/articles/554288/

https://www.youtube.com/watch?v=b55hiUlhAzI


###  What is recursion 

Recursion is defined as a process which calls itself directly. 

Properties:
  
  - A recursive function must have a base case or stopping criteria to avoid infinite recursion.
  
  - The primary property of recursion is the ability to solve a problem by breaking it down into smaller sub-problems
  
  - Recursion involves calling the same function within itself, which leads to a call stack.
  
  - Recursive functions may be less efficient than iterative solutions in terms of memory and performance.

  Types: Tail |  Head  |  Tree  | Nested 


## Objects

###  Prototype inheritence

Each object in JS has property *__proto__* which is the ref to other object.
If we try to call object method, then JS try to find this property from current object to its superclass(s)
    
**How to create object without prototype**
```Object.create(null, {..our object})``` - object without prototype.
   
The trick here is in our first argument to Object.create. Normally this is where we would 
pass in the object that we want to serve as the prototype. 
But if we pass in null instead, our new object doesn't inherit from a prototype at all.


###  Diff between Object.freeze() and const
   
 - const:  just const the reference. 
   
 - Freeze:  tottally freeze the object ( make immutable)

###  How to create object

 - **object literal**  ```obj = {name: ""}```

 - **function constructor**  ```function Person(name){ this.name = name }```  ... new Persion("Mike")

 - Object.create(person)


###  How works method Object.create() 

Object.create() creates new object with the properties.
Simple way to inherite the object without calling the constructor.

```Object.create(proto[, propertiesObject])```

   ```
   var employee = {name: "Mike"};  
   var emp1 = Object.create(employee); // => emp1.prototype = employee;
   ```

And can **add new** or **override existing** methods/properties of employee:
   ```   
   var emp1 = Object.create(employee, {
       name: "Petr",
       Say(): function() {...}
   });
   ```

https://qna.habr.com/q/486340  [2020]

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create



###  What for is *new* word

When a function is called with the *new* keyword, the function will be used as a constructor. 

*new* will do the following things:

 - Creates a blank, plain JavaScript object. For convenience, let's call it *newInstance*
   
 - Call constructor — function Foo wth arguments and *this*, binded to just created object.

 - Executes the constructor function with the given arguments, binding newInstance as the this context
      (i.e. all references to this in the constructor function now refer to newInstance).
 
 - If the constructor function returns a non-primitive, this return value becomes the result 
      of the whole new expression. Otherwise, if the constructor function doesn't return anything 
      or returns a primitive, newInstance is returned instead.

https://habr.com/ru/articles/120193/


###  Why two equal objects is not == false    

Objects compared by reference. References(address in memory) are different for different objects  

```console.log({} == {}) => false```


###  Object.freeze()  and Object.seal()

 - Freeze: static method freezes an object. 
   Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
   A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, 
   their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 
   freeze() returns the same object that was passed in.
   NOTE: Freezing an object is the highest integrity level that JavaScript provides.

 - Seal: the same as Freeze BUT - Values of existing properties can still be changed as long as they are writable.

###  Deep / Shallow copy of the object
   
 - SHALLOW COPY: After change the original object - copy will change also. Just simply assing it:  const obj_copy = obj_original;

 - DEEP COPY: After change the original object - copy will NOT change.
    ``` {...original} | Object.assign(null, original) | JSON.parse(JSON.stringify(original)) ```


###  Immutable in JS        

Immutable - object cannot be changed after its creation: ```Object.freeze();```
   
Pro: 
  - easy of object compare
  - easy of use and test
  - may be increase of performance
    
Contra: 
  - may be increase of performance

https://habr.com/ru/companies/developersoft/articles/302118/


###  What is function call chaining

Object methods are called after each other => ```calculator.add(1).divide(2).add(3)```

Return *this* from the method.


###  How to determine if property exists

 - obj.hasOwnProperty('string')

 - Operator **in**     ``` console.log("string" in obj) ```

 - obj['string']  


###  Type of objects in JS       

 - Array
 
 - String

 - Date
 
 - Number

 - Boolean

 - Function

 - Math

 - RegExp

 - Object 


###  What is difference between *host* and *native* objects
	
  - **host** : objects which were provided by the envirement(browser or Node.js): console, http, history...

  - **native** : This is the Javascript objects: String, Math, Objects, RegExp...

  - **user objects**


###  What is Wrapper objects
   
JS has primitives(string, boolean...) But they still has methods (toUpperCase..)

Object wrapper - during runtime, primitive is temporary wrapped to his objects string-> new String with his methods...


###  What is for..of
   
 - **for..in** :  working with INDECES
   
 - **for..of** : working with VALUES
    
For..of can work with Map() and Set()


###  Diff between *in*  and *hasOwnProperty* - check if the property exists
   
 - *in* : check in prototype also 
    
 - *hasOwnProperty* : do NOT check in prototype 


###  Diff between typeof and instanceof 

 - typeof: determine the type of primitive
   
 - instanceof: is working on prototype level. Test if right operand was set in the chain of prototypes.
   Only for objects.
 
https://habr.com/ru/articles/675684/ [2022]    
https://habr.com/ru/articles/427253/  [2018]
https://dev.to/danhjoo7/the-differences-between-typeof-and-instanceof-in-oo-js-317f


###  Promise

It is an object used for async operations, with states.

- PEDNING              (start state)

- FULFILLED (.then)    (completed successfully)

- REJECTED  (.catch)   (operation failed with error)


### What is RegExp

Regular expressions are patterns used to match character combinations in strings.
In JavaScript, regular expressions are also objects. 

Methods:  match  |  replace  | test  | exec  | search  | split

Use: 
  - Using a regular expression literal: ```const re = /ab+c/;```
  
  - calling the constructor function of the RegExp object:  ```const re = new RegExp("ab+c");```
