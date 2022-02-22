---
title: What I learned today
date: 2022-02-13
description: A living list recording what I learn everyday!
pin: true
draft: false
---
## What this post is about?

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JIceCvZS-4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I believe that achievement only comes from deliberate and consistent hard work being practiced every day. If we record down every detail of what we learned along the path, we may find out that the success is really not a miracle. It doesn't come from no where, but comes from dots connected along your life journey. Steve Jobs once said, you can't connect the dots looking forward; you can only connect them looking backwards. However, I think it's not true for knowledge development(management). You may somehow figure out some clues of what you already know, what you actually don't know or what you want to know in the future, etc., then you can better prepare for yourself for the future, at least for learning's sake. 

This list should be a living document that fulfills my incomplete arguments, and I'll try my best to keep it up to date and improve it if possible along my lifelong journey.

## The list

...to be continued

<div id="2022-02-22"></div>

##### <a href="#2022-02-22" name="fragment">2022-02-22</a>

<details>
  <summary>What Is JavaScript Made Of?</summary>

  https://overreacted.io/what-is-javascript-made-of/

  We can treat this article as a mental model checklist for understanding JavaScript. Concepts explained in the article is listed below for your reference. However, it's just a mental modal, which gives a way of understanding something better; so it may not explain things 100% correct. For example, a function in JavaScript is actually also a kind of object, but you can't get this truth from this article.

- Value
  - Type of Value
  - Primitive Values
  - `null` and `undefined`
- Equality
  - Strict Equality
  - Referential Equality
  - Loose Equality
- Literal
- Variable
  - Scope
  - Assignment
  - `let` vs `const` vs `var`
- Object
  - Property
  - Object Literal
  - Object Identity
  - Dot Notation
  - Bracket Notation
  - Mutation
  - Array
  - Prototype
- Function
  - Arguments(or Parameters)
  - Function Expression
  - Function Declaration
  - Function Hoisting
  - `this`
  - Arrow Functions
  - Function Binding
  - Call Stack
  - Recursion
  - Higher-Order Function
  - Callback
  - Closure
</details>

<div id="2022-02-21"></div>

##### <a href="#2022-02-21" name="fragment">2022-02-21</a>

<details>
  <summary>JavaScript - The Tricky Parts</summary>

  https://academind.com/tutorials/javascript-tricky-parts

  This article briefly discusses those tricky parts of JavaScript. You can treat this article as a door to help you dig further into JavaScript. These concepts are listed as follows:

1. Scope & Hoisting
2. Loops(`for-of`, `for-in`)
3. Primitive & Reference Values
4. Closures
5. Recursion
6. Callbacks (Indirect vs Direct Function Execution)
7. Asynchronous Code
8. The 'this' Keyword
9. Prototypes

</details>

