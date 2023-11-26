### Day 001: September 8, Friday

**Solved**

- FreeCodeCamp Code Challenge: [Sum All Numbers in a Range](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)

**Today I Learned**

- .slice() method: used to copy an array or part of an array
  - arr.slice() returns a copied array, not modifying the original array
  - arr.slice(startIndex, endIndexNotInclusive) copies the specified range of items from the original array
- Gauss formula: used to get a sum of the series of integers
  - [Gauss formula](http://mathcentral.uregina.ca/QQ/database/QQ.02.06/jo1.html)
- How to destructure an array to easily assign the items into variables.
- How to use the Array spread operator to copy an array
- .sort() method: the shortcomings of this array sorting method? It strictly follows Unicode code points. May end up with unexpected results. We can write a comparison function as a callback to precisely sort the items in an ascending or descending order.
  - [How to sort an array accurately](https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/)

**To Study Further**

- Solving the same problem with recursion and the reduce method

### Reset and Resume

### Day 001: September 19, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Diff Two Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)

**Today I Learned**

- .indexOf method: returns the index of the item found in an array. If it is not found, it returns -1.
- A technique of creating an inner function in an outer function: for DRY! Whenever there's a need to use the same code for different inputs inside of a function.
- .filter method: returns a new array with items that return true from a callback function
- .concat method: useful when combining two arrays

**To Study Further**

- Solving the same problem with 'Set' data type and 'Array.from' method

### Day 002: September 20, Wednesday

**Solved**

- FreeCodeCamp Code Challenge: [Seek and Destroy](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy)

**Today I Learned**

- arguments object: an object that stores all of the values passed to the function. The arguments object takes on the structure of a JSON Object.
- .slice method: it copies the part of the array.
  - .slice() or .slice(0) : copy the entire array
  - .slice(1) : the first argument means the starting index of the part to copy. The ending index is not specified as a second argument, which then copies all the elements up to the last element of the array.
  - .slice(1, 4) : it will copy from the 1st indexed element (inclusive) up to the element right before the 4th index.
- Object.values(someObj) will return an array of a given object's enumerable values.

**To Study Further**

- Solving the same problem with FCC's example solutions and compare with my solution.

### Day 003: September 21, Thursday

**Solving...**

- FreeCodeCamp Code Challenge: [Wherefore Art Thou](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

**Today I Learned**

- Object.keys(someObj) : will return an array of values from the object.
- for (const i in obj) : will iterate over the object properties.

**To Study Further**

- Continue studying this challenge.

### Day 004: September 22, Friday

**Solved**

- FreeCodeCamp Code Challenge: [Wherefore Art Thou](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

**Today I Learned**

- How to set a checker using a variable that takes true or false.

**To Study Further**

- Solve the same problem using Object.keys() and .filter() method
- Solve the same problem using .every() method.

### Day 005: September 23, Saturday

**Solved**

- FreeCodeCamp Code Challenge: [Wherefore Art Thou](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

**Today I Learned**

- **A-ha moment!**
- To use .filter() method, I used for loop and forEach.
- forEach didn't work and I investigated the reason.
- Within the filter method, using forEach didn't break the loop since the 'return false' wrapped in the if statement was constrained by forEach. The 'return false' didn't affect the filter method.
- Meanwhile, using for loop did break the loop since the 'return false' was not constrained by the for loop. Hence, the 'return false' affected the filter method and it filtered the collectino array as intended.

**To Study Further**

- Solve the same problem using .every() method.

### Day 006: September 24, Sunday

**Solving...**

- FreeCodeCamp Code Challenge: [Spinal Tap Case](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

**Today I Learned**

- a taste of .split and .join methods

**To Study Further**

- Study the regex from the example solutions

### Day 007: September 25, Monday

**Solving...**

- FreeCodeCamp Code Challenge: [Spinal Tap Case](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

**Today I Learned**

- Started reviewing regular expressions (FreeCodeCamp)
- I can read what /\s+|\_+/g means.

**To Study Further**

- Study the regex from the example solutions

### Day 008: September 26, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Spinal Tap Case](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

**Today I Learned**

- Studied regular expressions.
  - Difference between a capturing group and a [non-capturing group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - The concept of quantifier, token, substring... [RegExr](https://regexr.com/3da8k)

**To Study Further**

- Study the concept of lookaheads in regex: positive lookahead, negative lookahead

### Day 009: September 27, Wednesday

**Solved**

- FreeCodeCamp Code Challenge: [Pig Latin](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)

**Today I Learned**

- .replace() can be utilized to create a new string where part of the original string has been removed. It doesn't change the original string.

**To Study Further**

- Check other example solutions.
- Understand the use of g flag in the .match() method. [Return value of .match method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value)
- Study Capturing groups further in this web page. [Javascript.info](https://javascript.info/regexp-groups)

### Day 010: September 28, Thursday

**Solved**

- FreeCodeCamp Code Challenge: [Search and Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace)

**Today I Learned**

- .subString() is almost identical to .slice()
- String.prototype.indexOf(subStr) returns the beginning index of the occurrence of the substring.
- .charAt() returns a string the representing the specified index.

### Reset and Resume (Skipped - 1 day)

### Day 001: September 30, Saturday

**Solved**

- FreeCodeCamp Code Challenge: [DNA Pairing](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)

**Today I Learned**

- How to use switch or object for pair Lookup
- My mistake:
  - A new array cannot be created with variable names as items. Instead, new Array(var1, var2, ...) can be used.
  - When using **switch**, omitting 'break;' can result in unexpected fallthrough.
  - When using **map** for an array, it must be assigned to a variable or the whole statement should be returned right away because it doesn't alter the original array.

### Day 002: October 1, Sunday

**Solving**

- FreeCodeCamp Code Challenge: [Mssing letters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

**Today I Learned**

- How to create an array of all alphabets using the combination of the methods below.
  - Array(num) : returns an empty array with the length of the number
  - array.keys() : returns an array iterator, a series of values taken from keys of an array (0, 1, 2, ...) that are ready to be iterated.
  - Array.from() : creates an array from an array iterator or iterable (array-like) objects (e.g. String is iterable!)
  - String.fromCharCode(num)
    Reference: [Create an Array of Alphabet Characters](https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3)

**Study Further**

- [JavaScript Iterator](https://www.geeksforgeeks.org/javascript-iterator/)
- Difference between Object.keys(obj) and array.keys()

### Day 003: October 2, Monday

**Solved**

- FreeCodeCamp Code Challenge: [Mssing letters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

**Today I Learned**

- How to create an object with a variable, using bracket notation.

**Study Further**

- Check other developers' example solutions to the same problem.

### Day 004: October 3, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Missing letters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

**Today I Learned**

- String.fromCharCode(num): is a static method of String. Always use it as String.fromCharCode(). It will return a string created by using the specified Unicode values.
- 'ABC'.charCodeAt(index): returns the Unicode value of the character at the given index.

**Study Further**

- Check other developers' example solutions to the same problem.

### Day 005: October 4, Wednesday

**Solved**

- FreeCodeCamp Code Challenge: [Sorted Union](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)

**Today I Learned**

- array.includes(item): this method determines whether an array includes a certain value among its entries, returning true or false.
- array.reduce((acc, curr) => acc + curr, initialValue): this method returns a value that results from running the "reducer" callback function over the entire array.

**Study Further**

- Check other developers' example solutions to the same problem.

### Day 006: October 5, Thursday

**Solved**

- FreeCodeCamp Code Challenge: [Sorted Union](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)

**Today I Learned**

- [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments): it is an iterable, array-like object, which means it can be used with for loop, has a length property and indexed properties, but it doesn't have Array's built-in methods like forEach(), map(), filter().. etc.
- arguments object can be converted to a real Array, using one of slice(), Array.from(), or spread syntax.
- [array.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat): this method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- [new Set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#using_the_set_object): This constructor function can be used to remove duplicate items in an array. Refer to this to learn more about its [relation to Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#relation_to_arrays).

**Study Further**

- Review new Set()

### Day 007: October 6, Friday

**Solved**

- FreeCodeCamp Code Challenge: [Sum All Odd Fibonacci Numbers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers)

**Today I Learned**

- [Fibonacci program](https://www.geeksforgeeks.org/javascript-program-to-print-fibonacci-series/#): A Fibonacci series in JavaScript is a mathematical series of numbers that starts with fixed numbers 0 and 1. All the next numbers are generated using the sum of the last two numbers.

**Study Further**

- Implementing a fibonacci code using recursion.

### Day 008: October 7, Saturday

**Solving**

- FreeCodeCamp Code Challenge: [Sum All Primes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

**Today I Learned**

- [Prime number](https://en.wikipedia.org/wiki/Prime_number): A prime number (a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. The opposite of prime is composite. For example, 4 is composite because it is a product (2 x 2) in which both numbers are smaller than 4.
- Primality: The property of being prime is called primality. A method called trial division is checking the primarlity of a given number n by testing whether n is a multiple of any integer between 2 and square root of n.

### Day 009: October 8, Sunday

**Solved**

- FreeCodeCamp Code Challenge: [Sum All Primes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

**Today I Learned**

- [Modulo operator %](https://www.freecodecamp.org/news/javascript-modulo-operator-how-to-use-the-modulus-in-js/): The modulo operator in JavaScript, also known as the remainder operator, is used to find the remainder after dividing one number by another.
- [Dividend, divisor, quotient, and remainder](https://www.geeksforgeeks.org/find-quotient-and-remainder-by-dividing-an-integer-in-javascript/#)

### Day 010: October 9, Monday

**Solved**

- FreeCodeCamp Code Challenge: [Smallest Common Multiple](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple)

**Today I Learned**

- Least common multiple (smallest common multiple) of a certain range of numbers is the smallest positive integer that is divisible by all the numbers.

**Study Further**

- Math.max.apply() vs. Math.max()

### Day 011: October 10, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Drop it](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it)

**Today I Learned**

- The .splice() method returns the items that have been taken out. The original array will be modified after items are taken out.
- Using .slice() method with the non-existing index will return [] (an empty array).
- for loop can be stopped with the 'break' keyword withtout needing to use 'return'.
- The 'for loop' may show the unexpected result if the target array is modified while it is looped.

**Study Further**

- 'break' keyword in for loop.

### Day 012: October 11, Wednesday

**Solved**

- FreeCodeCamp Code Challenge: [Steamroller](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller)

**Today I Learned**

- How to flatten arrays using a recursive method.
  - Using [].concat(...arr) to flatten the array and useing .some(Array.isArray)check if an element has any inner arrays
  - Using .push(...steamrollerArr(element)) to create a flattened array recursively.

**Study Further**

- .some() method

### Day 013: October 12, Thursday

**Solved**

- FreeCodeCamp Code Challenge: [Binary Agent](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents)

**Today I Learned**

- String.fromCharCode(num1, ..., numN) : returns a string.
  e.g.) In 'String.fromCharCode(65)', 65 is a UTF-16 code unit. It returns 'A'.
- str.charCodeAt(index): the numeric Unicode value of the character at the given index.
- [parseInt(string, radix)](https://www.freecodecamp.org/news/parseint-in-javascript-js-string-to-int-example/): extracts numbers from strings.
- arr.join() : without an argument, commas will be used by default when joining the elements in the array.

**Study Further**

- [Unicode Character - What Every Developer Should Know About Encoding](https://www.freecodecamp.org/news/everything-you-need-to-know-about-encoding/)

### Day 014: October 13, Friday

**Solved**

- FreeCodeCamp Code Challenge: [Everything Be True](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true)

**Today I Learned**

- **.every(callbackFn)** method: The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.

### Day 015: October 14, Saturday

**Solved**

- FreeCodeCamp Code Challenge: [Arguments Optional](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional)

**Today I Learned**

- How to approach the problem:
  First, there are two consideratiions:
  - 1. The type of arguments needs to be a number.
  - 2. The second argument is optional.
- So, the first condition to check is whether the first argument is a number or not. If it's not a number, the function would not need to process the code any further, which then would return 'undefined'.
- If the first condition results in 'true', the function will go through the next-level condition.

  - A. If the second argument is a number, return the sum of the two arguments.
  - B. If the second arguement doesn't exist, return the inner function that takes a new argument and return the calling of the function itself with the two arguments (the new one and the first argument which has been memorized using closure.)

**Study Further**

- How destructuring works with the array-like 'arguments' object
  e.g.) const [first, second] = arguments

### Day 016: October 15, Sunday

**Solved**

- FreeCodeCamp Code Challenge: [Make a Person](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person)

**Today I Learned**

- **Constructor function**: Constructors use the keyword 'this' to set properties of the object they will create. 'this' refers to the new object it will create.
- **Local variables** can be defined within the constructor. Using closure, these variables can be accessed by calling a method that returns them. They can be updated with a method as well.

### Day 017: October 16, Monday

**Solved**

- FreeCodeCamp Code Challenge: [Map the Debris](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris)

**Today I Learned**

- **Reformatting the Object**: Using '.map({prop1, prop2})' method, we can return the reformatted objects. In this exercise, one of the properties has been replaced with a new property.
- **A new way of copying an array**

```
const newArr = JSON.parse(JSON.stringify(arr))
```

- **Difference between map and forEach**:
  1. map returns a new array while forEach has no return value (anything you return from forEach is discarded).
  2. map does not mutate the original array while forEach may mutate it if you intend to using reassignment or keywords.

example 1:

```
newArr.forEach(function(item) {
    ...
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });
```

example 2:

```
    let array = [1, 2, 3, 4];
    array.forEach((ele, index) => array[index] = ele * 2);
```

- [For-in loop](https://www.geeksforgeeks.org/javascript-for-in-loop/):
  For-in loop is used to iterate over the properties of an object.
- [What does enumerable property mean in JavaScript?](https://www.geeksforgeeks.org/what-does-enumerable-property-mean-in-javascript/)
  An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method. All the properties which are created by simple assignment or property initializer are enumerable by default.
- For-in loop vs. forEach loop:
  Generally it is recommended not to use for-in loop for iterating over an array. To iterate over an array, for loop is the best to use in terms of performance.

**Study Further**
[Difference between forEach and for loop in Javascript
](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)

### Day 018: October 17, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Palindrome Checker](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

**Today I Learned**

- In regular expressions, **/\w/** means numbers, alphabets(A-Z, a-z), and underscore.

### Day 019: October 18, Wednesday

**Solving...**

- FreeCodeCamp Code Challenge: [Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

**Today I Learned**

- How to assign multiple variables at once.
  e.g.) const [var1, var2, var3] = [value1, value2, value3]
- How to convert a number to a string.
  1. str = '' + num
  2. String(num)
  3. num.toString()

### Day 020: October 19, Thursday

**Solved**

- FreeCodeCamp Code Challenge: [Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

**Today I Learned**

- How to convert a string to a number.
  Number(str)

### Day 021: October 20, Friday

**Solved**

- FreeCodeCamp Code Challenge: [Caesars Cipher](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)
  This is a problem that can be solved easily with the knowledge of str.charCodeAt(index) and String.fromCharCode(utf-16 code number).
  The key is to understand that in the sequence of A to Z, there is a point where the character's code + 13 results in passing the last character 'Z', which then needs being counted from 'A' again.

**Today I Learned**

- String.fromCharCode(code number) returns a string representing the UTF-16 unit code number.
- str.charCodeAt(index) returns the UTF-16 unit code number.
- str.charAt(index) returns the character on the index.

### Day 022: October 21, Saturday

**Solving**

- FreeCodeCamp Code Challenge: [Telephone Number Validator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

**Today I Learned**

- [**How to Remove the First Character from a String**](https://tecadmin.net/remove-first-character-from-string-in-javascript/#:~:text=To%20remove%20the%20first%20character%20from%20a%20string%20using%20the,1%20as%20the%20starting%20index.&text=2-,let%20str%20%3D%20%22Hello%20World!%22%3B,%3B%20%2F%2F%20%22ello%20World!%22)

```
let str = "Hello World!";
let newStr = str.substring(1); // "ello World!"
```

or

```
let str = "Hello World!";
let newStr = str.replace(/^./, ""); // "ello World!"
```

or

```
let str = "Hello World!";
let newStr = str.slice(1); // "ello World!";
```

or

```
let str = "Hello World!";
let newStr = str.substr(1, str.length - 1); // "ello World!"
```

### Day 023: October 22, Sunday

**Solved**

- FreeCodeCamp Code Challenge: [Telephone Number Validator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

### Day 024: October 23, Monday

**Solving**

- FreeCodeCamp Code Challenge: [Cash Register](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

### Day 025: October 24, Tuesday

**Solved**

- FreeCodeCamp Code Challenge: [Cash Register](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

**Today I Learned**

- When implmenting subtraction it is important to check if the result is within a certain decimal point.
  To limit the number of digits after a decimal point, you can use '.toFixed()'. Note that this method turns a number value to a string.

### Day 026: October 25, Wednesday

**Improved**

- Natours CSS Project

**Today I Learned**

- The image can be adjusted to the size of the surrounding box with object-fit:cover and height:100%.

### Day 027: October 26, Thursday

**Improved**

- Natours CSS Project

**Today I Learned**

- **Common bug fix**: when a click on an element doesn't work, check the element's HTML markup. There's a chance some other element's area is covering the clickable element.

### Day 028: October 27, Friday

**Today I Learned**

Reviewed responsive images in the Advanced CSS and Sass course.

- The 3 use cases of responsive images:

1.  Resolution switching: an image doesn't need to be high-resolution in a small screen.
2.  Density switching: an image may not look sharp enough if the image with the regular resolution is used for high-dpi devices.
3.  Art direction: a different image can be served for a smaller screen while the key details are preserved.

### Day 029: October 28, Saturday

**Today I Learned**

Reviewed a few concepts related to responsive images

- Resolution: Resolution is a measurement of the number of pixels that can be contained on a display screen or in a camera sensor.
- [DPR (Density Pixel Ratio)](https://docs.imgix.com/apis/rendering/pixel-density/dpr): Device Pixel Ratio (DPR) is the ratio between the physical pixel density of a device and its logical pixel density. The dpr parameter is best used with techniques such as srcset, so that you can define when you want high-DPR images to be served and at what ratios.

### Day 030: October 29, Sunday

**Today I Learned**
Two cases of serving responsive images while accounting for DPR, Device Pixel Ratio.

1. Forcing the browser to use different images for different viewports & displays of different density (Density switching + Art direction switching).

```
<picture>
  <source sercset="...-small-1x.png 1x, ....-small-2x.png 2x" media="(max-width: 37.5em)">
  <img srcset="...1x.png 1x, ...2x.png 2x">
</picture>

```

2. Letting the browser choose one of the two images of different resolutions to serve different viewports & different DPRs (Density switching + Resolution switching)

```
<img srcset="img/nature.jpg 300w, img/nature-large.jpg 1000w"
    sizes="(max-width:600px) 30vw, (max-width:900px) 20vw, 300px"
    src="img/logo-green-large.png">
```

### Day 031: October 30, Monday

**Today I Learned**
How to offering a high-density version of an image for the background image written in CSS

- Take into consideration two scenarios
- Scenario 1: High-density display
  - Use the high-density version image of 2000px from 600px viewport width.
- Scenerio 2: Standard display
  - Use the high-density version image from 2000px viewport width.

```
.header{
    /* Apply only if the viewport width is less than 2000px*/
    background-image: linear-gradient(to right bottom, orange, red),
        url(../img/hero-small.jpg)

    /* Apply only if the device is high-res with a viewport width of at least 600px or
    if it is standard resolution with viewport width of at least 2000px */
    @media (min-resolution: 192dpi) and (min-width: 600px),
    (min-width: 2000px) {
    background-image: linear-gradient(to right bottom, orange, red),
        url(../img/hero.jpg);
    }
}
```

[**Related Link: Media queries**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

### Day 032: October 31, Tuesday

**Today I Learned**

- Feature query using @supports

```
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color-black, .8);
    visibility: hidden;
    opacity: 0;
    transition: all .3s;

    @supports (backdrop-filter:blur(0)) or (-webkit-backdrop-filter:blur(0)) {
        background-color: rgba($color-black, .3);
        backdrop-filter:blur(10px);
    }
  ...
}
```

### Day 033: November 1, Wednesday

**Today I Learned**

1. When to use **`<figure></figure>`**
   The `<figure>` tag can optionally have a caption using `<figcaption>` for an image, a video, a graph, or even a table. It can be useful when there is a need to group multiple images and semantically provide clear information to them.

2. How to specify data in sizes attribute of `<img>` tag.
   The source size value is a CSS length, which means it may be specified using font-relative unites (em), absolute units (px), or the vw unit which lets you specify the width as a percentage of the viewport width. (1vw being 1% of the viewport width) Lengths such as 50% or 100% are not allowed.

[HTML Image Element: sizes property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)

```
// This code was written only for practice purposes and is not complete.
  <figure class="composition">
      <img
          src="./assets/images/nat-1-large.jpg"
          srcset="
              ./assets/images/nat-1-large.jpg 1000w,
              ./assets/images/nat-1.jpg 300w"
          sizes="(max-width:900px) 27vw,
              (max-width:1200px) 20vw,
              (min-width:1200px) 302px"
          alt="Rocky mountains and lake"
          class="composition__img composition__img--1">
      <img src="./assets/images/nat-2-large.jpg" alt="Bike tour spot with hills" class="composition__img composition__img--2">
      <img src="./assets/images/nat-3-large.jpg" alt="Top of the mountain during sunset" class="composition__img composition__img--3">
  </figure>
```

### Day 034: November 2, Thursday

**Today I Learned**
How to implement responsive images with srcset and sizes attributes using calc()

```
<img
    srcset="
        ./assets/images/nat-1.jpg 300w,
        ./assets/images/nat-1-large.jpg 1000w,
    "
    sizes="(max-width:900px) calc((100vw - 12rem)/3),
        (max-width:1199px) calc(((100vw - 22rem)/2)*0.55),
        302.5px"
    src="./assets/images/nat-1-large.jpg"
    alt="Rocky mountains and lake"
    class="composition__img composition__img--1">
```

The video I got help from: [**Responsive Images Tutorial by Austin Shelby**](https://www.youtube.com/watch?v=4VUfk464vzk)

### Day 035: November 3, Friday

**Today I Learned**
Reviewing the webpack configuration of the Natour project.

- css-loader, style-loader, HTMLWebpackPlugin, MiniCssExtractPlugin...

### Day 036: November 4, Saturday

**Today I Learned**
Reviewing the webpack configuration of the Natour project.

- babel-loader and autoprefixer

### Day 037: November 5, Sunday

**Today I Learned**
Worked on the Natour project.

- Added responsive images
- Fixed padding issues on popup

### Day 038: November 6, Monday

**Today I Learned**
Worked on the Natour project.

- Fixed the reviews section for a responsive layout.

### Day 039: November 7, Tuesday

**Today I Learned**
Worked on the Natour project.

- Fixed the form component for a responsive layout.
- Added a hover ainmation to the composition images.

### Day 040: November 8, Wednesday

**Today I Learned**
Reviewed the CSS Selectors below.

- Pseudo-classes: state-based selectors
- Examples of Pseudo-classes
  - User action states: `:hover`, `:active`, `:focus`
  - Form states: `:disabled`, `checked` `invalid`
  - Specific position-based states:`:first-of-type`, `:last-of-type`, `:nth-of-type(odd)`, `:nth-last-of-type(2)`
  - Negation: `:not(.someClass)`
- Attribute Selectors
  - `[attribute^=value]`, `[attribute$=value]`, `[attribute*=value]`, `[attribute~=value]`
- Adjacent Sibling Selector: useful when creating an input & label interaction

```
.form {
  ...
  // Case1. The label reveals when the text input gets typed, which means the placeholder-shown state becomes false.
  &__input--text:not(:placeholder-shown) + &__label--text {
    transform: translateY(4.5rem);
    opacity: 1;
    visibility: visible;
  }

  // Case2. The circle indicator of the radio input is controlled.
  &__input--radio:not(:checked) + &__label--radio::before {
    opacity: 0;
  }

  &__input--radio:checked + &__label--radio::before {
    opacity: 1;
  }
}
```

### Day 041: November 9, Thursday

**Today I Learned**
Worked on the Natour project.

- Upgraded the current hamburger menu using JavaScript so that each menu link can show the user the targeted section.

### Day 042: November 10, Friday

**Today I Learned**
Custom WordPress Portfolio Site

- Checked the current development structure (Github - DeployHQ - Stating site on Hostinger)
- Checked the folder structure of the portfolio site

Natour CSS Project

- Brainstormed the content details of the project to put on my portfolio website.

### Day 043: November 11, Saturday

**Today I Learned**
Reviewed ins and outs of the flex-item property of flexbox: flex, flex-grow, flex-shrink, and flex-basis.

### Day 044: November 12, Sunday

**Today I Learned**
Reviewed ins and outs of the flexbox.
[Codepen - Flexbox basic 01](https://codepen.io/wonma/pen/eYxRdaQ)

### Day 045: November 13, Monday

**Today I Learned**
Finding the real applications of the flexbox on the Coursera website.

### Day 046: November 14, Tuesday

**Today I Learned**
Analyzed how the elements on Coursera websites are using flexbox.

### Day 047: November 15, Wednesday

**Today I Learned**
Reviewed and organized what I learned in the Natour project.

### Day 048: November 16, Thursday

**Today I Learned**
ZTM Web Developer Course

- Learned the basics of CSS Grid.

```
    // Frequently used value:
    grid-template-columns: repeat(3, 1fr)
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
    gap: 20px;
    grid-template-rows: 1fr;

    // Individual cell spanning control:
    grid-column: 1/3 (== grid-column-start:1 + grid-column-end:3)
    grid-column: span 2;
```

[CSS Grid Cheatsheet](https://grid.malven.co/)

### Day 049: November 17, Friday

**Today I Learned**
Practiced CSS Grid - Building the minimum website layout.

### Day 050: November 18, Saturday

**Today I Learned**
Practiced CSS Grid - Building the minimum website layout.

### Day 051: November 19, Sunday

**Today I Reviewed**
4 Ways of Creating a Function

- Function declaration
- Function expression (named or anonymous)
  - Arrow function (anonymous)
  - IIFE (== Immediately Invoked Function Expression)
    [JavaScript Functions Tutorial by Oluwatobi Sofela](https://www.freecodecamp.org/news/javascript-function-iife-parameters-code-blocks-explained/)

Difference between `grid-template` and `grid-auto`

- Concept of implicit vs. explicit grids
  [Understanding the difference between grid-template and grid-auto by bitsofcode](https://bitsofco.de/understanding-the-difference-between-grid-template-and-grid-auto/)

CSS Grid Units
[CSS Grid Track Options](https://mastery.games/post/grid-track-options/)

- fr over %:
  Percentages are based on the grid container size, so they don't care what else is going on in the grid. Adding a small gap may cause a grid container to overflow. - mastery.games

### Day 052: November 20, Monday

**Today I Reviewed**
Loop

- for loop, while, do while, forEach

DOM Manipulation

- Rendering list items with a given todo list (array)
- getElementsByTagName, getElementsByClassName, getElementById
- querySelector
- querySelectorAll
- Note: Cache the selectors in variables!

```
const list = document.querySelector('ul')
```

Change the style by classes, not by someElement.style

- ele.className: this clears up the whole classes of the element and add the new class to it.
- ele.classList: this is used a lot!
  ele.classList.add
  ele.classList.remove
  ele.classList.toggle
- ele.getAttribute(attributeName): this returns a value of the attribute
- ele.setAttribute(attributeName, value)

### Day 053: November 21, Tuesday

**Today I Reviewed**

- Simple To-do list logic with `addEventListener`

### Day 054: November 22, Wednesday

**Today I Reviewed**

- Tried to understand Promise.

### Day 055: November 23, Thursday

**Today I Reviewed**

- Reviewed the concept of 'scope' in JavaScript.
  - scope is about variable access.
  - root scope: the variable is added to the window object.
  - child scope: any variable created inside functions are in child scope. The variable checks if its definition is in the same scope first and then check in the parent scope.

### Day 056: November 24, Friday

**Today I Reviewed**

- the ES6 syntax on ZTM.

### Day 057: November 25, Saturday

**Today I Reviewed**

- Coursera Coding Interview quiz

### Day 058: November 26, Sunday

**Today I Reviewed**

- How to use `Promise`. Implemented it for avfake login logic.
