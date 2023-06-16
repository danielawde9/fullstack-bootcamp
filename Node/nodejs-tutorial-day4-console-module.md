![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/logo.png)
![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmllibrary/assets/img/30-days.png)


The `console` module provides us with debugging console similar to javascript
console mechanism web browsers provide us. It exports two components :

  1. **console class :** It includes methods such as ` console.log() ` , ` console.warn() ` , ` console.error() ` which we can use to write to node.js streams. 
  2. **Global console instance :** This method is configured to write on ` process.stderr ` , ` process.stdout() ` and it can be used without exclusively calling the module ` require('console') ` . 



` console.log() ` is used to print to ` stdout ` with a newline. We can pass
multiple arguments. Let's see the different variations of ` console.log ` in
the example given below :  

    
    
    								
    //using ' ' to print
    console.log('1 : hello world !');
    //using " " to print
    console.log("2 : this will also work");
    
    var str = 'nodejsera';
    
    var val = 25;
    //printing a string
    console.log(str);   //3
    //printing a variable and replacing the 
    //value of variable in place of %d
    console.log('4: Value of val is : %d' , val);
    //replacing a string in place of %s
    console.log('5: %s' , 'this will be printed after 5');	
    //concatinating in console		
    console.log("6 : str = " + str);	
    								
    							

  
The Output is :  

    
    
    								
    >node "console.log().js"
    1 : hello world !
    2 : this will also work
    nodejsera
    4: Value of val is : 25
    5: this will be printed after 5
    6 : str = nodejsera
    								
    							

  


    
    
    								
    //using ' ' to print
    console.log('1 : hello world !');
    //using " " to print
    console.log("2 : this will also work");
    
    var str = 'nodejsera';
    
    var val = 25;
    //printing a string
    console.log(str);   //3
    //printing a variable and replacing the 
    //value of variable in place of %d
    console.log('4: Value of val is : %d' , val);
    //replacing a string in place of %s
    console.log('5: %s' , 'this will be printed after 5');	
    //concatinating in console		
    console.log("6 : str = " + str);	
    								
    							


    
    
    								
    >node "console.log().js"
    1 : hello world !
    2 : this will also work
    nodejsera
    4: Value of val is : 25
    5: this will be printed after 5
    6 : str = nodejsera
    								
    							



Creating a new console where ` stdout ` will store the output and ` stderr.log
` will store the errors ( if any ) .  
The code snippet for the following is given below :  

    
    
    								
    var ws = require('fs');
    const { Console } = require('console');
    const output = ws.createWriteStream('./stdout.log');
    const errOutput = ws.createWriteStream('./stderr.log');
    // custom simple print
    const print = new Console(output, errOutput);
    //Now we can use it like console
    const roll = 839147;
    print.log('roll: %d', roll);
    print.log('This will be stored in a file');								
    								
    							

  
The Output in `stdout.log` is :  

    
    
    								
    roll: 839147
    This will be stored in a file
    								
    							

  


    
    
    								
    var ws = require('fs');
    const { Console } = require('console');
    const output = ws.createWriteStream('./stdout.log');
    const errOutput = ws.createWriteStream('./stderr.log');
    // custom simple print
    const print = new Console(output, errOutput);
    //Now we can use it like console
    const roll = 839147;
    print.log('roll: %d', roll);
    print.log('This will be stored in a file');								
    								
    							


    
    
    								
    roll: 839147
    This will be stored in a file
    								
    							



This method is used to clear the console. Clearing the console can be useful
while dealing with a big program in which you are logging a lot of stuff and
while performing debugging , you want to see output after a certain point. For
e.g. in the snippet below we are printing the ` value ` which changes in the
program so we will clear the previous values from the console and see only the
final value in the end. This is a very simple example of how ` console.clear `
method can be used.  
**Note :** Not available in LTS 6.11.3. Use latest version.  

    
    
    								
    //Available in Current Version
    var value = 10;
    console.log("Value : %d", value);
    console.clear();
    value *= value;
    console.log("Value : %d", value);								
    								
    							

  
The output of the program is :  

    
    
    								
    >node "console.clear().js"
    Value : 100						
    								
    							

  


    
    
    								
    //Available in Current Version
    var value = 10;
    console.log("Value : %d", value);
    console.clear();
    value *= value;
    console.log("Value : %d", value);								
    								
    							


    
    
    								
    >node "console.clear().js"
    Value : 100						
    								
    							



This module is used to maintains an internal label and output to ` stdout `
the number of times ` console.count() ` is called with any particular label.
For e.g. in the snippet below labels are default , remo and rj whose
occurrences are printed in the console. The default label is ` default `.  
**Note :** Not available in LTS 6.11.3 Use latest version.  

    
    
    								
    //Available in current version
    //This code counts the score of remo , rj and 
    //default score which goes to none of them 
    console.count('default');
    console.count('remo');
    console.count('rj');
    console.count('remo');
    console.count('remo');
    console.count('rj');
    console.count();								
    								
    							

  
