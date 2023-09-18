# Challenge 5

## Goal of Challenge 5

- Advanced DOM Manipulations.
- Navigating DOM tree.
- Handling Multiple DOM events.

<span style="color:red; font-size: 25px; font-weight: 600"> You are not allowed to edt the HTML file.</span>

## Step 1: DOM Creation and Navigation

### DOM Tree Navigation

Use JavaScript to select the `div` with class name `menu` , `header` element, and `footer` element. Then navigate to its child elements, logging them to the console.

### DOM Element Creation

Create a new DOM element, a `<div>` with the class "container". Inside this, add a paragraph (`<p>`) with the text `Hello, World!`.

### Element Styling

#### Using JavaScript:

- Change the background color of the "container" div to blue and the text color of the paragraph to white.
- Change the font size of the paragraph to 24px.
- Change the font family of the paragraph to "Helvetica".
- Add a border to the paragraph with a width of 1px, a style of solid, and a color of black.
- Change the heading tags style to italic.

Note: Don't create a new CSS file for this. Use JavaScript to add the styles.

Commit: "Challenge 5 - Done with step 1".

## Step 2: Event Handling

### Multiple Event Listeners

Create a button that changes color when you hover over it and reverts back when you move the mouse away. Implement this using two event listeners: `mouseover` and `mouseout`.

### Event Delegation

Target the `div` with id `buttonContainer`, and implement a single event listener on the container that listens for clicks on any button, and logs the text content of the clicked button.

### Form Data Extraction

Create a simple form with fields: "Name", "Email", and a "Submit" button. On submission, prevent the default form submission and instead, log the data entered by the user.

Commit: "Challenge 5 - Done with step 2".

## Step 3: Advanced DOM Manipulations

### DOM Cloning

- Clone the `div` with id `original` and append it to the `body`. Change the text of the `p` to `Cloned`.
- Do the needed changes to make the button with id `clone-btn` work. (It should show the cloned div when clicked, if it is hidden, and hide it when clicked, if it is shown.)

### Element Removal

Add a button that, when `clicked`, `removes` the `header` from the DOM.

### Inserting Elements

Create a `function` to insert a new DOM element `before the footer element`.

Commit: "Challenge 5 - Done with step 3".

Don't forget to push your code to GitHub!<br>
Wishing you all the best and happy coding!<br>
In case you have any questions, feel free to google it.<br>
Remember to continually commit your progress to track your completion of the various steps. Good luck with the challenge!
