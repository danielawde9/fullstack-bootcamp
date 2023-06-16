

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $elemMatch



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`$elemMatch` operator to select documents from a collection.



The `$elemMatch` is an array query operator that matches documents that
contain an array field and the array field has at least one element that
satisfies all the specified queries.



The `$elemMatch` has the following syntax:


    
    
    { <arrayField>: {$elemMatch: { <query1>, <query2>, ...} } }
    
    Code language: HTML, XML (xml)



In this syntax:



Notice that you cannot specify a `$where` expression or a `$text` query
expression in an `$elemMatch`.



We’ll use the following `products` collection for the demonstration:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] }
    ])
    
    Code language: JavaScript (javascript)



The following example uses the `$elemMatch` operator to query documents from
the `products` collection:


    
    
    db.products.find({
        storage: {
            $elemMatch: {
                $lt: 128
            }
        }
    }, {
        name: 1,
        storage: 1
    });
    
    Code language: CSS (css)



It matches the documents where the `storage` is an array that contains at
least one element less than 128:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ 64, 128, 256 ] },
      { _id: 3, name: 'SmartTablet', storage: [ 16, 64, 128 ] }
    ]
    
    Code language: JavaScript (javascript)



  

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

