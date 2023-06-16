![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/logo.png)
![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmllibrary/assets/img/30-days.png)


Node.js gives the functionality of File I/O by providing wrappers around the
standard POSIX functions. In Node.js, File I/O methods can be performed in
both synchronous as well as asynchronous form depending upon the user
requirements. In order to use this functionalities we need to require the fs
module as shown below :  

    
    
    									
    var fs = require('fs');
    									
    								

  


    
    
    									
    var fs = require('fs');
    									
    								



There are two ways for Reading a file in nodejs :

  1. Reading the file Asynchronously :   

    
        									
    //Reading a File Asynchronously using nodejs
    var fs=require('fs');
    
    fs.readFile('message.txt', (err, data) => {
    	if (err) 
    		throw err;
    		
    	console.log("Content :  " + data);
    });
    									
    								

  

  2. Reading the file Synchronously :   

    
        									
    var fs = require('fs');
    var filename = 'content.txt'; //Name of the file to be read
    var content = fs.readFileSync(filename);
    console.log('Content : ' + content);
    									
    								

  


    
    
    									
    //Reading a File Asynchronously using nodejs
    var fs=require('fs');
    
    fs.readFile('message.txt', (err, data) => {
    	if (err) 
    		throw err;
    		
    	console.log("Content :  " + data);
    });
    									
    								


    
    
    									
    var fs = require('fs');
    var filename = 'content.txt'; //Name of the file to be read
    var content = fs.readFileSync(filename);
    console.log('Content : ' + content);
    									
    								



There are two ways for writing a file in nodejs :

  1. Writing the file Asynchronously :   

    
        									
    //Writing a File Asynchronously using nodejs
    var fs =  require('fs');
    var content= "this is the content in the file";
    fs.writeFile('message.txt', content , (err) => {
    	if (err) 
    		throw err;
    	console.log('It\'s saved!');
    });
    									
    								

  

  2. Writing the file Synchronously :   

    
        									
    var fs = require('fs');
    
    var content = "We are writing this file synchronously using node.js";
    
    fs.writeFileSync('content.txt', content);
    console.log("File Written Successfully");
    									
    								

  


    
    
    									
    //Writing a File Asynchronously using nodejs
    var fs =  require('fs');
    var content= "this is the content in the file";
    fs.writeFile('message.txt', content , (err) => {
    	if (err) 
    		throw err;
    	console.log('It\'s saved!');
    });
    									
    								


    
    
    									
    var fs = require('fs');
    
    var content = "We are writing this file synchronously using node.js";
    
    fs.writeFileSync('content.txt', content);
    console.log("File Written Successfully");
    									
    								



There are two ways for Appending a file using nodejs :

  1. Appending the file Asynchronously :   

    
        									
    //Writing a File Asynchronously using nodejs
    var fs = require('fs');
    new_data = "This data will be appended at the end of the file.";
    fs.appendFile('input.txt', new_data , (err) => {
    	if(err) 
    		throw err;
    	console.log('The new_content was appended successfully');
    });
    									
    								

  

  2. Appending the file Synchronously :   

    
        									
    //file append operation in nodejs
    var fs = require('fs');
    var content = "We are Appending this file synchronously using node.js";
    fs.appendFileSync('input.txt', content);
    console.log("File Appended Successfully");
    									
    								

  


    
    
    									
    //Writing a File Asynchronously using nodejs
    var fs = require('fs');
    new_data = "This data will be appended at the end of the file.";
    fs.appendFile('input.txt', new_data , (err) => {
    	if(err) 
    		throw err;
    	console.log('The new_content was appended successfully');
    });
    									
    								


    
    
    									
    //file append operation in nodejs
    var fs = require('fs');
    var content = "We are Appending this file synchronously using node.js";
    fs.appendFileSync('input.txt', content);
    console.log("File Appended Successfully");
    									
    								



There are two ways for Renaming a file in nodejs :

  1. Renaming the file Asynchronously :   

    
        									
    var fs = require('fs');
    //you have to pass the Relative path of the file from the Current working directory.
    fs.rename('data.txt', 'new_data.txt', (err) => {
    	if (err)
    		throw err;
    	console.log('File renamed successfully');
    });
    
    //To check it's Asynchronous nature !
    console.log("This method is Asynchronous");
    									
    								

  

  2. Renaming the file Synchronously :   

    
        									
    var fs =  require('fs');
    //you have to pass the Relative path of the file from the Current working directory.
    fs.renameSync('data.txt', 'newData.txt');
    console.log('File renamed successfully');
    
    // To check it's Synchronous nature !
    console.log("This method is Synchronous");
    									
    								

  


    
    
    									
    var fs = require('fs');
    //you have to pass the Relative path of the file from the Current working directory.
    fs.rename('data.txt', 'new_data.txt', (err) => {
    	if (err)
    		throw err;
    	console.log('File renamed successfully');
    });
    
    //To check it's Asynchronous nature !
    console.log("This method is Asynchronous");
    									
    								


    
    
    									
    var fs =  require('fs');
    //you have to pass the Relative path of the file from the Current working directory.
    fs.renameSync('data.txt', 'newData.txt');
    console.log('File renamed successfully');
    
    // To check it's Synchronous nature !
    console.log("This method is Synchronous");
    									
    								



There are two ways for deleting a file in nodejs :

  1. Deleting the file Asynchronously :   

    
        									
    var fs = require('fs');
    var filename = 'content.txt';
    fs.unlink(filename, (err) => {
    	if (err) 
    		throw err;
    	console.log('File deleted successfully');
    });
    									
    								

  

  2. Deleting the file Synchronously :   

    
        									
    var fs = require('fs');
    var filename = 'data.txt';
    fs.unlinkSync(filename);
    console.log('File Deleted Successfully');
    									
    								

  


    
    
    									
    var fs = require('fs');
    var filename = 'content.txt';
    fs.unlink(filename, (err) => {
    	if (err) 
    		throw err;
    	console.log('File deleted successfully');
    });
    									
    								


    
    
    									
    var fs = require('fs');
    var filename = 'data.txt';
    fs.unlinkSync(filename);
    console.log('File Deleted Successfully');
    									
    								



In this part of node.js tutorial series we learned about file system in
node.js which includes :

  * Introduction to file system 
  * Read file operation using nodejs 
    1. **fs.readFile() :** Read file in asynchronous way. 
    2. **fs.readFileSync() :** Read file in synchronous way. 
  * Write file operation using nodejs 
    1. **fs.writeFile() :** Write file in asynchronous way. 
    2. **fs.writeFileSync() :** Write file in synchronous way. 
  * Append file operation using nodejs 
    1. **fs.appendFile() :** Append file in asynchronous way. 
    2. **fs.appendFileSync() :** Append file in synchronous way. 
  * Rename file operation using nodejs 
    1. **fs.rename() :** Rename file name in asynchronous way. 
    2. **fs.renameSync() :** Rename file name in synchronous way. 
  * Delete (unlink) file operation using nodejs 
    1. **fs.unlink() :** Delete file in asynchronous way. 
    2. **fs.unlinkSync() :** Delete file in synchronous way. 

![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/Paypal-payment-integration-using-node-part1.png)


Part 1 of Paypal payment integration using node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/create-db-mongo-node.png)


Create a database in MongoDb using Node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/nodejs-email-sendgrid.png)


Sending email using node.js and sendgrid's API

![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/pugjs.png)


Performing HTML operations using Pug



[ ](index.html)

![](https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

