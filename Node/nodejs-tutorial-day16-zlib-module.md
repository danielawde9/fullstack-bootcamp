![](https://www..com/nodejs-tutorial-day16-zlib-module.htmlassets/img/logo.png)

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

- `zlib` module is used to provide compression and decompression functionalities in node.js .
- In simple words , it is used to zip or unzip files.
- These functionalities are implemented using `GZIP` and `deflate/inflate` .
- We can use the `zlib` module via requiring it in the following way :

  var zlib = require('zlib');

  var zlib = require('zlib');

  // Including the required modules
  var zlib = require('zlib');
  var fs = require('fs');

  var zip = zlib.createGzip();

  var read = fs.createReadStream('newfile.txt');
  var write = fs.createWriteStream('newfile.txt.gz');
  //Transform stream which is zipping the input file
  read.pipe(zip).pipe(write);
  console.log("Zipped Successfully");

  // Including the required modules
  var zlib = require('zlib');
  var fs = require('fs');

  var unzip = zlib.createUnzip();

  var read = fs.createReadStream('newfile.txt.gz');
  var write = fs.createWriteStream('unzip.txt');
  //Transform stream which is unzipping the zipped file
  read.pipe(unzip).pipe(write);
  console.log("unZipped Successfully");

- `createDeflate()`
- `createInflate()`
- `createDeflateRaw()`
- `createInflateRaw()`
- ` deflateSync()`
- `inflateSync()`
- `deflateRaw()`
- `inflateRaw()`
- `deflateRawSync()`
- `inflateRawSync()`
- `gzip()`
- `unzip()`
- `gzipSync()`
- `unzipSync()`
- `createGzip()`
- `createGunzip()`

In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned how we can compress and decompress files using `zlib` module of
node.js. Also we leaned about all the methods available in zlib module.

![](https://www..com/nodejs-tutorial-day16-zlib-module.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
