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
<!--

<!-- ### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**

  ![User Profile Loader](./exercises/gifs/exercise-load-user.gif)

1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) --> 
