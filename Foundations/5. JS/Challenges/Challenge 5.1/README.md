# Challenge 5.1

## Step 1

- Using JavaScript, create a `button` element, and add it to the `body` of the page.

```css
padding: 10px 20px;
font-size: 16px;
background-color: #3498db;
color: #ffffff;
border: none;
cursor: pointer;
```

- Add the above styles to the button using JavaScript.
- Create an event listener to change the background color of the button to red, and color to white when it is clicked.
- Inside the above `click` event listener, change the content of the text to "Clicked `randomNumber`!". (Note that randomNumber is a random number between 1 and 1000.)

Commit : "Challenge 5.1 - Done with step 1".

## Step 2:

- Create `h1` element, and add it to the `body` of the page.
- Add border to the `h1` element with the following properties:
  - Width: 10px
  - Style: dotted
  - Color: green
- Add `keydown` event listeners to do the following:
  - Pressing 'A': Change the background color of the `h1` to red.
  - Pressing 'S': Move `h1` element 10 pixels to the right.
  - Pressing 'D': Append a new paragraph with text "Key D was pressed!" to the display element.
  - Pressing 'W': Toggle the visibility of the `h1` element.
  - Pressing 'Space': Enlarge the font size of `h1` element's text.

Commit : "Challenge 5.1 - Done with step 2".

## Step 3:

- Create an HTML form with the following fields:

  - Full Name
  - Email Address
  - Password
  - Confirm Password
  - Submit Button (button input)

- On submit:

  - Prevent the default form submission.
  - Ensure that the entered email is valid, otherwise show a descriptive error message.
  - Ensure that the `Password` and `Confirm Password` fields match before, otherwise show a descriptive error message.
  - Displays a `success` message if all fields are valid and the form is submitted successfully.

- When a user clicks on an input field, change background color to indicate focus. When the user clicks outside the input, return to default style.

Commit : "Challenge 5.1 - Done with step 3".

