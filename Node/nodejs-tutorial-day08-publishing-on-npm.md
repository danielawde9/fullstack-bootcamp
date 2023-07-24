![](https://www..com/nodejs-tutorial-day8-publishing-on-npm.htmlassets/img/logo.png)

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

If you want to publish a package on nodejs package manager (npm) , then you
need to create a account on npm for that. You can create an [ npm account here
](https://www.npmjs.com/) . **Note :** If you already have an account , you
can skip this step.

1. **Click on Sign Up :**  
   ![npm-publish-1](assets/img/npm-publish-01.png)

2. **Enter you information :**  
   ![npm-publish-1](assets/img/npm-publish-02.png)

3. **Click on Create an account :**  
   ![npm-publish-1](assets/img/npm-publish-03.png)

Congratulations, You successfully created you npm account.

![](https://www..com/nodejs-tutorial-day8-publishing-on-npm.htmlassets/img/npm-publish-01.png)
![](https://www..com/nodejs-tutorial-day8-publishing-on-npm.htmlassets/img/npm-publish-02.png)
![](https://www..com/nodejs-tutorial-day8-publishing-on-npm.htmlassets/img/npm-publish-03.png)

We need to `export` the methods in order to make them accessible for other
applications.This can be done in the following way :

    var function_name_1 = function (parameters){

    					Function code starts
    					...				...
    					...				...
    					Functionality
    					...  			...
    					...				...
    					Function ends here
    					}
    var function_name_2 = function (parameters){


    					Function code starts
    					...				...
    					...				...
    					Functionality
    					...  			...
    					...				...
    					Function ends here
    					}
    module.exports = {
    	function_1 : function_name_1,
    	function_2 : function_name_2
    	};



**Test :** We can test whether this is working or not locally by importing it
in a local application as shown below :

    var fun = require('/filename');
    var param = ["a" , "demo" , "array"];
    var output =  fun(param);
    console.log(output);




If the above code successfully runs the function that means the test is
successfully and our package is publish ready.

    var function_name_1 = function (parameters){

    					Function code starts
    					...				...
    					...				...
    					Functionality
    					...  			...
    					...				...
    					Function ends here
    					}
    var function_name_2 = function (parameters){


    					Function code starts
    					...				...
    					...				...
    					Functionality
    					...  			...
    					...				...
    					Function ends here
    					}
    module.exports = {
    	function_1 : function_name_1,
    	function_2 : function_name_2
    	};







    var fun = require('/filename');
    var param = ["a" , "demo" , "array"];
    var output =  fun(param);
    console.log(output);




This is the most important file while publishing your file.If our package is
not having the package.json file then we won't be able to publish your
package. We already learned in previous chapter how we can create package.json
file. Package.json will hold all the information related to your package.

In order to publish a package you need to follow the following steps :

1. **Login :** Login to your npm account from your command line interface using your account credentials and the command `npm login` . Snippet is given below :


    >npm login
    Username:
    Password:
    Email: (this IS public) youemail@.com
    Logged in as  on https://registry.npmjs.org/.



You are successfully logged in.

2. **Publish :** Run the command `npm publish` in your root folder of package. It will read the data from package.json file. If there is any name conflicts in your package then it will throw an error with respective error message , otherwise your package is published. You can check it on npm.


    >npm publish



Everything from the directory is published unless it is ignored by a `.gitignore` or `.npmignore` file.

    >npm login
    Username:
    Password:
    Email: (this IS public) youemail@.com
    Logged in as  on https://registry.npmjs.org/.







    >npm publish



If we make any changes to our package , then we have to update it on npm also.
We can do that by using the command `npm version <update.type >` where
update_type is one of the semantic versioning release types, minor,major ,or
patch .  
It will update the version number in `package.json` file. After updating the
version number , we can again publish a package using `npm publish` as shown
above.

In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about how we creating an account on npm , making our publish ready
for npm , importance of package.json file while publishing packages ,
publishing a package using npm publish , updating the version of package using
npm version .

![](https://www..com/nodejs-tutorial-day8-publishing-on-npm.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
