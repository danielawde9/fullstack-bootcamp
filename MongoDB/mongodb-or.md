

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $or



 **Summary** : in this tutorial, you’ll about the MongoDB `$or` operator and
how to use it to perform a logical OR operation.



The `$or` is a logical query operator that carries a logical **OR** operation
on an array of one or more expressions and selects the documents that satisfy
at least one expression.



Here is the syntax of the `$or` operator:


    
    
    $or:[{expression1}, {expression2},...]
    
    Code language: PHP (php)



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] }
    ])
    
    Code language: JavaScript (javascript)



The following example uses the `$or` operator to select all documents in the
`products` collection where the value in the price field equals 799 or 899:


    
    
    db.products.find({
        $or: [{
            price: 799
        }, {
            price: 899
        }]
    }, {
        name: 1,
        price: 1
    })
    
    Code language: PHP (php)



It returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]
    
    Code language: JavaScript (javascript)



Since this example checks equality for the same price field, you should use
the $in operator instead:


    
    
    db.products.find({
        price: {
            $in: [799, 899]
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



The following example uses the `$or` operator to select all documents where
the price is less than 699 or greater than 799:


    
    
    db.products.find({
        $or: [
            { price: {$lt: 699} },
            { price: {$gt: 799} }
        ]
    }, {
        name: 1,
        price: 1
    })
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

