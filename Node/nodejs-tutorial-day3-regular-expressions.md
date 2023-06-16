![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/logo.png)
![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmllibrary/assets/img/30-days.png)


Regular Expressions or regex or regexp or sometimes also referred to as
rational expressions are :

  * A sequence of characters expressing a pattern for further matching in a longer string. 
  * It is a Text string to describe a pattern which can be used for searching. 
  * They are a way to match pattern in the data and extracting the required information out of the data.
  * Regex provide a way to find patterns in the data. Finding patterns in data is one of the most commonly performed task in computing.
  * In everyday life we tend to find a lot of patterns. They could be email patterns , they could be phone numbers , keywords of a programming language, special characters , html tags and so on.
  * And all these can be achieved with the power of regular expressions.



There are two ways for creating an regular expression :

  1. By regular expression literals : In this , the pattern to be matched is enclosed between the ` / ` (slashes) as shown below :   

    
        									
    var reg = /ab*/;
    //It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
    //But will not match b, bc, abc,aba , etc.
    									
    								

  

  2. By calling the construtor function : In this, the pattern to be matched comes within the constructor function `RegExp` as shown below :   

    
        									
    var reg = new RegExp('ab*');
    //It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
    //But will not match b, bc, abc,aba , etc.
    									
    								

  


    
    
    									
    var reg = /ab*/;
    //It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
    //But will not match b, bc, abc,aba , etc.
    									
    								


    
    
    									
    var reg = new RegExp('ab*');
    //It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
    //But will not match b, bc, abc,aba , etc.
    									
    								



  1. Finding specific text using regular expression : The data set for this example is [ data.txt ](https://github.com/nodejsera/30daysofnode/blob/master/day3-regular-expressions/data.txt). In this, we are reading a file ` data.txt ` synchronously and storing the content in ` str `. After that we are providing with the pattern to look for in the file.In this case the pattern is ` man ` and further we are using regex modifiers : 
    * g : global scope
    * i : case insensitive 
    * m : multiline match 
and then we are performing the inbuilt function ` match`. And lastly we are
printing the Occurrences of the pattern in the content string.  
The code snippet is given below :  

    
        									
    var fs = require('fs');
    var filename = 'data.txt';
    var str = fs.readFileSync(filename).toString();
    var pattern = /man/gim;
    var myarray = str.match( pattern );
    var len = myarray.length;
    console.log("Occurrences of pattern in the string is : " + len);
    									
    								

  

  2. Find number of tags using regular expression : The data set for this example is [data.html ](https://github.com/nodejsera/30daysofnode/blob/master/day3-regular-expressions/data.html). This example is somewhat similar to the above one except for the few changes which are : 
    * We are providing an `HTML` file as dataset for operation. 
    * Here the pattern is matching ` tags` instead of string. 
The code snippet is given below :  

    
        									
    var fs = require('fs');
    var filename = 'data.html';
    var str = fs.readFileSync(filename).toString();
    var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
    
    var myarray = str.match( pattern );
    var len = myarray.length;
    console.log("Occurrences of pattern in the string is : " + len);
    
    
    
    									
    								

  

  3. Validating emails using regular expression : In this we are giving a email as input in order to find out whether it met all the contraints of being a valid one.The pattern will match the constraints such as @ (1 Occurrence) , domain is provided , sub-domain , etc. After matching , if the email is a valid one it will console "Valid" and "Please enter a valid email" if the email provided is not a valid one.  
The code snippet is provided below :  

    
        									
    var str = 'rjbitdemo@gmail.com'
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid email address");
    }else{
    	console.log("Please enter a valid email address");
    }
    
    
    
    									
    								

  
Note : It will not check whether that email address is a valid one or whether
that domain or sub domain exists or not. It will only check whether the email
provided met all the constraints required for a valid email or not.  
  

  4. Validating Hexadecimal number using regular expression : This is also a very common example. In this we are checking/validating whether the provided string is a valid hexadecimal or not. Hexadecimal number ranges from : 
    * [0-9] 
    * [A-F] 
    * [a-f] 
If the string provided is within this range then it's a valid one otherwise
not and the code snippet provided below will check that :  

    
        									
    var str = 'FFFFFF'
    var pattern = /^[a-fA-F0-9]+$/g;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid Hexadecimal number");
    }else{
    	console.log("Not a valid Hexadecimal number");
    }
    									
    								

  

  5. Validating Password using regular expression : As we all must have observed that in order to make the password strong we provide the user with some criteria to be met for creating a password such as : 
    * Password must contain 1 capital letter [A-Z] 
    * Password must contain 1 small letter [a-z] 
    * Password must contain 1 number [0-9] 
    * Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc 
    * Length of the password must be within the range [6 to 16] 
So we created a regex to validate whether the provided password met all the
constraints or not. If the provided password met all the constraints it will
console "Valid password" and the snippet will console "invalid password " if
any of the above mentioned condition is not met.  
The snippet is provided below :  
  

    
        									
    var str = 'Aa#1aaabcde'
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid password");
    }else{
    	console.log("Not a valid password");
    }
    									
    								

  


    
    
    									
    var fs = require('fs');
    var filename = 'data.txt';
    var str = fs.readFileSync(filename).toString();
    var pattern = /man/gim;
    var myarray = str.match( pattern );
    var len = myarray.length;
    console.log("Occurrences of pattern in the string is : " + len);
    									
    								


    
    
    									
    var fs = require('fs');
    var filename = 'data.html';
    var str = fs.readFileSync(filename).toString();
    var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
    
    var myarray = str.match( pattern );
    var len = myarray.length;
    console.log("Occurrences of pattern in the string is : " + len);
    
    
    
    									
    								


    
    
    									
    var str = 'rjbitdemo@gmail.com'
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid email address");
    }else{
    	console.log("Please enter a valid email address");
    }
    
    
    
    									
    								


    
    
    									
    var str = 'FFFFFF'
    var pattern = /^[a-fA-F0-9]+$/g;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid Hexadecimal number");
    }else{
    	console.log("Not a valid Hexadecimal number");
    }
    									
    								


    
    
    									
    var str = 'Aa#1aaabcde'
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
    
    var res = str.match( pattern );
    if(res){
    	console.log("Valid password");
    }else{
    	console.log("Not a valid password");
    }
    									
    								



In this part of nodejs tutorial series we learned about the following :

  * What are regular expressions 
  * Creating regular expressions 
    1. Using Regular expression Literals 
    2. Using constructor Function 
  * Common Examples of Regular Expressions 
    1. Finding Specific text using Regular expression 
    2. Finding Number of tags using Regular expression 
    3. Validating Emain using Regex. 
    4. Validating Hexadecimal number using regexp 
    5. Validating Password using regex 

![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/Paypal-payment-integration-using-node-part1.png)


Part 1 of Paypal payment integration using node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/create-db-mongo-node.png)


Create a database in MongoDb using Node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/nodejs-email-sendgrid.png)


Sending email using node.js and sendgrid's API

![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/pugjs.png)


Performing HTML operations using Pug



[ ](index.html)

![](https://www.nodejsera.com/nodejs-tutorial-day3-regular-expressions.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

