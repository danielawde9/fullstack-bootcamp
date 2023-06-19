![](https://www..com/nodejs-tutorial-day12-crud-in-mongodb.htmlassets/img/logo.png)

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

Classified as a No SQL database , MongoDB is a scalable, open source, high
performance , document-oriented database designed by keeping developers
agility in mind. It is document-oriented which means that it does not store
data in tables and rows as we would in relational databases like MySQL, In
this we store data in JSON-like documents with dynamic schema.  
**Advantages :**

1. **Dynamic schema :** If we have an flexible schema then it is ideal for JSON-like documents as in MongoDB however it is difficult to implement it in a good manner in Relational databases.
2. **Scalability :** MongoDB is highly scalable
3. **Cheap :** Can be downloaded free of cost.

4. **MongoDb :** You can download it [ here ](https://www.mongodb.com/download-center#atlas).
5. **Node.js :** You can download it [ here ](https://nodejs.org/en/download/).
6. **NPM :** It is already installed on your system when you installed node.js
7. **mongodb (npm package) :** We can install it using the command given below :


    >npm install mongodb









    >npm install mongodb



The first step is to establish a connection between the `mongodb` database
and our `node.js` application.

    //Including the required packages
    var mongo = require('mongodb');
    //Establishing the connection
    var new_db = "mongodb://localhost:27017/demo_db"



Here ,

- demo_db is the name of the db to be created
- 27017 is the port number where mongodb is running.
- localhost signifies that currently the db is running locally.

Now , We will establish the connection using the `connect` method. Connect()
is an inbuilt method used to is an inbuilt method used to Creates a connection
to a MongoDB instance and returns the reference to the database. It
instantiates a new connection to the MongoDB instance running on the localhost
interface and returns a reference to demo_db. Snippet for establishing
connection using connect method is given below :

    //File Name is  : demo-db.js
    //establishing the connection
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	console.log("Database demo_db created successfully");
    	//To close the connection
    	db.close();
    });



We can run the above code using the following command :

    > node demo-db.js
    Database demo_db created successfully



Congratulations , we successfully established a connection with mongodb using
node.js

    //Including the required packages
    var mongo = require('mongodb');
    //Establishing the connection
    var new_db = "mongodb://localhost:27017/demo_db"







    //File Name is  : demo-db.js
    //establishing the connection
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	console.log("Database demo_db created successfully");
    	//To close the connection
    	db.close();
    });







    > node demo-db.js
    Database demo_db created successfully



1. **insertOne() :** insertOne() is an inbuilt method which is used to insert data in the mongoDb collection. Snippet for the following is given below :


    //Name of the file  : insert-mongo.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}

    	var data = { name : "rishabhio" , age : "25" , mobile : "1234567890" }

    	db.collection("details").insertOne(data, (err , collection) => {
    		if(err) throw err;
    		console.log("Record inserted successfully");
    		console.log(collection);
    	});
    });



We can run the above code using the following command :

    > node insert-mongo.js
    >node insert_mongo_nodejs.js
    Record inserted successfully
    { result: { ok: 1, n: 1 },
      connection: null,
      message: undefined,
      ops:
       [ { name: 'rishabhio',
           age: '25',
           mobile: '1234567890',
           _id: 597073b2c6f60f5b3c23a1a5 } ],
      insertedCount: 1,
      insertedId: 597073b2c6f60f5b3c23a1a5
    }









    //Name of the file  : insert-mongo.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}

    	var data = { name : "rishabhio" , age : "25" , mobile : "1234567890" }

    	db.collection("details").insertOne(data, (err , collection) => {
    		if(err) throw err;
    		console.log("Record inserted successfully");
    		console.log(collection);
    	});
    });







    > node insert-mongo.js
    >node insert_mongo_nodejs.js
    Record inserted successfully
    { result: { ok: 1, n: 1 },
      connection: null,
      message: undefined,
      ops:
       [ { name: 'rishabhio',
           age: '25',
           mobile: '1234567890',
           _id: 597073b2c6f60f5b3c23a1a5 } ],
      insertedCount: 1,
      insertedId: 597073b2c6f60f5b3c23a1a5
    }



