<div align="center">
  <h1> 30 Days Of React: States</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/DanielAwde9/">
  <img src=""badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/DanielAwde9">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/DanielAwde9?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/DanielAwde9/" target="_blank">Daniel Awde</a><br>
</sub>

</div>

[<< Day 7](../07_Day_Class_Components/07_class_components.md) | [Day 9 >>](../09_Day_Conditional_Rendering/09_conditional_rendering.md)

![30 Days of React banner](../images/_8.jpg)

- [States](#states)
  - [What is State?](#what-is-state)
  - [How to set a state](#how-to-set-a-state)
  - [Resetting a state using a JavaScript method](#resetting-a-state-using-a-javascript-method)
  - [Exercises](#exercises)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# States

## What is State?

What is state ? The English meaning of state is _the particular condition that someone or something is in at a specific time_.

Let us see some states being something - Are you happy or sad? - Is light on or off ? Is present or absent ? - Is full or empty ? For instance, I am happy because I am enjoying creating 30 Days Of React challenge. I believe that you are happy too.

State is an object in react which let the component re-render when state data changes.

## How to set a state

We set an initial state inside the constructor or outside the constructor of a class based component. We do not directly change or mutate the state but we use the _setState()_ method to reset to a new state. . As you can see below in the state object we have count with initial value 0. We can access the state object using _this.state_ and the property name. See the example below.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

If you run the above code you will see zero on the browser. We can increase or decrease the value the state by changing the value of the state using JavaScript method.

## Resetting a state using a JavaScript method

Now, let's add some methods which increase or decrease the value of count by clicking a button. Let us add a button to increase and a button to decrease the value of count. To set the state we use react method _this.setState_. See the example below

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add One
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

If you understand the above example, adding minus one method will be easy. Let us add the minus one method on the click event.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Add One
          </button>{" "}
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Minus One
          </button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Both button work well, but we need to re-structure the code well. Let us create separate methods in the component.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  // method which add one to the state

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button className="btn btn-add" onClick={this.addOne}>
            +1
          </button>{" "}
          <button className="btn btn-minus" onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Let us do more example about state, in the following example we will develop small application which shows either a dog or cat.
We can start by setting the initial state with cat then when it is clicked it will show dog and alternatively. We need one method which changes the animal alternatively. See the code below. If you want to see live click [here](https://codepen.io/DanielAwde9/full/LYVxKpq).

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declaring state
  state = {
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };
  changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>30 Days Of React</h1>
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>

        <button onClick={this.changeAnimal} class="btn btn-add">
          Change
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```


I believe that now you have a very good understanding of state. After this, we will use state in other sections too because state and props is the core of a react application.

## Exercises

### Exercises: Level 1

1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
2. What is state in React ?
3. What is the difference between props and state in React ?
4. How do you access state in a React component ?
5. How do you set a set in a React component ?

### Exercises: Level 2

1. Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.

![Change Background](../images/08_day_changing_background_exercise.gif)

2.  After long time of lock down, you may think of travelling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.

![Change Background](../images/08_day_select_country_exercise.gif)

### Exercises: Level 3

Coming

🎉 CONGRATULATIONS ! 🎉

[<< Day 7](../07_Day_Class_Components/07_class_components.md) | [Day 9 >>](../09_Day_Conditional_Rendering/09_conditional_rendering.md)
