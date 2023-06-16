![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/logo.png)


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



Web Sockets allow us to set up bi-directional persistent communication
channels between two or more machines at a time.  



  * **Prerequisites :** In order to start developing projects using ` socket.io ` , we need ` node.js ` and ` NPM `. We can test it using the following commands respectively:   

    
        											
    >node --version
    v8.5.0
    >npm --version
    5.4.2				
    											
    										

  
If it displays the version number, then we can proceed with the next step.
Otherwise we can install it from here : [ Install node and npm
](https://nodejs.org/en/download/)  

  * **Installation :** We can install ` socket.io ` using the following command :   

    
        											
    >npm install socket.io	
    											
    										

  

We have successfully performed the installation. Now we can get started with
development using socket.io in node.js


    
    
    											
    >node --version
    v8.5.0
    >npm --version
    5.4.2				
    											
    										


    
    
    											
    >npm install socket.io	
    											
    										



#  Overview

This application is developed using ` node.js ` , ` socket.io ` , ` express.js
` , ` HTML5 `, ` CSS3 `, and little bit of ` jquery `. In our ` real-time
quotes` app , We update the quotes in real-time on all the tabs where `
index.html ` page is open. The updation of quotes is done from the `
admin.html ` file which is further using sockets under the hood.It is
explained in detail along with its code below.

#  Contents

  1. Directory Structure 
  2. ` index.html` File ( ` CSS ` included )
  3. ` admin.html` File ( ` CSS ` included )
  4. ` server.js ` for backend 
  5. How to run 
  6. Screenshots of the app 

Let's start with them one by one;

#

  1. Directory Structure : 

  
![directory-structure-real-time-quotes](assets/img/directory-structure-real-
time-quotes.png)  

#

  2. ` index.html` frontend file : 

This is the file which end users will see. All the quotes updated by the admin
are displayed here. We are using ` blockquote ` tags of HTML to display the
quotes. Although the code is self-explanatory but informative comments are
given whereever required.  
  

    
        											
    <html> 
    <head>
    	<title> Real Time Quotes | Nodejsera </title>
    	
    	<!-- Including google font Josefin Sans -->
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<!-- Including bootstrap v3.3.7 -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<!-- Including jquery v3.2.1 -->
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<!-- Including socket.io file v2.0.3 -->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	
    	<!-- Custom CSS to make it presentable -->
    	<style>	
    		.font{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		blockquote{
    			font-family: 'Josefin Sans', sans-serif;
    			background:#ccccff;
    			font-size: 30px;
    			font-weight: normal;
    			border-left: 4px solid #4db8ff;
    		}	
    	</style>
    	
      
    </head>
    <body> 
    
    		<div class="container"> 
    			<div class="col-md-2">
    			
    			</div>
    			<div class="col-md-8">	
    				<!-- Heading -->
    				<div class="font"> Real Time Quotes  </div> 
    				<hr>
    				<!-- Default quote -->
    				<div class="quotes" id="quotes"> 
    					<blockquote> have a great day , have a great life </blockquote>  
    				</div> 
    			</div>
    			<div class="col-md-2">
    			</div>
    
    		</div> 
    
    	<script>
    		//Jquery code starts here
    		$('document').ready(function(){
    			//Connecting the socket to host and port
    		  var socket = io.connect('http://localhost:3000');
    			//Test event 
    			//Users can skip it.
    		  socket.on('news', function (data) {
    			console.log(data);
    			socket.emit('my other event', { my: 'data' });
    		  });
    		  //Test event ends here
    		  //Main event "next" 
    		  socket.on('next' , function(data) {
    			  console.log(data); 
    			  $('#quotes').append("<blockquote>" + data.data.quote + "</blockquote>")
    		  })
    		  //Event ends
    
    		});
    		//jquery code ends here
    	</script>
    
    </body> 
    </html> 
    											
    										

  
Now let's move forward to the next file.

#

  3. ` admin.html` frontend file : 

This file is used by the ` admin ` to update the quotes. Admin add the quote
to be added in the ` textarea ` tag of the HTML and then clicks the ` Add yoyr
quote ` button and it will emit an socket event. The task of the event is to
pass the data to the server. The code is given below with informative comments
:  
  

    
        											
    <html> 
    <head> 
    	<title> Real Time Quotes | Admin Panel | Nodejsera </title>
    	
    	<!-- Including google font Josefin Sans -->
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<!-- Including bootstrap v3.3.7 -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<!-- Including jquery v3.2.1 -->
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<!-- Including socket.io file v2.0.3 -->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
     
    	<!-- Custom CSS to make it look presentable -->
        <style>	
    		.font{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		textarea {
    			font-family: 'Josefin Slab', serif;
    			width: 100%;
    			min-height: 100px;
    			font-size: 40px;
    			padding: 12px 20px;
    			margin: 8px 0;
    			border: 2px solid #4db8ff;
    		   
    		}
    
    		input[type=button]{
    			font-family: 'Josefin Slab', serif;
    			width: 100%;
    			background-color: #4db8ff;
    			border: none;
    			color: white;
    			font-size: 30px;
    			padding: 16px 32px;
    			text-decoration: none;
    			margin: 4px 2px;
    			cursor: pointer;
    			border-radius: 15px;
    		}
    		input:hover{
    			 background-color: #008ae6;
    		}
    		input:focus,
    		textarea:focus,
    		button:focus {
    			outline: none;
    		}
    
    	</style> 
    </head> 
    <body> 
    
    
    	<div class="container"> 
    		<div class="col-md-3">
    		</div>
    		<div class="col-md-6">
    			<!-- Heading -->
    			<h1 class="font">
    				Add Your Quotes in Realtime using <code> Sockets</code> and <code> node.js </code>
    			</h1> 
    			<hr> 
    			
    			<div>
    				<!-- Text area where admin will write quote -->
    				<textarea id="qcontent"></textarea>
    				<br> 
    				<br>
    				<!-- Quotes Tranferred to server when button is clicked via "new" event-->
    				<div>
    					<input type="button" id="aquote" value="Add your Quote">  </button>
    				</div>
    			</div>
    		</div>
    		<div class="col-md-3">
    		</div>
    	</div> 
    
    	<script>
    	//Jquery code starts
    	$('document').ready(function(){
    	//Connecting the socket to host and port
    	 var socket = io.connect('http://localhost:3000');
    	   socket.on('welcome', function (data) {
    		
    	  });
    		
    	  $('#aquote').click(function(){
    		  data = $('#qcontent').val()
    		  console.log(data); 
    		  //Emitting the event and passing the quote to the server
    		  socket.emit('new' , { quote: data })
    		  $('#qcontent').val('');
    	  })
    
    
    	})
    	//jquery code ends
    	</script>
    
    </body> 
    </html> 
    											
    										

  

#

  4. ` server.js` backend file : 

The server will receive the event emitted by the ` admin ` file along with the
quote and will emit an event for the ` index ` file passing the quotes. And
finally the quote will be displayed on ` index ` file.  
  

    
        											
    //Including the required files
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    //server listening at 127.0.0.1:3000
    server.listen(3000);
    console.log("Server listening at: 3000");
    //Handling the default route
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
    });
    //Handling the route for admin
    app.get('/admin' , function(req,res) {
        res.sendFile(__dirname + '/admin.html'); 
    })
    //Code for sockets
    io.on('connection', function (socket) {
      
      socket.emit('welcome', { data: 'welcome' });
    
      socket.on('new' , function(data) {   
              console.log('About to upload Quote')
              io.sockets.emit( 'next' , { data : data } )
        })
    });
    
    											
    										

  

#

  5. How to Run : 

We can run the application by starting the server using the following command
:  
  

    
        											
    >node server.js											
    											
    										

  
Now open the URL : [ http://127.0.0.1:3000 ](http://127.0.0.1:3000). For
Adding new quote , we can open the admin panel with this URL : [
http://127.0.0.1:3000/admin.html ](http://127.0.0.1:3000/admin.html)

#

  6. Screenshots : 

  

    1. **index.html :** This is the page where all the quotes are visible to the end user.   
URL is : [ http://127.0.0.1:3000 ](http://127.0.0.1:3000)  
  
![index-real-time-quotes](assets/img/index-real-time-quotes.png)  
  

    2. **Admin.html :** This page is used to add new quotes to the ` index.html ` page.  
URL is : [ http://127.0.0.1:3000/admin.html
](http://127.0.0.1:3000/admin.html)  
  
![admin-real-time-quotes](assets/img/admin-real-time-quotes.png)  
  

![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/directory-structure-real-time-quotes.png)

    
    
    											
    <html> 
    <head>
    	<title> Real Time Quotes | Nodejsera </title>
    	
    	<!-- Including google font Josefin Sans -->
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<!-- Including bootstrap v3.3.7 -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<!-- Including jquery v3.2.1 -->
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<!-- Including socket.io file v2.0.3 -->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	
    	<!-- Custom CSS to make it presentable -->
    	<style>	
    		.font{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		blockquote{
    			font-family: 'Josefin Sans', sans-serif;
    			background:#ccccff;
    			font-size: 30px;
    			font-weight: normal;
    			border-left: 4px solid #4db8ff;
    		}	
    	</style>
    	
      
    </head>
    <body> 
    
    		<div class="container"> 
    			<div class="col-md-2">
    			
    			</div>
    			<div class="col-md-8">	
    				<!-- Heading -->
    				<div class="font"> Real Time Quotes  </div> 
    				<hr>
    				<!-- Default quote -->
    				<div class="quotes" id="quotes"> 
    					<blockquote> have a great day , have a great life </blockquote>  
    				</div> 
    			</div>
    			<div class="col-md-2">
    			</div>
    
    		</div> 
    
    	<script>
    		//Jquery code starts here
    		$('document').ready(function(){
    			//Connecting the socket to host and port
    		  var socket = io.connect('http://localhost:3000');
    			//Test event 
    			//Users can skip it.
    		  socket.on('news', function (data) {
    			console.log(data);
    			socket.emit('my other event', { my: 'data' });
    		  });
    		  //Test event ends here
    		  //Main event "next" 
    		  socket.on('next' , function(data) {
    			  console.log(data); 
    			  $('#quotes').append("<blockquote>" + data.data.quote + "</blockquote>")
    		  })
    		  //Event ends
    
    		});
    		//jquery code ends here
    	</script>
    
    </body> 
    </html> 
    											
    										


    
    
    											
    <html> 
    <head> 
    	<title> Real Time Quotes | Admin Panel | Nodejsera </title>
    	
    	<!-- Including google font Josefin Sans -->
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<!-- Including bootstrap v3.3.7 -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<!-- Including jquery v3.2.1 -->
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<!-- Including socket.io file v2.0.3 -->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
     
    	<!-- Custom CSS to make it look presentable -->
        <style>	
    		.font{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		textarea {
    			font-family: 'Josefin Slab', serif;
    			width: 100%;
    			min-height: 100px;
    			font-size: 40px;
    			padding: 12px 20px;
    			margin: 8px 0;
    			border: 2px solid #4db8ff;
    		   
    		}
    
    		input[type=button]{
    			font-family: 'Josefin Slab', serif;
    			width: 100%;
    			background-color: #4db8ff;
    			border: none;
    			color: white;
    			font-size: 30px;
    			padding: 16px 32px;
    			text-decoration: none;
    			margin: 4px 2px;
    			cursor: pointer;
    			border-radius: 15px;
    		}
    		input:hover{
    			 background-color: #008ae6;
    		}
    		input:focus,
    		textarea:focus,
    		button:focus {
    			outline: none;
    		}
    
    	</style> 
    </head> 
    <body> 
    
    
    	<div class="container"> 
    		<div class="col-md-3">
    		</div>
    		<div class="col-md-6">
    			<!-- Heading -->
    			<h1 class="font">
    				Add Your Quotes in Realtime using <code> Sockets</code> and <code> node.js </code>
    			</h1> 
    			<hr> 
    			
    			<div>
    				<!-- Text area where admin will write quote -->
    				<textarea id="qcontent"></textarea>
    				<br> 
    				<br>
    				<!-- Quotes Tranferred to server when button is clicked via "new" event-->
    				<div>
    					<input type="button" id="aquote" value="Add your Quote">  </button>
    				</div>
    			</div>
    		</div>
    		<div class="col-md-3">
    		</div>
    	</div> 
    
    	<script>
    	//Jquery code starts
    	$('document').ready(function(){
    	//Connecting the socket to host and port
    	 var socket = io.connect('http://localhost:3000');
    	   socket.on('welcome', function (data) {
    		
    	  });
    		
    	  $('#aquote').click(function(){
    		  data = $('#qcontent').val()
    		  console.log(data); 
    		  //Emitting the event and passing the quote to the server
    		  socket.emit('new' , { quote: data })
    		  $('#qcontent').val('');
    	  })
    
    
    	})
    	//jquery code ends
    	</script>
    
    </body> 
    </html> 
    											
    										


    
    
    											
    //Including the required files
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    //server listening at 127.0.0.1:3000
    server.listen(3000);
    console.log("Server listening at: 3000");
    //Handling the default route
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
    });
    //Handling the route for admin
    app.get('/admin' , function(req,res) {
        res.sendFile(__dirname + '/admin.html'); 
    })
    //Code for sockets
    io.on('connection', function (socket) {
      
      socket.emit('welcome', { data: 'welcome' });
    
      socket.on('new' , function(data) {   
              console.log('About to upload Quote')
              io.sockets.emit( 'next' , { data : data } )
        })
    });
    
    											
    										


    
    
    											
    >node server.js											
    											
    										

![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/index-real-time-quotes.png)
![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/admin-real-time-quotes.png)


#  Overview

` Changing css dynamically` app is used to change the background color of all
the paragraph tags of ` css-color.html ` file by selecting the color on the
`css-color-admin.html` file which is our admin file. All this is achieved with
the help of an node.js server. The server is built using ` node.js `,`
express.js ` and ` socket.io `. It is explained in more detail below.

#  Contents

  1. Directory Structure 
  2. ` css-color.html` File ( ` CSS ` included )
  3. ` css-color-admin.html` File ( ` CSS ` included )
  4. ` server.js ` for backend 
  5. How to run 
  6. Screenshots of the app 

Let's start with them one by one;

#

  1. Directory Structure : 

  
![directory-structure-change-css-dynamically](assets/img/directory-structure-
change-css-dynamically.png)  

#

  2. ` css-color.html` frontend file : 

This file contains some random text which is written within ` p ` paragraph
tags.  
  

    
        											
    <html>
    <head>
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	<style>	
    		h2{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		p{
    			font-family: 'Josefin Sans', sans-serif;
    			font-size: 30px;
    			font-weight: normal;
    			padding : 30px;
    		}	
    		h3{
    			font-family: 'Josefin Sans', sans-serif;
    			font-size: 30px;
    			font-weight: normal;
    			padding : 30px;
    		}	
    	</style>
    </head>
    <body>
    
    	<div class="row">
    		<div class="col-md-2">
    		</div>
    		<div class="col-md-8">
    			<h2>Changing CSS Dynamically using Socket.io</h2>
    			<br>
    			<br>
    			<p style="background-color:#00aaff">A Normal </p>
    			<p style="background-color:#aaff00">text paragraph in which </p>
    			<p style="background-color:#aa00ff">we are using sockets to change CSS</p>
    			<p>dynamically from the admin panel</p>
    			<h3> But it will only change the CSS of content which is inside <code> p (paragraph) </code> tag.</h3>
    		
    		
    		</div>
    	
    
    		<div class="col-md-2">
    		</div>
    	</div>
    	
    
    
    	<script>
    		$(document).ready(function(){
    			  var socket = io.connect('http://localhost:3000');
    			  socket.on('color' , function(data) {
    					console.log(data); 
    					var key= "background-color";
    					var value = data.data.color;
    			        $("p").css(key, value);
    				})
    			  
    		});
    	</script>
    
    </body>
    </html>
    											
    										

  

#

  3. ` css-color-admin.html` frontend file : 

Admin can select the background color from the color picker here and the
launch the event with the button click.  
  

    
        											
    <html> 
    <head> 
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	<style>	
    		input[type=color]{
    			width:100%;
    			height:20%;
    			cursor: pointer;
    			border-color: 4px solid #f4b942;
    		}
    		
    		input[type=button]{
    			font-family: 'Josefin Slab', serif;
    			width : 100%;
    			border: none;
    			color: #fff;
    			font-size: 30px;
    			padding: 16px 32px;
    			text-decoration: none;
    			margin: 4px 2px;
    			border-radius: 15px;
    			font-weight:bold;
    			background-color: #3558a8;
    		}
    		input[type=button]:hover{
    			cursor: pointer;
    			background-color: #a4b9e8;
    			color:#fff;
    			
    		}
    		
    		h1{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		
    		
    		
    	</style>
    
    </head> 
    <body> 
    	<div class="row">
    		<div class="col-md-4">
    		</div>
    		<div class="col-md-4">
    
    
    			<span class="actions"> 
    				<h1> Click Here to Pick Color</h1>
    				<input id="color" name="Color Picker" type="color" value="Pick Color"/>
    				<input type="button" class="btn" id="btn" value="Emit an Event" /> 
    					
    			</span> 
    		</div>
    		<div class="col-md-4">
    		</div>
    	</div>
    		
    
    
    
    
    <script>
      var socket = io.connect('http://localhost:3000');
        ( function(){
            console.log('I am a self executing function'); 
         var  myfunc = function(){
                console.log('admin emitted an event '); 
                var color = $("#color").val();
    			console.log(color);
    			socket.emit('admin', { color: color });
            }
            document.getElementById('btn').onclick =  myfunc;
        })();
    
    
    </script>
    
    </body> 
    </html> 
    											
    										

  

#

  4. ` server.js` backend file : 

Server receives the event from admin file and emits and event for the css-
color.html file.  
  

    
        											
    //Including the required files
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    //server listening at 127.0.0.1:3000
    server.listen(3000);
    console.log("Listening at 3000");
    //Handling the default route
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/css-color.html');
    });
    //Handling the route for admin 
    app.get('/admin' , function(req,res) {
        res.sendFile(__dirname + '/css-color-admin.html'); 
    })
    //Code for sockets
    io.on('connection', function (socket) {
      socket.on('admin' , function(data) {
          console.log(data); 
          console.log('about to broadcast')
          io.sockets.emit( 'color' , { data : data } )
        })
    });
    
    											
    										

  

#

  5. How to Run : 

  
  

    
        											
    >node server.js											
    											
    										

  
Now open the URL : [ http://127.0.0.1:3000 ](http://127.0.0.1:3000). For
Adding new quotes as , we can open the admin panel with this URL : [
http://127.0.0.1:3000/admin.html ](http://127.0.0.1:3000/admin.html)

#

  6. Screenshots : 

  

    1. **css-color.html**  
URL is : [ http://127.0.0.1:3000 ](http://127.0.0.1:3000)  
  
![Simple HTML frontend](assets/img/before-emitting-event.png)  
  

    2. **Selecting the color on admin panel :**  
URL is : [ http://127.0.0.1:3000/admin.html
](http://127.0.0.1:3000/admin.html)  
  
![Selecting color on admin the admin panel](assets/img/selecting-color.png)  
  

    3. **Emitting the event from admin panel :**  
URL is : [ http://127.0.0.1:3000/admin.html
](http://127.0.0.1:3000/admin.html)  
  
![Emitting events from admin Panel](assets/img/emitting-event.png)  
  

    4. **Selecting the color on admin panel :**  
URL is : [ http://127.0.0.1:3000/admin.html
](http://127.0.0.1:3000/admin.html)  
  
![CSS changed Successfully](assets/img/css-changed-successfully.png)  
  

![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/directory-structure-change-css-dynamically.png)

    
    
    											
    <html>
    <head>
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	<style>	
    		h2{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		p{
    			font-family: 'Josefin Sans', sans-serif;
    			font-size: 30px;
    			font-weight: normal;
    			padding : 30px;
    		}	
    		h3{
    			font-family: 'Josefin Sans', sans-serif;
    			font-size: 30px;
    			font-weight: normal;
    			padding : 30px;
    		}	
    	</style>
    </head>
    <body>
    
    	<div class="row">
    		<div class="col-md-2">
    		</div>
    		<div class="col-md-8">
    			<h2>Changing CSS Dynamically using Socket.io</h2>
    			<br>
    			<br>
    			<p style="background-color:#00aaff">A Normal </p>
    			<p style="background-color:#aaff00">text paragraph in which </p>
    			<p style="background-color:#aa00ff">we are using sockets to change CSS</p>
    			<p>dynamically from the admin panel</p>
    			<h3> But it will only change the CSS of content which is inside <code> p (paragraph) </code> tag.</h3>
    		
    		
    		</div>
    	
    
    		<div class="col-md-2">
    		</div>
    	</div>
    	
    
    
    	<script>
    		$(document).ready(function(){
    			  var socket = io.connect('http://localhost:3000');
    			  socket.on('color' , function(data) {
    					console.log(data); 
    					var key= "background-color";
    					var value = data.data.color;
    			        $("p").css(key, value);
    				})
    			  
    		});
    	</script>
    
    </body>
    </html>
    											
    										


    
    
    											
    <html> 
    <head> 
    	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab" rel="stylesheet">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
    	<style>	
    		input[type=color]{
    			width:100%;
    			height:20%;
    			cursor: pointer;
    			border-color: 4px solid #f4b942;
    		}
    		
    		input[type=button]{
    			font-family: 'Josefin Slab', serif;
    			width : 100%;
    			border: none;
    			color: #fff;
    			font-size: 30px;
    			padding: 16px 32px;
    			text-decoration: none;
    			margin: 4px 2px;
    			border-radius: 15px;
    			font-weight:bold;
    			background-color: #3558a8;
    		}
    		input[type=button]:hover{
    			cursor: pointer;
    			background-color: #a4b9e8;
    			color:#fff;
    			
    		}
    		
    		h1{
    			font-family: 'Josefin Slab', serif;
    			text-align:center;
    			font-size: 40px;
    			font-weight:bold;
    		}
    		
    		
    		
    	</style>
    
    </head> 
    <body> 
    	<div class="row">
    		<div class="col-md-4">
    		</div>
    		<div class="col-md-4">
    
    
    			<span class="actions"> 
    				<h1> Click Here to Pick Color</h1>
    				<input id="color" name="Color Picker" type="color" value="Pick Color"/>
    				<input type="button" class="btn" id="btn" value="Emit an Event" /> 
    					
    			</span> 
    		</div>
    		<div class="col-md-4">
    		</div>
    	</div>
    		
    
    
    
    
    <script>
      var socket = io.connect('http://localhost:3000');
        ( function(){
            console.log('I am a self executing function'); 
         var  myfunc = function(){
                console.log('admin emitted an event '); 
                var color = $("#color").val();
    			console.log(color);
    			socket.emit('admin', { color: color });
            }
            document.getElementById('btn').onclick =  myfunc;
        })();
    
    
    </script>
    
    </body> 
    </html> 
    											
    										


    
    
    											
    //Including the required files
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    //server listening at 127.0.0.1:3000
    server.listen(3000);
    console.log("Listening at 3000");
    //Handling the default route
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/css-color.html');
    });
    //Handling the route for admin 
    app.get('/admin' , function(req,res) {
        res.sendFile(__dirname + '/css-color-admin.html'); 
    })
    //Code for sockets
    io.on('connection', function (socket) {
      socket.on('admin' , function(data) {
          console.log(data); 
          console.log('about to broadcast')
          io.sockets.emit( 'color' , { data : data } )
        })
    });
    
    											
    										


    
    
    											
    >node server.js											
    											
    										

![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/before-emitting-event.png)
![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/selecting-color.png)
![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/emitting-event.png)
![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/css-changed-successfully.png)


In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about the basics of sockets, their features , prerequisites and
installation. After that we dive deep into sockets by writing 2 live working
projects in sockets.



Clone it from Github :
[__GITHUB](https://github.com/nodejsera/30daysofnode/tree/master/day14-socket.io)

![](https://www.nodejsera.com/nodejs-tutorial-day14-introduction-to-socket-io.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

