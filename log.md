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


---
### Day 16: August 30, Tuesday

**Today's Progress**
- Reorganize my understanding of **label** tag. There are two cases when we want to use it.
1. When I want to simply wrap an input field when bare text is sitting ont the right side of the field (e.g. radio options).
2. When I want to add the descriptive text right before the input tag for a better user experience. This requires 'for'(in label) and 'id'(in input) association.
- Learned **datalist** tag. It works together with input tag since datalist contains just the text data.
  - Datalist is useful when we want to allow users to select the option or type the option.
  - It is also useful when there's a chance to add options later on.
  - Interestingly, the input tag doesn't have 'type' attribute for the datalist implementation.
- Finally understood why sometimes we want to use 'fieldset' tag. It is only when there needs a clear way to group options as in radio inputs.
 - radio inputs' **name** attributes should associate with the **id** value of the fieldset.

> We expect users to abide by rules. But, Humans are prone to errors. It's our job to ensure the shape of the data we expect in each field is correct. 
I also noticed that the **'name' attribute is almost always used** and I'll keep an eye on it. This is to send data in key/value pair later on. 

**Thoughts** 
Absolutely loved what I learned today. I finally feel comfortable about using form tags. This is the gift of being consistent in learning Front-end basics!


---
### Day 17: August 31, Wednesday

**Today's Progress**
Learned how to submit form data to a server. 
1. form tag can have ==> action='/login', method='POST'  
2. Full URL vs. absolute path vs. relative path
- If action attribute is not specified, the current page url will be used.
- If I'm on the 'https://wonmikwon.com/profile and I submit the form that has '/login', it will send a request to 'https://wonmikwon.com/login'
 That is, the absolute path is appended to the base URL of the website. 

**Thoughts** 
Not directly related to the subject (HTTP), but it was great to review how absolute/relative paths work. 


---
### Day 18: September 1, Thursday

**Today's Progress** Reviewed some confusing input attributes and form tags
- min, max: works for numerical inputs such as number, range, and date
- minlength, maxlength: works for a length of a text iput
- Elements that I need to work on more: select, datalist
- fieldset is used with a set of radio input options. It also groups multiple inputs (first name and last name.)
- 'input type=submit' vs. 'button type=submit' => the type must be specified for a submission behavior.

**Thoughts** 
I should not forget a 'name' attribute!


---
### Day 19: September 2, Friday

**Today's Progress** Reviewed 'audio' and 'video' tags
- It was insightful to learn that iframe element should be used only when you can trust the website 100% since it is very vulnerable to malitious security attacks. (There is a way to prevent it to some extent but there's still a chance to get attacked.)
- Used input type='range' and datalist together. I got the hang of the associatation of input's list attribute and datalist's id attribute. 

**Thoughts** 
I love being able to experience each element one by one in depth. Love this course!

---
### Day 20: September 3, Saturday

**Today's Progress** 
- iframe: Learned how to minimize security vulnerability concerns of using iFrame.
  - Use 'allow' attribute to limite the broswer features such as camera, microphone, API, geolocation, etc. 
  - User 'sandbox' attribute to set restrictions to the actions such as downloading a file, popup, modal, running JavaScript, etc. 
- Canvas: useful when embedding animated graphics (controlled with JavaScript logic!)

**Thoughts** 
I wonder how much detail of Canvas I need to know and be able to create the graphics.

---
### Day 21: September 4, Sunday

**Today's Progress** 
Learned the basics of flexbox
- Flexbox is single-dimensional. Repeat!! Flexbox is single-dimensional.
- Common use case A: Creating responsive columns in a single row that doesnt change into multiple lines. (Navigation, Searh bar, Main Content of Coursera desktop view)
- Common use case B: Binding a group of items that will change from one row to multiple rows according to the window size.

Refreshing concepts:
- flex-flow: set the direction and wrap/nowrap at the same time.
- flex-direction: if set to 'column' it means the main axis changes. Just like it rotates -90 degrees
  If this happens, the justify-content and align items properties get to switch their roles.

**Thoughts** 
I'm very happy that I finally feel like I get the practical usage of flexbox. However, I still need to really get it by coding by myself. Do not skip to the next part until I actually get to practice coding each example in the lesson!!

---
### Day 22: September 5, Monday

**Today's Progress** 
- align-items vs. align-content: align-items is for what's happening in each row, whereas align-content is what's happening to the group of rows in the flex container.
- flex: a shorthand property applied to flex items.
  - flex-grow: 0 (Usually set not to take up the available space)
  - flex-shrink: 1 (Usually set to shrink if necessary, like when the window gets narrower)
  - flex-basis: auto (Usually set to percentage. It defines the starting size of the item. If the flex-grow set to 1, it means, the size of the element will grow as the window size grows and keeping the percentage ratio.)
 
**Thoughts** 
I finally, I feel more confident about flex. I'm looking forward to creating a chart using flexbox.


---
### Day 23: September 6, Tuesday

**Today's Progress** 
- CSS grid: It is common to have 12 or 16 track columns when using CSS grid.
- Using **grid-column** property to a grid child, we can specify the starting column and spanning columns.
- Using **grid-auto-rows** or **grid-auto-columns**, with **fraction unit (fr)**, we can make the grid easier to modify.
 
**Thoughts** 
Still feeling like I'm very new to Grid. I need more practical exercises. 


---
### Day 24: September 7, Wednesday

**Today's Progress** 
- **grid-template-areas** in the container and **grid-area** when I want to assign each element to a specific cell. 
  - Let's say I create 4 names for 4 different areas. And I want to assign the html element to be allocated to the "area".
  - Suppose there are 2 x 3 table of 6 cells. I might want to distribute cells to have a total of 4 areas. This means a set of two cells will share one area and another set of two cells will share another area.
 
**Thoughts** 
I started to believe that taking a slow step one at a time helps me to examine the subject matter at hand deeper and digest each concept better. This slow and micro improvement approach, I feel, helps me grow confidence and develop small muscles to do a bigger task later. Persistence is the key and to do so, I need to break things down and do really small things each day. 


---
### Day 25: September 8, Thursday

**Today's Progress** 
- I created 12 column tracks, using **grid-template-columns**
- I can make the cells span using **grid-column** property.
- I now understand **1fr**. **fr**is a flexible unit that specifies the proportion of the available space. 
  - e.g.) 'grid-template-rows: auto 1fr auto' means the first and third rows will take up the minimum content space while the second row will take up the rest of the available space.
 
