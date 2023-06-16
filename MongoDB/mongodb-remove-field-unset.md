

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » How to use MongoDB
$unset operator to remove a field from a document



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$unset`
operator to remove one or more fields from a document.



Sometimes, you may want to remove one or more fields from a document. In order
to do it, you can use the `$unset` operator.



The `$unset` is a field update operator that completely removes a particular
field from a document.



The `$unset` operator has the following syntax:


    
    
    { $unset: {<field>: "", ... }}
    
    Code language: PHP (php)



In this syntax, you specify the field that you want to remove and its value.
The field value isn’t important and doesn’t impact the operation. You can
specify any value, the `$unset` will remove the field completely. If the
`<field>` doesn’t exist in the document, then `$unset` operator will do
nothing. It also won’t issue any warnings or errors.



To specify a field in an embedded document, you use the dot notation like
this:


    
    
    { $unset: { "<embedded_doc>.<field>: "", ... }}
    
    Code language: HTML, XML (xml)



Note that the `$unset` operator doesn’t remove array elements. Instead, it
sets the array elements to null.


    
    
    { $unset: {"<array>.<index>": "", ...}
    
    Code language: PHP (php)



This behavior keeps the array size and element positions consistent.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following example uses the `$unset` operator to remove the price field
from the document `_id 1` in the `products` collection:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $unset: {
            price: ""
        }
    })
    
    
    Code language: PHP (php)



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



The `modifiedCount` indicated that one document has been modified. This query
returns all documents from the `products` collection to verify the update:


    
    
    db.products.find({}, { name: 1, price: 1 })
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, name: 'xPhone' },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]
    
    Code language: JavaScript (javascript)



As you can see clearly from the output, the `$unset` operator has completely
removed the `price` field from the document with `_id 1`.



The following statement uses the `$unset` operator to remove the `ram` field
from the `spec` embedded documents of all documents in the `products`
collection:


    
    
    db.products.updateMany({}, {
        $unset: {
            "spec.ram": ""
        }
    })
    
    
    Code language: PHP (php)



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 5,
      modifiedCount: 5,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



The following query returns all documents from the `products` collection:


    
    
    db.products.find({}, {
        spec: 1
    })
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, spec: { screen: 6.5, cpu: 2.66 } },
      { _id: 2, spec: { screen: 9.5, cpu: 3.66 } },
      { _id: 3, spec: { screen: 9.7, cpu: 3.66 } },
      { _id: 4, spec: { screen: 9.7, cpu: 1.66 } },
      { _id: 5, spec: { screen: 5.7, cpu: 1.66 } }
    ]



As you can see, the `ram` field has been removed from `spec` embedded document
in all documents.



The following example uses the `$unset` operator to set the first elements of
the storage arrays to `null`:


    
    
     db.products.updateMany({}, { $unset: { "storage.0": "" } })
    
    Code language: PHP (php)



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 5,
      modifiedCount: 5,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



The following query selects the `storage` array from all documents in the
`products` collection:


    
    
    db.products.find({}, { "storage":1})
    
    Code language: JavaScript (javascript)



Output:


    
    
    [
      { _id: 1, storage: [ null, 128, 256 ] },
      { _id: 2, storage: [ null, 256, 512 ] },
      { _id: 3, storage: [ null, 64, 128 ] },
      { _id: 4, storage: [ null, 256, 1024 ] },
      { _id: 5, storage: [ null, 256 ] }
    ]
    
    Code language: JavaScript (javascript)



In this example, the `$unset` operator sets the first elements of the
`storage` arrays to `null` instead of removing them completely.



The following statement uses the `$unset` operator to remove the `releaseDate`
and `spec` fields from all the documents in the `products` collection:


    
    
    db.products.updateMany({}, {
        $unset: {
            releaseDate: "",
            spec: ""
        }
    })
    
    
    Code language: PHP (php)



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 5,
      modifiedCount: 5,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



The following query verifies the update:


    
    
    db.products.find({}, {
        name: 1,
        storage: 1,
        releaseDate: 1,
        spec: 1
    })
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ null, 128, 256 ] },
      { _id: 2, name: 'xTablet', storage: [ null, 256, 512 ] },
      { _id: 3, name: 'SmartTablet', storage: [ null, 64, 128 ] },
      { _id: 4, name: 'SmartPad', storage: [ null, 256, 1024 ] },
      { _id: 5, name: 'SmartPhone', storage: [ null, 256 ] }
    ]
    
    Code language: JavaScript (javascript)



As shown clearly from the output, the `releaseDate` and `spec` fields now are
gone.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

