# Challenge 6

## Objective:

Dive deep into asynchronous operations in JavaScript to understand how they work and their practical applications.

## Step 1: Introduction to Asynchronous JS

Simple Timers
Context: In JavaScript, timers can help delay or repeat the execution of code.

Delayed Execution: Use setTimeout to display a message "Hello after 5 seconds!" after a delay of 5 seconds.
Repeated Execution: Create a digital clock that shows the current time and updates every second using setInterval.
Tip: Use the Date object to fetch the current time.

Playing with Promises
Context: Promises represent values that might be available now, or in the future, or never.

Delayed Promise: Create a promise that resolves with the message "Promise resolved!" after 2 seconds.
Chaining Promises: After the initial promise resolves, chain another promise to it that alerts the message from the first promise and then logs "Chained message!" to the console.
Tip: then() can be used to chain promises.

Commit: "Challenge 6 - Done with step 1".

## Step 2: Diving Deeper into Async Operations

Making your Own Promise
Context: Promises can encapsulate asynchronous operations, like simulating a network request.

Create a promise that simulates a network request which takes 3 seconds.
The promise should randomly decide to resolve with a message "Data fetched successfully!" or reject with "Network Error!".
Consume the promise and handle both success and error scenarios.
Using Async/Await with Fetch API
Context: Async/Await makes asynchronous code look synchronous, improving readability.

Fetch data from a single post using the endpoint https://jsonplaceholder.typicode.com/posts/1.
Use async/await for the fetch operation.
Handle any potential errors using try/catch.
Tip: Remember to parse the response with .json() to view the data.

Commit: "Challenge 6 - Done with step 2".

## Step 3: Advanced Async Patterns

Multiple Requests at Once
Context: Sometimes, you want to fetch multiple resources concurrently.

Fetch data from three different posts (1, 2, and 3) using the https://jsonplaceholder.typicode.com/posts endpoint.
Use Promise.all to ensure that you process the results only after all requests complete.
Display the combined data in a structured format.
Tip: Each fetch operation returns a promise. Promise.all can handle an array of these promises.

Looping Through Promises with Async Iteration
Context: There are cases where you want to process a list of promises sequentially.

Create a list of 5 promises, each fetching a different post (from 4 to 8) from the https://jsonplaceholder.typicode.com/posts endpoint.
Process each promise in sequence, logging its result to the console.

Hint: While for-await-of provides a clean way to iterate over promises, you can also use the traditional .then() method with reduce() to chain promises or an async function with a simple for loop. Both methods allow you to handle promises sequentially.

Commit: "Challenge 6 - Done with step 3".

Don't forget to push your code to GitHub!<br>
Wishing you all the best and happy coding!<br>
In case you have any questions, feel free to google it.<br>
Remember to continually commit your pChallenge 6 - Done with step to your completion of the various steps. Good luck with the challenge!