<details>
  <summary>What Web Can Do Today?</summary>

  https://whatwebcando.today/

  If you would like to develop native-like experience web apps(a.k.a [Progressive Web Apps](https://web.dev/progressive-web-apps/)), this website concisely lists out important features you may want to look out! In spite of short answers on whether they are supported as of now, you can also checkout how to use APIs and code snippets in this website.

</details>

<details>
  <summary>5 Reasons Why RxJS Observables Are So Powerful</summary>

  https://x-team.com/blog/rxjs-observables/

  [RxJS says that we can think of it as Lodash for events.](https://rxjs.dev/guide/overview) This article gives intuitive and simple examples on when it's suitable for RxJS. These are 5 reasons mentioned in the article that why we should consider using RxJS:

1. An Observable is just the Observer pattern with a jetpack.
2. The RxJS library is well-known and widely used.
3. An Observable allows you to handle different asynchronous events, from a single finite operation (like HTTP request) to multiple repeatable actions (like keystrokes or cursor movements). There's a unified API for both.
4. You can join, mix, transform, and filter different Observables with one API.
5. RxJS Observables are already used with the most popular frameworks and libraries, such as Angular (where it's built-in) or React/Redux (`redux-observable`).

<div id="2022-02-20"></div>

##### <a href="#2022-02-20" name="fragment">2022-02-20</a>

<details>
  <summary>Arindam Paul - JavaScript VM internals, EventLoop, Async and ScopeChains</summary>

  https://youtu.be/QyUFheng6J0

  We can learn how variable hoisting, closures, event loop, async work inside JavaScript VM with simple animations here! Also you can checkout [this website](http://latentflip.com/loupe/) that emulates how JavaScript VM works.

</details>

<div id="2022-02-19"></div>

##### <a href="#2022-02-19" name="fragment">2022-02-19</a>

<details>
  <summary>The mythical 10x programmer</summary>

  http://antirez.com/news/112

  Author of the famous in-memory database Redis wrote this article to share what qualities he believes that make the most difference among productive engineers and normal engineers.

1. Bare programming abilities: getting sub-tasks done
2. Experience: pattern matching
3. Focus: actual time VS hypothetical time
4. Design sacrifice: killing 5% to get 90%
5. Simplicity
6. Perfectionism, or how to kill your productivity and bias your designs
7. Knowledge: some theory is going to help
8. Low level: understanding the machine
9. Debugging skills

</details>

<div id="2022-02-18"></div>

##### <a href="#2022-02-18" name="fragment">2022-02-18</a>

<details>
  <summary>How to Develop and Test a Mobile-First Design in 2021</summary>

  https://css-tricks.com/how-to-develop-and-test-a-mobile-first-design-in-2021/

  Mobile-first is a design method; while mobile-responsive is the ability of the website to adjust itself according to the screen size. With mobile-first, we focus on mobile screens first, and think about what are essential elements that are required to put on the website. You can also find out benefits of using the mobile-first design method and some testing methods in this article!

</details>

<details>
  <summary>TypeScript for JavaScript Programmers</summary>

  https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

  This article teaches the basic concepts in TypeScript. TypeScript adds the type system to JavaScript when developers are developing software. When the software is ready to be built, TypeScript will be "compiled" to JavaScript eventually. For type checking, TypeScript uses the structural type system, which focuses on the shape that values have, sometimes also called "duck typing" or "structured typing".

</details>

<div id="2022-02-17"></div>

##### <a href="#2022-02-17" name="fragment">2022-02-17</a>

<details>
  <summary>Monorepo Explained</summary>

  https://monorepo.tools/

  Monorepos become more popular these years in web development. This comprehensive article gives us a simple definition, various feature comparisons among different monorepo tools, and also some resources to learn more about the topic.

</details>

<div id="2022-02-16"></div>

##### <a href="#2022-02-16" name="fragment">2022-02-16</a>

<details>
  <summary>JavaScript engine fundamentals: Shapes and Inline Caches</summary>

  https://mathiasbynens.be/notes/shapes-ics

  This article shares the fundamental concepts applied in most JavaScript engines on how they optimize for object property lookups. Once we understand these concepts, we can write more performant JavaScript programs. Besides learning the optimization tricks, we can learn how JavaScript's object model works!

</details>

<details>
  <summary>Web workers vs Service workers vs Worklets</summary>

  https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/

  This article gives a concise introduction to workers that run on other threads in a browser. Usually JavaScript code also runs on a main thread; however, there may be a case that some computation would take longer time, thus it should run on different threads in order to have smoother user experience. In this case, we can use web workers. Service workers and worklets are also web workers, but with specific purposes.

</details>

<details>
  <summary>GitHub commits aren't recorded in the 'Your Contributions` calendar</summary>

  https://stackoverflow.com/a/19183663

  I also have this issue for some time. I finally set up my mind to figure out why. The problem was just git user config email on my computer not matching with my GitHub user account's email......

</details>

<div id="2022-02-15"></div>

##### <a href="#2022-02-15" name="fragment">2022-02-15</a>

<details>
  <summary>Kyle Simpson Presents: Code is for Humans</summary>

  https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/

  This short talk is a must watch for software engineers. We as software engineers often write code 
  with optimization for computers, rather with optimization for humans. However, code readability is 
  essential for software development. We read code more often than write code, also we need to 
  understand what the code means before we can write new code. In spite of having clear variable naming, etc. tricks to write readable code, one especially important trick is to try to communicate to 
  readers of your code why the code is written or structured this way (Since there are infinite ways to write a program). You have to make readers easily understand your mental analysis of the problem, so that code(solution to the problem) is written down this specific way!

  Finally, quotes in the talk showing bellow are full of wisdom, so I decide to write them down specifically.

1. If you don't know why your code works, you have no hope of fixing it when it breaks.
2. The program is just a suggestion to the computer.
3. Code is for communicating ideas with other people
4. Code that you do not understand is code that you cannot trust, and code that you cannot trust is code that you do not understand.
5. As much as 70% of our time spent coding is actually spent reading the code.
6. Code must first be read before it can be written.
7. If your code has to be rewritten to be fixed, improved, or extended, you failed.
8. Because of that 70% figure, shortcomings in readability compound more quickly over time. Every moment saved in readability compounds more quickly, too.
9. Documentation and tests are important, but ultimately they're indirectly related to code quality.
10. Readability directly impacts your ability, and that of everyone else, to do their job.
11. The one thing we will always be better at than the computer: empathetic communication with other people.

<details>
  <summary>Inside look at modern web browser (part 1)</summary>

  https://developers.google.com/web/updates/2018/09/inside-browser-part1

  There are 4 parts in the series of [understanding how a modern web browser works](https://twitter.com/addyosmani/status/1492398000500404227?s=20&t=r5KzKDO_TPmaZqBgdrt09g), especially Chrome. This is the first part, which mainly covers the high-level view of browser architecture. Modern applications including web browsers run on top of an operating system, and beneath the operating system is the hardware such as CPU, GPU, RAM, etc. In the context of where programs run inside computers, it's the implementation details of the programs. There are two main different ways of how a web browser is built, one is multiple threads inside the same process, and the other is multiple processes where each process may have more than one thread. Chrome takes the latter approach, and its recent architecture is described in the diagram below. You can also learn the benefits of taking multi-process architecture approach in the article and some techniques Chrome use to have better [web security](https://developers.google.com/web/updates/2018/09/inside-browser-part1#site-isolation) and [performance](https://developers.google.com/web/updates/2018/09/inside-browser-part1#saving_more_memory_-_servicification_in_chrome).

  ![chrome architecture](https://developers.google.com/web/updates/images/inside-browser/part1/browser-arch2.png)
  *Diagram of Chrome’s multi-process architecture. Multiple layers are shown under Renderer Process to represent Chrome running multiple Renderer Processes for each tab*

</details>

<details>
  <summary>Inside look at modern web browser (part 2)</summary>

  https://developers.google.com/web/updates/2018/09/inside-browser-part2

  There are 4 parts in the series of [understanding how a modern web browser works](https://twitter.com/addyosmani/status/1492398000500404227?s=20&t=r5KzKDO_TPmaZqBgdrt09g), especially Chrome. This is the second part, which uses the scenario of navigation to illustrate how different processes and threads communicate with each other in order to display a website. In case you have used [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) before, you will know it runs inside a renderer process and understand how it fits to the communication mechanism among different processes and threads here.

</details>

<details>
  <summary>CSS Versus JavaScript Animations</summary>

  https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript

  This article briefly illustrates some heuristics on whether to choose CSS or JavaScript for web animations. In short, CSS uses declarative ways to define animations and it's suitable for easier scenarios; while JavaScript uses imperative ways, and it can enable more complex animations.

</details>

<details>
  <summary>WTF is Jamstack?</summary>

  https://jamstack.wtf/

  Actually the blog you are reading now is built with the Jamstack architecture, and being deployed to Netlify.

  This article is comprehensive, and it gives clear and simple explanations to common questions we may come up in our mind. In brief, Jamstack is a different way to architect web applications, it utilizes [CDNs](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) to serve web pages, so performance is a lot better. Also you can use 3rd party apis or serverless functions as backend.

</details>

<div id="2022-02-14"></div>

##### <a href="#2022-02-14" name="fragment">2022-02-14</a>

<details>
  <summary>Flexbox Froggy</summary>

  https://flexboxfroggy.com/

  A website that teaches you CSS Flexbox by playing games. You'll learn these concepts:
  `display: flex;`, `justify-content`, `align-items`, `flex-direction`, `order`, `align-self`, `flex-wrap`,
  `flex-flow`, `align-content`. Flexbox is a powerful technique for positioning elements based on
  one dimensional layout such as row or column.

</details>

<details>
  <summary>Grid Garden</summary>

  https://codepip.com/games/grid-garden/

  A website that teaches you CSS Grid Layout by playing games. You'll learn these concepts:
  `display: grid;`, `grid-template`, `grid-template-columns`, `grid-template-rows`, `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`, `grid-column`, `grid-row`. Grid is a powerful technique for positioning elements based on two dimensional layout.

</details>

<div id="2022-02-13"></div>

##### <a href="#2022-02-13" name="fragment">2022-02-13</a>

<details>
  <summary>JavaScript to Know for React</summary>

  https://kentcdodds.com/blog/javascript-to-know-for-react

  Modern frontend frameworks such as React use JavaScript a lot. 
  Not only you can write application logic using JavaScript, 
  you can also "write" HTML using JavaScript such as [JSX](https://reactjs.org/docs/introducing-jsx.html) and CSS using JavaScript such as [styled-components](https://styled-components.com/). 
  This blog post is a collection of key JavaScript concepts you should be familiar with if you would like to develop modern JavaScript applications.

  **Key Takeaways**

1. template literals
2. shorthand property names
3. arrow functions
4. destructuring
5. parameter defaults
6. rest/spread
7. ESModules
8. ternaries
9. array methods
10. nullish coalescing operator
11. optional chaining
12. promises and async/await

<details>
  <summary>Art of Abstraction</summary>

  https://www.merrickchristensen.com/articles/abstraction/

  Dealing with complexity is one of the most important topics in the field of computer science. 
  Abstraction can be said the most important technique for managing complexity. You can even said that 
  all computer systems are made of layers of abstraction from hardware to software. This article mainly 
  discusses abstraction in software people's point of view. Having a good conceptual model towards
  different levels of abstraction helps you have more clear strategies on dealing with ongoing software development challenges. This article also references some interesting articles worth reading. In short, [avoid hasty abstractions](https://kentcdodds.com/blog/aha-programming) and [having no abstraction is better than having wrong abstraction](https://youtu.be/4anAwXYqLG8?t=802).

</details>

<details>
  <summary>One React mistake that's slowing you down</summary>

  https://epicreact.dev/one-react-mistake-thats-slowing-you-down/

  This article concisely gives a good usage of composition capabilities provided by React. With proper layout provided, we may even don't need more complex tools such as [Context APIs](https://zh-hant.reactjs.org/docs/context.html) and [Redux](https://redux.js.org/),etc. to solve the [prop drilling](https://kentcdodds.com/blog/prop-drilling) issue, instead we can avoid the issue from coming up first!

</details>

<br />
<br />