

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $all



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$all`
operator to select documents.



The `$all` is an array query operator that allows you to
[find](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/) the
documents where the value of a field is an array that contains all the
specified elements.



The `$all` operator has the following syntax:


    
    
    { <arrayField>: { $all: [element1, element2, ...]} }



If the array followed the `$all` operator is empty, then the `$all` operator
matches no documents.



When the array followed the `$all` operator contains a single element, you
should use the contain expression instead:


    
    
    { <arrayField>: element1 }



The following expression that uses the `$all` operator:


    
    
    { arrayField: {$all: [element1, element2]} }



is equivalent to the following expression that use the
`[$and](https://www.mongodbtutorial.org/mongodb-crud/mongodb-and/)` operator:


    
    
    { $and: [{ arrayField: element1}, {arrayField: element2} ]}



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] }
    ])



The following example uses the `$all` operator to query the `products`
collection for documents where the value of the `color` field is an array that
includes `"black"` and `"white"`:


    
    
    db.products.find({
        color: {
            $all: ["black", "white"]
        }
    }, {
        name: 1,
        color: 1
    })



It returned the following documents. Notice that the order of elements in the
array is not important.


    
    
    { "_id" : 1, "name" : "xPhone", "color" : [ "white", "black" ] }
    { "_id" : 2, "name" : "xTablet", "color" : [ "white", "black", "purple" ] }



Functionally speaking, the above query is equivalent to the following query
that uses the `$and` operator:


    
    
    db.products.find({
        $and: [
            {color: "black"},
            {color: "white"}
        ]
    }, {
        name: 1,
        color: 1
    })

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

