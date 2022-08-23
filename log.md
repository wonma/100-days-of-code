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

---

### Day 5: August 19, Friday

**Today's Progress**

- Learned how to implement Jest for unit testing.
- Completed the final assignment of the JavaScript course [Programming with JavaScript taught by Meta, @Coursera](https://www.coursera.org/learn/programming-with-javascript)
  - Coded a logic for a simple receipt maker using loop and if statements.
  - Learned the basic concept of defensive programming.
    - You should think about what to display when the arguments are not passed in or invalid...etc.
    - Implement test-driven development(TDD). Red Green Refactor cycle (test code -> programming -> test -> refactor -> test)

**Thoughts** Although I completed another course of this Meta Front-end developer series, I don't feel confident and this is a natural feeling. I just feel happy that I could learn what I want to learn and I just love the composed state of mind when I'm in coding mode. Let's continue till I cannot physically do it!😊

---


### Day 6: August 20, Saturday

**Today's Progress**

- Started the next Coursera course, [Version Control taught by Meta, @Coursera](https://www.coursera.org/learn/introduction-to-version-control)
- Learned the importance of effective collaboration to work in a development team
- Some lessons learned are:
  - Try to write smaller changes so that you can easily revert them.
  - Along with VCS, workflow is important for the quality and efficiency. We need a procedure (I understood it as a protocol, imagine a diagram).
  - Continuous Integration (CI): small changed merged frequently

**Thoughts** I feel a bit intimidated with terminologies but I tried to stay open and positive about this new concepts. Also, it seems like communication can be improved by clearly taking a note on each change. Finally, I will practice **'ruthlessly prioritizing tasks'** and differentiate which is important amongst endless flow of tasks.


---

### Day 7: August 21, Sunday

**Today's Progress**

- Learned basics of Unix Commands: cd, ls, ls -a, ls -l, pwd, mv, mkdir, touch
- Didn't fully get; **cat, cp, vi, vim, less, grep, redirection, pipe**

**Thoughts** I felt a bit bored with using command lines but at the same time I feel like this is a type of hurdle I need to jump over to become a great developer.

---
### Day 8: August 22, Monday

**Today's Progress**
- Learned Git and Github
    - What I didn't understand in 'branch': **git push -u origin feature/lesson** is where it'll come in with a **pull request for peer review**. I got it. However, the teacher said using **-u** means that I'm only going to get updates from the upstream and the result is 'feature/lesson' becoming the **origin**. I need to understand this part better.

**Thoughts** I now understand when (in what context) the (merge) conflict can happen. It's either when I pull or I push. If there's no conflict, it'll automerge. Ah-ha!😊


<!--
### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) -->
