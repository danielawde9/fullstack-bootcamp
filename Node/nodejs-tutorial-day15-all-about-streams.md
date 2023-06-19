![](https://www..com/nodejs-tutorial-day15-all-about-streams.htmlassets/img/logo.png)

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

- Streams are used to handle streaming data in node.js
- Streams can be readable, writable or both.
- All streams are instances of `eventEmitter` class.
- We can use the `stream` module via requiring it in the following way :

  var stream = require('stream');

  var stream = require('stream');

The streams which is used to perform read operations are readable streams.All
aspects of readable streams are explained below :

- **Modes:** These are the two modes of readables

  1. **paused :**

  - If the readable is in paused mode, then we need to call `stream.read()` explicitly to read the chunks of data.
  - By default, all readable streams are in paused mode.
  - We can switch readable to pause mode by calling stream.pause() method when there are no pipe destinations
  - We can also call stream.unpipe() method when pipe destinations are available , in order to switch readable to pause mode.

  2. **flowing :**

  - If the readable is in flowing mode, then the data is successfully emitted.
  - We can switch the readable stream to flowing mode by calling stream.resume() method.
  - We can switch the readable stream to flowing mode by calling stream.pipe() method.
  - If the readable is in flowing mode and there is no consumer to handle the data then it can lead to data loss.

- **Examples:** Examples of methods or modules which uses readable streams directly or in the form of duplex/transform stream are as follows :

  - HTTP requests ( Server )
  - HTTP responses ( Client )
  - fs module read streams
  - zlib module
  - crypto module
  - TCP sockets
  - process.stdin

- **Events :**

  - **readable :** This event is fired when there is data available to be read from the stream.
  - **data :** This event is fired when the stream is vacating the ownership of the chunk of data to the consumer.
  - **error :** This event is fired when the stream is unable to generate data due to some internal error or when stream tries to push invalid chunk of data.
  - **close :** This event is fired when the stream is closed. It indicates that no more events will be emitted and no further computation will occur.
  - **end :** This event is fired when all the data is read. It indicates that there is no more data to be consumed.

- **Methods :**

  1. **`readable.pause()` : ** This method is used to change the mode of the stream from `flowing` to `paused` and also all the data availble keeps residing in the internal buffer.
  2. **`readable.resume()` : ** This method is used to change the mode of the stream from `paused` to `flowing` and also stream will resume emitting events.
  3. **`readable.isPaused()` : ** This method is used to check the current operating state of the readable stream. If it returns `true` then that signifies that readable stream is in paused mode.
  4. **`readable.pipe()` : ** This method is used to attach a writable stream to the readable which will make the stream switch to flowing mode and start pushing data to the attached writable.
  5. **`readable.unpipe()` : ** This method is used to detach the writable stream previously attached to the readable stream.
  6. **`readable.read()` : ** This method is used to pull the data out of the internal buffer where data is returned in the form of buffers unless any other format is specified using `readable.setEncoding()`. If there is no data to pull , then null is returned.
  7. **`readable.setEncoding()` : ** This method is used to set the encoding for readable stream. By default the data is pulled in the form of buffers.
  8. **`readable.unshift()` : ** This method is used to push the data back to the internal buffer.
  9. **`readable.wrap()` : ** This method is used to read the data from the readables where the data sources uses the old streams.
  10. **`readable.destroy()` : ** This method is used to signifies the end of readable stream and stream releases any resources , if held.

The streams which is used to perform write operations are writable streams.
All aspects of writable streams are explained below :

- **Examples:** Examples of methods or modules which uses writable streams directly or in the form of duplex/transform stream are as follows :

  - HTTP requests ( Client )
  - HTTP responses ( Server )
  - fs module write streams
  - zlib module
  - crypto module
  - TCP sockets
  - process.stdout
  - process.stderr

- **Events :**

  - **drain :** This event is fired when a call to `system.write(chunk)` method returns false and it indicates when it will be appropriate to resume writing data.
  - **pipe :** This event is fired when `stream.pipe()` method is called on a readable stream indicating the addition of the writable in the set of destinations of the readable.
  - **unpipe :** This event is fired when `stream.unpipe()` method is called on a readable stream indicating the removal of the writable from the set of destinations of the readable.
  - **error :** This event is fired when an error occured while writing or piping the data.
  - **close :** This event is fired when the stream is closed. It indicates that no more events will be emitted and no further computation will occur.
  - **finish :** This event is fired when all the data is successfully flushed.

- **Methods :**

  1. **`writable.cork()` : ** This method is used to force all the written data to be buffered in memory. This buffered data is flushed in either of the following scenarios :

  - `stream.uncork()` method is called.
  - `stream.end()` method is called.

  2. **`writable.uncork()` : ** This method is used to flush all the data buffered by `stream.cork()` method.
  3. **`writable.write()` : ** This method is used to write some data to the stream and call the given callback when the data is handled successfully.
  4. **`writable.setDefaultEncoding()` : ** This method is used to set the default encoding for the writable stream.
  5. **`writable.end()` : ** This method is used to signifies that no more data will be written to the writable stream.
  6. **`writable.destroy()` : ** This method is used to signifies the end of writable stream.

`Duplex streams` are the streams which implements both `readable` and `writable` streams simultaneously.Most common example of `duplex` stream
include `net.socket` class of `net` module. A better explanation of how
duplex streams works is as follows :  
Suppose we build a socket in node.js to implement the functionality of
transmit and receive data simulataneously, then that can be achieved using `duplex` stream. We will be having two independent channels in the network
where one channel is used for transmitting data and other for receiving data.

- **Examples:** Examples of methods or modules which uses duplex streams are as follows :
  - Sockets (TCP) : It uses `duplex` streams for implementing sockets.
  - zlib : It uses `duplex`streams for gzip compression and decompression.
  - crypto : It used `duplex` stream for performing encryption, decryption and creating message digests.

`Transform` streams are `duplex` streams that can transform or modify data
as it is read and written. Also where output is in some way related to the
input. These streams read the input data , transform it using the manipulating
function and output the new data as shown below :

![Transfrom Streams Graphical representation](assets/img/transform-
stream-1.png)

We can also chain streams together to create complex processes by piping one
to next as shown below :

![Transfrom Streams Graphical representation](assets/img/transform-
stream-2.png)

- **Examples:** Examples of methods or modules which uses transform streams are as follows :

  - zlib : It uses `transform`streams for gzip compression and decompression like in `zlib.createDeflate()` method.
  - crypto : It used `transform` stream for performing encryption, decryption and creating message digests.

- **Methods :**

  1. **`transform.destroy()`: ** This method is used to destroy the stream and emit `error` . Moreover , The `tranform` stream would release all internal resouces being used after this method call.

![](https://www..com/nodejs-tutorial-day15-all-about-streams.htmlassets/img/transform-stream-1.png)
![](https://www..com/nodejs-tutorial-day15-all-about-streams.htmlassets/img/transform-stream-2.png)

code-snippet about how we can use streams in our code.

    // require fs module for file system
    var fs = require('fs');
    // write data to a file using writeable stream
    var wdata = "I am working with streams for the first time";

    var myWriteStream = fs.createWriteStream('aboutMe.txt');

    // write data

    myWriteStream.write(wdata);

    // done writing
    myWriteStream.end();

    // write handler for error event
    myWriteStream.on('error', function(err){
       console.log(err);
    });

    myWriteStream.on('finish', function() {
        console.log("data written successfully using streams.");
    	console.log("Now trying to read the same file using read streams ");
    	var myReadStream = fs.createReadStream('aboutMe.txt');
    	// add handlers for our read stream
    	var rContents = '' // to hold the read contents;
    	myReadStream.on('data', function(chunk) {
    		rContents += chunk;
    	});
    	myReadStream.on('error', function(err){
    		console.log(err);
    	});
    	myReadStream.on('end',function(){
    		console.log('read: ' + rContents);
    	});
    	console.log('performed write and read using streams');

    });



We can run it using the following commands :

    > node filename_streams.js










    // require fs module for file system
    var fs = require('fs');
    // write data to a file using writeable stream
    var wdata = "I am working with streams for the first time";

    var myWriteStream = fs.createWriteStream('aboutMe.txt');

    // write data

    myWriteStream.write(wdata);

    // done writing
    myWriteStream.end();

    // write handler for error event
    myWriteStream.on('error', function(err){
       console.log(err);
    });

    myWriteStream.on('finish', function() {
        console.log("data written successfully using streams.");
    	console.log("Now trying to read the same file using read streams ");
    	var myReadStream = fs.createReadStream('aboutMe.txt');
    	// add handlers for our read stream
    	var rContents = '' // to hold the read contents;
    	myReadStream.on('data', function(chunk) {
    		rContents += chunk;
    	});
    	myReadStream.on('error', function(err){
    		console.log(err);
    	});
    	myReadStream.on('end',function(){
    		console.log('read: ' + rContents);
    	});
    	console.log('performed write and read using streams');

    });







    > node filename_streams.js



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about the basics of streams, what are they, types of streams,
readable stream, writable stream , duplex stream , transform stream and lastly
a coding example to explain how we can use streams in our code.

![](https://www..com/nodejs-tutorial-day15-all-about-streams.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
