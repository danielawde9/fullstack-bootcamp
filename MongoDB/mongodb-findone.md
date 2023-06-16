

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB findOne



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`findOne()` method to retrieve a single document from a collection.



The `findOne()` returns a single document from a collection that satisfies the
specified condition.



The `findOne()` method has the following syntax:


    
    
    db.collection.findOne(query, projection)
    
    Code language: CSS (css)



The `findOne()` accepts two optional arguments: `query` and `projection`.



If you omit the `query`, the `findOne()` returns the first document in the
collection according to the natural order which is the order of documents on
the disk.



If you don’t pass the `projection` argument, then `findOne()` will include all
fields in the matching documents.



To specify whether a field should be included in the returned document, you
use the following format:


    
    
    {field1: value, field1: value, ... }



If the `value` is `true` or `1`, MongoDB will include the field in the
returned document. In case the `value` is `false` or `0`, MongoDB won’t
include it.



By default, MongoDB always includes the `_id` field in the returned documents.
To suppress it, you need to explicitly specify `_id: 0` in the `projection`
argument.



If multiple documents satisfy the `query`, the `findOne()` method returns the
first document based on the order of documents stored on the data storage.



Note that there are other forms of projections such as array projection and
aggregation projection which are not covered in this tutorial.



We’ll use the following `products` collection for the demonstration:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following example uses the `findOne()` method to select the first document
from the `products` collection:


    
    
    db.products.findOne()
    
    Code language: CSS (css)



The statement returns all fields of the matching document:


    
    
    {
      _id: 1,
      name: 'xPhone',
      price: 799,
      releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
      spec: { ram: 4, screen: 6.5, cpu: 2.66 },
      color: [ 'white', 'black' ],
      storage: [ 64, 128, 256 ]
    }
    
    Code language: CSS (css)



Note that omitting the `query` is the same as passing the `query` as an empty
document:


    
    
    db.products.findOne({})
    
    Code language: CSS (css)



The following statement uses the `findOne()` method to find the document whose
`_id` is 2.


    
    
     db.products.findOne({_id:2})
    
    Code language: CSS (css)



It returns all the fields of the document with `_id` 2:


    
    
    {
      _id: 2,
      name: 'xTablet',
      price: 899,
      releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
      spec: { ram: 16, screen: 9.5, cpu: 3.66 },
      color: [ 'white', 'black', 'purple' ],
      storage: [ 128, 256, 512 ]
    }
    
    Code language: CSS (css)



The following example uses the `findOne()` method to find the document with
`_id 5`. And it returns only the `_id` and `name` fields of the matching
document:


    
    
    db.products.findOne({_id: 5}, {name: 1})
    
    Code language: JavaScript (javascript)



The query returned the following document:


    
    
    { "_id" : 5, "name" : "SmartPhone" }
    
    Code language: JavaScript (javascript)



As you can see clearly from the output, MongoDB includes the `_id` field in
the returned document by default.



To completely remove it from the returned document, you need to explicitly
specify `_id:0` in the `projection` document like this:


    
    
    db.products.findOne({ _id: 5 }, {name: 1, _id: 0})
    
    Code language: JavaScript (javascript)



It returned the following document:


    
    
    { "name" : "SmartPhone" }
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

