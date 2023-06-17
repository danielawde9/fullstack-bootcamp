

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB updateOne



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`updateOne()` method to update the first document in a collection that matches
a condition.



The `updateOne()` method allows you to update a single document that satisfies
a condition.



The following shows the syntax of the `updateOne()` method:


    
    
    db.collection.updateOne(filter, update, options)



In this syntax:



The `updateOne()` method returns a document that contains some fields. The
notable ones are:



The `$set` operator allows you to replace the value of a field with a
specified value. The `$set` operator has the following syntax:


    
    
    { $set: { <field1>: <value1>, <field2>: <value2>, ...}}



If the `field` doesn’t exist, the `$set` operator will add the new field with
the specified `value` to the document as long as the new field doesn’t violate
a type constraint.



If you specify the `field` with the dot notation e.g., `embededDoc.field` and
the `field` does not exist, the `$set` will create the embedded document
(`embedded`).



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `updateOne()` method to update the `price` of
the document with `_id: 1`:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $set: {
            price: 899
        }
    })



In this query:



The query returns the following result:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



In this result document, the `matchedCount` indicates the number of matching
documents (`1`) and the `modifiedCount` shows the number of the updated
documents (`1`).



To verify the update, you can use the
`[findOne()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-findone/)`
method to retrieve the document `_id: 1` as follows:


    
    
    db.products.findOne({ _id: 1 }, { name: 1, price: 1 })



It returned the following document:


    
    
    { _id: 1, name: 'xPhone', price: 899 }



As you can see clearly from the output, the `price` has been updated
successfully.



The following query selects the documents from the `products` collection in
which the value of the `price` field is 899:


    
    
    db.products.find({ price: 899 }, { name: 1, price: 1 })



It returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', price: 899 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]



The following example uses the `updateOne()` method to update the first
matching document where the `price` field is `899`:


    
    
    db.products.updateOne({ price: 899 }, { $set: { price: null } })



It updated one document as shown in the following result:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



If you query the document with `_id: 1`, you’ll see that its `price` field is
updated:


    
    
    db.products.find({ _id: 1}, { name: 1, price: 1 })



Output:


    
    
    [ { _id: 1, name: 'xPhone', price: null } ]



The following query uses the
`[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)` method
to select the document with `_id: 4`:


    
    
    db.products.find({ _id: 4 }, { name: 1, spec: 1 })



It returned the following document:


    
    
    [
      {
        _id: 4,
        name: 'SmartPad',
        spec: { ram: 8, screen: 9.7, cpu: 1.66 }
      }
    ]



The following example uses the `updateOne()` method to update the values of
the `ram`, `screen`, and `cpu` fields in the spec embedded document of the
document `_id: 4`:


    
    
    db.products.updateOne({
        _id: 4
    }, {
        $set: {
            "spec.ram": 16,
            "spec.screen": 10.7,
            "spec.cpu": 2.66
        }
    })



It returned the following document:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



If you query the document with `_id` 4 again, you’ll see the change:


    
    
    db.products.find({ _id: 4 }, { name: 1, spec: 1 })



Output:


    
    
    [
      {
        _id: 4,
        name: 'SmartPad',
        spec: { ram: 16, screen: 10.7, cpu: 2.66 }
      }
    ]



The following example uses the `updateOne()` method to update the first and
second elements of the `storage` array in the document with `_id 4`:


    
    
    db.products.updateOne(
     { _id: 4}, 
     {
        $set: {
            "storage.0": 16,
            "storage.1": 32
        }
     }
    )



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



If you query the document with `_id 4` from the `products` collection, you’ll
see that the first and second elements of the `storage` array have been
updated:


    
    
    db.products.find({ _id: 4 }, { name: 1, storage: 1 });



Output:


    
    
    [ { _id: 4, name: 'SmartPad', storage: [ 16, 32, 1024 ] } ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