1. **findOne() :** findOne() is an inbuilt method which is used to Read the first occurance of the data from the mongoDb collection.


    //name of the file : read-one.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}
    	//findOne() reads the first occurance of any data from the database.
    	db.collection("details").findOne({}, (err , collection) => {
    		if(err) throw err;
    		console.log("Record Read successfully");
    		console.log(collection);
    		db.close();
    	});
    });




We can run the above code using the following command :

    > node read-one.js
    Record Read successfully
    { name: '',
      age: '23',
      mobile: '9876543210',
      _id: 59706a56a4f6761e3cc22c98 }



2. **find() :** find() is an inbuilt method which is used to Read all data from the mongoDb collection.


    //name of the file : read-all.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}

    	//Read All the data from the "details" collection.
    	db.collection("details").find({}).toArray( (err , collection) => {
    		if(err) throw err;
    		console.log("Record Read successfully");
    		console.log(collection);
    		db.close();
    	});
    });



We can run the above code using the following command :

    > node read-all.js
    Record Read successfully
    [ { name: '',
        age: '23',
        mobile: '9876543210',
        _id: 59706a56a4f6761e3cc22c98 },
      { name: 'rishabhio',
        age: '25',
        mobile: '1234567890',
        _id: 59706c3771da112bd8b922dc },
      { name: 'rishabhio',
        age: '25',
        mobile: '1234567890',
        _id: 597073b2c6f60f5b3c23a1a5 } ]









    //name of the file : read-one.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}
    	//findOne() reads the first occurance of any data from the database.
    	db.collection("details").findOne({}, (err , collection) => {
    		if(err) throw err;
    		console.log("Record Read successfully");
    		console.log(collection);
    		db.close();
    	});
    });








    > node read-one.js
    Record Read successfully
    { name: '',
      age: '23',
      mobile: '9876543210',
      _id: 59706a56a4f6761e3cc22c98 }







    //name of the file : read-all.js
    mongo.connect(new_db , function(error , db){
    	if (error){
    		throw error;
    	}

    	//Read All the data from the "details" collection.
    	db.collection("details").find({}).toArray( (err , collection) => {
    		if(err) throw err;
    		console.log("Record Read successfully");
    		console.log(collection);
    		db.close();
    	});
    });







    > node read-all.js
    Record Read successfully
    [ { name: '',
        age: '23',
        mobile: '9876543210',
        _id: 59706a56a4f6761e3cc22c98 },
      { name: 'rishabhio',
        age: '25',
        mobile: '1234567890',
        _id: 59706c3771da112bd8b922dc },
      { name: 'rishabhio',
        age: '25',
        mobile: '1234567890',
        _id: 597073b2c6f60f5b3c23a1a5 } ]



1. **updateOne() :** updateOne() is an inbuilt method of mongodb which is used to search the first occurance of the data and update it.


    //name of the file : update-one.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	//Query parameter is used to search the collection.
    	var query = { name : "rishabhio" };
    	//And When the query matches the data in the DB , "data" parameter is used to update the value.
    	var data = { name : ".com" , mobile : "1234567890" }
    	//Accessing the collection using nodejs
    	db.collection("details").updateOne(query , data, (err , collection) => {
    		if(err) throw err;
    		console.log("Record updated successfully");
    		console.log(collection);
    	});
    });




We can run the above code using the following command :

    > node update-one.js
    Record updated successfully
    { result: { ok: 1, n: 1, nModified: 1 },
      connection: null,
      message: undefined,
      modifiedCount: 1,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 1 }



2. **updateMany() :** updateMany() is the inbuilt method of mongodb which is used to search for the given query and update all its occurances.


    //name of the file : update-all.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}

    	//query store the search condition
    	var query = { age : {$gt : "22" } };
    	//data stores the updated value
    	var data = { $set : {age : "above 22" } }
    	//CREATING A COLLECTION IN MONGODB USING NODE.JS
    	db.collection("details").updateMany(query , data, (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.nModified + " Record(s) updated successfully");	//It will console the number of rows updated
    		console.log(collection);
    		db.close();
    	});
    });



