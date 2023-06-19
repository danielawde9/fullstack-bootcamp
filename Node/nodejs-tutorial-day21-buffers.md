![](https://www..com/nodejs-tutorial-day21-buffers.htmlassets/img/logo.png)

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

Buffer refers to space in memory which is used to store data temporarily. A
buffer has traditionally been used between devices with speed mis-match so
that they can keep on operating at their respective speeds without loss of
data. In Node.js Buffers are used when dealing with file streams or tcp
streams which are mainly octets of binary data.

- **Buffer.alloc() :** This method is used to create a Buffer object of given length with initializing all the value to `fill` or `0`.

  1. **Syntax :** The syntax of `Buffer.alloc()` method is given below :

     Buffer.alloc(size[, fill[, encoding]])

Where ,

      * ` size ` : Desired length of new Buffer. It accepts ` integer ` type of data.
      * ` fill ` : The value to prefill the buffer. Default value is ` 0 `.It accepts any of the follwing : ` integer `, ` string `, ` buffer ` type of data.
      * ` encoding `
    2. **Example :** Coding example of ` Buffer.alloc() ` method is given below :



        //Name of the file : buffer.alloc.js
        var buff = Buffer.alloc(20);
        console.log(buff);






    3. **Run :** We can run it in the following way :



        >node buffer.alloc.js
        <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>



- **Buffer.allocUnsafe() :** This method is used to create a Buffer object of given length but it will not initialize the values.Due to which contents of the newly created buffer are not known which causes a security threat because it might contain some sensitive or confidential data.

  1. **Syntax :** The syntax of `Buffer.allocUnsafe()` method is given below :

     Buffer.allocUnsafe(size)

Where ,

      * ` size ` : Desired length of new Buffer. It accepts ` integer ` type of data.
    2. **Example :** Coding example of ` Buffer.allocUnsafe() ` method is given below :



        //Name of the file : buffer.allocUnsafe.js
        var buff = Buffer.allocUnsafe(10);
        console.log(buff);






    3. **Run :** We can run it in the following way :



        >node buffer.allocUnsafe.js
        <Buffer 00 00 00 00 08 00 00 00 07 00>



- **Buffer.from() :** This method is used to create a Buffer from an string, object , array or buffer.

  1. **Syntax :** The syntax of `Buffer.from()` method is given below :

     Buffer.from(string[, encoding])

Where ,

      * ` string ` : data is passed here.
      * ` encoding ` : The encoding of string. Default value is `utf8`. This is an optional parameter.
    2. **Example :** Coding example of ` Buffer.from() ` method is given below :



        //Name of the file : buffer.from.js
        var buff1 = Buffer.from('');
        console.log("buff1 : " + buff1);





    3. **Run :** We can run it in the following way :



        >node buffer.from.js
        buff1 :



- **buf.compare() :** This method is used to compare buffers. It returns

  - `0` : If both buffers are same
  - `1` : If target buffer comes before the source buffer.
  - `-1` : If source buffer comes before the target buffer.

  1. **Syntax :** The syntax of `buf.from()` method is given below :

     buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])

Where ,

      * ` target ` : target buffer.
      * ` targetStart ` : Position from where comparion begins on target buffer.
      * ` targetEnd ` : Position on which comparison ends on target buffer.
      * ` sourceStart ` : Position from where comparion begins on source buffer.
      * ` sourceEnd ` : Position on which comparison ends on source buffer.
    2. **Example :** Coding example of ` buf.compare() ` method is given below :



        //Name of the file : buffer.compare.js
        var buffer1 = Buffer.from('');
        var buffer2 = Buffer.from('');
        var output = buffer1.compare(buffer2);
        console.log(output)
        if(output < 0) {
           console.log(buffer1 +" comes before " + buffer2);
        }else if(output == 0){
           console.log(buffer1 +" is same as " + buffer2);
        }else {
           console.log(output +" comes after " + buffer2);
        }





    3. **Run :** We can run it in the following way :



        >node buffer.compare.js
        0
         is same as



- **Buffer.concat() :** This method is used to concatenate two or more buffers together.

  1. **Syntax :** The syntax of `Buffer.concat()` method is given below :

     Buffer.concat(list)

