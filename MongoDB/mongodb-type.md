

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $type



 **Summary** : in this tutorial, you’ll how to use the MongoDB `$type`
operator to select documents where the value of a field is an instance of a
BSON type.



Sometimes, you need to deal with highly unstructured data where **data types
are unpredictable**. In this case, you need to use the `$type` operator.



The `$type` is an **element query operator** that allows you to select
documents where the value of a field is an instance of a specified BSON type.



The `$type` operator has the following syntax:


    
    
    { field: { $type: <BSON type> } }
    
    Code language: CSS (css)



The `$type` operator also accepts a list of BSON types like this:


    
    
    { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }
    
    Code language: CSS (css)



In this syntax, the `$type` operator selects the documents where the type of
the `field` matches any BSON type on the list.



MongoDB provides you with three ways to identify a BSON type: string, number,
and alias. The following table lists the BSON types identified by these three
forms:



The `$type` operator also supports the `number` alias that matches against the
following BSON types:



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : "799", "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : NumberInt(899), "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899), "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : [599, 699, 799], "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : ["599",699], "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
    	{ "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] }
    ])
    
    Code language: JavaScript (javascript)



This `products` collection contains the `price` field that has int, double,
long values.



The following example uses the `$type` operator to query documents from the
`products` collection where the `price` field is the `string` type or is an
array containing an element that is a `string` type.


    
    
    db.products.find({
        price: {
            $type: "string"
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    { "_id" : 1, "name" : "xPhone", "price" : "799" }
    { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
    
    Code language: JSON / JSON with Comments (json)



Since the `string` type corresponds to the number 2 (see the BSON types table
above), you can use the number 2 in the query instead:


    
    
    db.products.find({
        price: {
            $type: 2
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



The following example uses the `$type` operator with the `number` alias to
select documents where the value of the `price` field is the BSON type `int`,
`long`, or `double` or is an array that contains a number:


    
    
    db.products.find({
        price: {
            $type: "number"
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    { "_id" : 2, "name" : "xTablet", "price" : 899 }
    { "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899) }
    { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
    { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
    
    Code language: JSON / JSON with Comments (json)



The following query use the `$type` operator to select the documents in which
the `price` field is an array:


    
    
    db.products.find({
        price: {
            $type: "array"
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
    { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
    
    Code language: JSON / JSON with Comments (json)



The following query uses the `$type` operator to select documents where the
`price` field is either number or string or an array that has an element is
number or string:


    
    
    db.products.find({
        price: {
            $type: ["number", "string"]
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It matched the following documents:


    
    
    { "_id" : 1, "name" : "xPhone", "price" : "799" }
    { "_id" : 2, "name" : "xTablet", "price" : 899 }
    { "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899) }
    { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
    { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
    
    Code language: JSON / JSON with Comments (json)



Notice that the result doesn’t include the document with `_id 6` because this
document doesn’t have the `price` field.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

