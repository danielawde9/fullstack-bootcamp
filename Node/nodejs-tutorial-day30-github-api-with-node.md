![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/logo.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmllibrary/assets/img/30-days.png)


Github is a platform which hosts millions of lines of code in the form of code
repositories. Github also provides Oauth based APIs which developers can
integrate into their apps. In this tutorial we'll walk you through a simple
demo app in which we let the user authenticate via their github account and
we'll fetch the information of the authenticated user and display that
information in JSON format on our screen.



  1. **Node and NPM :** You can download it [ here ](https://nodejs.org/en/download/)
  2. **Account on Github :** You can create you account [ here ](https://github.com/).
  3. **Github APP :** How we can create an app on github is shown in the subsequent section given below. 



Now assuming you've your github account ready , it's the time to create a
developer app. Just follow these simple steps to create your github oauth app.

  * **Step 1 : Login to your github account and navigate to settings option**   
As shown in the screenshot below , the settings options is present in the
dropdown which comes down when you click on you avatar img. Just click on the
settings and you'll be taken to the settings page.  
  
![](assets/img/github-1.png)  
  

  * **Step 2 :** On the settings page , you'll see different settings on the left side [ as shown in the screenshot below ] , you've to click on the developer settings [ in the bottom ] to continue.   
  
![](assets/img/github-2.png)  
  

  * **Step 3 :** Just as shown in the screenshot below , you'll see a OAuth Apps page , if this is your first app then your screen should look exactly like the screenshot below. Now click on the "New Oauth App" button to create a new Oauth App   
  
![](assets/img/github-3.png)  
  

  * **Step 4 :** You'll be asked for details regarding your new app , just fill in the appropriate values   
  
![](assets/img/github-4.png)  
  

  * **Step 5 :** Once you've filled in the required details , just click on the Register application button for next steps.   
  
![](assets/img/github-5.png)  
  

  * **Step 6 :** As shown in the screen , you'll see that your app has been created and you'll see information about your app. Please note down your ` client_id ` and ` client_secret` as we'll need this information when we create our nodejs app.   
  
![](assets/img/github-6.png)  
  

Congratulations , we've successfully configured our github app. Now it's time
to work on the nodejs application.

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-1.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-2.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-3.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-4.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-5.png)
![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/github-6.png)


Now let's create a very simple nodejs express program to authenticate users
using github api and fetch details about those users. Before we go on to
create our source code file , install the following modules if you don't have
them installed already.

  1. **express**   

    
        										
    >npm install express 													
    										
    									

  

  2. **request**   

    
        										
    >npm install request 													
    										
    									

  

  
Now create a new file `github-auth.js` and paste the following code into it.  

    
    
    										
    //Name of the file : github-auth.js
    // Section 1 get the requirements and initialize express app
    const express = require('express');
    const request = require('request');
    const app = express();
    
    
    // Section 2- configure variables and different urls
    // config to define app settings
    // use environment variables [ process.env ] for sensitive data like api keys and secrets
    var config = {
       client_id: process.env.github_client_id,
       client_secret: process.env.github_client_secret,
       redirect_url: 'http://localhost:3000/github/callback',
       authorize_url:'https://github.com/login/oauth/authorize',
       token_url: 'https://github.com/login/oauth/access_token',
       user_url: 'https://api.github.com/user',
       scope: 'user'
     };
    
    
    // Section-3 Define the routes and callback url
    
    // define routes
    
    app.get('/github/auth', function(req,res){
       // redirect the user to github authorization url
       return res.redirect(config.authorize_url);
    });
    
    app.get('/github/callback', function(req,res){
       // extract authorize code 
       var code = req.query.code
    
       // configure request params
       options = {
         method: 'POST',
         uri: config.token_url,   
         formData: {
           client_id   : config.client_id,
           client_secret   : config.client_secret,
           code : code
         },
         headers: {
           accept:  'application/json'
         }
       };
    
       // make a request for auth_token using above options
       request(options , function(e,r,b){
       
         // process the body
         if(b) {
           jb = JSON.parse(b)
    
           // configure request to fetch user information
           options_user = {
             method:'GET',
             url: config.user_url+'?access_token='+jb.access_token,
             headers: {
               accept: 'application/json',
               'User-Agent': 'custom'
             }
           }
           request(options_user , function(ee,rr,bb){
             // process the body
             if(bb) {
               var bo = JSON.parse(bb)
               var resp = {
                 name: bo.name ,
                 url: bo.url ,
                 id: bo.id ,
                 bio: bo.bio
               }
               return res.json(resp)
             }
             else {
               console.log(er)
               return res.json(er)
             }
           });
         }
       });
     });
    
    
    // Section 4 start the app
    
    app.listen(3000, () => console.log('Njera github-api app listening on port 3000!'));
    
    										
    									

  

  * **Section 1 : refer the comment in the code**   
In section-1 of the code , we've done the usual node.js stuff viz get the
required dependencies using the ` require ` keyword and initialize an express
app.

  * **Section-2 :** In this section , we've initialized the configuration for our app. Note that we're using environment variables ` github_client_id` and `github_client_secret` , you'll need to set them for your app to work properly.   
In ubuntu, use the following commands in your terminal :  

    
        												
    >export github_client_id=YOUR_CLIENT_ID
    >export github_client_secret=YOUR_CLIENT_SECRET													
    												
    											

  
In windows command prompt :  

    
        												
    set github_client_id=YOUR_CLIENT_ID
    set github_client_secret=YOUR_CLIENT_SECRET													
    												
    											

  
Your ` client id ` and ` secret ` are the same which we obtained when we
created the github app. So just create these environment variables and we're
good to go.

  * **Section-3 Define the required routes** We've 2 routes , first where we redirect the user to github for authorization code and another one is the callback which the user gets redirected to after successful authentication and authorization at github side. 
    1. Get authorization_code from the callback url
    2. Exchange authorization_code for access_token using request module 
    3. Get authenticated user information , again using the request module 
  * **Section-4 : Run the application**   
This is where we finally launch our application on port 3000 of our local
machine.We can run our application in the following way :  

    
        												
    >node github-auth.js												
    												
    											

  


    
    
    										
    >npm install express 													
    										
    									


    
    
    										
    >npm install request 													
    										
    									


    
    
    										
    //Name of the file : github-auth.js
    // Section 1 get the requirements and initialize express app
    const express = require('express');
    const request = require('request');
    const app = express();
    
    
    // Section 2- configure variables and different urls
    // config to define app settings
    // use environment variables [ process.env ] for sensitive data like api keys and secrets
    var config = {
       client_id: process.env.github_client_id,
       client_secret: process.env.github_client_secret,
       redirect_url: 'http://localhost:3000/github/callback',
       authorize_url:'https://github.com/login/oauth/authorize',
       token_url: 'https://github.com/login/oauth/access_token',
       user_url: 'https://api.github.com/user',
       scope: 'user'
     };
    
    
    // Section-3 Define the routes and callback url
    
    // define routes
    
    app.get('/github/auth', function(req,res){
       // redirect the user to github authorization url
       return res.redirect(config.authorize_url);
    });
    
    app.get('/github/callback', function(req,res){
       // extract authorize code 
       var code = req.query.code
    
       // configure request params
       options = {
         method: 'POST',
         uri: config.token_url,   
         formData: {
           client_id   : config.client_id,
           client_secret   : config.client_secret,
           code : code
         },
         headers: {
           accept:  'application/json'
         }
       };
    
       // make a request for auth_token using above options
       request(options , function(e,r,b){
       
         // process the body
         if(b) {
           jb = JSON.parse(b)
    
           // configure request to fetch user information
           options_user = {
             method:'GET',
             url: config.user_url+'?access_token='+jb.access_token,
             headers: {
               accept: 'application/json',
               'User-Agent': 'custom'
             }
           }
           request(options_user , function(ee,rr,bb){
             // process the body
             if(bb) {
               var bo = JSON.parse(bb)
               var resp = {
                 name: bo.name ,
                 url: bo.url ,
                 id: bo.id ,
                 bio: bo.bio
               }
               return res.json(resp)
             }
             else {
               console.log(er)
               return res.json(er)
             }
           });
         }
       });
     });
    
    
    // Section 4 start the app
    
    app.listen(3000, () => console.log('Njera github-api app listening on port 3000!'));
    
    										
    									


    
    
    												
    >export github_client_id=YOUR_CLIENT_ID
    >export github_client_secret=YOUR_CLIENT_SECRET													
    												
    											


    
    
    												
    set github_client_id=YOUR_CLIENT_ID
    set github_client_secret=YOUR_CLIENT_SECRET													
    												
    											


    
    
    												
    >node github-auth.js												
    												
    											



Once your application has launched successfully , just go to your browser at :  
[http://localhost:3000/github/auth ](http://localhost:3000/github/auth)  
and this will take you to github for authentication and authorization ,
authorize your app to use your information and once it's done your should see
your basic details being displayed on the screen.



What we've discussed in this short tutorial is just a drop in the ocean,
there's a lot of other informative stuff you can get using github api , to
further explore the api visit [ github
developers](https://developer.github.com/v3/) page.



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about nodejs and github api we accomplished the following :

  1. We learned how to create an Oauth 2.0 based app on github. 
  2. We understood the process of user authorizing our app to use their information through the use of `access_token`. 
  3. We walked you through the process of obtaining authorization code and exchanging it for access token. 
  4. And at last ,we used the access_token obtained to fetch information about the user 

This tutorial was meant to be minimal and as simple as it could be , in real
projects you can fetch a lot of information about the user and their github
repos as per the needs of your app.

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/Paypal-payment-integration-using-node-part1.png)


Part 1 of Paypal payment integration using node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/create-db-mongo-node.png)


Create a database in MongoDb using Node.js . . .

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/nodejs-email-sendgrid.png)


Sending email using node.js and sendgrid's API

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/pugjs.png)


Performing HTML operations using Pug



[ ](index.html)

![](https://www.nodejsera.com/nodejs-tutorial-day30-github-api-with-node.htmlassets/img/logo.png)


__2022[ Nodejsera ](index.html)

