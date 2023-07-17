**Name:**Diaa Sarieddine

1. **HTML**: Which HTML element is used to specify a title for a document?

   - A. `<head>`
   **- B. `<title>`**
   - C. `<header>`
   - D. `<meta>`

2. **CSS**: What does CSS stand for?

   - A. Creative Style Sheets
   - B. Cascading Style Scripts
   **- C. Cascading Style Sheets**
   - D. Computer Style Sheets

3. **Git**: What command initializes a new Git repository?

  ** - A. git init**
   - B. git new
   - C. git start
   - D. git create

4. **JavaScript**: What will the following code return: Boolean(10 > 9)?

   - A. "10 > 9"
   - B. false
   **- C. true**
   - D. undefined

5. **HTML**: Which HTML element is used to create an unordered list?

   - A. `<ol>`
 **  - B. `<ul>`**
   - C. `<li>`
   - D. `<p>`

6. **CSS**: What does the `z-index` property specify in CSS?

   - A. The opacity level of an element
   - B. The width and height of an element
   **- C. The stack order of an element**
   - D. The border thickness of an element

7. **Git**: How can you discard changes in the working directory in Git?

   **- A. git checkout --**
   - B. git discard
   - C. git undo
   - D. git clean

8. **JavaScript**: Which of the following is NOT a JavaScript data type?

   - A. String
   - B. Boolean
   - C. Function
   **- D. Character**

9. **HTML**: Which of the following tags is used to insert a blank line in HTML?

   **- A. `<br>`**
   - B. `<hr>`
   - C. `<line>`
   - D. `<break>`

10. **CSS**: Which CSS property is used to change the text color of an element?

    **- A. color**
    - B. text-color
    - C. font-color
    - D. textColor

11. **Git**: How do you create a new branch in Git?

    - A. git new branch
    - B. git branch new
   ** - C. git branch <name>**
    - D. git create <name>

12. **JavaScript**: How do you declare a JavaScript variable?

    - A. variable carName;
    **- B. var carName;**
    - C. v carName;
    - D. declare carName;

13. **HTML**: Which doctype is correct for HTML5?

    - A. `<!DOCTYPE HTML PUBLIC>`
    **- B. `<!DOCTYPE HTML>`**
    - C. `<!DOCTYPE>`
    - D. `<!HTML>`

14. **CSS**: How do you select an element with id "demo" in CSS?

    - A. demo
    - B. .demo
    - C. \*demo
    **- D. #demo**

15. **Git**: What is the purpose of the `git push` command?

    - A. To fetch from and integrate with another repository
    - B. To record changes to the repository
    **- C. To update remote refs along with associated objects**
    - D. To list all new or modified files to be committed

16. **JavaScript**: What is the correct JavaScript syntax to change the content of the HTML element below? `<p id="demo">This is a demonstration.</p>`

    - A. document.getElement("p").innerHTML = "Hello World!";
    **- B. document.getElementById("demo").innerHTML = "Hello - World!"**
    - C. #demo.innerHTML = "Hello World!";
    - D. p.demo.innerHTML = "Hello World!";

17. **HTML**: What is the correct HTML for making a checkbox?

    - A. `<checkbox>`
    - B. `<check>`
   ** - C. `<input type="checkbox">`**
    - D. `<input type="check">`

18. **CSS**: Which property is used to change the background color?

    - A. color
    - B. bg-color
    **- C. background-color**
    - D. bgcolor

19. **Git**: What does `git clone` do?

    - A. Clones your local repository
    **- B. Clones a remote repository to your local machine**
    - C. Copies a branch
    - D. Copies a commit

20. **JavaScript**: What is a closure in JavaScript?

    - A. A local variable for function
    - B. A global variable for function
    - C. A block of code
    **- D. An inner function that has access to the outer (enclosing) function's variables—scope chain.**

21. **HTML**:
    Your task is to build a basic HTML structure for a blog article page. The page should have a header with the blog name, a main section, and a footer. The main section should include an article with a title, author name, published date, and the content of the article. Also include a section for comments. Each comment should display the commenter's name, comment date, and the comment itself.

    ```html
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <title>Blog</title>
   </head>

   <body>
        <article>
             <header>
                 <h1>Fashion Blog</h1>
             </header>

             <div class="main-section">
                  <p style="font-weight: bold;">Blog title</p>
                  <p>Article's Author</p>
                  <label>Article's publish Date</label> <p>January 29, 2020
             </div>
        </article>

           
   </body>
   ```

22. **HTML**:
    Create a simple HTML table that has 3 rows and 2 columns. The first row should be the table header. Also, write CSS to make the table expand to the full width of its parent element and each cell should have a border.

   ```html
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <table class="Registration">
        <tr>
            <th>Id</th>
            <th>Name</th>
        </tr>

        <tr>
            <td style="text-align: center;">1</td>
            <td>Sam</td>
        </tr>

        <tr>
            <td>2</td>
            <td>Sarah</td>
        </tr>
    </table>


</body>

</html>

<style>
    .Registration {
        border: Ridge;
        width: 100%;
    }

    table.Registration th {
        border: dotted;
        border-color: black;
        width: 50%;
    }

    table.Registration td {
        border: ridge;
        border-color: black;
        color: red;
        width: 50%;
    }
</style>
```
    

24. **CSS**:
    Write a CSS rule that changes the font color to blue for any paragraph that is a direct child of a div element.
    body > div > p {
         color: blue;
    }

26. **CSS**:
    Given the HTML structure for the blog from the previous question, use CSS to style it. The blog title should be centered and have a different color than the rest of the text. The article title should be bold and underlined. The comments section should have a different background color than the rest of the page.

    ```html
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <title>Blog</title>
   </head>

   <body>
        <article>
             <header>
                 <h1>Fashion Blog</h1>
             </header>

             <div class="main-section">
                  <p class="blog-title" style="font-weight: bold;">Blog title</p>
                  <p>Article's Author</p>
                  <label>Article's publish Date</label> <p>January 29, 2020
             </div>
        </article>

           
   </body>

   <style>
      header{
         text-align: center;
         color: red;    
      }

      .blog-title{
         font-weight: bold;
         text-decoration-line: underline;
      }
      
   </style>
   ```

28. **Javascript**:
    Write a JavaScript function that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Test the function with an array of your choice.

    ```js
          function arraySum(array) {
          let sum = 0;
          for (let i = 0; i < array.length; i++) {
              sum = sum + array[i];
          }
      
          console.log(sum);
          return sum;
          }
      
      A[5] = [1, 2, 3, 4, 5];
      
      arraySum(A);

    ```

29. **Javascript**:
    Create a JavaScript object that represents a student. The object should have properties for name, age, and subjects. Subjects should be an array of strings
    ```js
       student = {
           name: "Diaa",
           age: 23,
           subjects : [
                "English",
                "Math"
          ]
       }
    ```

30. **Javascript**:
    Write a JavaScript function that adds a new item to a list in the HTML document. Assume the list has an id of "myList".
    ```js
       
    ```

32. **Git**:
    Write the Git command to clone a repository from GitHub
    git clone repoLink

34. **Git**:
    Write the Git command to check the status of your repository.
    git status

36. In your own words, define what "boilerplate code" means
  A boileplate code is a code that is used repetitively . A code of block used over and over again.
