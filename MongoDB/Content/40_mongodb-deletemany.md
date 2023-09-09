

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB deleteMany



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`deleteMany()` method to delete all documents that match a condition from a
collection.



The `deleteMany()` method allows you to remove all documents that match a
condition from a collection.



The `deleteMany()` has the following syntax:


    
    
    db.collection.deleteMany(filter, option)



In this syntax:



The `deleteMany()` returns a document containing the `deleteCount` field that
stores the number of deleted documents.



To delete a single document from a collection, you can use the
`[deleteOne()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-
deleteone/)` method.



We’ll use the following `products` collection.


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `deleteMany()` method to delete all documents
where the value in the `price` field is `899`:


    
    
    db.products.deleteMany({ price: 899 })



In this example, the `filter` argument is `{ price: 899 }` that matches
documents whose price is `899`.



It returned the following document:


    
    
    { "acknowledged" : true, "deletedCount" : 2 }



The `deleteCount` field indicates that the number of deleted documents is 2.



The following query uses the `deleteMany()` method to delete all documents
from the `products` collection:


    
    
    db.products.deleteMany({})



Output:


    
    
    { acknowledged: true, deletedCount: 3 }



In this example, we passed an empty document `{}` into the `deleteMany()`
method. Therefore, it deleted all documents from the `products` collection.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

