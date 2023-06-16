

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $size



 **Summary** : in this tutorial, you’ll how to use the MongoDB `$size`
operator to match documents that have an array containing a specified number
of elements.



The `$size` is an array query operator that allows you to select documents
that have an array containing a specified number of elements.



The `$size` operator has the following syntax:


    
    
    { array_field: {$size: element_count} }
    
    Code language: CSS (css)



In this syntax, you specify the `element_count` after the `$size` operator to
match all documents where the `array_field` has exact `element_count`
elements.



We’ll use the following products collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
    	{ "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] }
    ])
    
    Code language: JavaScript (javascript)



The following example uses the `$size` operator to select documents whose
`color` array has two elements:


    
    
    db.products.find({
        color: {
            $size: 2
        }
    }, {
        name: 1,
        color: 1
    })
    
    Code language: CSS (css)



It returned the following document:


    
    
    { "_id" : 1, "color" : [ "white", "black" ], "name" : "xPhone" }
    
    Code language: JSON / JSON with Comments (json)



The following example shows how to use `$size` operator with the
`[$or](https://www.mongodbtutorial.org/mongodb-crud/mongodb-or/)` operator to
select documents whose the `color` array has one or two elements:


    
    
    db.products.find({
        $or: [{
                color: {
                    $size: 1
                }
            },
            {
                color: {
                    $size: 2
                }
            }
        ]
    }, {
        name: 1,
        color: 1
    })
    
    Code language: PHP (php)



It returned the following documents:


    
    
    { "_id" : 1, "color" : [ "white", "black" ], "name" : "xPhone" }
    { "_id" : 3, "color" : [ "blue" ], "name" : "SmartTablet" }
    
    Code language: JSON / JSON with Comments (json)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

