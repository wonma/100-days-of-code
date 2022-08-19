# 100 Days Of Code - Log

### Day 1: August 15, Monday

**Today's Progress**: Understood what is Unit testing and why we need to do testing.

- Unit testing: Testing the smallest units of code in isolation (fast)
- Why we test codes: To make sure a software behaves as expected

**Thoughts:** What I'm learning is the basic concepts. I feel a bit in rush wanting to do code exercises but it is okay to spend time in learning the concepts without actually coding as long as I'm learning something new!

---

### Day 2: August 16, Tuesday

**Today's Progress**: Reviewed the concept of a prototype object, inheritance with the construction of classes. Understand what data structure is and why we need to talk about it.

- Data Structure: it is about how to store data so that it can be used efficiently in completing a certain type of task. (Object, Array, Map, Set, etc.)
- 'Map' data structure example:
<pre><code>//👍 Easy to access, remove, add on
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.delete('Jessie')
contacts.size // 0
</code></pre>
- 'Set' data structure example: 
<pre><code>//👍 Easy to filter out duplicate array items
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}
</code></pre>

**Thoughts:** Trying to experience the value of reviewing the basic concepts to retain them. It is interesting to see how many new things I get to see with fresh eyes while going over the content I learned two weeks ago.

---
### Day 3: August 17, Wednesday

**Today's Progress**: I've gone through two mini exercises about event handler and DOM manipulation.

**Thoughts** I realized however easy the exercise looks, I must try coding it from beginning to end by myself at least once. 

**Link(s) to work**
[eventHandling_01](/exercises/eventHandling/eventHandling_01.js)
[eventHandling_02](/exercises/eventHandling/eventHandling_02.js)


---
### Day 4: August 18, Thursday

**Today's Progress**
- Completed one mini exercise about event handler
- Reviewed JSON: 
    - JSON is a subset of JavaScript. 
    - JSON can be a data format but also a file. 
    - Strings & Keys must be double-quoted.
    - Functions(methods) cannot be included (silently ignored).
    - It can be objects or **arrays**.

**Thoughts** I realized that taking it slow is very important in learning the new concepts.

**Link(s) to work**
[eventHandling_03](/exercises/eventHandling/eventHandling_03.js)


<!--
### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) -->
