![](https://www.nodejsera.com/nodejs-tutorial-day24-child-processes.htmlassets/img/logo.png)


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



Node.js , being single threaded itself , works superbly fine with single
processes in a CPU but a single process in a single CPU is not enough to
handle the increasing load. Limitation of a single threaded process is that no
matter how advanced or powerful our server may be , it does have a limit to
support load. Moreover, Node.js is single threaded but it does not mean that
we can't take the advantage of multiple process.



Node.js's ` child process ` module is the solution with the help of which we
can create many sub-processes or child processes of a single process which can
be used to handle the load. These child processes can communicate with each
other using inter process communication. ` child_process ` module is also used
to access operating system functionalities by running OS commands inside child
processes. We can control the input stream as well as the output stream of the
child processes. We can also control the arguments to be passed to underlying
OS commands. Also , pipes for ` stdin `, ` stdout ` and ` stderr ` are
established between the parent and the child node.js process by default. We
can stream data through these pipes in non-blocking way.



There are four different ways for creating child processes :

  1. spawn() 
  2. fork() 
  3. exec() 
  4. execFile() 

Child processes can be created asynchronously or synchronously depending upon
the requirements.

  * Asynchronous methods create the child process without blocking the event loop. 
  * Synchronous methods creates the child process but blocks the event loop until the child process is either exits or is terminated. 

For certain cases , synchronous counterparts of the child processes is more
convenient to use. However in many cases, synchronous methods does affect the
performance because of the stalling of the event loop. Let's understand both
the methods of process creation one by one.



There are four different ways for creating child processes asynchronously :

  1. **` child_process.spawn() ` : ** This method spawns the child process asynchronously without blocking the node.js event loop 
  2. **` child_process.fork() ` :** This method is used to spawn a new node.js process and also invokes a specific method which provides inter-process communciation channel established that allow us to send messages between parent process and child process.
  3. **` child_process.exec() ` : ** This method is used to spawn a shell and then runs the command within that shell. This method also allows for an optional callback function which will be invoked when the execution of the process is completed.
  4. **` child_process.execFile() ` : ** This method is similar to ` child_process.exec() ` except that it spawns the command directly instead of spawning a shell. This method also allows for an optional callback which will be invoked when the execution of the process is completed.



Let's understand each method in detail with code example.  

  1. **

### child_process.spawn() :

**This method is used to spawn a new process using the given command.

    * **Syntax :**   

        
                											
        child_process.spawn(command[, args][, options])
        											
        										

  

    * **Parameters :**
      * command : Type is ` string `. It specifies the command to run. 
      * args : Type is ` array `. It specifies ist of string arguments 
      * object : Type is ` object `.It may contains one or more of the following : 
        * cwd 
        * env
        * argv0
        * stdio
        * detached
        * uid
        * gid
        * shell
        * windowsVerbatimArguments
        * windowsHide
      * returns : ` childProcess `
    * **Code Example :** We will have ` master-spawn.js ` from which we will access ` slave.js ` file as shown below :   

        
                												
        //Name of the file  : slave.js
        console.log("Child Process number " + process.argv[2] + " is executed." );
        												
        											

  
  

        
                												
        //Name of the file : master-spawn.js
        var cp = require('child_process');
         
        for(var i = 1; i<6; i++) {
           var worker = cp.spawn('node', ['slave.js', i]);
        
           worker.stdout.on('data', function (data) {
              console.log('Value of Stdout : ' + data);
           });
        
           worker.stderr.on('data', function (data) {
              console.log('stderr: ' + data);
           });
        
           worker.on('close', function (code) {
               //console.log("Exit code : " + code);
              console.log('child process exited with code ');
           });
        }
        												
        											

  
Now we can run it in the following way :  

        
                												
        >node master-spawn.js
        Value of Stdout : Child Process number 3 is executed.
        
        Value of Stdout : Child Process number 2 is executed.
        
        child process exited with code
        child process exited with code
        Value of Stdout : Child Process number 1 is executed.
        
        child process exited with code
        Value of Stdout : Child Process number 4 is executed.
        
        child process exited with code
        Value of Stdout : Child Process number 5 is executed.
        
        child process exited with code
        												
        											

  

  2. **

### child_process.fork() :

**This method is used to spawn a new process using the given command.

    * **Syntax :**   

        
                											
        child_process.fork(modulePath[, args][, options])
        											
        										

  

    * **Parameters :**
      * modulePath : Type is ` string `. It specifies the command to run. 
      * args : Type is ` array `. It specifies ist of string arguments 
      * options : Type is ` object `.It may contains one or more of the following : 
        * cwd 
        * env
        * execPath
        * execArgv
        * silent
        * stdio
        * uid
        * windowsVerbatimArguments
        * windowsHide
      * returns : ` childProcess `
    * **Code Example :** We will have ` master-fork.js ` from which we will access ` slave.js ` file as shown below :   

        
                												
        //Name of the file  : slave.js
        console.log("Child Process number " + process.argv[2] + " is executed." );
        												
        											

  
  

        
                												
        //Name of the file : master-fork.js
        var cp = require('child_process');
         
        for(var i=1; i<6; i++) {
           var worker = cp.fork("slave.js", [i]);	
        
           worker.on('close', function (code) {
              console.log('child process exited with code ' + code);
           });
        }
        												
        											

  
Now we can run it in the following way :  

        
                												
        >node master-fork.js
        Child Process number 3 is executed.
        child process exited with code 0
        Child Process number 2 is executed.
        child process exited with code 0
        Child Process number 4 is executed.
        child process exited with code 0
        Child Process number 5 is executed.
        Child Process number 1 is executed.
        child process exited with code 0
        child process exited with code 0
        												
        											

  

  3. **

### child_process.exec() :

**This method is used to spawn a new process using the given command.

    * **Syntax :**   

        
                											
        child_process.exec(command[, options][, callback])
        											
        										

  

    * **Parameters :**
      * command : Type is ` string `. It specifies the command to run. 
      * options : Type is ` object `.It may contains one or more of the following : 
        * cwd 
        * env
        * encoding
        * shell
        * timeout
        * maxBuffer 
        * killSignal 
        * uid
        * gid
        * windowsHide
      * callback : 
        * error 
        * stdout 
        * stderr 
      * returns : ` childProcess `
    * **Code Example :** We will have ` master-exec.js ` from which we will access ` slave.js ` file as shown below :   

        
                												
        //Name of the file  : slave.js
        console.log("Child Process number " + process.argv[2] + " is executed." );
        												
        											

  
  

        
                												
        // Name of the file :  master-exec.js
        var cp = require('child_process');
        
        for(var i=1; i<6; i++) {
           var workerProcess = cp.exec('node slave.js ' + i , function(error, stdout, stderr) {
              if (error) {
                 console.log(error.stack);
                 console.log('Error Code: '+error.code);
                 console.log('Error Signal: '+error.signal);
              }
        
              if(stderr){
                 console.log('value of stderr: ' + stderr);
              }
        
              console.log('Value of stdout: ' + stdout);
              
             
           });
           workerProcess.on('exit', function (code) {
               //console.log("exit code : "+ code);
              console.log('Child process exited ');
           });
        }
        												
        											

  
Now we can run it in the following way :  

        
                												
        >node master-exec.js
        Child process exited
        Value of stdout: Child Process number 1 is executed.
        
        Child process exited
        Value of stdout: Child Process number 2 is executed.
        
        Child process exited
        Value of stdout: Child Process number 5 is executed.
        
        Child process exited
        Value of stdout: Child Process number 3 is executed.
        
        Child process exited
        Value of stdout: Child Process number 4 is executed.
        												
        											

  

  4. **

### child_process.execFile() :

**This method is used to spawn a new process using the given command.

    * **Syntax :**   

        
                											
        child_process.execFile(file[, args][, options][, callback])
        											
        										

  

    * **Parameters :**
      * file : Type is ` string `. It specifies the command to run. 
      * args : 
      * options : Type is ` object `.It may contains one or more of the following : 
        * cwd 
        * env
        * encoding
        * timeout
        * maxBuffer 
        * killSignal 
        * uid
        * gid
        * windowsHide
        * windowsVerbatimArguments
      * callback : 
        * error 
        * stdout 
        * stderr 
      * returns : ` childProcess `
    * **Code Example :** A simple code snippet which prints the version of node.js installed in your system using ` execFile ` method is given below :   

        
                											
        var ef = require('child_process').execFile;
        var child = ef('node', ['--version'], (err, stdout, stderr) => {
            if (err) {
                console.log('stderr', stderr);
                throw err;
            }
            console.log('Node.js version  : ', stdout);
        });
        											
        										

  


    
    
    											
    child_process.spawn(command[, args][, options])
    											
    										


    
    
    												
    //Name of the file  : slave.js
    console.log("Child Process number " + process.argv[2] + " is executed." );
    												
    											


    
    
    												
    //Name of the file : master-spawn.js
    var cp = require('child_process');
     
    for(var i = 1; i<6; i++) {
       var worker = cp.spawn('node', ['slave.js', i]);
    
       worker.stdout.on('data', function (data) {
          console.log('Value of Stdout : ' + data);
       });
    
       worker.stderr.on('data', function (data) {
          console.log('stderr: ' + data);
       });
    
       worker.on('close', function (code) {
           //console.log("Exit code : " + code);
          console.log('child process exited with code ');
       });
    }
    												
    											


    
    
    												
    >node master-spawn.js
    Value of Stdout : Child Process number 3 is executed.
    
    Value of Stdout : Child Process number 2 is executed.
    
    child process exited with code
    child process exited with code
    Value of Stdout : Child Process number 1 is executed.
    
    child process exited with code
    Value of Stdout : Child Process number 4 is executed.
    
    child process exited with code
    Value of Stdout : Child Process number 5 is executed.
    
    child process exited with code
    												
    											


    
    
    											
    child_process.fork(modulePath[, args][, options])
    											
    										


    
    
    												
    //Name of the file  : slave.js
    console.log("Child Process number " + process.argv[2] + " is executed." );
    												
    											


    
    
    												
    //Name of the file : master-fork.js
    var cp = require('child_process');
     
    for(var i=1; i<6; i++) {
       var worker = cp.fork("slave.js", [i]);	
    
       worker.on('close', function (code) {
          console.log('child process exited with code ' + code);
       });
    }
    												
    											


    
    
    												
    >node master-fork.js
    Child Process number 3 is executed.
    child process exited with code 0
    Child Process number 2 is executed.
    child process exited with code 0
    Child Process number 4 is executed.
    child process exited with code 0
    Child Process number 5 is executed.
    Child Process number 1 is executed.
    child process exited with code 0
    child process exited with code 0
    												
    											


    
    
    											
    child_process.exec(command[, options][, callback])
    											
    										


    
    
    												
    //Name of the file  : slave.js
    console.log("Child Process number " + process.argv[2] + " is executed." );
    												
    											


    
    
    												
    // Name of the file :  master-exec.js
    var cp = require('child_process');
    
    for(var i=1; i<6; i++) {
       var workerProcess = cp.exec('node slave.js ' + i , function(error, stdout, stderr) {
          if (error) {
             console.log(error.stack);
             console.log('Error Code: '+error.code);
             console.log('Error Signal: '+error.signal);
          }
    
          if(stderr){
             console.log('value of stderr: ' + stderr);
          }
    
          console.log('Value of stdout: ' + stdout);
          
         
       });
       workerProcess.on('exit', function (code) {
           //console.log("exit code : "+ code);
          console.log('Child process exited ');
       });
    }
    												
    											


    
    
    												
    >node master-exec.js
    Child process exited
    Value of stdout: Child Process number 1 is executed.
    
    Child process exited
    Value of stdout: Child Process number 2 is executed.
    
    Child process exited
    Value of stdout: Child Process number 5 is executed.
    
    Child process exited
    Value of stdout: Child Process number 3 is executed.
    
    Child process exited
    Value of stdout: Child Process number 4 is executed.
    												
    											


    
    
    											
    child_process.execFile(file[, args][, options][, callback])
    											
    										


    
    
    											
    var ef = require('child_process').execFile;
    var child = ef('node', ['--version'], (err, stdout, stderr) => {
        if (err) {
            console.log('stderr', stderr);
            throw err;
        }
        console.log('Node.js version  : ', stdout);
    });
    											
    										



There are three different ways for creating child processes Synchronously :

  1. **` child_process.spawnSync() ` : ** This method spawns the child process synchronously and it will block the node.js event loop. 
  2. **` child_process.execSync() ` : ** This method is same as ` child_process.exec() ` except that it will run synchronously and it will block the node.js event loop, pausing the execution of any other code.
  3. **` child_process.execFileSync() ` : ** This method is same as ` child_process.execFile() ` except that it will run synchronously and it will block the node.js event loop, pausing the execution of any other code.



Events emitted while working with child processes are as follows :

  * **` Message ` : ** This event is triggered when a child process uses ` process.send() ` method to send messages for IPC communication.
  * **` exit ` : ** This event is emitted when the child processes is ended.
  * **` error ` : ** The error event is emitted when : 
    * child process can not be spawned 
    * child process can not be killed 
    * Communication with the child process is not established 
  * **` disconnect ` : ** This event is emitted when either the parent process calls the ` process.disconnect() ` method or ` subprocess.disconnect() ` method is called in parent process. Either way, inter-process communication is not possible after once the ` disconnect` event is emitted.
  * **` close ` : ** This event is emitted when ` stdio ` streams of the child process is closed.

![](https://www.nodejsera.com/nodejs-tutorial-day24-child-processes.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

