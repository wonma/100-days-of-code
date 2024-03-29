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

  - **git diff HEAD README.md** ==> Shows the change between the current working tree status and the last commit
  - **git log --pretty=oneline** ==> Shows the recent commits with its full ID
  - **git diff ID1 ID2** ==> Shows the change between these two commits
  - **git blame README.md** ==> Shows all the changes
  - **git blame -L 5,15 README.md** ==> Shows the specified scope of lines
  - **git blame -l README.md** ==> Commit ID shows in full

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
> I also noticed that the **'name' attribute is almost always used** and I'll keep an eye on it. This is to send data in key/value pair later on.

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

### Day 3: September 29, Thursday

**Today's Progress** Learned how to start building layouts for a home page.

- Three things to remember.

  1. Plan the visual layout first.
  2. Then, plan the semantic HTML structure.
  3. After that, plan how to code CSS with flexbox or grid.
  4. Finally, choose em or rem and consistently use it.

- To improve the user experience,
  1. Focus on **Intentional Engagement**. Keep the user interacting with your website and drive revenue through purchases or interaction with advertisements.
  2. It is a good exercise to list what customers will be looking for when they visit the website and try to make it as easy as possible for your users to get that information.

**Thoughts** I love the approach to start building the website. Many times, it is challenging to get the foundation ready in a proper way. Always keep in mind. Spending enough time in planning and building the foundation is the key to success.

### Skipped Friday.

Reflection: My little excuse is that I had to put all my effort to make the prospect meeting successful (which I made it) and had to join the important gathering + joining another important online meeting. I couldn't put all these things behind. I think I should have started the day by completing 100-Day missions first. And my brain is asking 'why?'. I'm saying this. **"Disciplining myself is the only way I can get closer to my goal."**

### Day 4: October 1, Saturday

**Today's Progress** Finished coding the barebone HTML document.

- In the process, I got to review...
  1. the usage of meta tags
  2. SEO mindset. Thinking of the difference between semantic tags vs. container tags is a must.

**Thoughts** I feel my foundation of HTML/CSS is getting stronger.

### Day 5: October 2, Sunday

**Today's Progress** Congratulations! I've completed 'HTML and CSS in Depth' by Meta course on Coursera.

- Finished the little lemon 'home' page project.
  1. I'm now more confident using flexbox.
  2. I started to pay more attention to semantic markup of HTML to improve accessibility.

**Thoughts**
I still need to review the learning content a lot but I'm more confident that learning front-end development is valuable not only for engineers but also for UX/UI designers.

### Day 6: October 3, Monday

**Today's Progress** Started 'React Basics' by Meta course on Coursera.

- Learned the overview of the key concepts of React.
  1. Components are standalone UI that eventually merge into the whole website.
  2. States are the values of the variables at any given time

**Thoughts**
I'm excited that I start learning React from Meta engineers!

### Day 7: October 5, Tuesday

**Today's Progress** (Sideway refresh!) Reviewed how to build a basic server using the http module.

**Thoughts**
Until the course opens, I will review the content I learned from Udemy, ZTM course.

---

### Day 1: October 12, Wednesday

**Today's Progress**

- Started the React Basics course by Meta (Coursera).
- Learned what modules mean and its relation to React components.

**Thoughts** I'm starting Day 1 again. I think this is the progress. Rather than feeling guilty, I gave myself permission to restart.

---

### Day 2: October 13, Thursday

**Today's Progress**

- Learned about basic concepts of functional compoments and how to create and render one.
- We use JSX syntax. It is extension of Javascript. However, it looks like HTML. It is a way of calling the functional component! (you return the JSX code)
- All UI is composed of components!
- The component-based UI is a design concept that had existed before React. However, React made it easy to render these compoments using what's called virtual DOM. It updates the minimum part of the page.
- A Component is a stand-alone piece of code that contains HTML, CSS, and Javascript. It's independent, resuable and composable.

**Thoughts** I should admit that I feel at peace I lose the track of time when I learn front-end development..! I was so happy to learn the basic concept of React and get to see new things that I haven't recognized before.

---

### Day 3: October 14, Friday

**Today's Progress**

- Created my first functional component 'Heading'!
- Transfiling: Browsers cannot understand JSX syntax. It must be transfiled to plain Javascript for the browsers to understand.
- Don't forget to import and export the component!

**Thoughts** I'm just happy that I didn't give up learning this React! Let's just keep playing!

---

### Day 4: October 16, Sunday

**Today's Progress**

- Learned the difference between modules and components: they are very similar but a component is a small piece of code that has a certain functionality whereas a module is something that is seen in the context of a series of other modules. I think the same piece of code can be called a component or a module depending on the context or perspective of the statement of scripting operation.
- Learned that internal links are not achieved with anchor tags in React. I need to learn the concept o f router.
- Creating a reusable code for the repetitve HTML structure? (e.g. list items) We'll talk about 'data' later for this topic.
- When do we need to use props? We'll learn about this on later lessons too!
  **Thoughts** I really feel like I'm learning the foundation of React one by one.

---

### Day 5: October 17, Monday

**Today's Progress**

- In React, props is a data object that can be passed from a parent component to a child component.
- In the parent compoment, we can pass the data using attributes in JSX syntax.
- In the child component, We can access the value of the data using dot notation in JSX syntax.
- In a nut shell, props make the compoments resuable and render dynamic data.
- Limitations: we cannot modify the props in the functions. Also the props can only flow in one direction: parent to child.
  **Thoughts** I love the usage of props!

---

### Day 6: October 18, Tuesday

**Today's Progress**

- Started to see the React mechanism in two aspects: function declaration on one side and the components references on the other side.
- Learned that when I see a JSX element wrapping some other JSX element, it's all just **props.children** in the background.
- Learned how to style components: camelCase and wrapping the values as strings are important!
- Learned how to take CSS style rules from an external CSS file and add it inside a component as an internal style. (The style rules can then be referenced by the code inside the return statement of the component.)

**Thoughts** I love that I'm learning React one by one like this. Can't wait to use all these concepts to create a real app in the future!

---

### Day 7: October 19, Wednesday

**Today's Progress**

- Learned how to embed an image to the HTML attribute src using a JSX expression.
- Functions all return something even if it's 'undefined'.
- Function declaration vs. Function expression (anonymous function) vs. arrow function
- I can assign the JSX element (component) to a variable.

**Thoughts** I love learning basics one by one in this pace. It's also amazing how many good things you can pick up when you review the same content you checked out yesterday.

---

### Day 8: October 20, Thursday

**Today's Progress**

- Understanding the concept of reuse by passing different data to multiple indentical components.

**Thoughts** I'm super duper excited to learn the state management in the upcoming lessons!!!

---

### Day 9: October 21, Friday

**Today's Progress**

- An event handler(onClick, onMouseOver, ...e) is placed inside of a JSX expression as an attribute and the value is set inside of the curly braces with the name of the function. (without parenthesis)
- The function can be defined as a separate anonymous expression and assigned to a const. (very common way!)
- When we say 'function is declared', it means the function is defined by using the keyword 'function'.

**Thoughts** I imagined that someday I can build a React Native App that handles mobile touch events! Who knows!

---

### Day 10: October 22, Saturday

**Today's Progress**

- Practiced event handling in React with Mini Nnumber Guessing Game
- Learned how to achieve a toggle logic with ternary operator and NOT operator(!).

**Thoughts** Learning how to make things happen functionally is so fascinating. I'm curious about what potential is openin up for me in the future. I feel more motivated to build practice apps! Let's stay focused, appreciate & enjoy the journey.

