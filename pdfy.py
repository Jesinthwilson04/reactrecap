from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Preformatted, Frame, PageTemplate, Table, TableStyle
from reportlab.lib.units import inch

# --- PDF Configuration ---
FILENAME = "JavaScript_MERN_Interview_Questions.pdf"

# --- Data Content (150 Questions) ---
# Format: (Question, Detailed Answer, Code Snippet or None)

sections = {
    "Section 1: JavaScript Basics (1–25)": [
        ("1. What is JavaScript?", 
         "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. Originally designed for client-side scripting to make web pages interactive, it has evolved (via Node.js) to run on the server-side as well.\n\nJavaScript engine (like V8 in Chrome) executes the code. Unlike compiled languages like C++, JS is JIT (Just-In-Time) compiled, meaning it is compiled to machine code during execution rather than beforehand.",
         "// Example of basic interaction\nconsole.log('Hello World');\ndocument.body.style.background = 'blue';"),
        
        ("2. Difference between var, let, and const?", 
         "The main differences lie in scope, hoisting, and reassignability:\n\n1. **var**: Function-scoped. It is hoisted to the top of its scope and initialized with 'undefined'. It can be redeclared and reassigned.\n2. **let**: Block-scoped (only exists within {}). It is hoisted but remains in the 'Temporal Dead Zone' until the declaration line is reached. Can be reassigned but not redeclared.\n3. **const**: Block-scoped. Must be initialized during declaration. It cannot be reassigned (though objects declared with const can be mutated).", 
         "if (true) {\n  var a = 10; // Function scoped\n  let b = 20; // Block scoped\n}\nconsole.log(a); // 10\nconsole.log(b); // Error: b is not defined"),

        ("3. What is hoisting?", 
         "Hoisting is the JavaScript engine's behavior of moving variable and function declarations to the top of their containing scope (global or function) during the compilation phase, before code execution.\n\nWhile declarations are hoisted, initializations are not. This means a 'var' variable can be accessed before it's written but will be 'undefined'. Function declarations are fully hoisted, meaning you can call them before they appear in the code.", 
         "console.log(x); // undefined\nvar x = 5;\n\ngreet(); // 'Hello'\nfunction greet() { console.log('Hello'); }"),

        ("4. Difference between == and ===?", 
         "**== (Abstract Equality)**: Performs type coercion before comparing. If types differ, JS tries to convert them to a common type (usually number) before checking equality.\n\n**=== (Strict Equality)**: Checks both the value and the data type. No coercion occurs. It is generally recommended to always use === to avoid unexpected bugs caused by automatic type conversion.", 
         "console.log(5 == '5');  // true (string '5' becomes number 5)\nconsole.log(5 === '5'); // false (different types)"),

        ("5. What are primitive data types?", 
         "Primitives are data types that are not objects and do not have methods. They are immutable. In JavaScript, there are 7 primitive types:\n1. **String**: Text data.\n2. **Number**: Integers and floating-point.\n3. **BigInt**: For integers larger than 2^53 - 1.\n4. **Boolean**: true or false.\n5. **Undefined**: Variable declared but not assigned.\n6. **Null**: Intentional absence of value.\n7. **Symbol**: Unique identifiers.", 
         "let type = typeof 'Hello'; // 'string'\nlet empty = null;"),

        ("6. What is NaN?", 
         "NaN stands for 'Not-a-Number'. It is a property of the global object and results from an arithmetic operation that cannot produce a valid number (e.g., dividing zero by zero or multiplying a string by a number).\n\nInterestingly, the type of NaN is actually 'number'. To check if a value is NaN, you should use `Number.isNaN()` because `NaN === NaN` evaluates to false.", 
         "console.log('abc' / 2); // NaN\nconsole.log(typeof NaN); // 'number'"),

        ("7. What is type coercion?", 
         "Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). This happens in operations involving different types.\n\nIt can be 'explicit' (using `Number()`) or 'implicit' (using `==` or `+` with strings).", 
         "const val = '5' - 1; // 4 (Implicit coercion to Number)\nconst str = '5' + 1; // '51' (Implicit coercion to String)"),

        ("8. What is the typeof operator?", 
         "The `typeof` operator returns a string indicating the type of the operand. It is useful for debugging and type checking variables dynamically.", 
         "typeof 42; // 'number'\ntypeof 'blubber'; // 'string'\ntypeof true; // 'boolean'\ntypeof {}; // 'object'"),

        ("9. What is null?", 
         "Null represents the intentional absence of any object value. It is one of JavaScript's primitive values. It is often treated as 'falsy' for boolean operations.", 
         "let user = null; // Explicitly empty"),

        ("10. What is undefined?", 
         "Undefined means a variable has been declared but has not yet been assigned a value. It is also the return value of functions that do not explicitly return anything.", 
         "let x;\nconsole.log(x); // undefined"),

        ("11. Is JavaScript single-threaded?", 
         "Yes, JavaScript is single-threaded. This means it has one Call Stack and one Memory Heap. It executes code in order and must finish executing a piece of code before moving to the next.\n\nHowever, it handles concurrent operations (like API calls) using the Event Loop, Web APIs, and Callback Queues, giving the illusion of multi-threading.", 
         None),

        ("12. What is a loop?", 
         "A loop is a programming structure that repeats a sequence of instructions until a specific condition is met. Common JS loops include `for`, `while`, and `do...while`.", 
         "for(let i=0; i<3; i++) {\n  console.log(i);\n}"),

        ("13. What is a ternary operator?", 
         "The ternary operator is the only JavaScript operator that takes three operands. It is frequently used as a concise alternative to an `if...else` statement.", 
         "const status = age >= 18 ? 'adult' : 'minor';"),

        ("14. What is a boolean?", 
         "A Boolean represents a logical entity and can have two values: `true` and `false`.", None),

        ("15. What is BigInt?", 
         "BigInt is a special numeric type that provides support for integers of arbitrary length. A BigInt is created by appending `n` to the end of an integer literal.", 
         "const huge = 9007199254740991n;"),

        ("16. What is Infinity in JS?", 
         "Infinity is a numeric value representing a number greater than any other number. `-Infinity` represents a number lower than any other number.", 
         "console.log(1 / 0); // Infinity"),

        ("17. What is parseInt()?", 
         "The `parseInt()` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).", 
         "parseInt('10.5'); // 10"),

        ("18. What is parseFloat()?", 
         "The `parseFloat()` function parses an argument and returns a floating-point number. Unlike parseInt, it keeps decimals.", 
         "parseFloat('10.5'); // 10.5"),

        ("19. What is isNaN()?", 
         "The global `isNaN()` function converts the argument to a number and then checks if it is NaN. `Number.isNaN()` is stricter and does not convert the type.", 
         "isNaN('hello'); // true (converts to NaN)\nNumber.isNaN('hello'); // false (not a number type)"),

        ("20. What is console.log()?", 
         "It is a function that writes a message to the debugging console. It is primarily used for debugging purposes.", None),

        ("21. What is a comment?", 
         "Comments are lines of code ignored by the compiler. Single line uses `//`, multi-line uses `/* ... */`.", None),

        ("22. What is scope?", 
         "Scope determines the accessibility (visibility) of variables. JS has Global Scope, Function Scope, and Block Scope.", None),

        ("23. What is a variable?", 
         "A variable is a container for storing data values. In JS, we declare them using var, let, or const.", None),

        ("24. What is JSON?", 
         "JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate.", 
         "{ \"name\": \"John\", \"age\": 30 }"),

        ("25. What is typeof null?", 
         "It returns `'object'`. This is a well-known historical bug in JavaScript that was never fixed to maintain backward compatibility.", 
         "console.log(typeof null); // 'object'")
    ],

    "Section 2: Functions & Scope (26–50)": [
        ("26. What is a function?", 
         "A function is a block of code designed to perform a particular task. A function is executed when 'something' invokes it (calls it).", 
         "function add(a, b) { return a + b; }"),

        ("27. What is a function declaration?", 
         "A function declaration uses the `function` keyword followed by the name. These are hoisted completely to the top of their scope.", 
         "function sayHello() { return 'Hi'; }"),

        ("28. What is a function expression?", 
         "A function expression allows us to define a function inside an expression (often assigned to a variable). These are NOT hoisted.", 
         "const sayHello = function() { return 'Hi'; };"),

        ("29. What is an arrow function?", 
         "Arrow functions (ES6) provide a concise syntax. Crucially, they do not bind their own `this`. They inherit `this` from the parent scope (lexical scoping).", 
         "const add = (a, b) => a + b;"),

        ("30. What is a callback?", 
         "A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.", 
         "function process(callback) {\n  callback();\n}"),

        ("31. What is global scope?", "Variables declared outside any function have Global Scope. They can be accessed from anywhere in the script.", None),
        ("32. What is block scope?", "Variables declared with `let` or `const` inside a `{ }` block cannot be accessed from outside the block.", None),
        ("33. What is function scope?", "Variables defined inside a function are not accessible (visible) from outside the function.", None),

        ("34. What is closure?", 
         "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.", 
         "function makeCounter() {\n  let count = 0;\n  return function() {\n    return count++;\n  };\n}"),

        ("35. What is hoisting in functions?", 
         "Function Declarations are hoisted completely (body and all). Function Expressions (var x = function...) hoist the variable `x` as undefined, but not the function body.", None),

        ("36. What is recursion?", 
         "Recursion is a technique where a function calls itself to solve a problem. It requires a base case to stop the loop.", 
         "function factorial(n) {\n  if (n===1) return 1;\n  return n * factorial(n-1);\n}"),

        ("37. What is an anonymous function?", "A function without a name. Often used as arguments to other functions or in IIFEs.", None),
        
        ("38. What is a default parameter?", 
         "Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.", 
         "function multiply(a, b = 1) { return a * b; }"),

        ("39. What is the rest operator?", 
         "The rest parameter syntax `...args` allows a function to accept an indefinite number of arguments as an array.", 
         "function sum(...numbers) {\n  return numbers.reduce((a,b)=>a+b);\n}"),

        ("40. What is the spread operator?", 
         "The spread operator `...` allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.", 
         "const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1,2,3,4]"),

        ("41. What is IIFE?", 
         "Immediately Invoked Function Expression. It is a function that runs as soon as it is defined. It is used to create a private scope.", 
         "(function() { console.log('I run now'); })();"),

        ("42. What is lexical scope?", 
         "Lexical scope means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. Inner functions contain the scope of parent functions.", None),

        ("43. What are higher-order functions?", 
         "A function that accepts another function as an argument OR returns a function. Examples: `map`, `filter`, `reduce`.", None),

        ("44. What is currying?", 
         "Currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.", 
         "const add = a => b => a + b;\nadd(5)(3); // 8"),

        ("45. What is memoization?", 
         "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.", None),

        ("46. What is a pure function?", 
         "A function where the return value is determined only by its input values, without observable side effects.", None),

        ("47. What is the arguments object?", 
         "An Array-like object accessible inside functions that contains the values of the arguments passed to that function. (Note: Not available in arrow functions).", None),

        ("48. Can functions return functions?", "Yes, because functions are first-class citizens in JavaScript.", None),
        ("49. What is temporal dead zone?", "The period between entering the scope and the actual declaration of a `let` or `const` variable.", None),
        ("50. What is shadowing?", "Variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope.", None)
    ],

    "Section 3: Arrays & Objects (51–75)": [
        ("51. What is an array?", "An ordered collection of values (items). In JS, arrays are objects and can hold different data types.", "let fruits = ['Apple', 'Banana'];"),
        ("52. What is indexing?", "Arrays are zero-indexed, meaning the first element is at position 0.", None),
        ("53. What is push()?", "Adds one or more elements to the end of an array and returns the new length.", "arr.push(4);"),
        ("54. What is pop()?", "Removes the last element from an array and returns that element.", "arr.pop();"),
        ("55. What is shift()?", "Removes the first element from an array and returns that element.", None),
        ("56. What is unshift()?", "Adds one or more elements to the beginning of an array.", None),

        ("57. What is map()?", 
         "Creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array.", 
         "const num = [1,2];\nconst dbl = num.map(x => x*2); // [2,4]"),

        ("58. What is filter()?", 
         "Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.", 
         "const nums = [1, 10, 5];\nconst big = nums.filter(x => x > 5); // [10]"),

        ("59. What is reduce()?", 
         "Executes a user-supplied 'reducer' callback function on each element of the array, passing in the return value from the calculation on the preceding element. It reduces the array to a single value.", 
         "const sum = [1,2,3].reduce((acc, curr) => acc + curr, 0); // 6"),

        ("60. What is find()?", "Returns the first element in the provided array that satisfies the provided testing function.", None),
        ("61. What is some()?", "Tests whether at least one element in the array passes the test implemented by the provided function.", None),
        ("62. What is every()?", "Tests whether all elements in the array pass the test implemented by the provided function.", None),

        ("63. What is destructuring?", 
         "A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.", 
         "const [a, b] = [10, 20];\nconst { name } = userObj;"),

        ("64. What is an object?", "A collection of related data and/or functionality, usually consisting of several variables and functions (which are called properties and methods when they are inside objects).", None),
        ("65. What is dot notation?", "Accessing properties using a dot: `obj.key`.", None),
        ("66. What is bracket notation?", "Accessing properties using brackets: `obj['key']`. Necessary if keys have spaces or are dynamic variables.", None),
        ("67. What is Object.keys()?", "Returns an array of a given object's own enumerable property names.", None),
        ("68. What is Object.values()?", "Returns an array of a given object's own enumerable property values.", None),
        ("69. What is Object.entries()?", "Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.", None),
        ("70. What is Object.freeze()?", "Freezes an object: other code cannot delete or change any properties.", None),
        ("71. What is Object.seal()?", "Seals an object: prevents new properties from being added, but existing properties can still be changed.", None),
        ("72. What is Array.isArray()?", "Determines whether the passed value is an Array.", None),
        ("73. What is JSON.stringify()?", "Converts a JavaScript object or value to a JSON string.", None),
        ("74. What is JSON.parse()?", "Parses a JSON string, constructing the JavaScript value or object described by the string.", None),
        ("75. Difference between array and object?", "Arrays are ordered lists indexed by numbers. Objects are unordered collections indexed by keys (strings/symbols).", None)
    ],

    "Section 4: DOM & Async JS (76–100)": [
        ("76. What is the DOM?", 
         "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.", None),

        ("77. What is DOM manipulation?", "The process of using JavaScript to add, remove, and modify elements of the website.", None),
        ("78. What is querySelector()?", "Returns the first element within the document that matches the specified selector, or group of selectors.", None),
        
        ("79. What is an event?", 
         "Events are things that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can 'react' on these events (like clicks, mouseovers, keypresses).", None),

        ("80. What is addEventListener()?", 
         "A method that attaches an event handler to the specified element without overwriting existing event handlers.", 
         "btn.addEventListener('click', () => { alert('Clicked'); });"),

        ("81. What is event bubbling?", 
         "A type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.", None),

        ("82. What is event capturing?", "The opposite of bubbling. The event is captured by the outermost element and propagated to the inner elements.", None),
        ("83. What is stopPropagation()?", "Prevents further propagation of the current event in the capturing and bubbling phases.", None),
        
        ("84. What is asynchronous programming?", 
         "A programming pattern that enables your program to start a potentially long-running task and continue responsive to other events while that task runs, rather than having to wait until that task has finished.", None),

        ("85. What is setTimeout()?", "Sets a timer which executes a function or specified piece of code once the timer expires.", None),
        ("86. What is setInterval()?", "Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.", None),

        ("87. What is a Promise?", 
         "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is a cleaner way to handle async code than callbacks.", 
         "new Promise((resolve, reject) => { ... })"),

        ("88. What are Promise states?", "1. Pending (initial state)\n2. Fulfilled (operation completed successfully)\n3. Rejected (operation failed)", None),
        ("89. What is .then()?", "Method used to schedule a callback to be executed when the Promise is successfully resolved.", None),
        ("90. What is .catch()?", "Method used to schedule a callback to be executed when the Promise is rejected.", None),

        ("91. What is async?", "The `async` keyword is placed before a function to ensure it returns a promise.", None),
        ("92. What is await?", "The `await` keyword works only inside async functions. It makes JavaScript wait until the promise returns a result.", "async function getData() {\n  let data = await fetch(url);\n}"),

        ("93. What is fetch()?", "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.", None),
        ("94. What is callback hell?", "The situation where callbacks are nested within other callbacks several levels deep, making it difficult to understand and maintain the code.", None),

        ("95. What is the Event Loop?", 
         "The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. It constantly checks if the Call Stack is empty; if so, it moves tasks from the Task Queue to the Call Stack.", None),

        ("96. What runs first: Promise or setTimeout?", 
         "Promises (Microtasks) run before setTimeout (Macrotasks). The Event Loop clears the Microtask queue before checking the Macrotask queue.", None),

        ("97. What is the microtask queue?", "A queue for high-priority tasks like Promise callbacks and MutationObserver.", None),
        ("98. What is the macrotask queue?", "A queue for tasks like setTimeout, setInterval, setImmediate, and I/O tasks.", None),
        ("99. What is innerHTML?", "A property that gets or sets the HTML or XML markup contained within the element.", None),
        ("100. What is textContent?", "A property that represents the text content of a node and its descendants. Unlike innerHTML, it does not parse HTML.", None)
    ],

    "Section 5: Advanced JavaScript (101–125)": [
        ("101. What is 'this'?", 
         "The `this` keyword refers to the object it belongs to. In a method, `this` refers to the owner object. Alone, it refers to the global object. In a function, it refers to the global object (or undefined in strict mode).", 
         "const obj = {\n  name: 'Me',\n  print: function() { console.log(this.name); }\n};"),

        ("102. What is a prototype?", "Prototypes are the mechanism by which JavaScript objects inherit features from one another.", None),
        ("103. What is the prototype chain?", "When accessing a property, JS looks at the object. If not found, it looks at the object's prototype, and so on, until null is reached.", None),
        ("104. What is __proto__?", "An accessor property that exposes the [[Prototype]] of an object.", None),
        
        ("105. What are classes in JS?", 
         "Classes are templates for creating objects. They encapsulate data with code to work on that data. Introduced in ES6, they are syntactic sugar over JavaScript's existing prototype-based inheritance.", 
         "class Car {\n  constructor(brand) { this.brand = brand; }\n}"),

        ("106. Why don't arrow functions have 'this'?", "Arrow functions capture the `this` value of the enclosing context where the function is defined.", None),
        ("107. Why can't arrow functions be constructors?", "Since they don't have their own `this`, they cannot be initialized with `new`.", None),
        ("108. What is pass by value?", "Primitive types are passed by value (copy). Changing the copy does not affect the original.", None),
        ("109. What is pass by reference?", "Objects are passed by reference. Changing the reference affects the original object.", None),
        ("110. What is deep copy?", "Creating a new object with new memory locations for all properties, including nested ones.", None),
        ("111. What is shallow copy?", "Copying the top-level properties, but nested objects are still shared references.", None),
        ("112. What is spread for objects?", "Copies own enumerable properties from a provided object onto a new object.", None),
        ("113. What is illegal shadowing?", "Declaring a variable with `var` in a scope where a `let` or `const` variable with the same name already exists.", None),
        ("114. What is strict mode?", "A way to opt in to a restricted variant of JavaScript (`'use strict';`). It eliminates some silent errors and prohibits some syntax.", None),
        ("115. Why use strict mode?", "It makes it easier to write 'secure' JavaScript and prevents accidental globals.", None),
        ("116. What is call()?", "Invokes a function with a given `this` value and arguments provided individually.", "func.call(thisObj, arg1, arg2);"),
        ("117. What is apply()?", "Invokes a function with a given `this` value and arguments provided as an array.", "func.apply(thisObj, [argsArray]);"),
        ("118. What is bind()?", "Creates a new function that, when called, has its `this` keyword set to the provided value.", "const bound = func.bind(thisObj);"),
        ("119. What is a constructor function?", "A regular function used with the `new` keyword to create objects.", None),
        ("120. What is instanceof?", "Tests if the prototype property of a constructor appears anywhere in the prototype chain of an object.", None),
        ("121. What is a Symbol?", "A unique and immutable primitive value, often used to identify object properties without collision.", None),
        ("122. What is garbage collection?", "The process by which the JS engine automatically frees up memory that is no longer in use (objects with no references).", None),
        ("123. What is tail recursion?", "A recursive function where the recursive call is the last action in the function. Some engines optimize this to save stack space.", None),
        ("124. What is event delegation?", "A pattern where you place a single event listener on a parent element instead of one on every child element.", None),
        ("125. What is memoization (Advanced)?", "A specific form of caching involving caching the return value of a function based on its parameters.", None)
    ],

    "Section 6: Node.js & Express (126–150)": [
        ("126. What is Node.js?", 
         "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine.", None),

        ("127. What is npm?", "npm (Node Package Manager) is the default package manager for Node.js, consisting of a CLI and a registry of public packages.", None),
        ("128. What is module.exports?", "A special object which is included in every JS file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module.", None),
        ("129. What is require()?", "A built-in function to include external modules that exist in separate files.", "const fs = require('fs');"),
        ("130. What is the fs module?", "The file system module allows you to work with the file system on your computer (read, write, delete files).", None),
        ("131. What is the http module?", "Allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). It can create a server.", None),
        ("132. What is non-blocking I/O?", "Input/Output operations that do not block the execution of further operations. Node.js uses this to handle high concurrency.", None),
        ("133. What is event-driven architecture?", "A software architecture pattern promoting the production, detection, consumption of, and reaction to events.", None),
        
        ("134. What is Express.js?", 
         "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing and middleware.", None),

        ("135. What is routing?", "Routing refers to determining how an application responds to a client request to a particular endpoint (URI) and method (GET, POST, etc.).", "app.get('/', (req, res) => res.send('Hi'));"),
        
        ("136. What is middleware?", 
         "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.", 
         "app.use((req, res, next) => {\n  console.log('Time:', Date.now());\n  next();\n});"),

        ("137. What is express.json()?", "It is a built-in middleware function in Express. It parses incoming requests with JSON payloads.", None),
        ("138. What is a REST API?", "Representational State Transfer. An architectural style for an application program interface (API) that uses HTTP requests to access and use data.", None),
        ("139. What is CRUD?", "Create, Read, Update, Delete. These are the four basic functions of persistent storage.", None),
        ("140. What is HTTP?", "Hypertext Transfer Protocol. The foundation of data communication for the World Wide Web.", None),
        ("141. What are HTTP methods?", "GET (retrieve), POST (submit), PUT (update), DELETE (remove), PATCH (partial update).", None),
        ("142. What are status codes?", "Standard response codes given by web site servers on the Internet. 2xx (Success), 3xx (Redirect), 4xx (Client Error), 5xx (Server Error).", None),
        ("143. What is 401?", "Unauthorized. The request has not been applied because it lacks valid authentication credentials.", None),
        ("144. What is 500?", "Internal Server Error. The server encountered an unexpected condition.", None),
        ("145. What is CORS?", "Cross-Origin Resource Sharing. A mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.", None),
        ("146. What is JWT?", "JSON Web Token. A compact, URL-safe means of representing claims to be transferred between two parties.", None),
        ("147. What is MongoDB?", "A NoSQL database program that uses JSON-like documents with optional schemas.", None),
        ("148. What is Mongoose?", "An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.", None),
        ("149. What is MVC?", "Model-View-Controller. An architectural pattern that separates an application into three main logical components.", None),
        ("150. What is package.json?", "A file that contains metadata about the project and lists the dependencies (packages) that the project needs to run.", None)
    ]
}