Where ,

      * ` list ` : List of buffers to be concatenated.
    2. **Example :** Coding example of ` Buffer.concat() ` method is given below :



        //Name of the file : buffer.concat.js
        var buff1 = Buffer.from(' for nodejs');
        var buff2 = Buffer.from('- 30 days of node');
        var buff3 = Buffer.concat([buff1,buff2]);
        console.log("buff3 content: " + buff3.toString());





    3. **Run :** We can run it in the following way :



        >node buffer.concat.js
        buff3 content:  for nodejs- 30 days of node



- **buf.copy() :** This method is used to copy specified amount of bytes from source buffer to target buffer.

  1. **Syntax :** The syntax of `buf.copy()` method is given below :

     buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

Where ,

      * ` target ` : buffer to which we need to copy.
      * ` targetStart ` : Position from where copy starts from source.
      * ` sourceStart ` : position from which copy starts.
      * ` sourceEnd ` : Position till which copy is done.
    2. **Example :** Coding example of ` buf.copy() ` method is given below :



        //Name of the file : buffer.copy.js
        var buff = Buffer.from('');
        var newbuff = Buffer.alloc(20);
        buff.copy(newbuff);
        console.log("Content of newbuff :  " + newbuff.toString());





    3. **Run :** We can run it in the following way :



        >node buffer.copy.js
        Content of newbuff :



- **buf.equals() :** This method is used to compare 2 buffers. It returns `true` if buffers match, otherwise it will return `false`.

  1. **Syntax :** The syntax of `buf.equals()` method is given below :

     buf.equals(otherBuffer)

Where ,

      * ` otherBuffer ` : Buffer to compare with.
    2. **Example :** Coding example of ` buf.equals() ` method is given below :



        //Name of the file : buffer.equals.js
        var buff1 = Buffer.from('');
        var buff2 = Buffer.from('');

        console.log(buff1.equals(buff2));





    3. **Run :** We can run it in the following way :



        >node buffer.equals.js
        true



- **buf.fill() :** This method is used to fill the buffer with a specified value.

  1. **Syntax :** The syntax of `buf.fill()` method is given below :

     buf.fill(value)

Where ,

      * ` value ` : The value with which we will fill the buffer.
    2. **Example :** Coding example of ` buf.fill() ` method is given below :



        //Name of the file : buffer.fill.js
        var buff = Buffer.allocUnsafe(10).fill('nj');
        console.log(buff.toString());





    3. **Run :** We can run it in the following way :



        >node buffer.fill.js
        njnjnjnjnj



- **buf.indexOf() :** This method is used to check whether the buffer contains a specified value. If the value is present it will return the index of first occurrence of the value, otherwise it will return `-1`.

  1. **Syntax :** The syntax of `buf.indexOf()` method is given below :

     buf.indexOf(value)

Where ,

      * ` value ` : the value we are looking for.
    2. **Example :** Coding example of ` buf.indexOf() ` method is given below :



        //Name of the file : buffer.indexOf.js
        var buff1 = Buffer.from('');
        console.log(buff1.indexOf('j'));





    3. **Run :** We can run it in the following way :



        >node buffer.indexOf.js
        4



- **buf.length :** This method is used to return the length of buffer object.

  1. **Syntax :** The syntax of `buf.length` method is given below :

     buf.length

  2. **Example :** Coding example of `buf.length` method is given below :

     //Name of the file : buffer.length.js
     var buf = Buffer.from(' for nodejs');
     console.log( buf.length);

  3. **Run :** We can run it in the following way :

     > node buffer.length.js
     > 20

- **Buffer.slice() :** This method is used to slice the buffer into a new buffer with specified start and end point.

  1. **Syntax :** The syntax of `buf.slice()` method is given below :

     buf.slice([start[, end]])

Where ,

      * ` start ` : start offset of new buffer.
      * ` end ` : end offset of new buffer.
    2. **Example :** Coding example of ` buf.slice() ` method is given below :



        //Name of the file : buffer.slice.js
        var buff1 = Buffer.from('');
        var buff2 = buff1.slice(0,5);
        console.log("content of buff2 : " + buff2.toString());





    3. **Run :** We can run it in the following way :



        >node buffer.slice.js
        content of buff2 : Nodej



- **buf.toJSON() :** This method is used to convert the buffer into JSON.

  1. **Syntax :** The syntax of `buf.toJSON()` method is given below :

     buf.toJSON()

  2. **Example :** Coding example of `buf.toJSON()` method is given below :

     //Name of the file : bufferToJSON.js
     var buf = Buffer.from('');
     var json = buf.toJSON(buf);
     console.log(json);

  3. **Run :** We can run it in the following way :

     > node bufferToJSON.js
     > { type: 'Buffer',
     > data: [ 78, 111, 100, 101, 106, 115, 101, 114, 97 ] }