---

### Day 11: October 23, Sunday

**Today's Progress**

- Learned how to organize/keep the data as a single source of truth in a parent component, and pass it down to a child component or a grandchild component. (Unidirectional data flow)
- There are two data types: Props and States.
  - Props: immutable, stays outside of component (in parent components)
  - States: mutable, stays inside of the component itself
- The prop data are belongs to the parent that renders the components. The state data belongs to the component itself.
- There are concepts of 'stateless' component and 'stateful' component.
- Hooks are functions that let you hook into React state or component life cycle features.
- Learned one of the popular built-in hook function: useState()
  - This hook is used to manage the state within a component and keep track of it (it's built directly into React. That is, it's a special function or API that React provides at default. You need to import it from 'react')

**Thoughts** I feel thirsty to start building a functional React app! But, I will remain calm to get more confident with the general concepts and mechanism of how React works.

---

### Day 12: October 24, Monday

**Today's Progress**

- State vs. Props
- Both hold data.
- The props object represent data that is external to a component, and state represents data that is internal to a component.
- props make the data flow to the children.
- state makes it possible to update the data.
- setState function must be insie of the other function (usually event handling function)
- useRef: makes it possible to access the child element directly, by presetting the element detector with the help of 'ref' attribute'.

**Thoughts** I'm even more excited to continue learning JavaScript and React. It's not going to be easy to make some useful app but I'll keep at it.

---

### Day 13: October 25, Tuesday

**Today's Progress**

- Learned the concept of Prop Drilling and its problem.
- Learned how to manage state efficiently using Context API
- I can create Context component (provider) and import/use the state data needed on the consumer components.
- Learned react-router-dom for serving multiple templates(views) within a single component.

**Thoughts** Things are getting a little bit more complicated but I believe all these will become comfortable as long as I keep practicing them.

---

### Day 14: October 26, Wednesday

**Today's Progress**

- Learned the concept of 'Conditional Rendering'

**Thoughts** It's great to know that with this simple A or B logic using ternary operator, I can create fun mini apps like changing sun or moon image depending on the time of the day! So fun.....!

---

### Day 15: October 27, Thursday

**Today's Progress**

- Show A or Not: AND operator
- Show A or B: Ternary operator
- Show A, B, or C..: if else statement or switch statement
- For assets like images and audios, store them in 'Asset's folder inside of 'src' folder.

**Thoughts** When the instructor took an example of a imaginary app for adopting a pet, I felt some excitement and hope are triggered from my heart. I love all the potential that development brings to me. I'm thankful and will try to stay brave to step into this field.

---

### Day 15: October 28, Friday

**Today's Progress**

- Learned how to add image assets to the component
- Three ways: using import name reference, using require keyword and adding it inline, and using a variable name (const) for other online resources.
- Learned what webpack does. It bundles different files into one or multiple bundles so that the browser can download it faster. However, if the complexity is higher, it may actually slow down the app. In that case, we can use something called 'lazy loading'.

**Thoughts** I haven't understood how lazy loading works but I'll keep my curiosity for now.

---

### Day 16: October 29, Saturday

**Today's Progress**

- Built a simple calculation app using React (useState).

**Thoughts** I made the App work without using the base code. It was a bit challenging but I will try to see the essense of how they work together.

---

### Day 17: October 30, Sunday

**Today's Progress**

- Rebuilt the simple calculation app with the useRef hook.

**Thoughts** One of the peers' calculation app really got me amazing. I was a bit overwhelmed to see the code and even visited his portfolio website. I saw some impressive projects. I'm way behind his knowledge and skills but I really hope I could reach that point someday.

---

### Day 18: October 31, Monday

**Today's Progress**

