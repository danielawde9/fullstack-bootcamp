![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/logo.png)


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



We've reached 29th day of our [ node.js tutorial series ](30-days-of-
node.html) and here we are with our third project tutorial in which we will
learn how to upload files to dropbox using ` dropbox's api ` and ` node.js `.

##  Contents:

  1. Getting the access token from dropbox by creating an app. 
  2. uploading file on dropbox using node.js 
  3. Celebrating the success with screenshots from working app. 



  1. Node.js installed 
  2. Dropbox account 



![](assets/img/directory-structure-dropbox.png)

![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/directory-structure-dropbox.png)


Follow the given link and login to your dropbox account : [Dropbox
Developers](https://www.dropbox.com/developers).

  * **Let's start creating the application.**   
  
![](assets/img/dropbox-1.png)  
  

  * **Choose the details :**
Select you Dropbox API , type of access allowed and also give a suitable name
to your application.  
  
![](assets/img/dropbox-2.png)  
  

  * CLick on the **create app** button.   
  
![](assets/img/dropbox-3.png)  
  

  * Congratulations you have successfully created the app.Now click on the generate Token button in order to create your access token.   
  
![](assets/img/dropbox-4.png)  
  

  * Congratulations you have successfully created access token.   
  
![](assets/img/dropbox-5.png)  
  

![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-1.png)
![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-2.png)
![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-3.png)
![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-4.png)
![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-5.png)


Now let's move onto the coding part.Although the code is self explanatory but
informative comments are given where ever needed :  

    
    
    													
    //Name of the file : dropbox-file-upload.js
    //Including the required moduless
    var request = require('request');
    var fs = require('fs');
    
    //enter your access token
    var access_token = "WRITE_YOUR_ACCESS_TOKEN_HERE";
    //Name of the file to be uploaded
    var filename = '44.png';
    //reading the contents 
    var content = fs.readFileSync(filename);
    //write your folder name in place of YOUR_PATH_TO_FOLDER
    // For example if the folder name is njera then we can write it in the following way :
    // "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
    options = {
                method: "POST",
                url: 'https://content.dropboxapi.com/2/files/upload',
                headers: {
                  "Content-Type": "application/octet-stream",
                  "Authorization": "Bearer " + access_token,
                  "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
                },
                body:content
    };
    
    request(options,function(err, res,body){
         console.log("Err : " + err);
         console.log("res : " + res);
         console.log("body : " + body);    
     })
    													
    													
    												

  
**Run :** We can run it in the following way :  

    
    
    													
    >node dropbox-file-upload.js
    Err : null
    res : [object Object]
    body : {"name": "44.png", "path_lower": "/njera/44.png", "path_display": "/njera/44.p
    ng", "id": "id:##################", "client_modified": "2017-12-19T22:10:22Z", "server_modified":
     "2017-12-19T22:10:22Z", "rev": "1372903ae0", "size": 599, "content_hash": "#################
     ##############"}										
    													
    												

  


    
    
    													
    //Name of the file : dropbox-file-upload.js
    //Including the required moduless
    var request = require('request');
    var fs = require('fs');
    
    //enter your access token
    var access_token = "WRITE_YOUR_ACCESS_TOKEN_HERE";
    //Name of the file to be uploaded
    var filename = '44.png';
    //reading the contents 
    var content = fs.readFileSync(filename);
    //write your folder name in place of YOUR_PATH_TO_FOLDER
    // For example if the folder name is njera then we can write it in the following way :
    // "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
    options = {
                method: "POST",
                url: 'https://content.dropboxapi.com/2/files/upload',
                headers: {
                  "Content-Type": "application/octet-stream",
                  "Authorization": "Bearer " + access_token,
                  "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
                },
                body:content
    };
    
    request(options,function(err, res,body){
         console.log("Err : " + err);
         console.log("res : " + res);
         console.log("body : " + body);    
     })
    													
    													
    												


    
    
    													
    >node dropbox-file-upload.js
    Err : null
    res : [object Object]
    body : {"name": "44.png", "path_lower": "/njera/44.png", "path_display": "/njera/44.p
    ng", "id": "id:##################", "client_modified": "2017-12-19T22:10:22Z", "server_modified":
     "2017-12-19T22:10:22Z", "rev": "1372903ae0", "size": 599, "content_hash": "#################
     ##############"}										
    													
    												



  * **Screenshot 1 :** Background application up and running   
![](assets/img/dropbox-screen-1.png)

  

  * **Screenshot 2 :** Uploaded content on Dropbox   
![](assets/img/dropbox-screen-2.png)

  

![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-screen-1.png)
![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/dropbox-screen-2.png)


In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about how we can create developers account on dropbox.We also
learned about how we can upload files to dropbox using it's API and ` node.js
` .

![](https://www.nodejsera.com/nodejs-tutorial-day29-uploading-files-dropbox.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

