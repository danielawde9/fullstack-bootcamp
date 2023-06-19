![](https://www..com/nodejs-tutorial-day17-crud-in-mysql.htmlassets/img/logo.png)

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

MySQL is world's leading relational database management system based on SQL (
Structured query language ). It is written in C and C++ and is managed by
MySQL AB which is a sweden based company. MySQL stores data in the form of
rows and columns within a table.

1. **MySQL :** You can download it [ here ](https://www.mysql.com/downloads/).
2. **Node.js :** You can download it [ here ](https://nodejs.org/en/download/).
3. **NPM :** It is already installed on your system when you installed node.js
4. **mysql (npm package) :** We can install it using the command given below :


    >npm install mysql









    >npm install mysql



The first step is to establish a connection between the `mysql` database and
our `node.js` application.

    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'my_db'
    });










    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'my_db'
    });




Let's start by creating a table in mysql database using node.js. The snippet
for the following is given below :

    // Name of the file is  : create-table-mysql.js

    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });

    var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT,"+
        "name varchar(30) DEFAULT NULL,"+
        "age float(15) DEFAULT NULL,"+
        "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

    //establishing connection
    connect.getConnection(function(err, connection){
      //Creating details table
      connection.query(table,  function(err){
        if(err) throw err;
        else {
            console.log('Table created Successfully!');
        }
      });

    //releasing connection
     connection.release();

    });




We can run the above code using the following command :

    >node create-table-mysql.js
    Table created Successfully!










    // Name of the file is  : create-table-mysql.js

    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });

    var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT,"+
        "name varchar(30) DEFAULT NULL,"+
        "age float(15) DEFAULT NULL,"+
        "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

    //establishing connection
    connect.getConnection(function(err, connection){
      //Creating details table
      connection.query(table,  function(err){
        if(err) throw err;
        else {
            console.log('Table created Successfully!');
        }
      });

    //releasing connection
     connection.release();

    });








    >node create-table-mysql.js
    Table created Successfully!




Snippet for insert/create operation in MySQL using node.js is as follows :

    //Name of the file : insert-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Inserting a record into details
       connection.query(insert_R,['rejii',24], function(err,res){
        if(err) throw err;
        else {
            console.log('Details added successfully');
        }
      });

    //releasing connection
     connection.release();

    });


We can run the above code using the following command :

    >node insert-mysql.js
    Details added successfully









    //Name of the file : insert-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Inserting a record into details
       connection.query(insert_R,['rejii',24], function(err,res){
        if(err) throw err;
        else {
            console.log('Details added successfully');
        }
      });

    //releasing connection
     connection.release();

    });






    >node insert-mysql.js
    Details added successfully



Snippet for read operation in MySQL using node.js is as follows :

    //name of the file : read-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var read_R = 'SELECT * FROM details';
    //establishing connection
    connect.getConnection(function(err, connection){

      //retrieving a record from details
       connection.query(read_R, function(err, data){
        if(err) throw err;
        else {
            console.log(data);
        }
      });

    //releasing connection
     connection.release();

    });



We can run the above code using the following command :

    >node read-mysql.js
    [ RowDataPacket { id: 1, name: 'rejii', age: 24 },
      RowDataPacket { id: 2, name: 'angie', age: 47 },
      RowDataPacket { id: 3, name: 'alex', age: 27 } ]









    //name of the file : read-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var read_R = 'SELECT * FROM details';
    //establishing connection
    connect.getConnection(function(err, connection){

      //retrieving a record from details
       connection.query(read_R, function(err, data){
        if(err) throw err;
        else {
            console.log(data);
        }
      });

    //releasing connection
     connection.release();

    });







    >node read-mysql.js
    [ RowDataPacket { id: 1, name: 'rejii', age: 24 },
      RowDataPacket { id: 2, name: 'angie', age: 47 },
      RowDataPacket { id: 3, name: 'alex', age: 27 } ]



Snippet for update operation in MySQL using node.js is as follows :

    //name of the file : update-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var update_R = 'UPDATE details SET age = ? WHERE name=?';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Updating a record from details
      connection.query(update_R,[25,'regii'], function(err, res){
        if(err) throw err;
        else {
            console.log('Updated the age of regii !');
        }
      });

    //releasing connection
     connection.release();

    });



We can run the above code using the following command :

    >node update-mysql.js
    Updated the age of regii !









    //name of the file : update-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var update_R = 'UPDATE details SET age = ? WHERE name=?';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Updating a record from details
      connection.query(update_R,[25,'regii'], function(err, res){
        if(err) throw err;
        else {
            console.log('Updated the age of regii !');
        }
      });

    //releasing connection
     connection.release();

    });







    >node update-mysql.js
    Updated the age of regii !



Snippet for delete operation in MySQL using node.js is as follows :

    //name of the file : delete-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var delete_R = 'DELETE FROM details WHERE name=?';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Deleting a record from details
      connection.query(delete_R,['regii'], function(err, res){
        if(err) throw err;
        else {
            console.log('A record is removed !');
        }
      });

    //releasing connection
     connection.release();

    });



We can run the above code using the following command :

    >node delete-mysql.js
    A record is removed !









    //name of the file : delete-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var delete_R = 'DELETE FROM details WHERE name=?';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Deleting a record from details
      connection.query(delete_R,['regii'], function(err, res){
        if(err) throw err;
        else {
            console.log('A record is removed !');
        }
      });

    //releasing connection
     connection.release();

    });







    >node delete-mysql.js
    A record is removed !



Snippet for performing drop operation on a table in MySQL using node.js is as
follows :

    //name of the file : drop-table-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var drop_T = 'DROP table details';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Drop the details table
      connection.query(drop_T, function(err, res){
        if(err) throw err;
        else {
            console.log('The details table is removed successfully');
        }
      });

    //releasing connection
     connection.release();

    });



We can run the above code using the following command :

    >node drop-table-mysql.js
    The details table is removed successfully









    //name of the file : drop-table-mysql.js
    var mysql = require('mysql');

    var connect =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
    });


    var drop_T = 'DROP table details';
    //establishing connection
    connect.getConnection(function(err, connection){

      //Drop the details table
      connection.query(drop_T, function(err, res){
        if(err) throw err;
        else {
            console.log('The details table is removed successfully');
        }
      });

    //releasing connection
     connection.release();

    });







    >node drop-table-mysql.js
    The details table is removed successfully



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned how we can establish a connection between MySQL and node.sj , how
we can perform CRUD (create, read, update, delete) operations in `MySQL` using
`node.js` and also how to create and drop a table in mysql using node.js.

![](https://www..com/nodejs-tutorial-day17-crud-in-mysql.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