The output of the program is :  

    
    
    								
    >node "console.count().js"
    default: 1
    remo: 1
    rj: 1
    remo: 2
    remo: 3
    rj: 2
    default: 2					
    								
    							

  


    
    
    								
    //Available in current version
    //This code counts the score of remo , rj and 
    //default score which goes to none of them 
    console.count('default');
    console.count('remo');
    console.count('rj');
    console.count('remo');
    console.count('remo');
    console.count('rj');
    console.count();								
    								
    							


    
    
    								
    >node "console.count().js"
    default: 1
    remo: 1
    rj: 1
    remo: 2
    remo: 3
    rj: 2
    default: 2					
    								
    							



This method is used to reset the counter for a particular label internally.By
default it will decrement ` default `.  
**Note :** Not available in LTS 6.11.3. Use latest version.  

    
    
    								
    //Available in current version
    //This code counts the occurrences of remo , rj and default
    
    
    console.count('default');
    console.count('remo');  //remo=1
    console.count('remo');  //remo=2
    console.count('rj');    //rj=1
    console.countReset('remo'); //remo = 1
    console.count('remo');  //remo=2
    console.countReset('remo'); //remo=1
    console.count('rj');    //rj=2
    console.count();        //default=2								
    								
    							

  
The output of the program is :  

    
    
    								
    node "console.countReset().js"
    default: 1
    remo: 1
    remo: 2
    rj: 1
    remo: 1
    rj: 2
    default: 2					
    								
    							

  


    
    
    								
    //Available in current version
    //This code counts the occurrences of remo , rj and default
    
    
    console.count('default');
    console.count('remo');  //remo=1
    console.count('remo');  //remo=2
    console.count('rj');    //rj=1
    console.countReset('remo'); //remo = 1
    console.count('remo');  //remo=2
    console.countReset('remo'); //remo=1
    console.count('rj');    //rj=2
    console.count();        //default=2								
    								
    							


    
    
    								
    node "console.countReset().js"
    default: 1
    remo: 1
    remo: 2
    rj: 1
    remo: 1
    rj: 2
    default: 2					
    								
    							



This method is used to print to ` stderr `. We can pass multiple arguments
where first argument is primary and remaining arguments are substitution
values. Snippet is given below.  
**Note :** Not available in LTS 6.11.3. Use latest version.  

    
    
    								
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if(result == 2){
        console.log("Result : %d".result)
    }else{
        console.error("Error : Error in Positioning Operands");
    }							
    								
    							

  
The output of the program is :  

    
    
    								
    >node "console.error().js"
    Error in Positioning Operands				
    								
    							

  


    
    
    								
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if(result == 2){
        console.log("Result : %d".result)
    }else{
        console.error("Error : Error in Positioning Operands");
    }							
    								
    							


    
    
    								
    >node "console.error().js"
    Error in Positioning Operands				
    								
    							



` console.time ` method is used to start a timer which can be used to compute
the duration of the operation. Each timer is identified using unique ` label
`. We use the same label while calling ` console.timeEnd ` method which is
used to stop the timer. Time is printed in milliseconds on ` stdout ` by
console.timeEnd() method.  

    
    
    								
    console.time('division');
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if(result == 2){
        console.log("Result : %d".result)
    }else{
        console.log("Result : " + result);
    }
    console.timeEnd('division');						
    								
    							

  
The output of the program is :  

    
    
    								
    node "console.time().js"
    Result : 0.5
    division: 2.895ms				
    								
    							

  


    
    
    								
    console.time('division');
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if(result == 2){
        console.log("Result : %d".result)
    }else{
        console.log("Result : " + result);
    }
    console.timeEnd('division');						
    								
    							


    
    
    								
    node "console.time().js"
    Result : 0.5
    division: 2.895ms				
    								
    							



This method is similar to ` console.error ` and is used to print to ` stderr
`.  
code snippet is given below :  

    
    
    								
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if( (result % 2) == 0){
        console.log("Result : %d".result)
    }else{
        console.warn("Warning :  Decimal number");
    }							
    								
    							

  
The output of the program is :  

    
    
    								
    >node "console.warn().js"
    Warning :  Decimal number				
    								
    							

  


    
    
    								
    var x = 10;
    var y = 20;
    var result = x/y;
    
    if( (result % 2) == 0){
        console.log("Result : %d".result)
    }else{
        console.warn("Warning :  Decimal number");
    }							
    								
    							


    
    
    								
    >node "console.warn().js"
    Warning :  Decimal number				
    								
    							



In this part of node.js tutorial series we learned about the following :

  * Introduction to console 
    1. Console class 
    2. Global console instance 
  * console.log() and all its variations 
  * Create a new console
  * console.clear()
  * console.count()
  * console.countReset()
  * console.error()
  * console.time() and console.timeEnd()
  * console.warn()

![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/Paypal-payment-integration-using-node-part1.png)


Part 1 of Paypal payment integration using node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/create-db-mongo-node.png)


Create a database in MongoDb using Node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/nodejs-email-sendgrid.png)


Sending email using node.js and sendgrid's API

![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/pugjs.png)


Performing HTML operations using Pug



[ ](index.html)

![](https://www.nodejsera.com/nodejs-tutorial-day4-console-module.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

