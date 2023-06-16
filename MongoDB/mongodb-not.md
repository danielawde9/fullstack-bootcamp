

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $not



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB $not
operator to perform a logical NOT operator.



The following shows the syntax of the `$not` operator:


    
    
    { field: { $not: { <expression> } } }
    
    Code language: CSS (css)



The `$not` operator is a logical query operator that performs a logical NOT
operation on a specified `<expression>` and selects documents that do not
match the `<expression>`. This includes the documents that do not contain the
`field`.



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



The following example shows how to use the `$not` operator to
[find](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/) documents
where:


    
    
    db.products.find({
        price: {
            $not: {
                $gt: 699
            }
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    [
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 6, name: 'xWidget' }
    ]
    
    Code language: JavaScript (javascript)



Notice that the `{ $not: { $gt: 699 } }` is different from the
`[$lte](https://www.mongodbtutorial.org/mongodb-crud/mongodb-lte/)` operator.
The `{ $lte : 699 }` returns documents where the `price` field exists and its
value is less than or equal to `699`.



The following example uses the `$lte` operator:


    
    
    db.products.find({
        price: {
            $lte: 699
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    [
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]
    
    Code language: JavaScript (javascript)



As you can see clearly from the output, the result of the query that uses the
`$lte` operator does not include the documents where the `price` field does
not exist.



The following example uses the `$not` operator to select documents from the
`products` collection where the value of the field does not match the regular
expression `/^smart+/i`:


    
    
    db.products.find({
        name: {
            $not: /^Smart+/
        }
    }, {
        name: 1
    })
    
    Code language: CSS (css)



The regular expression `/^Smart+/` matches any string that starts with the
string `smart` and is followed by any number of characters.



The query returns the following documents:


    
    
    [
      { _id: 1, name: 'xPhone' },
      { _id: 2, name: 'xTablet' },
      { _id: 6, name: 'xWidget' }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

