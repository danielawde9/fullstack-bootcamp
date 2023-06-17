

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $exists



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$exists`
operator.



The `$exists` is an element query operator that has the following syntax:


    
    
    { field: { $exists: <boolean_value> } }



When the `<boolean_value>` is true, the `$exists` operator matches the
documents that contain the `field` with any value including `null`.



If the `<boolean_value>` is `false`, the `$exists` operator matches the
documents that don’t contain the **field**.



The MongoDB `$exists` doesn’t correspond to the
`[EXISTS](https://www.sqltutorial.org/sql-exists/)` operator in SQL.



Notice that MongoDB 4.2 or later doesn’t treat the `$type: 0` as the synonym
for `$exists:false` anymore.



We’ll use the following products collection:


    
    
    db.products.insertMany([
    	{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
    	{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
    	{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
    	{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
    	{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
    	{ "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
    	{ "_id" : 7, "name" : "xReader","price": null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
    ])



The following example uses the `$exists` operator to select documents where
the `price` field exists:


    
    
    db.products.find(
       { price: { $exists: true } }, 
       { name: 1, price: 1 }
    )



It returned the following documents:


    
    
    { "_id" : 1, "name" : "xPhone", "price" : 799 }
    { "_id" : 2, "name" : "xTablet", "price" : 899 }
    { "_id" : 3, "name" : "SmartTablet", "price" : 899 }
    { "_id" : 4, "name" : "SmartPad", "price" : 699 }
    { "_id" : 5, "name" : "SmartPhone", "price" : 599 }
    { "_id" : 7, "name" : "xReader", "price" : null }



In this example, the `$exists` operator matches the documents that have the
`price `field including the non-null and null values.



The following query uses the `$exists` operator that select documents whose
`price` field exists and has a value greater than `799`:


    
    
    db.products.find({
        price: {
            $exists: true,
            $gt: 699
        }
    }, {
        name: 1,
        price: 1
    });



Output:


    
    
    { "_id" : 1, "name" : "xPhone", "price" : 799 }
    { "_id" : 2, "name" : "xTablet", "price" : 899 }
    { "_id" : 3, "name" : "SmartTablet", "price" : 899 }



The following example uses the `$exists` operator to select documents that
**don’t** have the `price` field:


    
    
    db.products.find({
        price: {
            $exists: false
        }
    }, {
        name: 1,
        price: 1
    });



It returned one document that doesn’t have the `price` field:


    
    
    { "_id" : 6, "name" : "xWidget" }



![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

