![](https://www.nodejsera.com/nodejs-tutorial-day20-timers.htmlassets/img/logo.png)


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
  21. [ Day 21 - Buffers in node.js ](nodejs-tutorial-day21-buffers.html)
  22. [ Day 22 - String Decoder Module in node.js ](nodejs-tutorial-day22-string-decoder.html)
  23. [ Day 23 - Debugger module in node.js ](nodejs-tutorial-day23-debuggers.html)
  24. [ Day 24 - Child Processes in node.js ](nodejs-tutorial-day24-child-processes.html)
  25. [ Day 25 - Clusters in node.js ](nodejs-tutorial-day25-clusters.html)
  26. [ Day 26 - OS module in node.js ](nodejs-tutorial-day26-os-module.html)
  27. [ Day 27 - Assert module in node.js ](nodejs-tutorial-day27-assert.html)
  28. [ Day 28 - Getting Tweets using node.js ](nodejs-tutorial-day28-getting-tweets-using-nodejs.html)
  29. [ Day 29 - Uploading file to dropbox using node.js ](nodejs-tutorial-day29-uploading-files-dropbox.html)
  30. [ Day 30 - Github API with node.js ](nodejs-tutorial-day30-github-api-with-node.html)



Node.js Timer modules exposes a global API which is used to schedule functions
to be called later at some given time. Node.js timer is a construct which is
used to calls a particular function after a given time. Also when the function
is called depends upon which timer function is associated with it while
creating it and also what work [ node.js event loop
](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) is doing.
We don't need to explicitly call ` timers ` function because of their global
access.



These methods are used to schedule the exection of the code after a previously
set period of time.

  1. **setImmediate(callback, args*) :** This method will execute the code after the end of current cycle of the event loop. This method will be executed after any I/O operations which are in the current event loop but before timers scheduled for the next cycle of event loop.  
First argument to the ` setImmediate ` will be the function to execute. An
example is given below :  
**Note :** _** indicates optional arguments passed at run time._  

    
        											
    function hello () {  
      console.log("This will run Immediately");  
    }  
    console.log("It will Print the data Immediately")
    setImmediate(hello);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "setImmediate().js"
    It will Print the data Immediately
    This will run Immediately
    											
    										

  

  2. **setInterval(callback, delay , args**) :** If there is a block of code that we want to run multiple times , we can use ` setInterval() ` to execute that code. This method takes a function as its first argument which will run infinitely with a delay given in milliseconds as the second argument. We can pass more additional arguments also but it is optional and depends upon coders requirements .Also, the delay should be treated as a approximate delay because it depends on the state and operations that may be hold on to the event loop. An example is given below :   
**Note :** _** indicates optional arguments._  

    
        											
    function hello () {  
      console.log("This will run recursively");  
    }  
    console.log("It will Print the data recursively after a delay of 2000ms again and again")
    setInterval(hello,2000);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "setInterval().js"
    It will Print the data recursively after a delay of 2000ms again and again
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    											
    										

  

  3. **setTimeout(callback, delay , args** ) :** This method can be used to execute a function after a designated amount of delay. This method accepts function as its first argument and the delay in milliseconds as second argument.We can pass more additional arguments also but it is optional and depends upon coders requirements. An example is given below :   
**Note :** _** indicates optional arguments_  

    
        											
    function hello () {  
      console.log("This will run only once");  
    }  
    console.log("It will Print the data once after the delay of 2000ms")
    setTimeout(hello,2000); 
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "setTimeout().js"
    It will Print the data once after the delay of 2000ms
    This will run only once
    
    											
    										

  


    
    
    											
    function hello () {  
      console.log("This will run Immediately");  
    }  
    console.log("It will Print the data Immediately")
    setImmediate(hello);
    											
    										


    
    
    											
    >node "setImmediate().js"
    It will Print the data Immediately
    This will run Immediately
    											
    										


    
    
    											
    function hello () {  
      console.log("This will run recursively");  
    }  
    console.log("It will Print the data recursively after a delay of 2000ms again and again")
    setInterval(hello,2000);
    											
    										


    
    
    											
    >node "setInterval().js"
    It will Print the data recursively after a delay of 2000ms again and again
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    This will run recursively
    											
    										


    
    
    											
    function hello () {  
      console.log("This will run only once");  
    }  
    console.log("It will Print the data once after the delay of 2000ms")
    setTimeout(hello,2000); 
    											
    										


    
    
    											
    >node "setTimeout().js"
    It will Print the data once after the delay of 2000ms
    This will run only once
    
    											
    										



  1. **clearImmediate(immediate) :** This method is used to clear the object created by ` setImmediate() ` function upon its execution.   
  

    
        											
    function hello () {  
      console.log("This will not run at all");  
    }  
    console.log("It is supposed to print the data immediately")
    var imm = setImmediate(hello);
    clearImmediate(imm);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "clearImmediate().js"
    It is supposed to print the data immediately
    											
    										

  

  2. **clearInterval(timeout):** This method is used to clear the object created by ` setInterval() ` function upon its execution.   
**Note :** _** indicates optional parameters_  

    
        											
    function hello () {  
      console.log("This will Not Run at all");  
    }  
    console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
    var s_int = setInterval(hello,2000); 
    clearInterval(s_int);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "clearInterval().js"
    It is supposed Print the data recursively after a delay of 2000ms again and again
    											
    										

  

  3. **clearTimeout(timeout) :** This method is used to clear the object created by ` setTimeout() ` function upon its execution.   
  

    
        											
    function hello () {  
      console.log("This will not run at all");  
    }  
    console.log("It is supposed to Print the data once after the delay of 2000ms")
    var tim = setTimeout(hello,2000);  
    clearTimeout(tim);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node "clearImmediate().js"
    It is supposed to Print the data once after the delay of 2000ms
    
    											
    										

  


    
    
    											
    function hello () {  
      console.log("This will not run at all");  
    }  
    console.log("It is supposed to print the data immediately")
    var imm = setImmediate(hello);
    clearImmediate(imm);
    											
    										


    
    
    											
    >node "clearImmediate().js"
    It is supposed to print the data immediately
    											
    										


    
    
    											
    function hello () {  
      console.log("This will Not Run at all");  
    }  
    console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
    var s_int = setInterval(hello,2000); 
    clearInterval(s_int);
    											
    										


    
    
    											
    >node "clearInterval().js"
    It is supposed Print the data recursively after a delay of 2000ms again and again
    											
    										


    
    
    											
    function hello () {  
      console.log("This will not run at all");  
    }  
    console.log("It is supposed to Print the data once after the delay of 2000ms")
    var tim = setTimeout(hello,2000);  
    clearTimeout(tim);
    											
    										


    
    
    											
    >node "clearImmediate().js"
    It is supposed to Print the data once after the delay of 2000ms
    
    											
    										



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about timers in node.js. We also learned about setting timers and
clearing timers.

![](https://www.nodejsera.com/nodejs-tutorial-day20-timers.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

