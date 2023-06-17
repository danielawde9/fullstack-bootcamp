

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB updateMany



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`updateMay()` method to update all the documents that match a condition.



The `updateMany()` method allows you to update all documents that satisfy a
condition.



The following shows the syntax of the `updateMany()` method:


    
    
    db.collection.updateMany(filter, update, options)



In this syntax:



The `updateMany()` method returns a document that contains multiple fields.
The following are the notable ones:



To form the update argument, you typically use the `$set` operator.



The `$set` operator replaces the value of a field with a specified value. It
has the following syntax:


    
    
    { $set: { <field1>: <value1>, <field2>: <value2>, ...}}



If the `field` doesn’t exist, the `$set` operator will add the new field with
the specified `value` to the document. If you specify the `field` with the dot
notation e.g., `embededDoc.field` and the `field` does not exist, the `$set`
operator will create the embedded document (`embedded`).



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `updateMany()` method to update the documents
where the value of the price field is `899`:


    
    
    db.products.updateMany(
        {  price: 899}, 
        { $set: {  price: 895 }}
    )



In this query:



The `{ price : 899 }` is the `filter` argument that specified the documents to
update.



The `{ $set: { price: 895} }` specifies the update to apply, which uses the
`$set` operator to set the value of the `price` field to `895`.



The query returns the following result:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 2,
      modifiedCount: 2,
      upsertedCount: 0
    }



In this result document, the `matchedCount` stores the number of matching
documents (2) and the `modifiedCount` stores the number of the updated
documents (2).



To check the update, you can use the
`[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)` method
to select the documents where the value of the `price` field is `895` as
follows:


    
    
    db.products.find({
        price: 895
    }, {
        name: 1,
        price: 1
    })



The query returned the following documents:


    
    
    [
      { _id: 2, name: 'xTablet', price: 895 },
      { _id: 3, name: 'SmartTablet', price: 895 }
    ]



The `price` field values have been updated successfully.



The following query uses the
`[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)` method
to select the documents where the value in the `price` field is greater than
700:


    
    
    db.products.find({
        price: { $gt: 700}
    }, {
        name: 1,
        price: 1,
        spec: 1
    })



The query returned the following documents:


    
    
    [
      {
        _id: 1,
        name: 'xPhone',
        price: 799,
        spec: { ram: 4, screen: 6.5, cpu: 2.66 }
      },
      {
        _id: 2,
        name: 'xTablet',
        price: 895,
        spec: { ram: 16, screen: 9.5, cpu: 3.66 }
      },
      {
        _id: 3,
        name: 'SmartTablet',
        price: 895,
        spec: { ram: 12, screen: 9.7, cpu: 3.66 }
      }
    ]



The following example uses the `updateMany()` method to update the values of
the `ram`, `screen`, and `cpu` fields in the `spec` embedded documents of
these documents:


    
    
    db.products.updateMany({
        price: { $gt: 700}
    }, {
        $set: {
            "spec.ram": 32,
            "spec.screen": 9.8,
            "spec.cpu": 5.66
        }
    })
    



The query returned the following document indicating that the three documents
have been updated successfully:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 3,
      modifiedCount: 3,
      upsertedCount: 0
    }



The following example uses the `updateMany()` method to update the first and
second elements of the `storage` array of the documents where the _id is 1, 2
and 3:


    
    
    db.products.updateMany({
        _id: {
            $in: [1, 2, 3]
        }
    }, {
        $set: {
            "storage.0": 16,
            "storage.1": 32
        }
    })



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 3,
      modifiedCount: 3,
      upsertedCount: 0
    }



If you query the documents whose `_id` is 1, 2, and 3 from the `products`
collection, you’ll see that the first and second elements of the `storage`
array have been updated:


    
    
    db.products.find(
       { _id: { $in: [1,2,3]}}, 
       { name: 1, storage: 1}
    )



Output:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ 16, 32, 256 ] },
      { _id: 2, name: 'xTablet', storage: [ 16, 32, 512 ] },
      { _id: 3, name: 'SmartTablet', storage: [ 16, 32, 128 ] }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