**Thoughts** 
I started to see the value of minimizing each task's workload. For example, if my goal itself is really a small piece rather than a decent chunk, I tend to complete it without feeling pressured. This style of work can be also applied to other work situations beyond this learning context.

---
### Day 26: September 11, Sunday

**Today's Progress** Played with **grid-template-areas** and **grid-area**.
 
**Thoughts** 
I started to see the value of the grid system! I love grid-template-areas and can't wait to use it for a real-world project. 

---
### Day 27: September 12, Monday

**Today's Progress** Learned more about selectors including **psuedo-elements** and **psuedo-classes**.
- General sibling selectors h1 ~ p
- Adjacent sibling selectors h1 + p
  - **General sibling vs. Adjacent sibling**: They both affect elements that follow a specified element. Adjacent combinators will only target the first element and Sibling combinators target all elements of the same type after the specified element.
  - From what I see, these sibling selectors seem to be useful for adding styles to the list items because the items are grouped under the same container and has a predictable structure with some rules.
- Psuedo-classes are related to the states of the interaction (user action or form) or specific position-based states
- Psuedo-elements help style a specific part of an element. They use double colons! 
  - ::first-letter, ::first-line, ::selection, ::marker, ::before, ::after

**Thoughts** 
I was fascinated with the usage of the advanced selectors! I will try to implement them in the real-world projects.

---
### Day 28: September 13, Tuesday

**Today's Progress** Learned **transform** and **transition** properties.
- Transform property modifies the spatial position of an element. (scale, angle). But the change is instantaneous!
- To create illusion of motion, we need to controle the speed of this effect.
- That's where the **transition** property kicks in!
- The change happens gradually over a span of the specified seconds.
- They are also used with **pseudo classes such as hover or active** to get the change triggered with user's interaction. 

**Thoughts** 
Now, I clearly understand why and how the transform, transition, and the browser event (user interaction) all work together and which part they are contributing to!!! So happy!!

---
### Day 29: September 16, Friday

**Today's Progress** 
- Clearly understood the difference between transform + transition vs. animation + @keyframes.
  - transform + transition is used for simple animation that improves interactivity (hover effect, click effect, etc.)
  - animation + keyframes is used literally for animation that is relatively more complex and sophisticated. 

**Thoughts** 
I wonder what the popular reveal effect uses for its result. I also want to search how I can use the animation with scroll down effect. 

---
### Day 1: September 27, Tuesday

**Today's Progress**
  - Learned about CSS debugging and the importance of following best practices for future inspection and teamwork.
  - Avoid over-specificity.
  - Use specificity as broadly as possible (container over content)
  - Use stylelint to stay consistent with how to write rules
  - Use CSS reset libraries for browser-consistent CSS
  - Stay concious of redundancy of rules, selectors, and properties to prevent confusion.  

**Thoughts** 
 Been away from learning coding due to spending time in other freelancer projects. I'm going through reflective time this week and decided to resume the 100-Day Code sprint again from the Day1! It's okay to fail but I would do my best to complete this 2nd trial!


### Day 2: September 28, Wednesday

**Today's Progress**
  - Learned about the importance of UI testing. 

**Thoughts** I feel like my time is not being used most efficiently. I will reorganize how I spend my time this Saturday and Sunday. No exceptions!


<!--
### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) -->
