

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB deleteOne



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`deleteOne()` method to delete a single document from a collection.



The `deleteOne()` method allows you to delete a single document from a
collection.



The `deleteOne()` method has the following syntax:


    
    
    db.collection.deleteOne(filter, option)
    
    Code language: CSS (css)



The `deleteOne()` method accepts two arguments:



The `deleteOne()` method returns a document containing the `deleteCount` field
that stores the number of deleted documents.



To delete all documents that match a condition from a collection, you use the
`deleteMany()` method.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following example uses the `deleteOne()` method to delete a document with
the `_id` is `1` from the `products` collection:


    
    
    db.products.deleteOne({ _id: 1 })
    
    Code language: CSS (css)



The query returned the following document:


    
    
    { "acknowledged" : true, "deletedCount" : 1 }
    
    Code language: JSON / JSON with Comments (json)



The `deleteCount` field returned `1` indicating the number of deleted
documents.



The following query uses the `deleteOne()` method to remove the first document
returned from the `products` collection:


    
    
    db.products.deleteOne({})
    
    Code language: CSS (css)



It returned the following document:


    
    
    { "acknowledged" : true, "deletedCount" : 1 }
    
    Code language: JSON / JSON with Comments (json)



In this example, we passed an empty document `{}` to the `deleteOne()` method.
Therefore, it removed the first document from the `products` collection.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