- Initiated my first self-study React app, [Calculator App with React](https://github.com/wonma/calculator-app-v2).
- Working on the keypress functions for 4 basic mathematical calculations.

**Thoughts** This is my first time getting motivated to build an app by myself with reference to someone else's app and its code. (I'm thankful to [Madza](https://www.madza.dev/), a web developer whose portfolio has ignited my motivation!) I realized with a little bit of help and self-initiated planning with a pencil and paper, I can start to see the micro aspects of the flow of the app and the required states and functions kinda arise from that point. I'm so happy that I finally know by experiencing the importance of seeing other people's code and challenge myeself with a project that seems a bit intimidating but doable with a calm mind and a strategy to break the problem into small pieces by seeing the flow of the execution in micro steps across the whole journey.

---

### Day 19: November 1, Tuesday

**Today's Progress**

- Tried to add 'Backspace' keypress function. It seemed to work half way.
- I started to see the display and ongoing input type view can be separately controlled.

**Thoughts**
Today it was very challenging to achieve an intended function. I almost felt like I need to clean up all the code and start from the clean slate again. I feel like I'm somehow working on developing mental endurance and serenity (lol) under a tough situation.

---

### Day 20: November 3, Thursday

**Today's Progress**

- Calculator App V2 Progress: playing with useRef
  **Thoughts**
  Decided to go for a slightly different track. Revisualizing each step and trying to find the pattern.

---

### Day 21: November 4, Friday

**Today's Progress**

- Calculator App V2 Progress: I finally got the basic functions work as I intended!!!! I am so proud of myself....!

**Thoughts**
It was an eye-opening moment when I started to understand what we type in and what the app needs to know can be viewed differently. For example, typing of the number keys were not the focus of the functionality of this app. The essence of the problem was in how the pressed sign (+,-,\*,/) key will process the available data at that moment. I can't explain how I could be able to reach this level of compliated logic as a newbie, but I learned that persistence pays off!

---

### Day 22: November 7, Monday

**Today's Progress**

- Calculator App V2 Progress: Fixed the 'backspace' error

**Thoughts**

- I realized that understanding one concept fully takes a lot of trials and errors with different senarios. I thought I got the hang of 'useRef', but it seemed like it's different from referencing the element and accessing the value directly.

---

### Day 23: November 8, Tuesday

**Today's Progress** Advanced React(Coursera)

- Learned how to use maps() to create a new array populated with the results of calling a transformation function on every element out of a collection of data
- If the list items are prone to changing the order, the unique keys must be set up for the map() method so that React can keep track of each item regardless of operations such as item removal, addition, sorting, or filtering.

**Thoughts**

- I'm happy to meet these array methods again! I need to understand 'sort' method better.

---

### Day 24: November 9, Wednesday

**Today's Progress**
(1) Advanced React(Coursera): Controlled Form Component

- Learned how to create a controlled form using React state.
- Implemented PasswordValidationCheck message component
- Learned how to setup 'select' element for updating its values
- Learned how to make the submit button disabled until the form values are all valid.
  (2) Calculation App
- Added logic to handle edge cases

**Thoughts**

- I'm getting more comfortable working with form elements. This mini project left me with a lot of questions. I'll take a deeper look at them and ask a question to the course dicussion room!

---

### Day 25: November 10, Thursday

**Today's Progress**
(1) Advanced React(Coursera): Controlled Form Component

- Rebuiling the sign up form (ongoing)
  (2) Calculation App
- Simplified the sign press logic

**Thoughts**

- It is amazing that I can learn this type of valuable knowledge and imagine the potential projects I can create!

---

### Day 26: November 11, Friday

**Today's Progress**
Advanced React(Coursera): Controlled Form Component

- Rebuiling the sign up form: Understood how the 'disabled' attribute switches its value to 'false'.

**Thoughts**

- I was tempted to jump to the next learning content but stayed with solidating the new concepts with doing the exercises from scratch again. Good job! Let's focus on building a good habit rather than rushing through.

---

### Day 27: November 12, Saturday

**Today's Progress**
Advanced React(Coursera): Controlled Form Component

- Rebuiling the sign up form: understood how updating properties within one state object.
- Used onBlur event listener to control when the error message is rendered.

**Thoughts**

- I think only the exercises make me code better. Even though the explanation of the concepts are hard to grasp, I try not to fear because through repetitive trials and errors, I would be able to get it. I believe it!

---

### Day 28: November 13, Sunday

**Today's Progress**
(1) Understood how 'key' works with a reverse() function exercise.
![reversing todo items](./exercises/gifs/exercise_reverse-todo-1.gif)

(2) Advanced React(Coursera): Context API
Context is useful for sharing state information throughout multiple different child components.

**Thoughts**

- I'm trying to build a good habit in learning coding. One of them is to write the exercise code from scratch by myself and catch what concepts I didn't understand. I felt a desire to jump to the next learning content, but I paused, opened up my review plan, and started to write the exercise code one by one. I feel this helps me check if I really understood the concept or not. I'm thankful I can enjoy learning coding at my pace.

---

### Day 29: November 14, Monday

**Today's Progress**
Advanced React(Coursera): Context API
I implemented Context API so that the 'Blog' app can share the global state across different levels of child components without prop drilling.

**Thoughts**

- I am enjoying this learning so much! Of course, when I come across some complicated-looking concepts on the documents I feel overwhelmed but I try to stop thinking what I can't do at my level now. I will continuously make small progress! Slowly but steadily.

---

### Day 30: November 15, Tuesday

**Today's Progress**
Advanced React(Coursera): Theme Switcher with Context API
Implemented Context using createContext, useContext, and useState.

**Thoughts**

- I still haven't understood clearly how the Context works, but I think the general concept is slowly getting into my head. Looking forward to using this for my own React Portfolio project!

---

### Day 31: November 16, Wednesday

**Today's Progress**
Advanced React(Coursera): Theme Switcher with Context API
Made the theme switcher work. I think utilizing CSS will be much easier than adding styles separately to each component.

**Thoughts**

- My understanding about how to structure components is slowly growing! I'm looking forward to challenging myself with more and more exercises!!!
  ![theme switcher](./exercises/gifs/exercise_switcher-1.gif)

---

### Day 32: November 17, Thursday

**Today's Progress**
Reviewed the theme switcher code and wrapped up the Context module.

**Thoughts**

- I got to think that one of the valuable skills that a front-end developer can possess and develop continuously is to identify the same pattern and find a way to use less code with 'reusability' always set default in mind.

---

### Day 33: November 18, Friday

**Today's Progress**
Styled the theme switcher and initialized 'Feedback Form' exercise codebase.

**Thoughts**

- It's easy to feel overwhelmed when you don't have experience with styling the element as displayed. However, you can style everything as you want if you start from the smallest part. Don't get overwhelmed by all the fancy styled elements you see online! Say, 'If somebody didt, I CAN DO IT TOO!'

---

### Day 34: November 19, Saturday

**Today's Progress**
Implemented Feedback Form using 'useState'

**Thoughts**

- Great to challenge myself with new small exercises! I really feel like I'm building my small 'coding' muscles.
  ![feedback form](./exercises/gifs/exercise_feedback-1.gif)

---

### Day 35: November 20, Sunday

**Today's Progress**
Learned how to update a specific property value in the state object

**Thoughts**

- When I read a React document explaning about hooks, I felt a little bit overwhelmed. I haven't fully grasp the concept of React lifecycle and the difference between class component and function component. It's natural to feel a little bit overwhelmed when I see new concepts (high-order component) and can't really get it. However, the learning content I'm focused on at this moment is quite easy to learn, actually a lot of fun. I should not let myself down with these new puzzly words.

---

### Day 36: November 21, Monday

**Today's Progress**
Learned about the basic concepts of prototype, supertype, and subtype.

**Thoughts**

- I'm getting more confident talking about prototype. Looking forward to applying these concepts in more practical examples.

---

### Day 37: November 22, Tuesday

**Today's Progress**

- Implemented GoalTracker, using useState.
  ![Goal tracker](./exercises/gifs/exercise-goal-tracker.gif)

- Implemented CouponRedeem, using useState.
  ![Coupon Redeemer](./exercises/gifs/exercise-coupon-redeem.gif)

**Thoughts**

- I feel at peace when I work on code. I should believe in myself and just keep going. Do not compare myself with others. Do not spend time caring about other people's game. Focus on your game.

---

### Day 38: November 23, Wednesday

**Today's Progress**
useEffect is used to perform side effects property in React. For example, I can fetch data from external API using useEffect. I can also return different blocks of elements depending on the result of the fetching action.

**Thoughts**
I feel more comfortable about understanding new concepts. For example, I can learn a specific syntax of a new built-in function by recognizing the use of a callback function. My coding ability is evolving better than I think, so keep going!

---

### Day 39: November 24, Thursday

**Today's Progress** Custom hooks

- The minimum requirement for the custom hook is that it should use at least one built-in React hook. (useEffect, useRef, ...)

**Thoughts**

- I feel like I need to code a lot of small projects to build what I want to build with React. It's all about taking baby steps now, nothing that looks super cool. However, what's important is I'm slowly advancing one step forward every single day.

---

### Day 40: November 25, Friday

**Today's Progress**
FCC: Learned how to implement inheritance in Constructors.
Coursera: Learned useReducer hook in React

**Thoughts**

- It's easy to feel rushed to reach the state that I'm trying to get at. Often times, it seems like there's no guarantee that we will be able to gain the skills that the other developers already have. However, it's the uncertainty that we need to fully accept in the course of progression. We need to appreciate every step and just be in the zone with the matter at hand. It all helps eventually. Stick to it!

---

### Day 41: November 26, Saturday

**Today's Progress**

- Implemented User Profile Loader with useEffect and fetch.
  ![User Profile Loader](./exercises/gifs/exercise-load-user.gif)

- Implmented useReducer hook for Income & Expense Tracker.
  ![Income Expense Tracker](./exercises/gifs/exercise-expense-tracker.gif)

**Thoughts**
Got more confident in using useReducer!

---

### Day 42: November 27, Sunday

**Today's Progress**

- Implemented Day Switcher using useRef, useEffect, and useState.
  (It seems like useRef can be used more flexibly other than extracting the information of the elemenents.)
- FCC: Started to go over the Basics of JavaScript.

**Thoughts**
Focus on now. Don't let the worries interfere.

---

### Day 43: November 28, Monday

**Today's Progress**

- Learned how JSX is converted to a JavaScript object, which is called an element in React.

**Thoughts**
I enjoyed learning! Can't wait to implement all these knowledge into bulding more practical projects.

---

### Day 44: November 29, Tuesday

**Today's Progress**

- Learned the importance of performance to software development.
- Learned the concept of component composition (confinement and specialization) and why children prop is so useful.
- Learned Types of Children.

**Thoughts**
I learned a great lesson from the Meta developer, Murtadha. To make the user's experience enjoyable, we have to make incremental improvements on the performance side rather than only being busy with creating new features.

"Thinking about performance can make a big difference between gaining a user or losing a user. Because if the application is not performing, it's not responsive, it's not fast enough, then people will not use it. It's a big deal for us to think about performance when we're developing these applications." - Murtadha, Engineer at Meta

---

### Day 45: November 30, Wednesday

**Today's Progress**

- Learned I can manipulate the children by returning the cloned, modified children.
- **React.Children.map(children, (child, index) => { return .... })**
- **React.cloneElement(element, props)** : This allows us to add other props to the copy of the element.
  Remember the props are immutable! We cannot directly modify them.

**Thoughts**
Right now, all these concepts are understandable at the concept level, but not at a practical level. I should experiment more with my own mini projects.

---

### Day 46: December 1, Thursday

**Today's Progress**

- Coded RadioGroup and RadioOption components using React.cloneElement and React.Children.map APIs.
- Learned how to concisely passing props using spread operator and what to be careful of.

**Thoughts**
When I first saw the RadioGroup exercise prompt, the first idea that hit me was, 'How would I even come up with the idea that I can utilize these APIs for this type of case?' I felt a bit intimidated and worried. However, the positive me is cheering me up! "It will all come with hundreds of code practices! All you can do is just keep going or giving it up. Choose one!" Well, then, I'll choose to continue!

---

### Day 47: December 2, Friday

**Today's Progress**

- Cross-cutting concerns: a type of matter that is taken into account throughout the application and affets the entire application. For example: logging, security, data transfer are the concerns which are needed in almost every module of an application.
- Higher-order Components(HOC): is a function that takes a component and returns a new component. It transforms a component into another component after enhancing the capabilities of the component provided. (From my understanding) we don't need to repeat the implementation of subscribing to certain data in multiple different stateful compoments. Instead, we can encapsulate the subscribing capability into a higher-order component and keep the statefulness in it, and using it to provide the corresponding data that the target component needs.

**Thoughts**
This concept was hard to understand but with practical code exercises I believe I will be able to get the hang of it! It takes time for a new concept to sit in my head deeply.

---

### Day 48: December 3, Saturday

**Today's Progress**
Learned HOC (Higher-order component) best practices and caveats.

1. Don't mutate the original component.
2. Spread and pass through all the original props (unrelated to the specific concern) to the wrapped component.
3. Maximize the composability('구성력'이라고 해석하면 될듯). Recall HOC is a component returning a component. It's a function returning a function (with enhanced capabilities). With this concept, we can actually fuel multiple capabilities into the wrapped component.
   a. Sometimes, HOCs can accept additional arguments that act as extra configuration determining the type of enhancement the component receives.
   b. Currying is a very common pattern in composing multi-level HOC. (a function that returns HOC.... and then the HOC gets invoked to enhance a wrapped component..) Redux에서도 HOC를 낳는 connect function이 있음. 또, HOC여러개를 묶어주는 compose function도 흔히 발견되는 패턴임.

- compose(f, g, h) is the same as (...args) => f(g(h(...args)))

Caveats

1. Don't use HOCs inside other components.
2. Refs aren’t passed through.

**Thoughts**
Whoa! It's very abstract at this level so I don't think I'm getting all these concepts fully. However, it's the first step to understand the new concepts so I would give my brain some time to play with it. No need to be afraid or overwhelmed. Everything will click eventually.

---

### Day 49: December 4, Sunday

**Today's Progress**
Learned 'render' props. It sets the order of execution like 'provoking whatever function defined in the wrapped component's render props after fetching process is done'.
And that function will be the presentational componnent.

---

### Day 50: December 5, Monday

**Today's Progress**
Reviewed HOC. Almost dissect the HOC example provided.

- Realized that HOC is a function that returns an enhanced component.
- And since it also technically is in a construct of a component, we can safely say HOC is a component that returns an enhanced component.

**Thoughts**
I think the process of learning JavaScript/React is a lot similar to the one of learning a language. I form a certain level of understanding with the resources and schema that I have, which may be not complete but becomes the base of the correction and refinement in the future understanding.

---

### Day 51: December 6, Tuesday

**Today's Progress**
Implemented HOC to build Cursor Tracker.
![Cursor Tracker 1](./exercises/gifs/exercise-cursor-tracker-1.gif)

**Thoughts**
If I get stuck in the coding process, it's actually not struggling but a very lucky chance like a free gift box in a game. I will continuously train my mindset this way!

---

### Day 52: December 7, Wednesday

**Today's Progress**
Reviewed the Cursor Tracker code and found some answers to my questions.

**Thoughts**
It's great that I could get the hang of the new concept, but I feel thirsty for a lot of new exercises that will let me experience a lot of errors and a-ha moments.

---

### Day 53: December 8, Thursday

**Today's Progress**
Implemented the Cursor Tracker code using **render props**.

**Thoughts**
The more I make sure I work on the review, the deeper I feel my understanding gets. I'm so happy that I'm focused on developing a good habit rather than hurrying to create fancy examples right away.

---

### Day 54: December 9, Friday

**Today's Progress**
Learned the basic concepts and best practices of testing. (with Jest & react-testing-library)

1. Avoid including implementation details of components. (구체적으로 어떻게 그 결과를 구현했는지는 포함하지말것)
2. The more your test resemble the way your software is used, the more confidence they can give you. (사용자입장에서 쓰는 방법과 닮아있을 수록 더 자신감을 준다.)
3. You want your tests to be maintanable in the long term. (장기적 코드유지 관점에서 테스트를 쓴다.)

Example: Submission is disabled if score is lower than 5 and there is no feedback.

- Event: When the target range input is 4 and the submit button is clicked,
  a. Expect 'handleSubmit' function is not fired.
  b. Expect 'submitButton' to have an attribute of 'disabled'

**Thoughts**
I'm very happy with today's learning because it actually lower the barrier that I had towards the idea of testing. It seemed like a complex matter that I should endure going through in the course of learning programming. However, today, I started to understand why testing is important and what is it about. From my understanding, testing is to check if the code functionalities work as expected in all different scenarios that user may interact with the app.

---

### Day 55: December 10, Saturday

**Today's Progress**
Practice writing a test code for FeedbackForm, using JEST and React-testing-library.

**Thoughts**
I understand what it means to simulate user interactions in the test code. I still need to encounter many different cases and examples, but at least I successfully opened the door of the world of the test! Celebrate little progress!

---

### Day 56: December 11, Sunday

**Today's Progress**
Day1 for React Portfolio Project.
![Portfolio Day 1](./exercises/screenshots/portfolio-d1.jpg)

- Created FullScreenSection to wrap all the sections.
- Built the skeleton of the Header, LandingSection, ProjectsSection Components.

**Thoughts**
The code snippet provided as a starting point looked intimidating first. But, I didn't let myself just stay indimidated but decided to build small parts of the app one by one from scratch. I think one of the most valuable qualities that a web developer can possess (or develop) is the ability to stay composed in front of the unfamiliar code and new concepts.

---

### Day 57: December 12, Monday

**Today's Progress**
Day2 for React Portfolio Project.
![Portfolio Day 2](./exercises/gifs/portfolio-d2.gif)

- Implmented the LandingSection, ProjectsSection components.
- Growing a better understanding of how to use the Chakra UI components.

**Thoughts**
I always felt like there is no end in mastering the basic concepts in HTML/CSS/JS. However, I started to feel like at some point, maybe, there is some sweet point where I feel comfortable working with all the key concepts, while casually absorbing new concepts moving forward. It's just not the point that anyone can reach. Only the person who believes in oneself and keeps going no matter what will taste all the sweet things after a long journey of persistent exercises!

---

### Day 58: December 13, Tuesday

**Today's Progress**
Day3 for React Portfolio Project.

- Studied Formik for form component creation.

**Thoughts**
Definitely another layer of learning, but I believe it's worth using it!
Can't wait to apply it to the real-life project!!!

---

### Day 59: December 14, Wednesday

**Today's Progress**
Day4 for React Portfolio Project.

- Applied Formik library into Chakra components.

**Thoughts**
Came across a challenge that got me stuck! I want to figure out why the UI styles of the Chakra form components are not being applied.
**Issue Solved!!!!! Super Happy!!!!**

- I reinstalled react-script version from 2.x.x to 5.x.x
- I found out that I didn't wrap the App component with ChakraThemeProvider component! Now everything works very well! I'm gonna cry.. so happy!

---

### Day 60: December 19, Monday

**Today's Progress**
Day5 for React Portfolio Project.

- Finally implemented the form submission logic with the Alert modal feature!!!

**Thoughts**
**Super Happy!!!!**Came across the biggest challenge in this project! I could reach the solution since I debugged one by one and figured out what was the critical issue (once the 'response' state has been updated, the 'onOpen' function needs to be executed!)

- I wrapped onOpen function inside useEffect.

---

### Day 61: December 22, Thursday

**Today's Progress**
Day6 for React Portfolio Project.

- Implemented 'smooth scroll on click' feature.
- Firmly grasped the unit system supported by Chakra UI library.

**Thoughts**
I will not give up!

---

### Day 62: December 23, Friday

**Today's Progress**
Day7 for React Portfolio Project.

- Implemented 'Hide Header on Scroll Down' feature.
- Applying dynamic style(transform: transformY(...)) change, using useState.
- Learned how to detect the scroll down or scroll up event.

**Thoughts**
So proud that I could implemented this feature fully by my own trials and errors only with the help of online resources that I actively searched for. Gotta give myself some compliments!

---

### Day 63: December 27, Tuesday

**Today's Progress**
Day8 for React Portfolio Project.

- Fixed styles for forms and cards to apply responsive layout.

**Thoughts**
Don't be afraid to not fully grasp all the CSS rules at once!

---

### Day 64: December 29, Thursday

**Today's Progress**

- Completed the Advanced React course on Coursera!! Congrats Wonmi!
- Started reviewing the key concepts in React.
  - When to use 'prevState' functional updates for setState.

**Thoughts**
Don't be afraid of delving into your curiosity of HTML, CSS, and JavaScript! Dive into your zone of craziness and nerdiness! It's okay!

---

### Day 65: December 30, Friday

**Today's Progress**

- Reviewed a custom hook with the example of 'useSubmit' hook in the React Portfolio project.
- Reviewed Promise, async await, and why we should wrap setTimeout with Promise to create a custom asynchronous function.

**Thoughts**

- I tried explaning my code verbally. I think this helps grow my confidence as a developer!

---

### Day 66: December 31, Saturday

**Today's Progress**

- Reviewed a custom hook and the practical usage of useRef with the example of 'usePrevious' hook. (useRef can be used for tracking the previous state value)

**Thoughts**

- I believe, someday soon, everything will make more sense and I can play with them.

---

### Day 67: January 1, Sunday

**Today's Progress**
Contents I reviewed:

- **component composition**: component composition is about how to compose a component in a certain pattern to meet specific needs (reusable code, code readablity, etc.). For example, we can create a component in patterns like simple components, container components, higher-order Components, or passing components as props or context.

- Virtual DOM: In ReactJS, for every DOM object, there will be a corresponding in-memory copy created. This copy is called the Virtual DOM(VDOM). In the Virtual DOM tree, each element is represented by a node. A new Virtual DOM tree will be created whenever the element's state changes. The ReactJS's diffing algorithm will compare the current Virtual DOM tree with its previous version. Finally, the VIrtual DOM uses the algorithm to update the actual DOM with the diff.

- Reconciliation: the mechanism to **diff** one tree (a copy of original DOM, the existing virtual DOM) with another (a new virtual DOM) to determine which parts need to be changed and update the original DOM.

**Thoughts**

- It's so satisfying to grasp the mechanisms of React one by one! I will continue balancing learning new concent an reviewing what I've learned.

---

### Day 68: January 2, Monday

**Today's Progress**
Contents I reviewed:

- Code Exercise: Create a reusable 'RadioGroup' component and make it concise with 'React.Children' and 'React.cloneElement' APIs.
- The practical usage of spread operator for forwarding props easily.

Also started the React Native course on Coursera!

**Thoughts**
While listening to other female software engineers interview, I felt a bit frustrated since they seemed like they already have a profound, working knowledge and experiences in the field. Well, yes. I accidentally compared myself to them. However, when I started this journey, I did this not to compete against other developers or be the leader of this field. I simply chose to start this because my brain wants this type of work and I genuinely feel extremely happy with the progress I make little by little. Additionally, I have a mission too. Whenever this negative comparision to others happens, remind yourself of this question that made the Yusu Sunim (the student of Pomnyun Sunim), let go of everything before becoming a monk in Jungto Society. **"Can you just type for the rest of your life without doing anything else until you die?"**

---

### Day 69: January 3, Tuesday

**Today's Progress**
Reviewed the benefits of using hooks and how useState hook works.

- Code Exercise: Simple Goal Tracker using useState and useRef.

React Native course

- Learned the benefits of learning a cross-platform development framework, React Native.
- React Native provides a lot of useful built-in components to build cross-platform mobile apps.
- Lightly viewed the example of React Native code.
- Beginners can use Expo to get started.

**Thoughts**
I got touched with the advices and mindset that one of the Meta engineers showed.

- **To practice communication is very important.**: This makes me feel more motivated to get into the field as soon as possible rather than keep building technical knowledge.
- **My biggest joy in being a cross-platform developer is when we actually ship products to people and make a difference in people's lives. .. It feels so good when the product is in somebody's hands and they're using it and you get some feedback such as 'hey this helped me learn some subject material I was struggling with. This helped me figure out how to do this.' You can help people out.**

---

### Day 70: January 4, Wednesday

**Today's Progress**
Reviewed JavaScript Basics. (multi-dimensional arrays, array mutable methods)

- Code Exercise: Abstracted the GoalTracker2 code.

**Thoughts**
I felt a bit overwhelmed when I was performing abstraction to my code, because I wasn't sure if I'm making things more complicated.
However, I think with continuous practice, I'll be able to get seasoned with abstracting components into smaller pieces. Just keep trying even though my trial doesn't make sense at first!

---

### Day 71: January 5, Thursday

**Today's Progress**
Initialized Capstone project by creating a local and remote repository for the project 'little-lemon'.

**Thoughts**
Even initializing a project is much easier now since I have gone through trials and errors before.
I'm so excited to get this new exercise project started!

---

### Day 72: January 6, Friday

**Today's Progress**
Implemented Coupon Redeeming functionality with the use of prevState object in useState hook.
Reviewed what side effects are (reviewing useEffect)

**Thoughts**
Trying to build a habit that when I don't understand something clearly, make a note and make sure I try understanding it again in the future.

---

### Day 73: January 7, Saturday

**Today's Progress**
Used the useEffect hook to update the text of the browser tab (as practice of performing side effect property)
Reviewed some basic concepts of JavaScript (FreeCodeCamp):

- Global vs. Local scope: This concept of scope is about whether a variable is declared within a function or outside of a function.
- Implicit global variable (should be avoided): If a variable is declared without any keyword, it will be implicitly declared in the global scope and be accessible with a property of the globalThis object. This results in unintended consequences!

**Thoughts**
Consolidating the foundational concepts of JavaScript and React might feel tedious but every time I review the content I already studied, I get to see something new and feels I really get it to the extent I can explain the concept to someone who doesn't know JavaScript! As long as I don't give up, I believe everything will come together in the end and I'll be able to function as a valuable asset in the company I work for (so exciting)!

---

### Day 74: January 8, Sunday

**Today's Progress**
Reviewed how to use fetch API in React

- Code example: Displaying a user's profile fetched from an external API
- Learned how to check if an object is empty using 'Object.keys()'method.

**Thoughts**
Although it is a slow process, I definitely feel more and more confident in understanding the basic concepts. I love learning JavaScript!!!

---

### Day 75: January 9, Monday

**Today's Progress**
Reviewed useReducer hook and useContext API.

- useReducer: It is used for managing complex state. The more complex the state data is, the better it is to use the useReducer hook than the regular state. It features the concepts such as 'action object', 'type' property in the action, dispatch function, and reducer function.
  - Code exercise: IncomeExpenseTracker
- useContext: It's an alternative way to pass down data into multiple components without prop-drilling. I can wrap the top-level component with Context Provider and pass the values (data) to any child component. It's useful especially when I need to define a global state.
  - Code exercise: SimpleBlog

**Thoughts**
It feels great to consolidate all these key React concepts! I cannot wait to build a real-life project with React.

---

### Day 76: January 10, Tuesday

**Today's Progress**

- Reviewed useContext and implemented ThemeSwitcher.
- Tried to understand React.memo and useMemo hook, when using Context (They both prevent unnecessary top-level re-rendering for performance optimization)

**Thoughts**
Some concepts are just not really easily grasped at the time you want to grasp, and that's totally fine. Just get used to the structure and the format first and then later on with better examples and at the better timing, you will be able to get it. Sometimes, it's just not the time yet.

---

### Day 77: January 11, Wednesday

**Today's Progress**

- Reviewed useRef and Higer-Order Component(HOC)
- Implemented Live Cursor Position Tracker using HOC

**Thoughts**
I'm constantly getting surprised by the power of reviewing. It really opens up potential and I feel like learning is happening this way.

1. If there's total 5 concepts(A to E), at the first learning cycle, I don't understand C, D, E among them.
2. In the next cycle, I 'sense' some pattern in C, D. I don't know what E means but at least I 'saw' its existence.
3. In the 3rd cycle, I 'sense' another point in C, D and starts to feel more curious about learning them.
4. In the 4th cycle, I get the hang of C, D and start to feel curious about E too.
5. And this consolidation and discovery repeat.

---

### Day 78: January 12, Thursday

**Today's Progress**

- Reviewed the use of 'render' prop: it helps share the common functionality across multiple components.

**Thoughts**
I'm so happy to experiene this feeling of 'Oh, I got the hang of it!'. Let's stick to it. Impossible is nothing.

---

### Day 79: January 13, Friday

**Today's Progress**

- Learned React Native Core Components: View, Text, ScrollView
- Learned how to abstract styles with StyleSheet API in React Native for cleaner code
- Started reviewing the concept of testing in React

**Thoughts**
Just do it! That's all!

---

### Day 80: January 14, Saturday

**Today's Progress**

- Learned React Native Core Components: FlatList and SectionList

**Thoughts**
Enjoy every moment!

---

### Day 81: January 14, Saturday (Doing it for Jan 15 in advance)

**Today's Progress**

- Coded uncontrolled FeedbackForm component (before converting it into the controlled one).
  - Learned that I need to use textarea as an element, and datalist to implement the markers for the range bar.

**Thoughts**
Let's wrap my life with code!

---

### Day 82: January 16, Monday

**Today's Progress**

- Finished implementing Feedback form
- Create a test using JEST and react-testing-library.
  - Couldn't figure out the reasons some tests that didn't work. (Need to be revisited later)

**Thoughts**
Some code practices didn't work but at least I get more used to the concept of creating a suite of tests in React. I should be proud of my persistency!

---

### Day 83: January 17, Tuesday

**Today's Progress**

- Revisited my old UX/UI designer-oriented portfolio website built with WordPress.
- Figured out the difference between Netlify (static web app hosting) and DeployHQ (github to server deployment automation).
- Dived deep into the WordPress custom code, set up the dev environment for streamlined, automated deployment.
  - Used wordpress/scripts package to compile files
  - Converted POSTCSS to SASS
  - Added the browser sync package for auto reload
  - Connected local depo to Github, Github to the staging website server on my hostinger account.

**Thoughts**
Started to seriously think about how to organize and streamline my portfolio development process. It was something intimidating because I knew I had to dig into the old code. I learned a lesson. Document my projects in a seperate Google Sheet and stay on the top of them without hassle.

---

### Day 84: January 18, Wednesday

**Today's Progress**

- Did some exercises of Basic JavaScript module on FCC(FreeCodeCamp)

**Thoughts**
I can do it.

---

### Day 85: January 19, Thursday

**Today's Progress**

- Basic JavaScript module on FCC(FreeCodeCamp)
  - Understanding the cases to use bracket notation for accessing a property of an object.
  - Understanding the key-value format of object makes it a great option for data lookup (if the properties are within a restricted range).

**Thoughts**
I'm thankful to be able to learn and prepare to work as a web developer.

---

### Day 86: January 20, Friday

**Today's Progress**

- Basic JavaScript module on FCC(FreeCodeCamp)
  - Reviewed three types of loop: while loop, for loop, do while loop
  - It was interesting to get the product of multiplying all items in the sub arrays in an array, using for loop.
  - I liked the exercise 'Record Collection'. I think I'll be able to apply this same concept to many use real projects. For example, I can think of a game where there are multiple characters and some of them have certain properties while the others don't, etc. Also each character may have a unique ID, which means the top level of the data structure required is an object type. (The ID works as a key) 

**Thoughts**
I think I started to build a mental model of 'data structure' naturally. It's so interesting!

---

### Day 87: January 21, Saturday

**Today's Progress**

- Worked on code exercises: Sign-up Form without Formik

**Thoughts**
Getting more confident with the world of form creation!

---

### Day 88: January 22, Sunday

**Today's Progress**

- Finished implementing Sign-up Form without Formik
  - **New** I added a feature that validates the password and shows the status on the fly. To do so, I created a custom hook that includes useState and imported the related states and functions to the form component. Yay! 
  - **New** On the course of achieving the password validating feature, I started to get my foot into the world of regular expressions. 

**Thoughts**
Still feel like it's a slow progress, but I definitely feel like 'I' am actively coding with my own logic and acquired tools, rather than just following lectures and instructions. 

---

### Day 89: January 23, Monday

**Today's Progress**

- Reviewed the structure of React portfolio app project.
- Learned the basic concept of recursion (Replacing a loop with recursion) in FCC.

**Thoughts**
Didn't feel like I have much mental energy today. I should think about how I can improve my physical energy to enjoy coding for a long time in my life!

---

### Day 90: January 24, Tuesday

**Today's Progress**

- Reviewed Header component of React portfolio 1 project. 
- Planned what features to experiment for my next project, React portfolio 2. 

**Thoughts**
I felt like planning features to implement and how to implement each of element's structure would be one of the important skills that I have to improve. I felt like a working developer rather than just a learner. 

---

### Day 91: January 25, Wednesday

**Today's Progress**

- Practiced recursion.
- Finished the first module, 'Basic JavaScript' of 'JavaScript Algorithms and Data Structures' certificate course.
  [See my progress in FreeCodeCamp](https://www.freecodecamp.org/wonmi)

**Thoughts**
It was not a fast pace, but I finally completed the first module! I'm so proud of myself. I really enjoyed the learning so far.

---

### Day 92: January 26, Thursday

**Today's Progress**

- Started the second module, 'ES6' of 'JavaScript Algorithms and Data Structures' certificate course.
  [See my progress in FreeCodeCamp](https://www.freecodecamp.org/wonmi)

- It was interesting to be reminded that objects are mutable, so to prevent data mutation, we need to use 'Object.freeze()'

**Thoughts**
I'm learning basic concepts and it's stil a valide learning process, but I feel a big need to actually work on a project every day. I need to revisit my priorities and strategies again.

---

### Day 93: January 27, Friday

**Today's Progress**

- To put yesterday's reflection into actions, I decided to work on the portfolio website progressively as I spend time honing the key concepts of JavaScript and React.  

**Thoughts**
It's great to run into real-projet based problems!

---

### Day 94: January 28, Saturday

**Today's Progress**

- Worked on my portfolio website
  - Cleaned up the markup in front-page.php and navigation SCSS module.

**Thoughts**
I realied I get so happy when I'm working on the real project! :D
Let's keep believing in myself and continue, no matter what! 
I love this journey of becoming a front-end developer!!!

---

### Day 95: January 29, Sunday

**Today's Progress**

- Started: Rebuilding 'Trillo' Advanced CSS Project
  - Set up dev environment with Webpack for SCSS compiling and Hot Module Replacement. 
  - Learned how to style header and sidebar using Flexbox
    - **NEW** custom CSS variable
    - **New** fill:currentColor
    - **New** Using svg sprite for icons
    - **New** Using transition delay to implement step-by-step property animation

**Thoughts**
It was such a wonderful dev Sunday!😊 There were two big achievements: Understanding webpack dev mode configuration for SASS and starting to rebuild the advanced CSS projects! 

---

### Day 96: January 30, Monday

**Today's Progress**

- In Progress: Rebuilding 'Trillo' Advanced CSS Project

**Thoughts**
Omg.. I love CSS. I'm so thankful that I met this course by Jonas and made a decision to review it after 4 years. :)

---

### Day 97: January 31, Tuesday

**Today's Progress**

- Worked on the final assignment of Principle of UX/UI course (part of Meta front-end specialization certificate series)

**Thoughts**
It's a slow progress but I see that everything I've known so far is all coming together. Let's keep enjoying this journey!

---

### Day 98: February 1, Wednesday

**Today's Progress**

- Worked on the Trillo CSS project. 70% has been done.

**Thoughts**
I've developed more practical knowledge of how to organize components in HTML/CSS. It feels great to be able to mark up in the BEM style with some confidence.

---

### Day 99: February 2, Thursday

**Today's Progress**

- Finished the Trillo CSS project. 
- Configured 'production' mode for webpack and pushed it to Github. Project published successfully!

**Thoughts**
Even though this is an imaginary case project, I felt a great sense of achievement! I'm now confident implementing SASS, hover effects, CSS variables, flexbox, responsive layout and more importantly how to structure CSS in the BEM approach and organize modular files! Great job, Wonmi!
[Trillo](https://wonma.github.io/trillo/)

---

### Day 100: February 3, Friday

**Today's Progress**

- Started the 'Natour' advanced CSS project.

**Thoughts**
Slow but steady. First time making a 100-day mark! Congratulations! Let's continue enjoying the coding journey.

---

### Day 101: February 4, Saturday

**Today's Progress**

- Initiated the 'Natour' advanced CSS project.
- Learned how to create responsive layout using the float property (old way) to support the old browsers.
  - Learned how **attribute selectors** can be beneficial to avoid redundant class markups. 
  - Learned how **:last-child** and **:last-of-type** are different and how to use it when creating the float grid system with CSS.
  - Practiced SASS: **variables, calc function, mixin, nesting**. So cool!

**Thoughts**
I'm a happy coding practitioner. :)

---

### Day 102: February 5, Sunday

**Today's Progress**

- Working on header part of the Natours project. (70% completed)
[Natours](https://wonma.github.io/natours/)

**Thoughts**
I'm a happy coding practitioner. :)

---

### Day 103: February 6, Monday

**Today's Progress**

- Learned how to set up icons using icon fonts.

**Thoughts**
Don't compare yourself with others. Let's take it easy!

---

### Day 104: February 7, Tuesday

**Today's Progress**

- Built the basic HTML structure for the Little Lemon practice webiste and added meta tags applying OGP(Open Graph Protocol).
- Styled the top level components.
- Reviewed CSS Grid. 

**Thoughts**
- CSS grid has not been my go-to layout tool but, I love what CSS Grid can do! I will definitely enjoy this little journey to master CSS Grid!!! 

---

### Day 105: February 8, Wednesday

**Today's Progress**

- Split code into components and modular scss files for the Little Lemon project.
- Learned how to deploy a static website on Github when working with the create-react-app package.
[Little Lemon](https://wonma.github.io/little-lemon/)


**Thoughts**
- I really started to think in a component-oriented way. It's a great signal of me becoming a real front-end developer I believe!

---

### Day 106: February 9, Thursday

**Today's Progress**

- Created Hero, Specials, Testimonials, and AboutBusiness components.
![Little Lemon - Today's Progress](./exercises/screenshots/2023-02-09.gif)
[View Little Lemon Site](https://wonma.github.io/little-lemon/)

**Thoughts**
- Let's keep it on.

---

### Day 107: February 10, Friday

**Today's Progress**

- Coded the basic HTML structure for the form element. Reviewed React reducer function as an substitue of state.

**Thoughts**
- Let's keep it on.

---

### Day 108: February 11, Saturday

**Today's Progress**

- Implemented useReducer hook to manage the form state for a reserve-a-table function.

**Thoughts**
- Let's keep it on.

---

### Day 108: February 14, Tuesday

**Today's Progress**

- Wrote unit tests for initializeTimes and updateTimes functions for a reserve-a-table feature.

**Thoughts**
- Every code practice is the practice of staying calm and search for solutions with persistence. 

---

### Day 109: February 15, Wednesday

**Today's Progress**

- Little Lemon Project: Connected BookingPage to the fetchAPI and submitAPI.

**Thoughts**
- I want to learn more about writing unit tests. 

---

### Day 110: February 16, Thursday

**Today's Progress**

- Little Lemon Project: Implemented localStorage and useContext to simulate serving and saving the Bookin data, and use Formik for form validation.

**Thoughts**
- I love when I'm into the zone!

---

### Day 111: February 17, Friday

**Today's Progress**

- Completed Little Lemon Project (Round 1): Added unit tests for form validation and wrapped up the project. 

**Thoughts**
- Happy to finish the project requirements! However, I still want to improve this app even though it's a practice project. I think it's a good desire to have as a front-end developer!

---

### Day 112: February 18, Saturday

**Today's Progress**

- Learned what a typical job interview is like.
- Did coding exercises on FreeCodeCamp. 

**Thoughts**
- It feels intimidating to think about applying for a job and being in the interview, especially technical one. However, I will do my best to prepare for each interview and focus on the growth and the journey itself and will take every step as an opportunity for learning. I'm ready for a new challenge.

---

### Day 113: February 19, Sunday

**Today's Progress**

- [Coding Interview Preparation]
  - Each byte consists of 8 bits (a series of ones and zeros).
  - A bit is the simplest form of computing memory.
  - CPU handles instrutions and information. 
  - Memory: Cache memory, Main memory, Secondary memory
    - Cache memory: stores recently accessed information (CPU checks the cache memory first when it reads some intruction.)
    - Main memory: ROM and RAM. 
      - ROM: Read-only memory. Cannot be overwritten. Used when the computer starts and the app is loaded.
      - RAM: Read-access memory. Programmable. Holds the current data and instructions that are currently in use. It can run a number of apps at once. 
    - Secondary memory: Cloud storage, external hard drive, memory sticks.

**Thoughts**
- It can be quite intimidiating, but keep calm and learn one by one!

---

### Day 114: February 20, Monday

**Today's Progress**

1. [Coding Interview Preparation]
Learned about a good practice of designing a solution: Problem statement, Formulating a solution, and Finetuning the solution. 
- Problem statement: consider as many questions as possible by visualizing how the app is used
- Formulating a solution: plot out algorithm by outlining steps for the solution (start by writing down general steps)
- Finetuning the solution: draw a flow chart. Create a precise procedure of how the app will flow under multiple different conditions.

2. Learned about regular expressions. (FreeCodeCamp)

**Thoughts**
- It is all about developing my problem solving ability! Don't be scared and keep going to get every corner of your skills improved little by little!

---

### Day 115: February 21, Tuesday

**Today's Progress**
[Coding Interview Preparation]
Learned about the concept of time efficiency and big-O notation.
- It is a metric that helps evaluate the time efficiency of a task. 
- O(1) is the best, O(log n) is pretty good, O(n) is okay. O(n^2) is heavy.
- Conclusion: always think about if the code I write reaches a goal with efficiency. Ask yourself if the code can be improved in terms of time efficiency.

**Thoughts**
I'm so proud that I didn't give up trying to understand this seemingly intimidating concept.
It turns out that it is just a tool that will help me to communicate with other developers to talk about the efficiency of the code and performance of an app. 
Note to self: whenever coming across a new, initimidating concept, stay calm and keep trying to understand it throughout multiple trials until you will get it. It's the secret of learning!

---

### Day 116: February 22, Wednesday

**Today's Progress**
[Natours CSS Project]
- Coded a 4-column float grid system.
- Reviewed how to use attribute selectors.

**Thoughts**
- When learning different subjects or working on different projects, switching back and forth between React, JavaScript, and CSS feels a bit challenging. However, I know it is inevitable to have an ability to jump around different subjects smoothly. I believe it's the process of improving the bridges or making the connections smoother. 

---

### Day 117: February 23, Thursday

**Today's Progress**
[Coding Interview Preparation]
Learned about the concept of space efficiency and big-O notation.
- Space complexity consists of auxiliary space and input space.

**Thoughts**
- I feel like I'm learning this concepts at a very light depth. I want to make a pause and have my own research time so that I can be closer to these concepts. No rush! It's more important to internalize the concepts rather than "sightseeing" them!

---

### Day 118: February 24, Friday

**Today's Progress**
[Natours CSS Project]
- Built 3 sections: About, Features, Tours
- Reviewed how to implement card flipping effect using transform:rotateY(), perpective, and backface-visiblity
- Reviewed how to implement icon fonts.

**Thoughts**
- Definitely feeling like I'm getting more confident working with CSS & SCSS! This is precious!

---

### Day 119: February 25, Saturday

**Today's Progress**
[Natours CSS Project]
- Built Reviews section.
- Reviewed how to add a video background and use **shape-outside** property to customize the wrapping of the inline text around a shape.

**Thoughts**
- No need to feel overwhelmed! Trust yourself!

---

### Day 120: February 26, Sunday

**Today's Progress**
[Natours CSS Project]
- Built Form and Footer sections.
- Tried creating the floating hamburger menu by myself without referencing the lecture.

**Thoughts**
- I realized how important creating an effective, efficient HTMl structure is. It inevitably affects the CSS markup accordingly. I need to see many good examples and practice them repeatedly. Again, where the patience matters the most.

---

### Day 121: February 27, Monday

**Today's Progress**
[Natours CSS Project]
- Corrected the HTML structure and CSS of the hamburger menu.

**Thoughts**
- Right mindset is everything. Start with gratitude that I can learn this technology with great resources and assure yourself that you will get there as long as you stick to it. 

---

### Day 122: March 1, Wednesday

**Today's Progress**
[Coursera - Coding Interview]
- Learned about basic data structures: Integer, Array, Object

**Thoughts**
- It's okay to not be able to absorb and 'get' all the new concepts at once. Try to accept where I am now and keep moving on. 

---

### Day 123: March 2, Thursday

**Today's Progress**
[Coursera - Coding Interview]
- Learned about collection data structures:
  - Lists:(Abstract Data Structure. A list refers to an ordered collection of data elements.) Array-based lists vs. Linked lists
  - Sets: an ordered collection of data elements. A set will only hold unique elements. Great for filtering out duplicates. A set uses a hash table. It provides exceptionally quick search.
  - Stacks: First-in-last-out (FILO). Example: undo/redo, browser history, a deck of cards
  - Queues: First-in-first-out (FIFO). Example: printer
  - Trees: has great flexibility in adding and searching values, it consists of nodes that are linked with one another. (binary trees)

**Thoughts**
- At least, I'm getting used to all these abstract concepts and most importantly growing more interest in the topic 'data structure'. 

---

### Day 124: March 3, Friday

**Today's Progress**
[Coursera - Coding Interview]
- Learned about advanced data structures: hash tables, heaps, graphs
  - Hash tables: reduces the key to a small, manageable size, which acts as the index indicator. Quick search! (e.g. dictionaries, database indexes, caces, sets.)
  - Heaps: Specialized purpose of heaps is identifying the most important item and returning it in the shortest time possible, queuing the next item of importance. The highest or lowest priority element is always stored at the root. O(1) because the item to retrieve is always at the root whether it's the lowest value or highest value. (e.g. interview scheduling, CPU routers)
  - Graphs: comprised of nodes and edges. The node is where the data is stored. The edge is a connection between two nodes. (directed vs. undirected / weighted vs. unweighted)

[Natours CSS Project]
- How to use SASS for media queries (@content, @if)
- Mobile-first vs. Desktop-first approach (min-width vs. max-width)
- How to decide breakpoints

**Thoughts**
- I'm building muscles that help pull me up to the next level. Welcoming the feeling of uncertainty and difficulty.

---

### Day 125: March 4, Saturday

**Today's Progress**
[Coursera - Coding Interview]
- Learned about Selection Sort and its implementation with JavaScript.
  - Selection Sort: repeatedly select the smallest (or largest) element from the unsorted portion of the list and move it into the sorted portion of the list, that is, swap the smallest item with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. 
  - Time complexity of Selection Sort is O(N2) as there are two nested loops: 
    - One loop to select an element of Array one by one = O(N)
    - Another loop to compare that element with every other Array element = O(N)
    - Therefore overall complexity = O(N) * O(N) = O(N*N) = O(n^2)
  - Auxiliary Space: O(1) as the only extra memory used for temporary variables while swapping two values in Array. The selection sort never makes more than O(N) swaps and can be useful when memory write is a costly operation and the scenario is working with small datasets.
 
**Thoughts**
- It is not the area I've ever been taught but I'm getting it slowly and used to the terms and concepts. It feels difficult. It sounds like a whole new world but I would like to keep going until I feel more comfortable!

---

### Day 126: March 7, Tuesday

**Today's Progress**
[Natours CSS Project]
- Added media query and added more CSS using mixins.
 
**Thoughts**
- Remember. Persistency is everything. 

<!--

<!-- ### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**

  ![User Profile Loader](./exercises/gifs/exercise-load-user.gif)

1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) --> 
