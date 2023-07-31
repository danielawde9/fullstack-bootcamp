# Module 4: Promises, async/await with Real-life API Example

## A. Understanding Promises with API

A Promise in JavaScript is an object that may produce a single value some time in the future. It has three states: pending, fulfilled, or rejected.

### Promises Example

To get weather data, we need to make a network request. This is an asynchronous operation, as it may take some time to get the data, and our application can continue doing other things in the meantime.

We'll use the `fetch()` function to make a network request. `fetch()` returns a Promise.

Replace <YOUR_OPEN_WEATHER_MAP_API_KEY> with your actual OpenWeatherMap API key in the examples below:

```javascript
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(`Error: ${error}`));
```

Here, we use `then()` to wait for the Promise to be resolved or rejected. If the Promise is resolved, the data will be logged to the console. If the Promise is rejected, the error will be caught and logged.

## B. Understanding async/await with API

The `async` and `await` keywords are additions to JavaScript that aim to make dealing with Promises more manageable.

`async` is used to declare an asynchronous function. This function will return a Promise.

`await` can only be used inside an async function and will pause the function execution until the Promise is resolved or rejected.

### async/await Example

Now let's rewrite the above example using async/await.

```javascript
async function getWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getWeather();
```

Here, we're using `await` to pause the execution of the function until the network request is completed. The try/catch block is used to handle any errors that might occur.

With async/await, we can write asynchronous code that appears as synchronous code, making it easier to read and understand.

## C. Promise Chaining vs Async/Await

One of the significant advantages of async/await over traditional Promises is when we have to chain Promises.

### Promise Chaining

```javascript
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>');
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(`Error: ${error}`));
```

### Async/Await

```javascript
async function getWeather() {
  try {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>');
    let data = await response.json();
    console.log(data);

    response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>');
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getWeather();
```

As you can see, async/await syntax is much more readable and intuitive when dealing with multiple asynchronous operations sequentially.

## Async Function Execution

Async functions, under the hood, return a Promise. When you use the `await` keyword in an async function, the function execution is paused on that line, but only within that function. The rest of your code outside of that function continues to execute.

Let's look at a simple example to clarify this:

```javascript
async function asyncFunc() {
  let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=<YOUR_OPEN_WEATHER_MAP_API_KEY>');
  let data = await response.json();
  console.log(data);
}

function regularFunc() {
  console.log('This is a regular function');
}

asyncFunc();
regularFunc();
```

In the above example, when we call `asyncFunc()`, it starts executing. When it encounters the `await` keyword, it starts the fetch operation but doesn't stop the whole program to wait for it to finish. Instead, it pauses `asyncFunc()` and immediately moves on to execute `regularFunc()`.

So, `console.log('This is a regular function')` will likely execute before the fetch operation in `asyncFunc()` completes, since fetching data from a network takes some time. After the fetch operation finishes, `asyncFunc()` will resume, process the returned data, and then log it.

Remember, Promises and async/await are tools for handling asynchronous operations in JavaScript. Both of them are widely used, and understanding them is crucial to being a proficient JavaScript developer. Happy coding!
`;

console.log(markdownContent);
