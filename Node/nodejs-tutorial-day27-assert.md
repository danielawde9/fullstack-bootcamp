![](https://www.nodejsera.com/nodejs-tutorial-day27-assert.htmlassets/img/logo.png)


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
  21. [ Day 21 - Buffers in node.js ](nodejs-tutorial-day21-buffers.html)
  22. [ Day 22 - String Decoder Module in node.js ](nodejs-tutorial-day22-string-decoder.html)
  23. [ Day 23 - Debugger module in node.js ](nodejs-tutorial-day23-debuggers.html)
  24. [ Day 24 - Child Processes in node.js ](nodejs-tutorial-day24-child-processes.html)
  25. [ Day 25 - Clusters in node.js ](nodejs-tutorial-day25-clusters.html)
  26. [ Day 26 - OS module in node.js ](nodejs-tutorial-day26-os-module.html)
  27. [ Day 27 - Assert module in node.js ](nodejs-tutorial-day27-assert.html)
  28. [ Day 28 - Getting Tweets using node.js ](nodejs-tutorial-day28-getting-tweets-using-nodejs.html)
  29. [ Day 29 - Uploading file to dropbox using node.js ](nodejs-tutorial-day29-uploading-files-dropbox.html)
  30. [ Day 30 - Github API with node.js ](nodejs-tutorial-day30-github-api-with-node.html)



Assert module in node.js is an inbuilt module which can be used to write
tests. It provides a way to perform unit tests on node.js expressions. If the
test case is failed or 0 or false then , an error is raised. If the test case
is passed or 1 or true then it provides no feedback. Although this module is
intended for only internal use in node.js but we can still access it using the
following :  

    
    
    								
    var assert = require('assert');
    								
    							

  
**Note** that ` assert ` is not a testing framework and we must not treat it
like one.


    
    
    								
    var assert = require('assert');
    								
    							



Some common examples are given below which explains how we can use ` assert `
module of node.js in our code.

  * **Snippet 1 :** In this snippet , we perform comparison operation which checks whether variable ` a ` is greater that variable ` b ` or not.   

    
        										
    //Name of the file : assert-1.js
    
    var assert = require('assert');
    var a = 10;
    var b = 20;
    assert(a > b);
    										
    									

  
We can run it in the following way :  

    
        										
    >node assert-1.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: false == true
    										
    									

  

  * **Snippet 2 :** In this we are performing the strict comparison operation and checking whether the sum of 3 numbers is equal to the expected output or not.   

    
        										
    //Name of the file :  assert-snippet-true.js
    var assert = require('assert');  
    function demo (x,y,z) {  
      var value = x + y + z ; 
      return value;
    }  
    var output = demo(4,1,10);
    console.log("Output : " + output);
    var expected_output = 15;
    console.log("Expected Output : " + expected_output);
    assert( output === expected_output , 'Test case is true so this will not be printed'); 
    										
    									

  
We can run it in the following way :  

    
        										
    >node assert-snippet-true.js
    Output : 15
    Expected Output : 15
    
    										
    									

  
**Note** that when the assertion test is ` true ` , it does not return any
output.

  * **Snippet 3 :** In this we are performing the strict comparison operation and checking whether the sum of 3 numbers is equal to the expected output or not.   

    
        										
    //Name of the file :  assert-snippet-false.js
    var assert = require('assert');  
    function demo (x,y,z) {  
      var value = x + y + z ; 
      return value;
    }  
    var output = demo(3,2,10);
    console.log("Output : " + output);
    var expected_output = 12;
    console.log("Expected Output : " + expected_output);
    assert( output === expected_output , 'This is not what we expected');  
    										
    									

  
We can run it in the following way :  

    
        										
    >node assert-snippet-false.js
    Output : 15
    Expected Output : 12
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: This is not what we expected
    										
    									

  


    
    
    										
    //Name of the file : assert-1.js
    
    var assert = require('assert');
    var a = 10;
    var b = 20;
    assert(a > b);
    										
    									


    
    
    										
    >node assert-1.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: false == true
    										
    									


    
    
    										
    //Name of the file :  assert-snippet-true.js
    var assert = require('assert');  
    function demo (x,y,z) {  
      var value = x + y + z ; 
      return value;
    }  
    var output = demo(4,1,10);
    console.log("Output : " + output);
    var expected_output = 15;
    console.log("Expected Output : " + expected_output);
    assert( output === expected_output , 'Test case is true so this will not be printed'); 
    										
    									


    
    
    										
    >node assert-snippet-true.js
    Output : 15
    Expected Output : 15
    
    										
    									


    
    
    										
    //Name of the file :  assert-snippet-false.js
    var assert = require('assert');  
    function demo (x,y,z) {  
      var value = x + y + z ; 
      return value;
    }  
    var output = demo(3,2,10);
    console.log("Output : " + output);
    var expected_output = 12;
    console.log("Expected Output : " + expected_output);
    assert( output === expected_output , 'This is not what we expected');  
    										
    									


    
    
    										
    >node assert-snippet-false.js
    Output : 15
    Expected Output : 12
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: This is not what we expected
    										
    									



Each and every method of ` assert ` module of node.js is explained in detail
below with code examples.

  * **assert :** This method check if expression is true. It is similar to ` assert.ok() ` method. 
    * **Syntax :**   

        
                														
         assert(value[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.js
        var assert = require('assert');
        var a = 10;
        var b = 20;
        assert(a > b , "A should be greater than B");		 
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: A should be greater than B
        														
        													

  

  * **assert.deepEqual :** This method is used to check if two values are equal or not. The comparison is performed with ` == ` operator. 
    * **Syntax :**   

        
                														
        assert.deepEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.deepEqual.js
        var assert = require('assert');
        var a = 10;
        var b = '10';
        var c = 10.25;
        //Case 1
        assert.deepEqual(a,b, "Nothing printed because they are using == for comparison");
        //Case 2
        assert.deepEqual(a,c, "Error because values doesn't match");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.deepEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because values doesn't match
        														
        													

  

  * **assert.deepStrictEqual :** This method is also used to check if two values are equal or not except for the fact that comparison is performed with ` === ` operator. 
    * **Syntax :**   

        
                														
        assert.deepStrictEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.deepStrictEqual.js
        var assert = require('assert');
        var a = 10;
        var b = '10';
        
        assert.deepStrictEqual(a,b, "Error because they are using === for comparison");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.deepStrictEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because they are using === for comparison		
        														
        													

  

  * **assert.equal :** This method is used to check the equality between the actual and expected value. The comparison is performed using ` == ` operator. 
    * **Syntax :**   

        
                														
        assert.equal(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.equal.js
        var assert = require('assert');
        var a = 50;
        var b = '50';
        var c = 50.25;
        //Case 1
        assert.equal(a,b, "Nothing printed because they are using == for comparison");
        //Case 2
        assert.equal(a,c, "Error because values doesn't match");		 
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.equal.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because values doesn't match		
        														
        													

  

  * **assert.fail :** This method is used to throw an assertion error. 
    * **Syntax :**   

        
                														
         //Case 1
         assert.fail(message)
         //Case 2
         assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.fail.js
        var assert = require('assert');
        assert.fail(1, 2, 'This is an error', '>'); 
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.fail.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: This is an error
        														
        													

  

  * **assert.ifError :** This method is used throw a specified error if it evaluates to be true. 
    * **Syntax :**   

        
                														
        assert.ifError(value)
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.ifError.js
        var assert = require('assert');
        //Case 1 : No error
        assert.ifError(0);
        //Case 2 : throws 1
        assert.ifError(1);
        //Case 3 : throws error
        assert.ifError('error');
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.ifError.js
        
        assert.js:644
        assert.ifError = function ifError(err) { if (err) throw err; };
                                                          ^
        1
        														
        													

  

  * **assert.notDeepEqual :** This method is used to check for any deep inequality. This method is opposite of ` assert.deepEqual()` method. 
    * **Syntax :**   

        
                														
        assert.notDeepEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.notDeepEqual.js
        var assert = require('assert');
        var a = 10;
        var b = 12;
        var c = '10';
        
        //Case 1
        assert.notDeepEqual(a,b, "Nothing printed because they are using !== for comparison");
        //Case 2
        assert.notDeepEqual(a,c, "Error because values match here");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.notDeepEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because values match here
        														
        													

  

  * **assert.notDeepStrictEqual :** This method is used to check for any deep strict inequality. This method is opposite of ` assert.deepStrictEqual()` method. 
    * **Syntax :**   

        
                														
        assert.notDeepStrictEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.notDeepStrictEqual.js
        var assert = require('assert');
        var a = 10;
        var b = '10';
        var c = 10;
        //Case 1
        assert.notDeepStrictEqual(a,b, "No Error because they are checking for not deep strict equal");
        //Case 2
        assert.notDeepStrictEqual(a,c, "Error because values are equal");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.notDeepStrictEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because values are equal	
        														
        													

  

  * **assert.notEqual :** This method is used to check if two values are not equal, performed using ` != ` ( not equal operator ). 
    * **Syntax :**   

        
                														
        assert.notEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.notEqual.js
        var assert = require('assert');
        var a = 10;
        var b = 10.25;
        var c = '10';
        
        //Case 1
        assert.notEqual(a,b, "Nothing printed because they are using != for comparison");
        //Case 2
        assert.notEqual(a,c, "Error because values match");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.notEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because values match
        														
        													

  

  * **assert.notStrictEqual :** This method is used to check if two values are not equal, performed using ` !== ` ( strict not equal operator ). 
    * **Syntax :**   

        
                														
        assert.notStrictEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.notStrictEqual.js
        var assert = require('assert');
        var a = 10;
        var b = 10.25;
        var c = '10';
        var d = 10;
        
        //Case 1
        assert.notStrictEqual(a,b, "Nothing printed because they are using !== for comparison");
        //Case 2
        assert.notStrictEqual(a,c, "Nothing printed because still its not a match");
        //case 3
        assert.notStrictEqual(a,d, "Error because its a match");
        														
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.notStrictEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error because its a match														
        														
        													

  

  * **assert.ok :** This method is used to Check if a value is true or not. 
    * **Syntax :**   

        
                														
         assert.ok(value[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.ok.js
        var assert = require('assert');
        //Case 1
        assert.ok(true, "No error ");
        //Case 2
        assert.ok(1,"No error");
        //Case 3
        assert.ok(false,"It is an error");
        //Case 4
        assert.ok(0 , " Again error");
        //case 5
        var a = 10;
        var b = 20;
        assert(a > b , "A should be greater than B");
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.ok.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: It is an error
        														
        													

  
Note that you have to comment ` case 3 ` and ` case 4 ` to see the output of `
case 5 ` and in the same way comment ` case 3 ` and ` case 5 ` to see the
output of ` case 4 `.

  * **assert.strictEqual :** This method is used to check if two values are equal, performed using ` === ` ( strict equal operator ). 
    * **Syntax :**   

        
                														
        assert.strictEqual(actual, expected[, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.strictEqual.js
        var assert = require('assert');
        var a = 10;
        var b = '10';
        var c = 10;
        
        //Case 1
        assert.strictEqual(a,c, "Nothing printed");
        //Case 2
        assert.strictEqual(a,b, "Error acc to strict equality comparison");
        
        	 
        														
        													

  
We can run it in the following way :  

        
                														
        >node assert.strictEqual.js
        assert.js:41
          throw new errors.AssertionError({
          ^
        
        AssertionError [ERR_ASSERTION]: Error acc to strict equality comparison
        														
        													

  

  * **assert.throws :** This method is used when we are expecting a function block to throw an error. 
    * **Syntax :**   

        
                														
         assert.throws(block[, error][, message])
        														
        													

  

    * **Example :**   

        
                														
        //Name of the file : assert.throw.js
        var assert = require('assert');
        assert.throws(
          () => {
            throw new Error('Wrong value');
          },
          Error
        );
        														
        													

  

  * **assert.doesNotThrow :** This method is opposite of ` assert.throws ` method. 
    * **Syntax :**   

        
                														
         assert.doesNotThrow(block[, error][, message])
        														
        													

  


    
    
    														
     assert(value[, message])
    														
    													


    
    
    														
    //Name of the file : assert.js
    var assert = require('assert');
    var a = 10;
    var b = 20;
    assert(a > b , "A should be greater than B");		 
    														
    													


    
    
    														
    >node assert.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: A should be greater than B
    														
    													


    
    
    														
    assert.deepEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.deepEqual.js
    var assert = require('assert');
    var a = 10;
    var b = '10';
    var c = 10.25;
    //Case 1
    assert.deepEqual(a,b, "Nothing printed because they are using == for comparison");
    //Case 2
    assert.deepEqual(a,c, "Error because values doesn't match");
    														
    													


    
    
    														
    >node assert.deepEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because values doesn't match
    														
    													


    
    
    														
    assert.deepStrictEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.deepStrictEqual.js
    var assert = require('assert');
    var a = 10;
    var b = '10';
    
    assert.deepStrictEqual(a,b, "Error because they are using === for comparison");
    														
    													


    
    
    														
    >node assert.deepStrictEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because they are using === for comparison		
    														
    													


    
    
    														
    assert.equal(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.equal.js
    var assert = require('assert');
    var a = 50;
    var b = '50';
    var c = 50.25;
    //Case 1
    assert.equal(a,b, "Nothing printed because they are using == for comparison");
    //Case 2
    assert.equal(a,c, "Error because values doesn't match");		 
    														
    													


    
    
    														
    >node assert.equal.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because values doesn't match		
    														
    													


    
    
    														
     //Case 1
     assert.fail(message)
     //Case 2
     assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])
    														
    													


    
    
    														
    //Name of the file : assert.fail.js
    var assert = require('assert');
    assert.fail(1, 2, 'This is an error', '>'); 
    														
    													


    
    
    														
    >node assert.fail.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: This is an error
    														
    													


    
    
    														
    assert.ifError(value)
    														
    													


    
    
    														
    //Name of the file : assert.ifError.js
    var assert = require('assert');
    //Case 1 : No error
    assert.ifError(0);
    //Case 2 : throws 1
    assert.ifError(1);
    //Case 3 : throws error
    assert.ifError('error');
    														
    													


    
    
    														
    >node assert.ifError.js
    
    assert.js:644
    assert.ifError = function ifError(err) { if (err) throw err; };
                                                      ^
    1
    														
    													


    
    
    														
    assert.notDeepEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.notDeepEqual.js
    var assert = require('assert');
    var a = 10;
    var b = 12;
    var c = '10';
    
    //Case 1
    assert.notDeepEqual(a,b, "Nothing printed because they are using !== for comparison");
    //Case 2
    assert.notDeepEqual(a,c, "Error because values match here");
    														
    													


    
    
    														
    >node assert.notDeepEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because values match here
    														
    													


    
    
    														
    assert.notDeepStrictEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.notDeepStrictEqual.js
    var assert = require('assert');
    var a = 10;
    var b = '10';
    var c = 10;
    //Case 1
    assert.notDeepStrictEqual(a,b, "No Error because they are checking for not deep strict equal");
    //Case 2
    assert.notDeepStrictEqual(a,c, "Error because values are equal");
    														
    													


    
    
    														
    >node assert.notDeepStrictEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because values are equal	
    														
    													


    
    
    														
    assert.notEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.notEqual.js
    var assert = require('assert');
    var a = 10;
    var b = 10.25;
    var c = '10';
    
    //Case 1
    assert.notEqual(a,b, "Nothing printed because they are using != for comparison");
    //Case 2
    assert.notEqual(a,c, "Error because values match");
    														
    													


    
    
    														
    >node assert.notEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because values match
    														
    													


    
    
    														
    assert.notStrictEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.notStrictEqual.js
    var assert = require('assert');
    var a = 10;
    var b = 10.25;
    var c = '10';
    var d = 10;
    
    //Case 1
    assert.notStrictEqual(a,b, "Nothing printed because they are using !== for comparison");
    //Case 2
    assert.notStrictEqual(a,c, "Nothing printed because still its not a match");
    //case 3
    assert.notStrictEqual(a,d, "Error because its a match");
    														
    														
    													


    
    
    														
    >node assert.notStrictEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error because its a match														
    														
    													


    
    
    														
     assert.ok(value[, message])
    														
    													


    
    
    														
    //Name of the file : assert.ok.js
    var assert = require('assert');
    //Case 1
    assert.ok(true, "No error ");
    //Case 2
    assert.ok(1,"No error");
    //Case 3
    assert.ok(false,"It is an error");
    //Case 4
    assert.ok(0 , " Again error");
    //case 5
    var a = 10;
    var b = 20;
    assert(a > b , "A should be greater than B");
    														
    													


    
    
    														
    >node assert.ok.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: It is an error
    														
    													


    
    
    														
    assert.strictEqual(actual, expected[, message])
    														
    													


    
    
    														
    //Name of the file : assert.strictEqual.js
    var assert = require('assert');
    var a = 10;
    var b = '10';
    var c = 10;
    
    //Case 1
    assert.strictEqual(a,c, "Nothing printed");
    //Case 2
    assert.strictEqual(a,b, "Error acc to strict equality comparison");
    
    	 
    														
    													


    
    
    														
    >node assert.strictEqual.js
    assert.js:41
      throw new errors.AssertionError({
      ^
    
    AssertionError [ERR_ASSERTION]: Error acc to strict equality comparison
    														
    													


    
    
    														
     assert.throws(block[, error][, message])
    														
    													


    
    
    														
    //Name of the file : assert.throw.js
    var assert = require('assert');
    assert.throws(
      () => {
        throw new Error('Wrong value');
      },
      Error
    );
    														
    													


    
    
    														
     assert.doesNotThrow(block[, error][, message])
    														
    													



In this chapter of [ 30 days of node ](30-days-of-node.html), we learned about
what is assert module and how we can use it in our code. We also learned about
all the methods of assert module with code examples. Methods include : `
assert() `, ` assert.deepEqual()`, ` assert.deepStrictEqual() `, `
assert.doesNotThrow() `, ` assert.equal() `, ` assert.fail()`, `
assert.ifError() ` , ` assert.notDeepEqual() ` , ` assert.notDeepStrictEqual()
` , `assert.notEqual() `, ` assert.notStrictEqual()`, ` assert.ok() `, `
assert.strictEqual() `, ` assert.throws() `.

![](https://www.nodejsera.com/nodejs-tutorial-day27-assert.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

