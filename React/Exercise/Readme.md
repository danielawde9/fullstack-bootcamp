Promises:
Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. Essentially, they are a return value of an operation that hasn't necessarily completed yet.

Easy exercise: Create a simple promise that resolves to a string "Hello, World!" after 2 seconds.

Solution:


let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello, World!"), 2000);
});

promise.then(alert); // Alerts "Hello, World!" after 2 seconds.
Hard exercise: Create a promise-based function fetchData(url) that fetches data from a given url. It should resolve to the response if the status is 200 and reject with status text otherwise.

Solution:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          reject(response.statusText);
        }
      })
      .catch(error => reject(error));
  });
}

Async/Await:
Async/await in JavaScript is a syntax sugar over Promises which makes asynchronous code look more like synchronous code.

Easy exercise: Rewrite the promise from the easy exercise above using async/await.

Solution:

async function helloWorld() {
  return "Hello, World!";
}

helloWorld().then(alert); // Alerts "Hello, World!"
Hard exercise: Rewrite the fetchData(url) function from the hard exercise above using async/await.

Solution:


async function fetchData(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
Destructuring:
Destructuring in JavaScript is a way to extract values from data stored in objects and arrays.

Easy exercise: Given an object { name: "Alice", age: 25 }, use destructuring to assign these values to two variables name and age.

Solution:


let person = { name: "Alice", age: 25 };
let { name, age } = person;

console.log(name); // Alice
console.log(age);  // 25
Hard exercise: Given an array of objects representing users, e.g., [{id: 1, name: "John", email: "john@example.com"}, ...], use destructuring and array methods to create a new array of emails.

Solution:


let users = [
  {id: 1, name: "John", email: "john@example.com"},
  {id: 2, name: "Jane", email: "jane@example.com"}
  // ...and so on
];

let emails = users.map(({ email }) => email);

console.log(emails); // ["john@example.com", "jane@example.com", ...]


Arrow Functions:
Arrow functions in JavaScript provide a concise syntax for defining functions and also lexically bind the this value.

Easy exercise: Convert the following function declaration to an arrow function:

jsx

function greet(name) {
  return "Hello, " + name;
}
Solution:

jsx

let greet = name => "Hello, " + name;
Hard exercise: Rewrite the fetchData(url) function from the previous exercises using arrow functions.

Solution:

jsx

let fetchData = async (url) => {
  let response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
Template Literals:
Template literals provide a more flexible way to work with strings in JavaScript, allowing expressions to be embedded within them and multi-line strings.

Easy exercise: Rewrite the greet arrow function using template literals.

Solution:

jsx

let greet = name => `Hello, ${name}`;
Hard exercise: Given an array of objects representing users, like before, use destructuring and template literals to log each user's details in the format "User [name] with ID [id] has email [email]."

Solution:

jsx

let users = [
  {id: 1, name: "John", email: "john@example.com"},
  {id: 2, name: "Jane", email: "jane@example.com"}
  // ...and so on
];

users.forEach(({ id, name, email }) => console.log(`User ${name} with ID ${id} has email ${email}.`));
Modules:
JavaScript modules are individual units of code that can be imported and exported from other modules. This makes the codebase easier to manage, more readable, and more maintainable.

Easy exercise: Create a simple module greetings.js that exports the greet function we defined earlier. Then, import it in another file and use it.

Solution:

jsx

// greetings.js
export let greet = name => `Hello, ${name}`;

// app.js
import { greet } from './greetings.js';

console.log(greet("John"));  // "Hello, John"
Hard exercise: Organize the following functions into modules: fetchData(url), greet(name), and a new function getUserEmails(users) that returns an array of emails from an array of user objects.

Solution:

jsx

// api.js
export let fetchData = async (url) => { /* ... */ };

// greetings.js
export let greet = name => `Hello, ${name}`;

// users.js
export let getUserEmails = users => users.map(({ email }) => email);

// app.js
import { fetchData } from './api.js';
import { greet } from './greetings.js';
import { getUserEmails } from './users.js';

// Use the imported modules here.
Array Methods (map, filter, etc.):
JavaScript arrays come with a number of useful methods for processing and manipulating arrays, such as map(), filter(), and so on.

Easy exercise: Given an array of numbers, use the map() method to create a new array where each number is multiplied by 2.

Solution:

jsx

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(number => number * 2);

console.log(doubled);  // [2, 4, 6, 8, 10]
Hard exercise: Given an array of objects representing users, like before, use filter() and destructuring to create a new array containing only users whose email domain is "example.com".

Solution:

jsx

let users = [
  {id: 1, name: "John", email: "john@example.com"},
  {id: 2, name: "Jane", email: "jane@other.com"}
  // ...and so on
];

let filteredUsers = users.filter(({ email }) => email.endsWith("@example.com"));

console.log(filteredUsers);
// [{id: 1, name: "John", email: "john@example.com"}]



Reduce:
The reduce() method in JavaScript is used to apply a function to each element in an array to reduce the array to a single output value.

Easy exercise: Given an array of numbers, use the reduce() method to find the sum of all numbers in the array.

Solution:

jsx

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);  // 15
Hard exercise: Given an array of objects representing users, like before, use reduce() to create an object where the keys are user IDs and the values are the user's email addresses.

Solution:

jsx

let users = [
  {id: 1, name: "John", email: "john@example.com"},
  {id: 2, name: "Jane", email: "jane@other.com"}
  // ...and so on
];

let userMap = users.reduce((obj, { id, email }) => {
  obj[id] = email;
  return obj;
}, {});

console.log(userMap); // {1: "john@example.com", 2: "jane@other.com"}
Shift:
The shift() method in JavaScript is used to remove the first element from an array and returns that removed element. This method changes the length of the array.

Easy exercise: Given an array [1, 2, 3, 4, 5], use the shift() method to remove the first element.

Solution:

jsx

let numbers = [1, 2, 3, 4, 5];
let firstNumber = numbers.shift();

console.log(firstNumber); // 1
console.log(numbers); // [2, 3, 4, 5]
Hard exercise: Implement a function removeFirstUser(users) that takes an array of user objects and removes the first user from the array. The function should return the removed user and the new array of users.

Solution:

jsx

function removeFirstUser(users) {
  let firstUser = users.shift();

  return { firstUser, users };
}

let users = [
  {id: 1, name: "John", email: "john@example.com"},
  {id: 2, name: "Jane", email: "jane@other.com"}
  // ...and so on
];

let result = removeFirstUser(users);

console.log(result.firstUser); // {id: 1, name: "John", email: "john@example.com"}
console.log(result.users); // Remaining users



Components:
Components are the building blocks of a React application. They are typically defined as functions that return a piece of JSX representing part of the user interface.

Easy exercise: Create a simple Hello component that displays "Hello, World!".

Solution:

jsx

import React from 'react';

const Hello = () => <h1>Hello, World!</h1>;

export default Hello;
Hard exercise: Create a UserList component that receives an array of user objects via props and displays the name of each user in an unordered list.

Solution:

jsx

import React from 'react';

const UserList = ({ users }) => (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);

export default UserList;
Props:
Props (short for properties) in React allow components to talk to each other. A parent component can pass variables down to a child component via props.

Easy exercise: Modify the Hello component from the first exercise to display the name received via props.

Solution:

jsx

import React from 'react';

const Hello = ({ name }) => <h1>Hello, {name}!</h1>;

export default Hello;
Hard exercise: Create a UserCard component that receives a user object via props and displays the user's name and email.

Solution:

jsx

import React from 'react';

const UserCard = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

export default UserCard;
Forms in React:
Forms are essential parts of any interactive website. React provides a way to handle form's state in a neat way.

Easy exercise: Create a simple form with an input field for the user's name and a submit button. When the form is submitted, it should alert the entered name.

Solution:

jsx

import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
Hard exercise: Expand on the previous form. Add fields for email and password, and validate the inputs before alerting the user's details (e.g., check that the name is not empty, the email looks like an email, and the password is at least 6 characters long).

Solution:

jsx

import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !email.includes('@') || password.length < 6) {
      alert('Invalid input');
      return;
    }

    alert(`Submitted details: Name - ${name}, Email - ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
Remember to always validate user input on the server side as well, as client-side validation is easily bypassed!





Custom Hooks:
Custom Hooks are a mechanism to reuse stateful logic in React. Instead of using higher-order components or render props to share stateful logic, we can encapsulate it inside a reusable function.

Easy exercise: Create a custom Hook useCounter that manages a simple counter state with increment and decrement functions.

Solution:

jsx

import { useState } from 'react';

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default useCounter;
Hard exercise: Create a custom Hook useFetch that accepts a URL and returns the response data, loading state, and any error occurred during the fetch operation.

Solution:

jsx

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
Context API:
The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

Easy exercise: Create a context to store the current user's information and a UserProvider component that wraps the entire application.

Solution:

jsx

import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
Hard exercise: Use the context created in the previous exercise in a UserProfile component that displays the current user's name (if a user is logged in) or "Not logged in" otherwise.

Solution:

jsx

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? `Logged in as ${user.name}` : 'Not logged in'}
    </div>
  );
};

export default UserProfile;
React Router:
React Router is a collection of navigational components that compose declaratively in your application. It allows you to handle routing in your React applications.

Easy exercise: Set up a React Router with two routes: "/home" for a Home component and "/about" for an About component.

Solution:

jsx

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
Hard exercise: Expand on the previous exercise. Add a navigation bar with links to the Home and About pages, and ensure that the app defaults to the Home page when an unknown path is entered.

Solution:

jsx

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Redirect to="/home" />
    </Switch>
  </Router>
);

export default App;
The exercises above should give you a good understanding of these fundamental concepts in React. Always feel free to expand on them or create your own variations to practice!