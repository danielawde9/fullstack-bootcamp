

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » How to use MongoDB $mul
operator to update documents



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$mul`
operator to **multiply** the value of a field by a number.



The `$mul` is a field update operator that allows you to **multiply** the
value of a field by a specified number.



The `$mul` operator has the following syntax:


    
    
    { $mul: { <field1>: <number1>, <field2>: <number2>, ... } }
    
    Code language: HTML, XML (xml)



The `<field>` that you want to update must contain a numeric value. To specify
a field in an embedded document or in an array, you use the dot notation e.g.,
<`embedded_doc>.<field>` or `<array>.<index>`



If the field doesn’t exist in the document, the `$mul` operator creates the
field and sets its value to zero.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following example uses the `$mul` operator to multiply the price of the
document `_id 5` by `10%`:


    
    
     db.products.updateOne({ _id: 5 }, { $mul: { price: 1.1 } })
    
    Code language: PHP (php)



The output document showed that the query matched one document and updated it:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



The following query verifies the update:


    
    
    db.products.find({
        _id: 5
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



Output:


    
    
    [ { _id: 5, name: 'SmartPhone', price: 658.9000000000001 } ]
    
    Code language: CSS (css)



The following query uses the `$mul` operator to double the values of the
first, second, and third array elements in the `storage` array of the document
`_id 1`:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $mul: {
            "storage.0": 2,
            "storage.1": 2,
            "storage.2": 2
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



The following query uses the
`[findOne()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-findone/)`
method to select the document with `_id 1` to verify the update:


    
    
     db.products.findOne({ _id: 1 }, { name: 1, storage: 1 })
    
    Code language: CSS (css)



Output:


    
    
    { _id: 1, name: 'xPhone', storage: [ 128, 256, 512 ] }
    
    Code language: CSS (css)



This example uses the `$mul` operator to double the values of the `ram` field
in the `spec` embedded documents of all documents from the `products`
collection:


    
    
    db.products.updateMany({}, {
        $mul: {
            "spec.ram": 2
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


    
    
    db.products.find({}, { name: 1, "spec.ram": 1 })
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, name: 'xPhone', spec: { ram: 8 } },
      { _id: 2, name: 'xTablet', spec: { ram: 32 } },
      { _id: 3, name: 'SmartTablet', spec: { ram: 24 } },
      { _id: 4, name: 'SmartPad', spec: { ram: 16 } },
      { _id: 5, name: 'SmartPhone', spec: { ram: 8 } }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

