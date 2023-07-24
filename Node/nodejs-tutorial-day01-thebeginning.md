![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/logo.png)
![](https://www..com/nodejs-tutorial-day1-thebeginning.htmllibrary/assets/img/30-days.png)
Node.js is a platform (server-side) which is built on google chrome's
javascript v8 engine. It is open source , cross platform and is capable of
generating real time web applications. It uses event-driven, non-blocking I/O
operation model which makes it efficient and light-weight. It is developed by
Ryan Dahl with the team of other developers working at joyent in 2009. Its
initial release only supports linux. It is written in C,C++ and javascript.
It's package ecosystem 'NPM' is the largest ecosystem of open source libraries
in the world.

Based on the architecture of your Operating System, you can download the
latest version of node.js from the downloads page of node's official website :

[ Nodejs Download \_\_](https://nodejs.org/en/download/)

Once you are done with the download , open any text editor and start coding.
Some examples of text editors are **Atom** , **Notepad++** , **Visual Studio
Code** , **Sublime Text**.  
All node.js files are stored with the extension ".js" just like javascript.

Let's follow the ritual of programming and start by creating a program which
will print ` hello world` on the console as output. This code-snippet is as
simple as it can be.

    //file-name : hello-world-in-node.js
    console.log('hello world');







    >node hello-world-in-node.js



- Node provide us with the inbuilt `http` module which we can use to create the server. Get the access to the module by using `require`
- Mention the host i.e. localhost (127.0.0.1) to serve it locally.
- Mention the port. We are using port : 3000 for our example.
- Create a server using the `createServer()` method. `createServer()` method takes a callback function as arguments. This callback is executed each time a request is received.
- The two arguments of `createServer()` method are  
  `request` : which contains all the information related to client's request
  such as URL, custom headers , client info , etc.  
  `response` : which is used to return the data back to the client.

- `response.writeHead` is an inbuilt method which is used to send the  
  [ status code \_\_](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)and
  the[ MIME type __](https://developer.mozilla.org/en-
  US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

- And after that we are just Printing the value on the console using `console.log()` function.
- ` response.end()` is an inbuilt function which is used to tell the server that the request has been fulfilled.Along with that we can also send one response using this.
- `server.listen()` is an inbuilt method used to bind to the port an start listening for incoming connections.

  //simple-server-in-nodejs.js
  var http = require('http');

  var host = '127.0.0.1'
  var port = 3000

  var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("server Working");
  response.end('Server Working Success');
  });

  server.listen(port,host, (error) => {  
   if (error) {
  return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
  });

We can run the above code using the following :

    >node simple-server-in-nodejs.js









    //simple-server-in-nodejs.js
    var http = require('http');

    var host = '127.0.0.1'
    var port = 3000

    var server = http.createServer((request, response) => {
      response.writeHead(200, {"Content-Type": "text/plain"});
      console.log("server Working");
      response.end('Server Working Success');
    });

    server.listen(port,host, (error) => {
      if (error) {
        return console.log('Error occured : ', error );
      }

      console.log('server is listening on ' + host + ':'+ port);
    });







    >node simple-server-in-nodejs.js



`response.write()` : It is the inbuilt method which is used to send the
response. In the above section we used `response.end()` to send the response
but we can only send one response using this. however , we can send as many
responses as we want using `response.write()` method. Now Let's see how we
can serve a string in an http server in node.js.

    //serve-string.js
    var http = require('http');

    var host = '127.0.0.1'
    var port = 3000

    var server = http.createServer((request, response) => {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World!");
      response.end();
    });

    server.listen(port,host, (error) => {
      if (error) {
        return console.log('Error occured : ', error );
      }

      console.log('server is listening on ' + host + ':'+ port);
    });



We can run the above code using the following :

    >node serve-string.js









    //serve-string.js
    var http = require('http');

    var host = '127.0.0.1'
    var port = 3000

    var server = http.createServer((request, response) => {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World!");
      response.end();
    });

    server.listen(port,host, (error) => {
      if (error) {
        return console.log('Error occured : ', error );
      }

      console.log('server is listening on ' + host + ':'+ port);
    });







    >node serve-string.js



In the previous section we learned how we can serve a string using node.js but
in practical applications we hardly need to serve the string. In most of the
cases , we serve html files via the node.js server. So let's see how we can
serve a html file using node.js

    //serve-html.js
    var http = require('http');
    var fs = require('fs');


    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change the MIME type from 'text/plain' to 'text/html'
        res.writeHead(200, {'Content-Type': 'text/html'});
    	//reading the content file
    	fs.readFile('index.html', (err, data) => {
    		//checking for errors
    		if (err)
    			throw err;
    		console.log("Operation Success");
    		//sending the response
    		res.end(data);
    	});
    }).listen(3000);



We can run the above code using the following :

    >node serve-html.js









    //serve-html.js
    var http = require('http');
    var fs = require('fs');


    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change the MIME type from 'text/plain' to 'text/html'
        res.writeHead(200, {'Content-Type': 'text/html'});
    	//reading the content file
    	fs.readFile('index.html', (err, data) => {
    		//checking for errors
    		if (err)
    			throw err;
    		console.log("Operation Success");
    		//sending the response
    		res.end(data);
    	});
    }).listen(3000);







    >node serve-html.js



