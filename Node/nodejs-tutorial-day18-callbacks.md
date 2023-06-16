![](https://www.nodejsera.com/nodejs-tutorial-day18-callbacks.htmlassets/img/logo.png)


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



Node.js is asynchronous which means node.js doesn't wait for the blocking
functions ( such as file I/O , calling some RestAPI and waiting for result or
writing some data to db , etc ) to finish instead node.js uses callbacks and
carries on with the execution of other tasks. A callback is simply a
asynchronous equivalent for a function which is called after the execution of
given task. Concept of callback prevents any blocking in node.js and allow
other tasks to be executed in the meantime. It is named callback because at
some point of time it is going to be ` called back `. Node.js makes ample use
of callbacks. All APIs in node.js supports the concept of callbacks.

![](https://www.nodejsera.com/nodejs-tutorial-day18-callbacks.htmlassets/img/blocking-vs-non-blocking.png)

    
    
    											
    //Name of the File is  : blocking-code.js
    var fs = require('fs');
    
    //For calculating execution time
    var date1 = new Date();
    var time_start = date1.getTime();
    console.log("starting at: " + time_start);
    console.log("Let's start reading file");
    
    
    //Name of the file to be read
    var filename = 'output.txt'; 
    //Reading file synchronously
    var content = fs.readFileSync(filename);
    console.log('Content : ' + content);
    
    
    //For calculating execution time
    var date2 = new Date();
    var time_end = date2.getTime();
    console.log("finishing at: " + time_end);
    var execution_time = time_end - time_start;
    console.log("Time for execution: " + execution_time );
    
    
    //Consider it some another task in queue
    console.log('Another task to be executed');
    											
    										


    
    
    											
    >node blocking-code.js
    starting at: 1510699688357
    Let's start reading file
    Content : Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. A
    enean massa. Cum sociis natoque pena....
    ...
    ...Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
     ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent cong
    ue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan curs
    us velit. Vestibulum ante ipsum primis in
    finishing at: 1510699688374
    Time for execution: 17
    Another task to be executed
    											
    										


    
    
    											
    //Name of the file: non-blocking-code.js
    var fs = require('fs');
    
    
    //For calculating execution time
    var date1 = new Date();
    var time_start = date1.getTime();
    console.log("{Check point 1} starting at: " + time_start);
    console.log("Let's start reading file");
    
    
    //Name of the file to be read
    var filename = 'output.txt'; 
    //Reading file asynchronously
    fs.readFile('output.txt', (err, data) => {
    	if (err) 
    		throw err;
    		
    	console.log("Content :  " + data);
    });
    
    
    //For calculating execution time
    var date2 = new Date();
    var time_end = date2.getTime();
    console.log("{Check point 2} finishing at:  " + time_end);
    var execution_time = time_end - time_start;
    console.log("Time for execution: " + execution_time );
    //Consider it some another task in queue
    console.log('Another task to be executed');
    
    											
    										


    
    
    											
    >node non-blocking-code.js
    {Check point 1} starting at: 1510700249917
    Let's start reading file
    {Check point 2} finishing at: 1510700249920
    Time for execution: 3
    Another task to be executed
    Content :  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Don
    ec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Done
    c pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
     venenatis vitae, justo.....
    ...
    ...Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
     ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent cong
    ue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan curs
    us velit. Vestibulum ante ipsum primis in
    											
    										


    
    
    											
    fxn1(function(){
        fxn2(function(){
            fxn3(function(){
                fxn4(function(){
    				fxn5(function(){
    					fxn6(function(){
    						fxn7(function(){
    							fxn8(function(){
    								....
                
    			
    							});
    						});
    					});
    				});
    			});
            });
        });
    });
    											
    										



  1. **Modularization :** By making our code as much modular as possible, callback hell can be avaoided. 
  2. **Promises :** We can use the concepts of promises to avoid callback hell. 
  3. **Async.js :** Async is a very powerful module on npm , which can be used to avoid callback hell.
  4. **Chaining promises :** We can avoid callback hell by chaining promises. 



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about the concept of callbacks, blocking and non-blocking code,
callback hell and lastly how to avoid callback hell.

![](https://www.nodejsera.com/nodejs-tutorial-day18-callbacks.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

