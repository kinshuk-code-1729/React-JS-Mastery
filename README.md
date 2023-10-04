# React-JS-Mastery
![image](https://github.com/kinshuk-code-1729/React-JS-Mastery/assets/90320839/2fa3adf8-e8bd-4f2f-a0d7-0a794d5b007f)


- **ReactJS** is a _declarative_, _efficient_, and _flexible_ **JavaScript** library for building user interfaces.
- It is an _open-source_, _component-based_ **front-end** library that is responsible only for the view layer of the application.
- **ReactJS** is not a **_framework_**, it is just a **_library_** developed by **Facebook** to solve some problems that we were facing earlier.
- It is a **Model-View-Controller (MVC)** architecture-based library that plays the role of **“V”** which means _**view**_.
- It designs simple views for each state in our application, and **React** will efficiently **_update_** and **_render_** just the right _component_ when our data changes.
- The declarative view makes our code more predictable and easier to debug.

## ✨ React Features ✨ :
- **Use JSX: _JSX_** is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. It makes it easier for us to create templates.
- **Virtual DOM: _Virtual DOM_** exists which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.
- **One-way Data Binding: _One-way data binding_** gives you better view over your application.
- **Component:** A **_Component_** is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier.
- **Performance:** ReactJS use JSX, which is faster compared to normal JavaScript and HTML. Virtual DOM is a less time taking procedure to update webpages content.

## 🛑 React strictly follows _JSX_ Syntax i.e. _"JavaScript XML"_.
> ### 💻 Sample *App.js* code :
```javascript
import React from "react";
import ReactDOM from "react-dom";
 
var name = "Developer";
 
var element = <h1>Hello, {name}.Welcome to the world of ReactJS.</h1>;
 
ReactDOM.render(element, document.getElementById("root"));
```

> ### 🕶 Output:

# `Hello, Developer. Welcome to the world of ReactJS.`

## 👓 ReactJS Advantages :

- **Composable :** We can divide these codes and put them in custom components. Then we can utilize those components and integrate them into one place.
- **Declarative :** In react the DOM is declarative. We can make interactive UIs by changing the state of the component and React takes care of updating the DOM according to it.
- **SEO Friendly :** React affects the SEO by giving you a SPA (Single Page Application) which requires Javascript to show the content on the page which can be rendered and indexed.
- **Community :** React has a huge community because of it’s demand each company wants to work with React. Companies like Meta, Netflix, etc built on React.
- **Easy to learn :** HTML-like syntax of JSX make you comfortable with the codes of React, it only requires to need a basic knowledge of HTML, CSS, and JS fundamentals to start working with it.