We can run the above code using the following command :

    > node update-all.js
    node updateMany-mongodb-nodejs.js
    3 Record(s) updated successfully
    { 	result:
    		{
    			ok: 1,
    			n: 3,
    			nModified: 3
    		},
    	connection: null,
    	message: undefined,
    	modifiedCount: 3,
    	upsertedId: null,
    	upsertedCount: 0,
    	matchedCount: 3
     }










    //name of the file : update-one.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	//Query parameter is used to search the collection.
    	var query = { name : "rishabhio" };
    	//And When the query matches the data in the DB , "data" parameter is used to update the value.
    	var data = { name : ".com" , mobile : "1234567890" }
    	//Accessing the collection using nodejs
    	db.collection("details").updateOne(query , data, (err , collection) => {
    		if(err) throw err;
    		console.log("Record updated successfully");
    		console.log(collection);
    	});
    });








    > node update-one.js
    Record updated successfully
    { result: { ok: 1, n: 1, nModified: 1 },
      connection: null,
      message: undefined,
      modifiedCount: 1,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 1 }







    //name of the file : update-all.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}

    	//query store the search condition
    	var query = { age : {$gt : "22" } };
    	//data stores the updated value
    	var data = { $set : {age : "above 22" } }
    	//CREATING A COLLECTION IN MONGODB USING NODE.JS
    	db.collection("details").updateMany(query , data, (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.nModified + " Record(s) updated successfully");	//It will console the number of rows updated
    		console.log(collection);
    		db.close();
    	});
    });







    > node update-all.js
    node updateMany-mongodb-nodejs.js
    3 Record(s) updated successfully
    { 	result:
    		{
    			ok: 1,
    			n: 3,
    			nModified: 3
    		},
    	connection: null,
    	message: undefined,
    	modifiedCount: 3,
    	upsertedId: null,
    	upsertedCount: 0,
    	matchedCount: 3
     }




1. **deleteOne() :** deleteOne() is the inbuilt method of mongodb which is used to delete the first occurance of the data provided in the search query.


    //name of the file : delete-one.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	//query stores the search condition
    	var query = { age : "above 22" };

    	//Accessing a COLLECTION IN MONGODB USING NODE.JS
    	db.collection("details").deleteOne(query , (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.n + " Record(s) deleted successfully");
    		console.log(collection);
    		db.close();
    	});
    });




We can run the above code using the following command :

    > node delete-one.js
    1 Record(s) deleted successfully
    {
    	result:
    		{
    			ok: 1,
    			n: 1
    		},
    	connection: null,
    	message: undefined,
    	deletedCount: 1
    }




2. **deleteMany() :** deleteMany() is the inbuilt method of mongodb which is used to delete all the occurances of the data provided in the search query.


    //name of the file : delete-all.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}

    	//Search query for deletion
    	var query = { age : "above 22" };

    	//Accessing the collection
    	db.collection("details").deleteMany(query , (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.n + " Record(s) deleted successfully");
    		console.log(collection);
    		db.close();
    	});
    });




We can run the above code using the following command :

    > node delete-all.js
    2 Record(s) deleted successfully
    {
    	result:
    		{
    			ok: 1,
    			n: 2
    		},
    	connection: null,
    	message: undefined,
    	deletedCount: 2
    }









    //name of the file : delete-one.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}
    	//query stores the search condition
    	var query = { age : "above 22" };

    	//Accessing a COLLECTION IN MONGODB USING NODE.JS
    	db.collection("details").deleteOne(query , (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.n + " Record(s) deleted successfully");
    		console.log(collection);
    		db.close();
    	});
    });








    > node delete-one.js
    1 Record(s) deleted successfully
    {
    	result:
    		{
    			ok: 1,
    			n: 1
    		},
    	connection: null,
    	message: undefined,
    	deletedCount: 1
    }








    //name of the file : delete-all.js
    mongo.connect(new_db ,(error , db) => {
    	if (error){
    		throw error;
    	}

    	//Search query for deletion
    	var query = { age : "above 22" };

    	//Accessing the collection
    	db.collection("details").deleteMany(query , (err , collection) => {
    		if(err) throw err;
    		console.log(collection.result.n + " Record(s) deleted successfully");
    		console.log(collection);
    		db.close();
    	});
    });








    > node delete-all.js
    2 Record(s) deleted successfully
    {
    	result:
    		{
    			ok: 1,
    			n: 2
    		},
    	connection: null,
    	message: undefined,
    	deletedCount: 2
    }



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about how we can establish a connection with a MongoDb database
using node.js and perfrom the basic create, read, update and delete
operations.

![](https://www..com/nodejs-tutorial-day12-crud-in-mongodb.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
