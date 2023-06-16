![](https://www.nodejsera.com/nodejs-tutorial-day11-express-framework.htmlassets/img/logo.png)


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



Express.js or simply express is a minimal node.js web apps framework which is
flexible and provides a set of features such as simple APIs used for building
backend of websites and mobile applications. Express is open-source and
currently maintained by node.js foundation. Express also provides us with very
basic middleware and declarative routing.  
Advantages of using express web application framework includes :

  1. It makes routing pretty easy. 
  2. As it is built on top of node.js, so fast I/O. 



Prerequisites for installing express are :

  1. Node.js - we can check it using the following command on terminal :   

    
        											
    >node -v
    v8.5.0
    											
    										

  

  2. NPM - we can check it using the following command on terminal :   

    
        											
    >npm -v
    5.4.2
    											
    										

  


    
    
    											
    >node -v
    v8.5.0
    											
    										


    
    
    											
    >npm -v
    5.4.2
    											
    										



We can install express in the following ways :

  1. **Installing express globally :** We can install express with global scope in the following way   

    
        											
    >npm install express -g
    											
    										

  

  2. **Installing express locally :** We can install express with local scope in the following way   

    
        											
    >npm install express 
    											
    										

  

  3. **Installing express with` --save ` flag : ** We can install express with --save flag to add dependency in the ` package.json ` file.   

    
        											
    >npm install express --save
    
    											
    										

  


    
    
    											
    >npm install express -g
    											
    										


    
    
    											
    >npm install express 
    											
    										


    
    
    											
    >npm install express --save
    
    											
    										



Let's create a simple server in express which will send ` hello world ` as the
response to the user.  

    
    
    											
    var express = require('express')
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Hello World!')
    })
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										

  
We can run the above code using the following command :  

    
    
    											
    >node server.js
    Server is listening at 3000
    											
    										

  
Now open ` http://127.0.0.1:3000 ` in your browser.


    
    
    											
    var express = require('express')
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Hello World!')
    })
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										


    
    
    											
    >node server.js
    Server is listening at 3000
    											
    										



One of the biggest advantage of using express is that it makes routing very
simple. An example which explains routes in a very simple way is given below :  

    
    
    											
    var express = require('express')
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Simple Example of routes!');
    })
    
    app.get('/signup', function (req, res) {
      res.send('This is demo route for sign up');
    })
    
    app.get('/signin', function (req, res) {
      res.send('This is demo route for sign in');
    })
    
    app.get('/signin/dashboard', function (req, res) {
      res.send('This is demo route for user who signed in and now reaches their dashboard');
    })
    
    
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										

  
We can run the above code using the following command :  

    
    
    											
    >node routes.js
    Server is listening at 3000
    											
    										

  

We can open any of the following in our browser :

  * Now open ` http://127.0.0.1:3000 ` in your browser for default route 
  * ` http://127.0.0.1:3000/signup ` for demo signup route.
  * ` http://127.0.0.1:3000/signin ` for demo signin route 
  * ` http://127.0.0.1:3000/signin/dashboard ` for demo dashboard route. 


    
    
    											
    var express = require('express')
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Simple Example of routes!');
    })
    
    app.get('/signup', function (req, res) {
      res.send('This is demo route for sign up');
    })
    
    app.get('/signin', function (req, res) {
      res.send('This is demo route for sign in');
    })
    
    app.get('/signin/dashboard', function (req, res) {
      res.send('This is demo route for user who signed in and now reaches their dashboard');
    })
    
    
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										


    
    
    											
    >node routes.js
    Server is listening at 3000
    											
    										



In order to understand how the request with parameters is handled in express
let's take an example : Suppose we have a sign up module in which we are
receiving 3 parameters from the front-end which are name, email and password.
( Normally, we store data in a database . we will perform that in the coming
chapter. For now , just focus on understanding just the request with
parameters part)  

    
    
    											
    var express = require('express');
    var fs = require('fs')
    
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Simple Example of routes!');
    }) 
    
    app.get('/signup', function(req,res){
    	// this is how we will receive params from front end 
    	
    	var name = req.query.name; 
      var email = req.query.email;
      var password = req.query.password;
      //For demo purpose
      console.log(name + '' + email + ' ' + password);
    
      /**
       * Store this in a database and perform further processing
       */
        res.send("In signup module")
    });
    
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										

  
we can check this by running this code in the following way :  

    
    
    											
    >node routes-with-params.js
    Server is listening at 3000
    											
    										

  
You can perform the POC using google chrome's plugin ` postman `.


    
    
    											
    var express = require('express');
    var fs = require('fs')
    
    var app = express()
    
    app.get('/', function (req, res) {
      res.send('Simple Example of routes!');
    }) 
    
    app.get('/signup', function(req,res){
    	// this is how we will receive params from front end 
    	
    	var name = req.query.name; 
      var email = req.query.email;
      var password = req.query.password;
      //For demo purpose
      console.log(name + '' + email + ' ' + password);
    
      /**
       * Store this in a database and perform further processing
       */
        res.send("In signup module")
    });
    
    app.listen(3000, function () {
      console.log('Server is listening at 3000')
    })
    											
    										


    
    
    											
    >node routes-with-params.js
    Server is listening at 3000
    											
    										



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about what is express.js, how to install express , simple server to
serve hello world using express , basic about routing and how to handle
request params.

![](https://www.nodejsera.com/nodejs-tutorial-day11-express-framework.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

