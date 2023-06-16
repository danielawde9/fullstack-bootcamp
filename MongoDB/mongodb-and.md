

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $and



 **Summary** : in this tutorial, you’ll about the MongoDB `$and` operator and
how to use it to perform a logical AND operation.



The `$and` is a logical query operator that allows you to carry a logical
**AND** operation on an array of one or more expressions.



The following shows the syntax of the `$and` operator:


    
    
    $and :[{expression1}, {expression2},...]
    
    Code language: PHP (php)



The `$and` operator returns `true` if all expressions evaluate to `true`.



The `$and` operator stops evaluating the remaining expressions as soon as it
finds an expression that evaluates to `false`. This feature is called short-
circuit evaluation.



When you use a comma-separated list of expressions, MongoDB will carry an
implicit AND operation:


    
    
    { field: { expression1, expression2, ... }
    
    Code language: CSS (css)



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
    	{ "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] }
    ])
    
    Code language: JavaScript (javascript)



The following example uses the `$and` operator to select all documents in the
`products` collection where:


    
    
    db.products.find({
        $and: [{
            price: 899
        }, {
            color: {
                $in: ["white", "black"]
            }
        }]
    }, {
        name: 1,
        price: 1,
        color: 1
    })
    
    Code language: PHP (php)



It returned the following document:


    
    
    [
      {
        _id: 2,
        name: 'xTablet',
        price: 899,
        color: [ 'white', 'black', 'purple' ]
      }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the `$and` operator to select all documents where:


    
    
    db.products.find({
        $and: [{
            price: 699
        }, {
            price: {
                $exists: true
            }
        }]
    }, {
        name: 1,
        price: 1,
        color: 1
    })
    
    Code language: PHP (php)



Output:


    
    
    [
      {
        _id: 4,
        name: 'SmartPad',
        price: 699,
        color: [ 'white', 'orange', 'gold', 'gray' ]
      }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the implicit AND operator and returns the same
result:


    
    
    db.products.find({
        price: {
            $eq: 699,
            $exists: true
        }
    }, {
        name: 1,
        price: 1,
        color: 1
    })
    
    Code language: CSS (css)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

