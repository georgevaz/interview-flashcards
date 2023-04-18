export const ReactQuestions = {
  "What is React?": "A JavaScript library for building user interfaces",
  "What are the key features of React?": "JSX, Virtual DOM, One-way data binding, Component-based architecture",
  "What is JSX?": "A syntax extension for JavaScript that allows you to write HTML-like code in your JS code",
  "What is Virtual DOM?": "A lightweight representation of the actual DOM in memory that allows React to efficiently update the UI",
  "What is one-way data binding in React?": "Data flows only in one direction from parent to child components",
  "What is a component in React?": "A modular and reusable piece of UI that can be composed together to build larger interfaces",
  "What is state in React?": "A plain JavaScript object that represents the internal state of a component and can be updated using setState()",
  "What is a prop in React?": "Short for property, it is a way to pass data from a parent component to a child component",
  "What is the difference between state and props in React?": "State is internal to the component and can be updated using setState(), while props are passed from a parent component and cannot be modified by the child",
  "What is a higher-order component (HOC) in React?": "A function that takes a component and returns a new component with additional functionality",
  "What is the significance of keys in React lists?": "They help React identify which items have changed, are added, or are removed in a list of components",
  "What are controlled and uncontrolled components in React?": "Controlled components are those whose value is controlled by React, while uncontrolled components are those whose value is controlled by the DOM",
  "What is the purpose of using Redux in a React application?": "To manage the state of the application in a predictable and consistent way",
  "What is the difference between Redux and React Context?": "Redux is a state management library that can be used with any UI framework, while React Context is a feature of React that allows for sharing data between components without passing props down the component tree",
  "What is the significance of shouldComponentUpdate() method in React?": "It determines whether the component should re-render or not based on changes in its props or state",
  "What is the significance of componentDidMount() method in React?": "It is called once, immediately after a component is mounted to the DOM, and is commonly used for data fetching and other setup operations",
  "What is the significance of componentDidUpdate() method in React?": "It is called after a component is updated and the changes have been flushed to the DOM, and is commonly used for updating the component's state or making additional data requests",
  "What is the significance of componentWillUnmount() method in React?": "It is called just before a component is unmounted from the DOM, and is commonly used for cleanup operations and event listener removal"
};

export const ReduxQuestions = {
  "What is Redux?": "Redux is a predictable state container for JavaScript apps.",
  "What are the core principles of Redux?": "The core principles of Redux are: single source of truth, state is read-only, changes are made with pure functions (reducers), and changes are made with pure functions (reducers).",
  "What is a store in Redux?": "A store is an object in Redux that holds the application state, allows state to be updated with dispatch, and registers listeners with subscribe.",
  "What is an action in Redux?": "An action in Redux is a plain JavaScript object that describes a change that needs to be made to the state.",
  "What is a reducer in Redux?": "A reducer in Redux is a pure function that takes the current state and an action as arguments, and returns a new state.",
  "What is the role of combineReducers in Redux?": "combineReducers is a function in Redux that combines multiple reducers into a single reducer function.",
  "What is the role of dispatch in Redux?": "dispatch is a method in Redux that is used to dispatch an action to the store.",
  "What is the difference between synchronous and asynchronous actions in Redux?": "Synchronous actions in Redux are actions that immediately change the state of the application, whereas asynchronous actions are actions that trigger a side effect, such as making an API request, and then dispatch a synchronous action when the side effect is complete.",
  "What is middleware in Redux?": "Middleware in Redux is a function that intercepts actions before they reach the reducer, allowing for additional functionality such as logging or handling asynchronous actions.",
  "What are the benefits of using Redux?": "The benefits of using Redux include: centralized application state, predictable state changes, easier debugging and testing, and easier collaboration.",
  "What are the drawbacks of using Redux?": "The drawbacks of using Redux include: increased complexity, more boilerplate code, and potential performance issues.",
  "What is the difference between mapStateToProps and mapDispatchToProps?": "mapStateToProps is a function in Redux that connects a component to the store and maps state to props, whereas mapDispatchToProps connects a component to the store and maps dispatch to props.",
  "What is the purpose of the connect function in Redux?": "The connect function in Redux is used to connect a React component to the store, allowing it to access state and dispatch actions.",
  "What is the purpose of the Provider component in Redux?": "The Provider component in Redux is used to provide the store to all components in a React application.",
  "What is the difference between local state and global state in React and Redux?": "Local state is state that is managed by a component and only affects that component, whereas global state is state that is managed by the Redux store and can affect multiple components."
};

