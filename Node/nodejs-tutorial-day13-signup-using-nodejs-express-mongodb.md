![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/logo.png)


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



We've reached day 13th of our [ **30 days of node** ](30-days-of-node.html)
and here we are with our first project tutorial in which we create a login
system using HTML5 , CSS3 , bootstrap , node , express and mongodb. What's
unique about this tutorial is that you get to learn everything from the html
and styles to complex technical topics like perform HMAC operation on
password.  
 **Please Note** that encrypting passwords with SHA is unsafe and we strongly
recommend that you should not use it in production.

##  Contents:

  1. Login / Signup form using HTML5 
  2. Styling the html with CSS3 and bootstrap 
  3. Creating a nodejs app in express.js framework for the backend 
  4. Connecting the nodejs app to mongodb 
  5. Perform HMAC operation on password using crypto module of ` node.js `. 
  6. Celebrating the success with screenshots from working app 



![](assets/img/directory-structure-signup.png)

![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/directory-structure-signup.png)


Let's start by creating a simple static form in ` HTML5 `.  
This form is having 5 fields :

  1. **` Name : ` **It takes user name as input. Validations are not implemented here.
  2. **` Email :` ** It takes email id as input. Validations are implemented using HTML5 so, only valid emailID will work.
  3. **` Password : ` **It takes password as the input. Validations are not implemented. 
  4. **` Phone : ` ** It takes the contact number of user as input. Validations are not implemented.
  5. **` Submit : ` ** When we click the submit button, the ` action ` attribute of form tag will direct the data to the ` sign_up ` route of the backend app .

  
We are starting with the coding part now, Although the code is self
explanatory but informative comments are provided where ever needed.  

  1. **index.html :**   

    
        										
    <html>
    	<head>
    		<title> Signup Form | nodejsera </title>
    		
    		<!-- Including bootstrap v3.3.7 -->
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    		
    		<!-- Including Custom css -->
    		<link rel="stylesheet" type="text/css" href="style.css">
    		
    	</head>
    	<body>
    	
    		<br>
    		<br>
    		<br>
    		<div class="container" >
    			<div class="row">
    				<div class="col-md-3">
    					<!-- Blank DIV -->
    				</div>
    				
    				<div class="col-md-6 main">
    					<!-- Form Tag starts here -->
    					<!-- Action attribute is the route on backend. Method is POST -->
    					<form action="/sign_up" method="post">
    					
    						<h1> Signup form </h1>
    							
    						<input class="box" type="text" name="name" id="name" placeholder="Enter your Name"  required /><br>
    							
    						<input class="box" type="email" name="email" id="email" placeholder="Enter your E-Mail " required /><br>
    							
    						<input class="box" type="password" name="password" id="password"  placeholder="Enter your Password " required/><br>
    							
    						<input class="box" type="text" name="phone" id="phone"  placeholder="Enter your Phone Number " required/><br>
    						<br>
    						<input type="submit" id="submitDetails"  name="submitDetails" value="Submit Your Details" /><br>
    					
    					</form>
    					
    				</div>
    				
    				
    				<div class="col-md-3">
    					<!-- Blank DIV -->
    				</div>
    				
    			</div>
    		</div>
    	</body>
    </html>										
    										
    									

  

  2. **success.html :** When user entry has been successfully created, then user will be redirected by the server to the ` success.html ` page, otherwise the error message will be printed.   

    
        									
    <html>
    	<head>
    		<title> Signup Form | nodejsera </title>
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    		
    		<link rel="stylesheet" type="text/css" href="style.css">
    	</head>
    	<body>
    		<br>
    				<br>
    				<br>
    		<div class="container" >
    			<div class="row">
    				<div class="col-md-3">
    				</div>
    				
    				<div class="col-md-6 main">
    					
    					<h1> Signup Successful <br> Congratulations!!</h1>
    					
    				</div>
    				
    				
    				<div class="col-md-3">
    				</div>
    				
    			</div>
    		</div>
    	</body>
    </html>
    
    									
    								

  


    
    
    										
    <html>
    	<head>
    		<title> Signup Form | nodejsera </title>
    		
    		<!-- Including bootstrap v3.3.7 -->
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    		
    		<!-- Including Custom css -->
    		<link rel="stylesheet" type="text/css" href="style.css">
    		
    	</head>
    	<body>
    	
    		<br>
    		<br>
    		<br>
    		<div class="container" >
    			<div class="row">
    				<div class="col-md-3">
    					<!-- Blank DIV -->
    				</div>
    				
    				<div class="col-md-6 main">
    					<!-- Form Tag starts here -->
    					<!-- Action attribute is the route on backend. Method is POST -->
    					<form action="/sign_up" method="post">
    					
    						<h1> Signup form </h1>
    							
    						<input class="box" type="text" name="name" id="name" placeholder="Enter your Name"  required /><br>
    							
    						<input class="box" type="email" name="email" id="email" placeholder="Enter your E-Mail " required /><br>
    							
    						<input class="box" type="password" name="password" id="password"  placeholder="Enter your Password " required/><br>
    							
    						<input class="box" type="text" name="phone" id="phone"  placeholder="Enter your Phone Number " required/><br>
    						<br>
    						<input type="submit" id="submitDetails"  name="submitDetails" value="Submit Your Details" /><br>
    					
    					</form>
    					
    				</div>
    				
    				
    				<div class="col-md-3">
    					<!-- Blank DIV -->
    				</div>
    				
    			</div>
    		</div>
    	</body>
    </html>										
    										
    									


    
    
    									
    <html>
    	<head>
    		<title> Signup Form | nodejsera </title>
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    		
    		<link rel="stylesheet" type="text/css" href="style.css">
    	</head>
    	<body>
    		<br>
    				<br>
    				<br>
    		<div class="container" >
    			<div class="row">
    				<div class="col-md-3">
    				</div>
    				
    				<div class="col-md-6 main">
    					
    					<h1> Signup Successful <br> Congratulations!!</h1>
    					
    				</div>
    				
    				
    				<div class="col-md-3">
    				</div>
    				
    			</div>
    		</div>
    	</body>
    </html>
    
    									
    								



