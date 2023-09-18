# Challenge 3

## Goal of Challenge 3

- Dive deeper into Functions and Arrow functions
- Master variable scopes: Global vs. Local
- Get hands-on experience with various Loops: for, while, do-while

## Step 1: Functions

### Basic Function

Declare a function named `addNumbers` that takes in two parameters: `num1` and `num2`. This function should return the sum of these two numbers.

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}
```

Test your function with some sample inputs and log the results.

### Function with Conditional Statements

Create a function named `findMax` that takes two numbers as parameters and returns the larger number. If they're equal, it should return "Both are equal".

### Nested Function

Write a function named `compute` that takes three parameters: `num1`, `num2`, and `operation`. Inside this function, declare another function for each arithmetic operation (add, subtract, multiply, divide). The `operation` parameter will decide which inner function to run.

Commit: "Challenge 3 - Done with step 1".

## Step 2: Arrow Functions and Scopes

### Arrow Function

Declare an arrow function named `squareNumber` that takes in one parameter: `number`. This function should return the square of this number.

```javascript
const squareNumber = (number) => number * number;
```

### Understanding Scopes

- Global Scope: Declare a variable `globalVar` outside any function and assign a value to it. Inside the `squareNumber` function, try to log the value of `globalVar` to understand global scope.
- Local Scope: Inside the `squareNumber` function, declare a variable `localVar` and assign a value. Outside the function, try to log `localVar` to understand the concept of local scope and see the error it produces.

Commit: "Challenge 3 - Done with step 2".

## Step 3: Loops

### For Loop

Using a for loop, print the numbers from 1 to 10 to the console.

### While Loop

Using a while loop, print the numbers from 10 to 1 to the console.

### Do-While Loop with Conditionals

Using a do-while loop, print the numbers from 1 to 10, but only print the numbers that are even.

### Advanced Loop Challenge

Create an array of your favorite fruits. Using any loop of your choice, iterate over the array and print out each fruit name only if its length is greater than 5 characters.

Commit: "Challenge 3 - Done with step 3".

## Bonus Step: Advanced Concepts

### Higher Order Function

Create a function named `processArray` that takes in an array and another function as parameters. This function should apply the passed function to each element in the array.

### Closures

Create a function named `multiplier` that takes one number as a parameter and returns another function. The returned function should take a number as a parameter and return the product of the two numbers.

Commit: "Challenge 3 - Bonus steps completed".

Don't forget to push your code to GitHub!<br>
Wishing you all the best and happy coding!<br>
In case you have any questions, feel free to google it.<br>
Remember to continually commit your progress to track your completion of the various steps. Good luck with the challenge!