There may be scenarios when the response which we need to send is not a plain
text , For REST Api's we usually have to send JSON response. So , let's see
how we can serve JSON in a node.js server

    //serve-json.js
    var http = require('http');
    var fs = require('fs');
    console.log('Server will listen at :  127.0.0.1:3000 ');
    http.createServer(function (req, res) {
    	//change the MIME type to 'application/json'
        res.writeHead(200, {'Content-Type': 'application/json'});
        //Create a JSON
    	let json_response = {
    		status : 200 ,
    		message : 'succssful' ,
    		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] ,
    		code : 2000
    	}
    	console.log('Server Running');
    	res.end( JSON.stringify(json_response) );
    }).listen(3000);



We can run the above code using the following :

    >node serve-json.js









    //serve-json.js
    var http = require('http');
    var fs = require('fs');
    console.log('Server will listen at :  127.0.0.1:3000 ');
    http.createServer(function (req, res) {
    	//change the MIME type to 'application/json'
        res.writeHead(200, {'Content-Type': 'application/json'});
        //Create a JSON
    	let json_response = {
    		status : 200 ,
    		message : 'succssful' ,
    		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] ,
    		code : 2000
    	}
    	console.log('Server Running');
    	res.end( JSON.stringify(json_response) );
    }).listen(3000);







    >node serve-json.js



Now let's make things intersting and try to serve a pdf file using a node.js
server

    //serve-pdf.js
    var http = require('http');
    var fs = require('fs');
    console.log('Server will listen at :  127.0.0.1:3000 ');
    http.createServer( (req, res)=> {
    	console.log("Port Number : 3000");
    	// Change the MIME type to application/pdf
    	res.writeHead(200, {"Content-Type": "application/pdf"});

    	fs.readFile('index.pdf', (error,data) => {
    		if(error){
    			res.json({'status':'error',msg:err});
    		}else{
    			res.write(data);
    			res.end();
    		}
    	});
    }).listen(3000);



We can run the above code using the following :

    >node serve-pdf.js









    //serve-pdf.js
    var http = require('http');
    var fs = require('fs');
    console.log('Server will listen at :  127.0.0.1:3000 ');
    http.createServer( (req, res)=> {
    	console.log("Port Number : 3000");
    	// Change the MIME type to application/pdf
    	res.writeHead(200, {"Content-Type": "application/pdf"});

    	fs.readFile('index.pdf', (error,data) => {
    		if(error){
    			res.json({'status':'error',msg:err});
    		}else{
    			res.write(data);
    			res.end();
    		}
    	});
    }).listen(3000);







    >node serve-pdf.js



These days serving audio is the basic necessity for websites and it's really
simple to serve audio using node.js server.

    //serve-mp3.js
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change MIME type to 'audio/mp3'
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        fs.exists('audio.mp3',function(exists){
    		if(exists)
    		{
    			var rstream = fs.createReadStream('audio.mp3');
    			rstream.pipe(res);
    		}
    		else
    		{
    			res.end("Its a 404");
    		}
    	});
    }).listen(3000);



We can run the above code using the following :

    >node serve-mp3.js









    //serve-mp3.js
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change MIME type to 'audio/mp3'
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        fs.exists('audio.mp3',function(exists){
    		if(exists)
    		{
    			var rstream = fs.createReadStream('audio.mp3');
    			rstream.pipe(res);
    		}
    		else
    		{
    			res.end("Its a 404");
    		}
    	});
    }).listen(3000);







    >node serve-mp3.js



And we have saved the best for the last. We can also serve videos using a
simple nodejs server. All you have to do is change the MIME type as shown
below :

    //serve-mp4.js
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change the MIME type to 'video/mp4'
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        fs.exists('video.mp4',function(exists){
    		if(exists)
    		{
    			var rstream = fs.createReadStream('video.mp4');
    			rstream.pipe(res);
    		}
    		else
    		{
    			res.send("Its a 404");
    			res.end();
    		}
    	});
    }).listen(3000);



We can run the above code using the following :

    >node serve-mp4.js









    //serve-mp4.js
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
    	console.log("Port Number : 3000");
    	// change the MIME type to 'video/mp4'
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        fs.exists('video.mp4',function(exists){
    		if(exists)
    		{
    			var rstream = fs.createReadStream('video.mp4');
    			rstream.pipe(res);
    		}
    		else
    		{
    			res.send("Its a 404");
    			res.end();
    		}
    	});
    }).listen(3000);







    >node serve-mp4.js



In this part of the node.js series [ 30 days of node ](30-days-of-node.html)
we learned about `node.js server` . Also a basic introduction to node.js and
how we can install node.js. Then an `hello world` example in node.js. Then
we learned how to create a simple http server in node.js and serve the
following :

- Serve a String using node.js server
- Serve html file using node.js server
- Serve JSON using node.js server
- Serve pdf file using node.js server
- Serve mp3 file using node.js server
- Serve video/mp4 file using node.js server

![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/Paypal-payment-integration-using-node-part1.png)

Part 1 of Paypal payment integration using node.js . . .

![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/create-db-mongo-node.png)

Create a database in MongoDb using Node.js . . .

![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/nodejs-email-sendgrid.png)

Sending email using node.js and sendgrid's API

![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/pugjs.png)

Performing HTML operations using Pug

[ ](index.html)

![](https://www..com/nodejs-tutorial-day1-thebeginning.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