export const NodeQuestions = {
  "What is Node.js?": "Node.js is an open-source, cross-platform, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine.",
  "What is an event loop in Node.js?": "The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations. It is responsible for scheduling and executing events and their respective callbacks.",
  "What is a callback function in Node.js?": "A callback function is a function that is passed as an argument to another function and is executed when the original function has finished its work. In Node.js, callbacks are commonly used to handle asynchronous operations and I/O operations.",
  "What is the difference between Node.js and JavaScript?": "JavaScript is a programming language that is primarily used to create interactive client-side web applications. Node.js is a runtime environment that allows JavaScript to be run on the server-side, enabling the development of scalable network applications.",
  "What is npm and what is it used for?": "npm (Node Package Manager) is a package manager for Node.js that allows developers to easily install, update, and manage third-party packages and dependencies in their Node.js projects.",
  "How can you handle errors in Node.js?": "In Node.js, errors can be handled using try-catch blocks, the built-in error handling middleware, or by passing errors to a callback function.",
  "What is the difference between the 'fs' and 'path' modules in Node.js?": "The 'fs' module is used for working with the file system, while the 'path' module is used for working with file and directory paths. The 'path' module is often used in conjunction with the 'fs' module to construct file paths.",
  "What is a stream in Node.js?": "A stream is an abstract interface for working with streaming data in Node.js. Streams allow data to be processed piece by piece, rather than loading it all into memory at once.",
  "What is the purpose of the 'http' module in Node.js?": "The 'http' module is used for creating HTTP servers and clients in Node.js. It provides a way to handle HTTP requests and responses, and can be used to build web applications and APIs.",
  "What is middleware in Express.js?": "Middleware functions in Express.js are functions that have access to the request and response objects, and can perform tasks such as modifying the request or response, logging, authentication, and more.",
  "What is the purpose of the 'body-parser' middleware in Express.js?": "The 'body-parser' middleware in Express.js is used for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.",
  "What is the difference between 'res.send()' and 'res.json()' in Express.js?": "'res.send()' sends a generic response with optional HTTP status code and message, while 'res.json()' sends a JSON response with optional HTTP status code and message.",
  "What is Express.js and how is it related to Node.js?": "Express.js is a web application framework for Node.js that provides a set of features for building web applications and APIs. It is built on top of Node.js, and provides a simpler and more convenient way to build server-side applications with Node.js.",
  "What is routing in Express.js?": "Routing in Express.js refers to the process of defining application endpoints (URIs) and how they respond to client requests.",
};

export const ExpressQuestions = {
  "What is Express.js?": "Express.js is a web framework for Node.js that simplifies the process of building APIs and web applications.",
  "How do you install Express.js?": "You can install Express.js by running 'npm install express' in your project directory.",
  "What is middleware in Express.js?": "Middleware functions in Express.js are functions that have access to the request and response objects and can modify them or perform additional operations before passing them on to the next middleware function in the chain.",
  "What is the purpose of the 'next' function in middleware?": "The 'next' function in middleware is used to pass control to the next middleware function in the chain.",
  "What is the difference between app.get() and app.post() in Express.js?": "The app.get() method is used to handle GET requests, while the app.post() method is used to handle POST requests.",
  "What is the purpose of the 'res' object in Express.js?": "The 'res' object in Express.js is used to send responses back to the client.",
  "What is the purpose of the 'req' object in Express.js?": "The 'req' object in Express.js represents the HTTP request made by the client.",
  "What is the purpose of the 'app' object in Express.js?": "The 'app' object in Express.js is the central object that represents the Express application.",
  "What is routing in Express.js?": "Routing in Express.js refers to the process of mapping HTTP requests to handler functions based on the URL and HTTP method.",
  "What is error handling middleware in Express.js?": "Error handling middleware in Express.js is middleware that is used to handle errors that occur during the handling of requests.",
  "What is the purpose of the 'next(err)' function call in error handling middleware?": "The 'next(err)' function call in error handling middleware is used to pass control to the next error handling middleware function in the chain.",
  "What is Express.js' app.use() method used for?": "The app.use() method in Express.js is used to register middleware functions in the Express application.",
  "What is Express.js' app.set() method used for?": "The app.set() method in Express.js is used to set configuration variables in the Express application.",
  "What is the difference between a router and an app in Express.js?": "In Express.js, a router is a subset of an app that handles a specific set of routes, while an app handles all routes for an application.",
  "What is body-parser middleware in Express.js used for?": "The body-parser middleware in Express.js is used to parse the body of incoming HTTP requests and make it available in the req.body object."
};

export const StarredQuestions = {};
