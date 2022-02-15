---
title: What I learned today
date: "2022-02-13"
description: "A living list recording what I learn everyday!"
pin: true
draft: false
---

## What this post is about?

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JIceCvZS-4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I believe that achievement only comes from deliberate and consistent hard work being practiced every day. If we record down every detail of what we learned along the path, we may find out that the success is really not a miracle. It doesn't come from no where, but comes from dots connected along your life journey. Steve Jobs once said, you can't connect the dots looking forward; you can only connect them looking backwards. However, I think it's not true for knowledge development(management). You may somehow figure out some clues of what you already know, what you actually don't know or what you want to know in the future, etc., then you can better prepare for yourself for the future, at least for learning's sake. 

This list should be a living document that fulfills my incomplete arguments, and I'll try my best to keep it up to date and improve it if possible along my lifelong journey.

## The list

...to be continued

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
</details>

<details>
  <summary>Inside look at modern web browser (part 1)</summary>

  https://developers.google.com/web/updates/2018/09/inside-browser-part1

  There are 4 parts in the series of [understanding how a modern web browser works](https://twitter.com/addyosmani/status/1492398000500404227?s=20&t=r5KzKDO_TPmaZqBgdrt09g), especially Chrome. This is the first part, which mainly covers the high-level view of browser architecture. Most modern applications including web browsers run on top of an operating system, and beneath the operating system is the hardware such as CPU, GPU, RAM, etc. In the context of where programs run inside the computer, it's the implementation details of the programs. There are two main different ways for how a web browser is built, one is multiple threads inside the same process, and the other is multiple processes where each process may have more than one thread. Chrome takes the latter approach, and its recent architecture is described in the diagram below. You can also learn the benefits of taking multi-process architecture approach in the article and some techniques Chrome use to have better [web security](https://developers.google.com/web/updates/2018/09/inside-browser-part1#site-isolation) and [performance](https://developers.google.com/web/updates/2018/09/inside-browser-part1#saving_more_memory_-_servicification_in_chrome).

  ![chrome architecture](https://developers.google.com/web/updates/images/inside-browser/part1/browser-arch2.png)
  *Diagram of Chrome’s multi-process architecture. Multiple layers are shown under Renderer Process to represent Chrome running multiple Renderer Processes for each tab*
</details>

<details>
  <summary>Inside look at modern web browser (part 2)</summary>

  https://developers.google.com/web/updates/2018/09/inside-browser-part2

  There are 4 parts in the series of [understanding how a modern web browser works](https://twitter.com/addyosmani/status/1492398000500404227?s=20&t=r5KzKDO_TPmaZqBgdrt09g), especially Chrome. This is the second part, which uses the scenario of navigation to illustrate how different processes and threads communicate with each other in order to display a website. In case you have used [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) before, you will know it runs inside a renderer process and understand how it fits to the communication mechanism among different processes and threads here.
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
</details>

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
