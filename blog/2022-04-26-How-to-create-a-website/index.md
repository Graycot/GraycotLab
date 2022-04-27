---
title: How to create a website
authors: [gray]
tags: [WebDev, CSS, HTML, Web hosting]
---

Hello! In today's blog entry I will be teaching you how to to create and upload a static website to the internet.

There are many options and methods for creating a website. In today's tutorial, you will:

- learn the difference between a Static and Dynamic website
- download the free tools needed to create a static website
- write HTML & CSS files for a website
- upload the website to a free host.

<!-- truncate -->

There are many tutorials on the internet that go into an enormous amount of depth on how to code a website. **This is not one of those tutorials**.
Rather, I intend to supply you with the guidance and direction so that you can use high quality tools and educational resources that already exist.

## Static vs Dynamic websites

When you enter a [URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) into your browser, you are connecting to a computer. These special purpose computers are called web servers.

Your computer will send a request for information to the web server. How the web server responds to that request depends on if you are visiting a Static or Dynamic website.

:::tip

Check out [this fantastic technical guide](<https://www.geeksforgeeks.org/static-vs-dynamic-website/>) explaining Static vs Dynamic websites by [GeeksforGeeks](https://www.geeksforgeeks.org/)

:::

### Static website

A static website will respond to your computer's request by sending back prebuilt files. Your browser can read these files as a blueprint for how to build the webpage that you see.

These files will typically be a combination of [**HTML, CSS, & JS**](https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/) files.

The prebuilt files may be written by hand, or written by an automated tool like a [static site generator (SSG)](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)

In any case, the files were already created ahead of time **before** your computer sent a request to the web server.

### Dynamic website

A dynamic website will

1. receive a request from your computer
2. proccess information about the request
3. generate files specifically for your request
4. respond by sending the custom files to your computer

Dynamic websites are generally more expensive to run, and more complicated to handle. These sites must be programmed in a [server side programming language](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction) like PHP, Python's Django framework, or Node JS.

While they are a bit more trouble, Dynamic websites are just about the only way to handle sensitive information or computationally expensive operations. Third party plugins/widgets are available to abstract away most of these concerns for you on a Static Website, but they may come with a *$$$* price.

:::caution

If you need a website that handles user login, secure information, or anything that you would **not want everyone to access**, you will almost certainly need to use a dynamic website with server side code or a third party service.

:::

## Structure of a static website

A static website is typically written in two or three languages

- [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) is the foundation, structure, and backbone of your website. You can think of it as the bones of the human body or the steel beams of a building.

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) controls how you see the website. It can be thought of a person's make up / cosmetics or the facade of a building.

[JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is not necessary for simple websites. JS can be thought of a brain or control center. Javascript allows you to move things around or change the prebuilt webpage. Unlike server side code that runs on a webserver, JavaScript is [client side code](https://i.pinimg.com/originals/00/14/57/001457b69f192f237f765006aa26036d.jpg). JS runs on the computer of the website's visitor.

:::info

You may notice that I am linking to [**MDN (Mozilla web docs)**](https://developer.mozilla.org/en-US/docs/Web) in most of my links. This is because **MDN is the definitive resource for high quality documentation on HTML, CSS, & JS**. If you have a question about how something in one of these languages work, it will be documented here.

:::

## Tools

To build a website, we first need an environment to create it in. You wouldn't cook food in your bathroom, and you wouldn't code in a word document.

You need an effective and functional place to write code. With the correct tools you will write better code in less time.

1. Download [Visual Studio Code (VS Code)](https://code.visualstudio.com/).
2. Install & Launch VS Code.
3. Watch and follow the first 9 minutes & 20 seconds of [this YouTube video](https://www.youtube.com/watch?v=XLDwqmXnmgI) to familiarize yourself with the user interface.
   - **Disregard everything after the 9 minute 20 second mark**, in this tutorial will be using a different set of extensions.
   - If the video is a bit slow for you, change the playback speed to 1.25 or 1.5
4. Go to **File > Preferences > Settings and search for "auto save". Open the drop down menu and select "onWindowChange".**

### Extensions

#### Essential extensions

*These extensions are required for building a website*

- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

#### Optional extensions

*These extensions are optional, but extremely useful*

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Class autocomplete for HTML](https://marketplace.visualstudio.com/items?itemName=AESSoft.aessoft-class-autocomplete)
- [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
- [HTML Tag Wrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

:::danger Notice:

**This blog article is a work in progress!** Last edited: ***April 26, 2022***

:::

## Writing code

## Uploading to the internet
