![](https://www..com/nodejs-tutorial-day23-debuggers.htmlassets/img/logo.png)

1. [ Day 1 - The Beginning ](nodejs-tutorial-day1-thebeginning.html)
2. [ Day 2 - File System in node.js ](nodejs-tutorial-day2-filesystem.html)
3. [ Day 3 - Regular expressions in node.js ](nodejs-tutorial-day3-regular-expressions.html)
4. [ Day 4 - Console module in node.js ](nodejs-tutorial-day4-console-module.html)
5. [ Day 5 - All about errors ](nodejs-tutorial-day5-all-about-errors.html)
6. [ Day 6 - Array methods](nodejs-tutorial-day6-array-methods.html)
7. [ Day 7 - All about NPM](nodejs-tutorial-day7-all-about-npm.html)
8. [ Day 8 - Publishing package on NPM ](nodejs-tutorial-day8-publishing-on-npm.html)
9. [ Day 9 - Crypto Module ( Hashing and HMAC)](nodejs-tutorial-day9-crypto-module.html)
10. [ Day 10 - Crypto Module ( Encryption and Decryption ) ](nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.html)
11. [ Day 11 - Express Framework ](nodejs-tutorial-day11-express-framework.html)
12. [ Day 12 - CRUD in MongoDB using node.js ](nodejs-tutorial-day12-crud-in-mongodb.html)
13. [ Day 13 - Sign Up form in node.js ](nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.html)
14. [ Day 14 - Introduction to socket.io ](nodejs-tutorial-day14-introduction-to-socket-io.html)
15. [ Day 15 - All about streams ](nodejs-tutorial-day15-all-about-streams.html)
16. [ Day 16 - Zlib Module ](nodejs-tutorial-day16-zlib-module.html)
17. [ Day 17 - CRUD in MySQL using node.js ](nodejs-tutorial-day17-crud-in-mysql.html)
18. [ Day 18 - Concepts of callbacks in node.js ](nodejs-tutorial-day18-callbacks.html)
19. [ Day 19 - Query String in node.js ](nodejs-tutorial-day19-query-string.html)
20. [ Day 20 - Timers in node.js ](nodejs-tutorial-day20-timers.html)
21. [ Day 21 - Buffers in node.js](nodejs-tutorial-day21-buffers.html)
22. [ Day 22 - String Decoder Module in node.js ](nodejs-tutorial-day22-string-decoder.html)
23. [ Day 23 - Debugger module in node.js ](nodejs-tutorial-day23-debuggers.html)
24. [ Day 24 - Child Processes in node.js ](nodejs-tutorial-day24-child-processes.html)
25. [ Day 25 - Clusters in node.js ](nodejs-tutorial-day25-clusters.html)
26. [ Day 26 - OS module in node.js ](nodejs-tutorial-day26-os-module.html)
27. [ Day 27 - Assert module in node.js ](nodejs-tutorial-day27-assert.html)
28. [ Day 28 - Getting Tweets using node.js ](nodejs-tutorial-day28-getting-tweets-using-nodejs.html)
29. [ Day 29 - Uploading file to dropbox using node.js ](nodejs-tutorial-day29-uploading-files-dropbox.html)
30. [ Day 30 - Github API with node.js ](nodejs-tutorial-day30-github-api-with-node.html)

A debugger is a program that helps us to debug the errors or bugs in a piece
of code. Nodejs comes with a debugger which we can use to hunt for different
bugs. In this article, we'll learn how to use debugger in our Nodejs program.

In order to use the node.js debugger, we need to pass "debug" parameter when
invoking a nodejs script. Just for an example if we want to debug a file named
hello.js, we'll start the debugger as shown below.

    node debug hello.js



The output of the above command should be similar to :

    < debugger listening on port 5858
    connecting... ok










    node debug hello.js



The output of the above command should be similar to :

    < debugger listening on port 5858
    connecting... ok







    node debug hello.js







    < debugger listening on port 5858
    connecting... ok



Some of the useful debugger commands include `step, next, list, backtrace`
which are explained below :

1. **step ::** Step into a function or a control structure. e.g. if there's a for loop and you want to look into it, simply use the step command.
2. **next ::** Next command moves us to the next line or section of code, when we want to skip a control structure like for loop or a function, we can use the next statement.
3. **list ::** List command is used to list he lines of source code which enables us to understand where we are on the code.
4. **backtrace ::** Backtrace prints information about what lead to the current execution state of the program. It's sometimes very useful to debug errors in the code.

**Note :** In computing, a stack trace (also called stack backtrace or stack
traceback) is a report of the active stack frames at a certain point in time
during the execution of a program.

    // Step-1 Run the script without any breakpoint
    var x = 5;
    var y = 6;
    var z = x + y;
    // run a for loop which will throw an error
    // add debugger here
    for(var i=0;i<12;i++){
        debugger;
        console.log(i)
    }








    < Debugger listening on [::]:5858
    connecting to 127.0.0.1:5858 ... ok
    break in debugger.js:3
      1 // Step-1 Run the script without any breakpoint
      2
    > 3 var x = 5;
      4 var y = 6;
      5 var z = x + y;
    debug> next
    break in debugger.js:4
      2
      3 var x = 5;
    > 4 var y = 6;
      5 var z = x + y;
      6
    debug> cont
    break in debugger.js:11
      9
     10 for(var i=0;i<12;i++){
    >11     debugger;
     12     console.log(i)
     13 }




As is clear from the example above, whereas the next step moves the execution
1 step at a time, the cont command can be used to jump to the next break point
in the code. Also note that by default, the debugger starts at the first line
of the code, in order to make it jump to our break point, we need to use the
"cont" command.

Following are commonly used shortcuts while debugging ::

`cont` , `c` \- Continue execution  
`next` , `n` \- Step next  
`step` , `s` \- Step in

![](https://www..com/nodejs-tutorial-day23-debuggers.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
