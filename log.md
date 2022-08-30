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

---
### Day 9: August 23, Tuesday

**Today's Progress**
- Scenario: I and My coworker J both perform **git pull** to get started.
1. I create a new branch called feature/myTest **git checkout -b feature/myTest** and commit the new code.
2. I perform **git pull origin main** to check if there is change in the main branch.
3. I type **git push -u origin feature/myTest** 
4. My coworker J is still working on his new branch called feature/myTest2.
5. He now performs **git pull**.
6. He's prompted with a merge conflict message.
7. After him and I discuss the conflict issue, he fixes code, add & commit the change, and push **git push -u origin feature/myTest2** 

**Thoughts** I started to feel more comfortable about using git commands. I got the hang of the conflict resolvement process! This feels awesome!!!😊

---
### Day 10: August 24, Wednesday

**Today's Progress**
- Learned **HEAD, git diff, git blame**
  - **git diff HEAD README.md**  ==> Shows the change between the current working tree status and the last commit
  - **git log --pretty=oneline**  ==> Shows the recent commits with its full ID
  - **git diff ID1 ID2**  ==> Shows the change between these two commits
  - **git blame README.md**  ==> Shows all the changes
  - **git blame -L 5,15 README.md**  ==> Shows the specified scope of lines
  - **git blame -l README.md**  ==> Commit ID shows in full 

- Common way of using git blame and git commit
  - 1. Get the ID of the commit with git blame README.md
  - 2. See the full log of the commit with git log -p 8digits

**Thoughts** 
I hope I can truly understand why those commits are helpful later by joining an open source project!!

---
### Day 11: August 25, Thursday

**Today's Progress**
- Learned **Forking**: It is useful when I want to contribute to the other developer's project without directly affecting it. It gives more control to the owner of the original repo.
- Forking Workflow
  1. Fork and copy the original repo to my remote repo.
  2. Clone it to my local repo.
  3. Create a new branch (my-branch).
  4. After making some changes, perform git add & commit
  5. Push the local repo (branch) to my remote repo wit **git push origin my-branch**
  6. Go to Github and create a new pull requset (PR)
  7. Click 'compare across forks' link.
  8. Choose the main branch for the original repo and the my-branch for my repo. 

**Thoughts** 
I cannot wait to join some open source project someday! 

---
### Day 12: August 26, Friday

**Today's Progress**
- Completed the Version Control Course by Meta.
- The concepts I need to learn practical usages of;
  1. git log, git diff, git blame
  2. redirection, pipe
  3. forking and contributing to open sources
- Started HTML and CSS in Depth by Meta.
  1. Learend **well-structured web pages** are the key for greate websites to support accessibility and SEO. 
  2. Semantic tags to add meanings to the content of the web pages.
  3. Some semantic tags requires the inclusion of the other tags: e.g. **section tag requires a heading in it**. 
  4. **artical** tag is versatile. As long as it is independently distributable, I can wrap it in article. 
  5. Ask 'where to'? A heading inside of a section? A heading directly under a main? 


**Thoughts** 
I already learned a lot about the tags. I thought I knew enough but I didn't. There are so much to learn. Stay humble and enjoy this journey! Imagine how cool websites you can create in the future!

---
### Day 13: August 27, Saturday

**Today's Progress**
- Learned the importance of **Meta tags** for search engine optimization(SEO).
- SEO: the process of making improvements to a website's content, semantics, and delivery to improve its ranking in search results.
- Based on the results of the analysis and the content on your website, the search engine will rank the website for various **search terms**.
- View port metadata is important for the user experience and it's also important for search engine optimization. This is because **many search engines now include websites mobile experience as a part of their ranking algorithms**.
- Learend the importance of having a **Template** to be able to start new projects faster.

**Haven't fully understood**
- meta http-equiv="..." tags: The instructor said "This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags."

**Thoughts** 
I love learning the html in a deeper level. Can't wait to apply all these knowledge in the near future.

---
### Day 14: August 28, Sunday

**Today's Progress**
- Learned why **social media cards** are important and how **Open Graph Protocol(OGP)** works.
- Quote of the day!! **User attention is currency.** A caption and image can drive users towards or away from a website. 
  - For a regular user scrolling through social media, the link provided with the image preview has only one chance and a moment’s attention to make a good impression. In such cases, the role of social media cards becomes very important.
- Another great tip! **the social media cards also play an important role in boosting the rankings for the web crawlers used by search engines.**

**Thoughts** 
So happy to finally understand why the other business social media were adding website links to their account's timeline!!!


---
### Day 15: August 29, Monday

**Today's Progress**
- Learned **Input and Form**
- label tag is associated with the input field for accessibility and better user experience. (the 'for' attribute in label tag and the 'id' in input tag)
- When submitting a form, you can use a button tag with type of submit attribute.

**Thoughts** 
It was refreshing to learn the basics of input and form. I now feel more comfortable and confident about creating a form. 


<!--
### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) -->