def create_pdf():
    doc = SimpleDocTemplate(FILENAME, pagesize=A4, rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    styles = getSampleStyleSheet()

    # --- Custom Styles ---
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Title'],
        fontSize=24,
        spaceAfter=30,
        textColor=colors.darkblue
    )

    h1_style = ParagraphStyle(
        'CustomH1',
        parent=styles['Heading1'],
        fontSize=18,
        spaceBefore=20,
        spaceAfter=10,
        textColor=colors.teal,
        borderPadding=5,
        borderWidth=0,
        borderBottomWidth=1,
        borderColor=colors.teal
    )

    q_style = ParagraphStyle(
        'Question',
        parent=styles['Heading2'],
        fontSize=12,
        spaceBefore=12,
        spaceAfter=6,
        textColor=colors.black
    )

    a_style = ParagraphStyle(
        'Answer',
        parent=styles['Normal'],
        fontSize=10,
        leading=14,
        spaceAfter=8
    )

    code_style = ParagraphStyle(
        'Code',
        parent=styles['Code'],
        fontSize=9,
        leading=11,
        leftIndent=10,
        rightIndent=10,
        spaceBefore=6,
        spaceAfter=6,
        backColor=colors.whitesmoke,
        borderColor=colors.lightgrey,
        borderWidth=1,
        borderPadding=6,
        fontName='Courier',
        allowWidows=0,
        allowOrphans=0
    )

    # --- Build Story ---
    story = []

    # Title Page
    story.append(Spacer(1, 2 * inch))
    story.append(Paragraph("JavaScript & MERN", title_style))
    story.append(Paragraph("150 Interview Questions & Detailed Answers", ParagraphStyle('SubTitle', parent=styles['Heading2'], alignment=1)))
    story.append(Spacer(1, 1 * inch))
    story.append(Paragraph("A comprehensive guide covering:", styles['Normal']))
    story.append(Paragraph("• JavaScript Basics", styles['Normal']))
    story.append(Paragraph("• Functions & Scope", styles['Normal']))
    story.append(Paragraph("• Arrays & Objects", styles['Normal']))
    story.append(Paragraph("• DOM & Async JS", styles['Normal']))
    story.append(Paragraph("• Advanced JavaScript", styles['Normal']))
    story.append(Paragraph("• Node.js & Express", styles['Normal']))
    story.append(PageBreak())

    # Table of Contents (Manual for simplicity in script)
    story.append(Paragraph("Table of Contents", h1_style))
    for section_title in sections.keys():
        story.append(Paragraph(section_title, a_style))
    story.append(PageBreak())

    # Content Loop
    for section_title, questions in sections.items():
        story.append(Paragraph(section_title, h1_style))
        
        for q_text, a_text, code_text in questions:
            # Add Question
            story.append(Paragraph(q_text, q_style))
            
            # Add Answer (Splitting by double newline for paragraphs)
            for paragraph in a_text.split('\n\n'):
                story.append(Paragraph(paragraph.strip(), a_style))
            
            # Add Code if exists
            if code_text:
                story.append(Preformatted(code_text, code_style))
            
            story.append(Spacer(1, 4))
        
        story.append(PageBreak())

    # Build
    doc.build(story)
    print(f"Successfully generated: {FILENAME}")

if __name__ == "__main__":
    create_pdf()