We are using simple ` CSS ` for styling our Signup form. All the code here is
self explanatory. Copy all this in a file named ` style.css `.  

    
    
    								
    @import url('https://fonts.googleapis.com/css?family=Josefin+Slab');
    
    .main{
    	padding:20px;
    	font-family: 'Josefin Slab', serif;
    	border : 2px solid #50d8a4;
    	border-radius: 15px;
    	
    }
    .main h1{
    	font-size: 50px;
    	text-align:center;
    	font-family: 'Josefin Slab', serif;
    	color: #549978;
    }
    input{
    	font-family: 'Josefin Slab', serif;
        width: 100%;
    	font-size: 30px;
        padding: 12px 20px;
        margin: 8px 0;
        border: none;
        border-bottom: 2px solid #50d8a4;
    }
    input[type=submit] {
    	font-family: 'Josefin Slab', serif;
    	width: 100%;
        background-color: #549978;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    	border-radius: 15px;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    
    input:hover {
    	font-family: 'Josefin Slab', serif;
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    	border: none;
        border-bottom: 2px solid #549978;
    }
    
    input[type=submit]:hover {
    	font-family: 'Josefin Slab', serif;
    	width: 100%;
        background-color: #549978;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    	border-radius: 15px;
    }
    								
    							

  


    
    
    								
    @import url('https://fonts.googleapis.com/css?family=Josefin+Slab');
    
    .main{
    	padding:20px;
    	font-family: 'Josefin Slab', serif;
    	border : 2px solid #50d8a4;
    	border-radius: 15px;
    	
    }
    .main h1{
    	font-size: 50px;
    	text-align:center;
    	font-family: 'Josefin Slab', serif;
    	color: #549978;
    }
    input{
    	font-family: 'Josefin Slab', serif;
        width: 100%;
    	font-size: 30px;
        padding: 12px 20px;
        margin: 8px 0;
        border: none;
        border-bottom: 2px solid #50d8a4;
    }
    input[type=submit] {
    	font-family: 'Josefin Slab', serif;
    	width: 100%;
        background-color: #549978;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    	border-radius: 15px;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    
    input:hover {
    	font-family: 'Josefin Slab', serif;
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    	border: none;
        border-bottom: 2px solid #549978;
    }
    
    input[type=submit]:hover {
    	font-family: 'Josefin Slab', serif;
    	width: 100%;
        background-color: #549978;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    	border-radius: 15px;
    }
    								
    							



Now, let's move on to the crux of our application i.e. the backend. We are
using express.js framework of node.js for handling the routes. You can learn
more about express and mongodb in the links provided below respectively :

  * [ Introduction to express.js ](nodejs-tutorial-day11-express-framework.html)
  * [ MongoDB operations usings node.js ](index.html#nodejsmongodb)

  
**Our backend is going to perform the following operations :**

  1. Receiving the values from the frontend. 
  2. Perform the hashing of the password using ` HMAC ` where the algorithm which we are using is ` sha512 ` and the key is the ` phone ` variable provided by the user.
  3. Establishing a connection with ` MongoDB `. 
  4. Creating a database. The name of the database is passed here :   
  

    
        													
    var new_db = "mongodb://localhost:27017/database_name";
    													
    												

  
Database will be created with the name passed here.

  5. Creating a collection. The name of the collection is passed here :   
  

    
        													
    db.collection("details")
    													
    												

  
Collection will be created with the name passed here.

  6. Storing the data received from the frontend in the mongodb database. 
  7. After the data is successfully stored , redirect the user to the ` success.html ` page. 

  
  
**Now let's move forword to the coding part of the backend :**

  * **Step 1 - Installation :** Install the packages which we will be using in our signup application. ` crypto `, ` path` are inbuilt packages , so we needn't to install them. Let's install the rest of the packages : 
    * Installing ` express `   

        
                													
        npm install express --save
        													
        												

  

    * Installing ` mongodb `   

        
                													
        npm install mongodb --save
        													
        												

  

  * **Step 2 - Code :** Now we are ready to start with our ` server.js ` file : 
    * Including the required packages :` express `,` mongodb `, ` path `,` body-parser ` and ` crypto `   

        
                													
        var express = require('express');
        var path = require('path'); 
        var mongo = require('mongodb');
        var bodyParser = require('body-parser');
        var crypto = require('crypto');
        													
        												

  

    * Intializing the express and mongodb packages :   

        
                													
        var app = express();
        //enter the name of the database in the end 
        var new_db = "mongodb://localhost:27017/database_name";
        													
        												

  

    * Create the server and set the default routes as shown below :   

        
                													
        app.get('/',function(req,res){
        	res.set({
        		'Access-Control-Allow-Origin' : '*'
        	});
        	return res.redirect('/public/index.html');
        }).listen(3000);
        
        console.log("Server listening at : 3000");
        app.use('/public', express.static(__dirname + '/public'));
        app.use( bodyParser.json() );
        app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        	extended: true
        }));
        													
        												

  

    * function to perform HMAC operation on the password and also using phone number of the user as the key :   

        
                													
        var getHash = ( pass , phone ) => {
        				
        				var hmac = crypto.createHmac('sha512', phone);
        				
        				//passing the data to be hashed
        				data = hmac.update(pass);
        				//Creating the hmac in the required format
        				gen_hmac= data.digest('hex');
        				//Printing the output on the console
        				console.log("hmac : " + gen_hmac);
        				return gen_hmac;
        }
        													
        												

  

    * Receive request from the front and store it in the database. ` /sign_up ` route details :   

        
                													
        // Sign-up function starts here. . .
        app.post('/sign_up' ,function(req,res){
        	var name = req.body.name;
        	var email= req.body.email;
        	var pass = req.body.password;
        		var phone = req.body.phone;
        	var password = getHash( pass , phone ); 				
        
        	
        	var data = {
        		"name":name,
        		"email":email,
        		"password": password, 
        		"phone" : phone
        	}
        	
        	mongo.connect(new_db , function(error , db){
        		if (error){
        			throw error;
        		}
        		console.log("connected to database successfully");
        		//CREATING A COLLECTION IN MONGODB USING NODE.JS
        		db.collection("details").insertOne(data, (err , collection) => {
        			if(err) throw err;
        			console.log("Record inserted successfully");
        			console.log(collection);
        		});
        	});
        	
        	console.log("DATA is " + JSON.stringify(data) );
        	res.set({
        		'Access-Control-Allow-Origin' : '*'
        	});
        	return res.redirect('/public/success.html');  
        
        });
        													
        												

  

  * **Run :** We can run this code 
    * Start the mongodb.To start MongoDB, run the command specific to your system configurations. 
    * Now run the ` server.js ` using the following command :   

        
                													
        > node server.js
        													
        												

  


    
    
    													
    var new_db = "mongodb://localhost:27017/database_name";
    													
    												


    
    
    													
    db.collection("details")
    													
    												


    
    
    													
    npm install express --save
    													
    												


    
    
    													
    npm install mongodb --save
    													
    												


    
    
    													
    var express = require('express');
    var path = require('path'); 
    var mongo = require('mongodb');
    var bodyParser = require('body-parser');
    var crypto = require('crypto');
    													
    												


    
    
    													
    var app = express();
    //enter the name of the database in the end 
    var new_db = "mongodb://localhost:27017/database_name";
    													
    												


    
    
    													
    app.get('/',function(req,res){
    	res.set({
    		'Access-Control-Allow-Origin' : '*'
    	});
    	return res.redirect('/public/index.html');
    }).listen(3000);
    
    console.log("Server listening at : 3000");
    app.use('/public', express.static(__dirname + '/public'));
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    	extended: true
    }));
    													
    												


    
    
    													
    var getHash = ( pass , phone ) => {
    				
    				var hmac = crypto.createHmac('sha512', phone);
    				
    				//passing the data to be hashed
    				data = hmac.update(pass);
    				//Creating the hmac in the required format
    				gen_hmac= data.digest('hex');
    				//Printing the output on the console
    				console.log("hmac : " + gen_hmac);
    				return gen_hmac;
    }
    													
    												


    
    
    													
    // Sign-up function starts here. . .
    app.post('/sign_up' ,function(req,res){
    	var name = req.body.name;
    	var email= req.body.email;
    	var pass = req.body.password;
    		var phone = req.body.phone;
    	var password = getHash( pass , phone ); 				
    
    	
    	var data = {
    		"name":name,
    		"email":email,
    		"password": password, 
    		"phone" : phone
    	}
    	
    	mongo.connect(new_db , function(error , db){
    		if (error){
    			throw error;
    		}
    		console.log("connected to database successfully");
    		//CREATING A COLLECTION IN MONGODB USING NODE.JS
    		db.collection("details").insertOne(data, (err , collection) => {
    			if(err) throw err;
    			console.log("Record inserted successfully");
    			console.log(collection);
    		});
    	});
    	
    	console.log("DATA is " + JSON.stringify(data) );
    	res.set({
    		'Access-Control-Allow-Origin' : '*'
    	});
    	return res.redirect('/public/success.html');  
    
    });
    													
    												


    
    
    													
    > node server.js
    													
    												



  1. **index.html**  
URL is : [ http://127.0.0.1:3000/public/index.html
](http://127.0.0.1:3000/public/index.html)  
  
![Signup using html](assets/img/signup.png)  
  

  2. **Success.html :**  
URL is : [ http://127.0.0.1:3000/public/success.html
](http://127.0.0.1:3000/public/success.html)  
  
![Signup success using html](assets/img/signup-success.png)  
  

  3. **SnapShot of the backend up and running :**  
  
  
![signup server](assets/img/signup-server.png)  
  

![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/signup.png)
![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/signup-success.png)
![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/signup-server.png)


In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
We created our first project i.e signup application. We started with creating
a simple static form with HTML5 and then styling that html form using css.
After that we created our backend by using the express.js framework of node.
Lastly, we stored all the data in the nosql database MongoDB.



Get the full tested snippet here : [__Signup Snippet](/snippets/nodejs/signup-
using-node-express-mongo.html)  
Clone it from Github :
[__GITHUB](https://github.com/nodejsera/30daysofnode/tree/master/day13-signup-
form)

![](https://www.nodejsera.com/nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

