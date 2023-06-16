![](https://www.nodejsera.com/nodejs-tutorial-day22-string-decoder.htmlassets/img/logo.png)


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



String decoder module in node.js is used to provide an API for decoding buffer
object into strings. Also , this decoding is performed in a manner that UTF-8
and UTF-16 characters multibyte coding is preserved. We can require the query
string module in the following way :  

    
    
    											
    var sd = require('string_decoder').StringDecoder;
    											
    										

  


    
    
    											
    var sd = require('string_decoder').StringDecoder;
    											
    										



String decoder class has only 2 methods which are as follows :

  1. **stringDecoder.write(buffer) :** This method is used to return the specified buffer as decoded string. We pass ` buffer ` as the argument in this method . An example is given below :   

    
        											
    //name of the file : write.js
    var stringDecoder = require('string_decoder').StringDecoder;
    var sd = new stringDecoder('utf8');
    var buff = Buffer('data to be buffered');
    //Print the buffered data
    console.log(buff); 
    //Print the decoded buffer  
    console.log(sd.write(buff));
    											
    										

  
We can run it in the following way :  

    
        											
    >node write.js
    <Buffer 64 61 74 61 20 74 6f 20 62 65 20 62 75 66 66 65 72 65 64>
    data to be buffered
    											
    										

  

  2. **stringDecoder.end([buffer]) :** This method is used to return the remaining of the input stored in internal buffer. 


    
    
    											
    //name of the file : write.js
    var stringDecoder = require('string_decoder').StringDecoder;
    var sd = new stringDecoder('utf8');
    var buff = Buffer('data to be buffered');
    //Print the buffered data
    console.log(buff); 
    //Print the decoded buffer  
    console.log(sd.write(buff));
    											
    										


    
    
    											
    >node write.js
    <Buffer 64 61 74 61 20 74 6f 20 62 65 20 62 75 66 66 65 72 65 64>
    data to be buffered
    											
    										



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about String decoder method in node.js which is used for decoding
buffer object into strings. We also learned about two methods of string
decoder which are ` stringDecoder.write(buffer) ` and
`stringDecoder.end([buffer]) `.

![](https://www.nodejsera.com/nodejs-tutorial-day22-string-decoder.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

