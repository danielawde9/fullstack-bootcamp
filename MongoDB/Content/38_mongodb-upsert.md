

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB Upsert



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB upsert
function.



Upsert is a combination of **up** date and in **sert**. Upsert performs two
functions:



To perform an upsert, you use the following `updateMany()` method with the
`upsert` option set to `true`:


    
    
    document.collection.updateMany(query, update, { upsert: true} )



The `upsert` field in the third argument is set to `false` by default. This
means that if you omit it, the method will only update the documents that
match the `query`.



Notice that the `updateOne()` method also can upsert with the `{ upsert: true
}`.



We’ll use the following `products` collection.


    
    
    db.products.insertMany([
        { "_id" : 1, "nmea" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "nmea" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "nmea" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "nmea" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "nmea" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following query uses the `update()` method to update the price for the
document `_id` `6`:


    
    
    db.products.updateMany(
        {_id: 6 },
        { $set: {price: 999} }
    )



The query found no match and didn’t update any document as shown in the
following output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 0,
      modifiedCount: 0,
      upsertedCount: 0
    }



If you pass the `{ upsert: true }` to the `updateMany()` method, it’ll insert
a new document. For example:


    
    
    db.products.updateMany(
        { _id: 6 },
        { $set: {price: 999} },
        { upsert: true}
    )



The query returns the following document:


    
    
    {
      acknowledged: true,
      insertedId: 6,
      matchedCount: 0,
      modifiedCount: 0,
      upsertedCount: 1
    }



The output indicates that there was no matching document (`matchedCount` is
zero) and the `updateMany()` method didn’t update any document.



However, the `updateMany()` method inserted one document and returned the `id`
of the new document stored in the `upsertedId` field.



If you query the document with `_id 6` from the `products` collection, you’ll
see the new document with the `price` field:


    
    
    db.products.find({_id:6})



Output:


    
    
    [ { _id: 6, price: 999 } ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

