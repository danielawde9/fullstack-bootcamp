![](https://www.nodejsera.com/nodejs-tutorial-day19-query-string.htmlassets/img/logo.png)


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



Query string module in node.js is used to provide utilities for parsing and
formatting URL query strings. It also provide methods used for converting JSON
to query string and query string to JSON. We can require the query string
module in the following way :  

    
    
    											
    var qs = require('querystring');
    											
    										

  


    
    
    											
    var qs = require('querystring');
    											
    										



  1. **querystring.parse(str, sep**, eq**, options**) :** This method is used to parse a URL query string to a collection of key and value pairs i.e. to JSON.   
**Note :** _** indicates optional parameters_  

    
        											
    //Name of the File : qs-parse.js
    var qs = require('querystring'); 
    
    var value_json = qs.parse('id=1&name=rj&name=njsera&tutorial=30daysofnode&creator=nodejsera')
    console.log(value_json);  
    
    var value_json_2 = qs.parse('id%2&name%reij&name%njsera2&tutorial%30daysofnode&creator%nodejsera','&','%');
    console.log("Changing the default 'eq' from '=' to '%'. An example is shown below:");
    console.log(value_json_2); 
    
    var value_json_3 = qs.parse('id%3#name%emily#name%njsera3#tutorial%30daysofnode#creator%nodejsera','#','%');
    console.log("Changing the default Separator 'sep' from '&' to '#'. An example is shown below:")
    console.log(value_json_3);
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node qs-parse.js
    { id: '1',
      name: [ 'rj', 'njsera' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    Changing the default 'eq' from '=' to '%'. An example is shown below:
    { id: '2',
      name: [ 'reij', 'njsera2' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    Changing the default Separator 'sep' from '&' to '#'. An example is shown below:
    { id: '3',
      name: [ 'emily', 'njsera3' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    
    											
    										

  

  2. **querystring.stringify(obj , sep**, eq**, options**) :** This method is used to produce a URL from a collection of key and value pairs i.e. from JSON.   
**Note :** _** indicates optional parameters_  

    
        											
    //Name of the File : qs.stringify.js
    var qs = require('querystring'); 
    
    var value_json = qs.stringify({ id: 1, name: ['abc', 'njera'], tutorial: '30days of node', creator : 'nodejsera' });
    console.log(value_json); 
    
    var value_json_2 = qs.stringify({ id: 2, name: ['def', 'njera2'], tutorial: '30days of node', creator : 'nodejsera' },';');
    console.log("Changing the default 'sep' from '&' to ';'. An example is shown below:");
    console.log(value_json_2); 
    
    var value_json_3 = qs.stringify( {id: 3, name: ['hij', 'njera3'], tutorial: '30days of node', creator : 'nodejsera' },';',':');
    console.log("Changing the default 'eq' from '=' to ':'. An example is shown below:")
    console.log(value_json_3);
    
    
    											
    										

  
  
We can run it in the following way :  

    
        											
    >node qs-stringify.js
    id=1&name=abc&name=njera&tutorial=30days%20of%20node&creator=nodejsera
    Changing the default 'sep' from '&' to ';'. An example is shown below:
    id=2;name=def;name=njera2;tutorial=30days%20of%20node;creator=nodejsera
    Changing the default 'eq' from '=' to ':'. An example is shown below:
    id:3;name:hij;name:njera3;tutorial:30days%20of%20node;creator:nodejsera
    											
    										

  


    
    
    											
    //Name of the File : qs-parse.js
    var qs = require('querystring'); 
    
    var value_json = qs.parse('id=1&name=rj&name=njsera&tutorial=30daysofnode&creator=nodejsera')
    console.log(value_json);  
    
    var value_json_2 = qs.parse('id%2&name%reij&name%njsera2&tutorial%30daysofnode&creator%nodejsera','&','%');
    console.log("Changing the default 'eq' from '=' to '%'. An example is shown below:");
    console.log(value_json_2); 
    
    var value_json_3 = qs.parse('id%3#name%emily#name%njsera3#tutorial%30daysofnode#creator%nodejsera','#','%');
    console.log("Changing the default Separator 'sep' from '&' to '#'. An example is shown below:")
    console.log(value_json_3);
    											
    										


    
    
    											
    >node qs-parse.js
    { id: '1',
      name: [ 'rj', 'njsera' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    Changing the default 'eq' from '=' to '%'. An example is shown below:
    { id: '2',
      name: [ 'reij', 'njsera2' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    Changing the default Separator 'sep' from '&' to '#'. An example is shown below:
    { id: '3',
      name: [ 'emily', 'njsera3' ],
      tutorial: '30daysofnode',
      creator: 'nodejsera' }
    
    											
    										


    
    
    											
    //Name of the File : qs.stringify.js
    var qs = require('querystring'); 
    
    var value_json = qs.stringify({ id: 1, name: ['abc', 'njera'], tutorial: '30days of node', creator : 'nodejsera' });
    console.log(value_json); 
    
    var value_json_2 = qs.stringify({ id: 2, name: ['def', 'njera2'], tutorial: '30days of node', creator : 'nodejsera' },';');
    console.log("Changing the default 'sep' from '&' to ';'. An example is shown below:");
    console.log(value_json_2); 
    
    var value_json_3 = qs.stringify( {id: 3, name: ['hij', 'njera3'], tutorial: '30days of node', creator : 'nodejsera' },';',':');
    console.log("Changing the default 'eq' from '=' to ':'. An example is shown below:")
    console.log(value_json_3);
    
    
    											
    										


    
    
    											
    >node qs-stringify.js
    id=1&name=abc&name=njera&tutorial=30days%20of%20node&creator=nodejsera
    Changing the default 'sep' from '&' to ';'. An example is shown below:
    id=2;name=def;name=njera2;tutorial=30days%20of%20node;creator=nodejsera
    Changing the default 'eq' from '=' to ':'. An example is shown below:
    id:3;name:hij;name:njera3;tutorial:30days%20of%20node;creator:nodejsera
    											
    										



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about the basics of query strings , what are query strings, `
.parse() ` method of query strings and lastly ` .stringify() ` method of query
strings with working code snippets.

![](https://www.nodejsera.com/nodejs-tutorial-day19-query-string.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

