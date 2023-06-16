![](https://www.nodejsera.com/nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.htmlassets/img/logo.png)


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



In this part, we will learn about doing encryption and decryption using cryto
module of node.js symmetrically as well as asymmetrically.



  1. **Node.js :** You can download it [ here ](https://nodejs.org/en/download/)
  2. **Key Pair :** You can generate it using openSSL or any other key pair generator or you can use the ones available [here ](https://github.com/nodejsera/30daysofnode/tree/master/day-10-crypto-module-part-2)



Data that can be read and understood easily is known as Plain text. The
problem with plain text is that everyone can read it. But sometimes we don't
want everyone to have the access to read the data i.e. the confidentiality of
the data needs to be maintained.  
  
**Encryption :** Encryption deals with providing confidentiality to the data
so that only authorize personnel have access to the data. In encryption ,
Plain text is transfromed to an unintelligible text with the help of ` key
`and ` algorithm` which we can read but can not understand due to which the
confidentiality of the data is protected. This unintelligible text is known as
` Cipher text ` .  
  
![](assets/img/encrypt-30.png)  
  
**Decryption :** Decryption is the process of rendering the data , so that it
can be changed into a human or machine readable and understandable form. It
takes the cipher text as input and converts it into the plain text with the
help of ` key `and ` algorithm`.  
  
![](assets/img/decrypt-30.png)  
  

![](https://www.nodejsera.com/nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.htmlassets/img/encrypt-30.png)
![](https://www.nodejsera.com/nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.htmlassets/img/decrypt-30.png)


There are 2 ways to encrypt and decrypt the content which are explained in
detail below :

##

  1. Symmetric or private key encryption : 

In symmetric , same key is used to perform encryption and decryption. It is
fast as compared to asymmetric.  
**Scenario :**

    * Mr.A wants to send a confidential message to Mr.X 
    * Mr.H in sitting in between monitoring all the messages transmit by Mr.A 
    * So, Mr.A encrypted the message with his private key and transmits the message. Now further there are 2 possibilities : 
      1. The message is safely received by Mr. X who decrypted it using the same key with which the message was encrypted by Mr.A 
      2. Mr. H got the message but as Mr.H does not have the key with which the message is encrypted, so he can not decrypt it and hence the confidentiality of the message is retained. 

##

  2. Asymmetric or public key encryption: 

In asymmetric , we use a pair of keys to perform encryption and decryption. In
simple words, key which is used to encrypt is different from the key which is
used to decrypt. The key pair can be generated using openSSL or any other key
pair generator. The key pair consist of a public key and a private key. Public
key is known to all however the private key is only known to the person whom
it belongs.For the problems Asymmetric encryption solves consider the
following scenarios:  
  
**Scenario 1**

    * Rj wants to send a confidential message to Mr.X 
    * Mr.H in sitting in between monitoring all the messages transmit by Rj 
    * So, Rj encrypted the message with his private key and transmits the message. Now further there are 2 possibilities : 
      1. The message is safely received by Mr. X who decrypted it using Rj's public key. 
      2. Mr. H got the message and decrypted it using Rj's Public key. But now Mr.H can not encrypt it again because Mr.H is not having Rj's Private key and when the message reaches its actual destination that is to Mr.X , Mr.X will get to know that the confidentiality of the message is breached and hence the information provided by the message can not be trusted. 
    * Hence either the message is received by actual receiver with it's confidentiality retained or we get to know that the confidentiality is breached. 
  
**Scenario 2**

    * Now Mr. X wants to inform Rj that the confidentiality of the message is breached but he does not want Mr.H to know about it. 
    * So Mr. X encrypted the message using the public key of Rj,which can now only be decrypted using the private key of Rj.
    * If Mr.H somehow even got the reply send by Mr.X to Rj , then also he can't decrypt it because the private key is only with Rj.



  1. **Encryption using`createCipher` and decryption using `createDecipher` inbuilt methods : ** Same key is used for both encryption and decryption.   

    
        											
    var crypto = require('crypto'),algorithm = 'aes-256-ctr',password = 'RJ23edrf';
    //Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
    //Text is the Confidential data which we need to encrypt using 'password'(Key).
    
    function encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }
    
    //Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
    //Text is the Cipher which we need to decrypt using 'password'(Key).
    function decrypt(text){
       var decipher = crypto.createDecipher(algorithm,password)
       var dec = decipher.update(text,'hex','utf8')
       dec += decipher.final('utf8');
       return dec;
    }
    
    //Actual content
    var text = "Nodejsera for all web development languages";
    //Calling the encrypt function and printing the encrypted content				
    var e = encrypt(text);
    console.log(e);
    //calling the decrypt function and printing the decrypted content
    var d = decrypt(e);
    console.log(d);	
    											
    										

  
**Run :** We can run it using the command given below  

    
        											
    >node enc-pub-dec-priv.js
    											
    										

  


    
    
    											
    var crypto = require('crypto'),algorithm = 'aes-256-ctr',password = 'RJ23edrf';
    //Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
    //Text is the Confidential data which we need to encrypt using 'password'(Key).
    
    function encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }
    
    //Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
    //Text is the Cipher which we need to decrypt using 'password'(Key).
    function decrypt(text){
       var decipher = crypto.createDecipher(algorithm,password)
       var dec = decipher.update(text,'hex','utf8')
       dec += decipher.final('utf8');
       return dec;
    }
    
    //Actual content
    var text = "Nodejsera for all web development languages";
    //Calling the encrypt function and printing the encrypted content				
    var e = encrypt(text);
    console.log(e);
    //calling the decrypt function and printing the decrypted content
    var d = decrypt(e);
    console.log(d);	
    											
    										


    
    
    											
    >node enc-pub-dec-priv.js
    											
    										



Also known as public key encryption, we use differnt key for decryption from
the one we used for encryption. There are 2 possibilities which are explained
with code snippets below :

  1. **Public Key used for encryption amd private key for decryption :**   

    
        											
     /** 
        Example of Asymmetric encryption
        Encrypting using public key and decrypting using private key
        File Name : enc-pub-dec-priv.js
        Author : @nodejsera
     **/
    //Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');
    
    //Reading the Public Key
    pubK = privK = fs.readFileSync('pub.key').toString();
    
    //Passing the text to be encrypted using private key
    var buf = Buffer.from('This is secret code', 'utf8');
    
    //Encrypting the text
    secretData = crypto.publicEncrypt(pubK, buf);
    //printing the encrypted text
    console.log(secretData.toString('utf8'));
    //reading the Private key
    privK = {
        key: fs.readFileSync('priv.key').toString(),
        passphrase: 'nodejsera'
    }
    //decrypting the text using public key
    origData = crypto.privateDecrypt(privK, secretData)
    //Printing the original content
    console.log(origData.toString());
    											
    										

  
**Run :** We can run using the command given below  

    
        											
    >node enc-pub-dec-priv.js
    											
    										

  

  2. **Private Key used for encryption amd public key used for decryption :**   

    
        											
     /** 
        Example of Asymmetric encryption
        Encrypting using private key and decrypting using public key
        File Name : enc-priv-dec-pub.js
        Author : @nodejsera
     **/
    //Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');
    
    //Reading the Private Key
    privK = {
        key: fs.readFileSync('priv.key').toString(),
        passphrase: 'nodejsera'
    }
    //Passing the text to be encrypted using private key
    var buf = Buffer.from('rishabh', 'utf8');
    
    //Encrypting the text
    secretData = crypto.privateEncrypt(privK, buf);
    //printing the encrypted text
    console.log(secretData.toString('utf8'));
    //reading the Public key
    pubK = fs.readFileSync('pub.key').toString();
    //decrypting the text using public key
    origData = crypto.publicDecrypt(pubK, secretData)
    //Printing the original content
    console.log(origData.toString());
    											
    										

  
**Run :** We can run it using the command given below  

    
        											
    >node enc-priv-dec-pub.js
    											
    										

  


    
    
    											
     /** 
        Example of Asymmetric encryption
        Encrypting using public key and decrypting using private key
        File Name : enc-pub-dec-priv.js
        Author : @nodejsera
     **/
    //Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');
    
    //Reading the Public Key
    pubK = privK = fs.readFileSync('pub.key').toString();
    
    //Passing the text to be encrypted using private key
    var buf = Buffer.from('This is secret code', 'utf8');
    
    //Encrypting the text
    secretData = crypto.publicEncrypt(pubK, buf);
    //printing the encrypted text
    console.log(secretData.toString('utf8'));
    //reading the Private key
    privK = {
        key: fs.readFileSync('priv.key').toString(),
        passphrase: 'nodejsera'
    }
    //decrypting the text using public key
    origData = crypto.privateDecrypt(privK, secretData)
    //Printing the original content
    console.log(origData.toString());
    											
    										


    
    
    											
    >node enc-pub-dec-priv.js
    											
    										


    
    
    											
     /** 
        Example of Asymmetric encryption
        Encrypting using private key and decrypting using public key
        File Name : enc-priv-dec-pub.js
        Author : @nodejsera
     **/
    //Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');
    
    //Reading the Private Key
    privK = {
        key: fs.readFileSync('priv.key').toString(),
        passphrase: 'nodejsera'
    }
    //Passing the text to be encrypted using private key
    var buf = Buffer.from('rishabh', 'utf8');
    
    //Encrypting the text
    secretData = crypto.privateEncrypt(privK, buf);
    //printing the encrypted text
    console.log(secretData.toString('utf8'));
    //reading the Public key
    pubK = fs.readFileSync('pub.key').toString();
    //decrypting the text using public key
    origData = crypto.publicDecrypt(pubK, secretData)
    //Printing the original content
    console.log(origData.toString());
    											
    										


    
    
    											
    >node enc-priv-dec-pub.js
    											
    										



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about how we can use ` crypto ` module in node.js for encryption
and decryption. We learned about what is encryption , what is decryption , why
encryption is necessary , how we can perform symmetric or private key
encryption and decryption. Also we learned about public key or asymmetric
encryption and decryption.



Get the full tested snippet here :
[__GITHUB](https://github.com/nodejsera/30daysofnode/tree/master/day-10-crypto-
module-part-2)

![](https://www.nodejsera.com/nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