- **buf.toString() :** This method is used to convert the buffer into string.

  1. **Syntax :** The syntax of `buf.toString()` method is given below :

     buf.toString([encoding[, start[, end]]])

Where ,

      * ` encoding ` : Character encoding to decode to.
      * ` start ` : starting offset.
      * ` end ` : ending offset.
    2. **Example :** Coding example of ` buf.toString() ` method is given below :



        //Name of the file : bufferToString.js
        var buf = Buffer.from(' for nodejs');
        console.log( buf.toString('ascii'));





    3. **Run :** We can run it in the following way :



        >node bufferToString.js
         for nodejs









    Buffer.alloc(size[, fill[, encoding]])







    //Name of the file : buffer.alloc.js
    var buff = Buffer.alloc(20);
    console.log(buff);








    >node buffer.alloc.js
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>







    Buffer.allocUnsafe(size)







    //Name of the file : buffer.allocUnsafe.js
    var buff = Buffer.allocUnsafe(10);
    console.log(buff);








    >node buffer.allocUnsafe.js
    <Buffer 00 00 00 00 08 00 00 00 07 00>







    Buffer.from(string[, encoding])







    //Name of the file : buffer.from.js
    var buff1 = Buffer.from('');
    console.log("buff1 : " + buff1);







    >node buffer.from.js
    buff1 :







    buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])







    //Name of the file : buffer.compare.js
    var buffer1 = Buffer.from('');
    var buffer2 = Buffer.from('');
    var output = buffer1.compare(buffer2);
    console.log(output)
    if(output < 0) {
       console.log(buffer1 +" comes before " + buffer2);
    }else if(output == 0){
       console.log(buffer1 +" is same as " + buffer2);
    }else {
       console.log(output +" comes after " + buffer2);
    }







    >node buffer.compare.js
    0
     is same as







    Buffer.concat(list)







    //Name of the file : buffer.concat.js
    var buff1 = Buffer.from(' for nodejs');
    var buff2 = Buffer.from('- 30 days of node');
    var buff3 = Buffer.concat([buff1,buff2]);
    console.log("buff3 content: " + buff3.toString());







    >node buffer.concat.js
    buff3 content:  for nodejs- 30 days of node







    buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])







    //Name of the file : buffer.copy.js
    var buff = Buffer.from('');
    var newbuff = Buffer.alloc(20);
    buff.copy(newbuff);
    console.log("Content of newbuff :  " + newbuff.toString());







    >node buffer.copy.js
    Content of newbuff :







    buf.equals(otherBuffer)







    //Name of the file : buffer.equals.js
    var buff1 = Buffer.from('');
    var buff2 = Buffer.from('');

    console.log(buff1.equals(buff2));







    >node buffer.equals.js
    true







    buf.fill(value)







    //Name of the file : buffer.fill.js
    var buff = Buffer.allocUnsafe(10).fill('nj');
    console.log(buff.toString());







    >node buffer.fill.js
    njnjnjnjnj







    buf.indexOf(value)







    //Name of the file : buffer.indexOf.js
    var buff1 = Buffer.from('');
    console.log(buff1.indexOf('j'));







    >node buffer.indexOf.js
    4







    buf.length







    //Name of the file : buffer.length.js
    var buf = Buffer.from(' for nodejs');
    console.log( buf.length);







    >node buffer.length.js
    20







    buf.slice([start[, end]])







    //Name of the file : buffer.slice.js
    var buff1 = Buffer.from('');
    var buff2 = buff1.slice(0,5);
    console.log("content of buff2 : " + buff2.toString());







    >node buffer.slice.js
    content of buff2 : Nodej







    buf.toJSON()







    //Name of the file : bufferToJSON.js
    var buf = Buffer.from('');
    var json = buf.toJSON(buf);
    console.log(json);







    >node bufferToJSON.js
    { type: 'Buffer',
      data: [ 78, 111, 100, 101, 106, 115, 101, 114, 97 ] }







    buf.toString([encoding[, start[, end]]])







    //Name of the file : bufferToString.js
    var buf = Buffer.from(' for nodejs');
    console.log( buf.toString('ascii'));







    >node bufferToString.js
     for nodejs



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about what are buffers and some basic methods of buffer module of `node.js`.

![](https://www..com/nodejs-tutorial-day21-buffers.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
