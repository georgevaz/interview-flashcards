const ReactQuestions = {
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
}

export default ReactQuestions;