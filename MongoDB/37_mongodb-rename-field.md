

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » How to Use the MongoDB
$rename field operator



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$rename`
operator to rename a field in a document.



Sometimes, you want to rename a field in a document e.g., when it is
misspelled or not descriptive enough. In this case, you can use the `$rename`
operator.



The `$rename` is a field update operator that allows you to rename a field in
a document to the new one.



The `$rename` operator has the following syntax:


    
    
    { $rename: { <field_name>: <new_field_name>, ...}}



In this syntax, the `<new_field_name>` must be different from the
`<field_name>`.



If the document has a field with the same name as the `<new_field_name>`, the
`$rename` operator removes that field and renames the specified `<field_name>`
to `<new_field_name>`.



In case the `<field_name>` doesn’t exist in the document, the `$rename`
operator does nothing. It also won’t issue any warnings or errors.



The `$rename` operator can rename fields in embedded documents. In addition,
it can move these fields in and out of the embedded documents.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "nmea" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "nmea" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "nmea" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "nmea" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "nmea" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$rename` operator to rename the misspelled
field `nmea` to `name`:


    
    
    db.products.updateMany({}, {
        $rename: {
            nmea: "name"
        }
    })



In this example, the `$rename` operator changed the field name from `nmea` to
`name` as indicated in the following returned document:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 5,
      modifiedCount: 5,
      upsertedCount: 0
    }



To verify the update, you can use the
`[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)` method
to select all documents from the `products` collection:


    
    
    db.products.find({}, { name: 1 })



Output:


    
    
    [
      { _id: 1, name: 'xPhone' },
      { _id: 2, name: 'xTablet' },
      { _id: 3, name: 'SmartTablet' },
      { _id: 4, name: 'SmartPad' },
      { _id: 5, name: 'SmartPhone' }
    ]



The following example uses the `$rename` operator to change the `size` field
of the `spec` embedded document to `screenSize`:


    
    
    db.products.updateMany({}, {
        $rename: {
            "spec.screen": "spec.screenSize"
        }
    })



It returned the following result:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 5,
      modifiedCount: 0,
      upsertedCount: 0
    }



This query uses the `[find()](https://www.mongodbtutorial.org/mongodb-
crud/mongodb-find/)` method to select all documents from the `products`
collection:


    
    
    db.products.find({}, {
        spec: 1
    })



Here is the output:


    
    
    [
      { _id: 1, spec: { ram: 4, cpu: 2.66, screenSize: 6.5 } },
      { _id: 2, spec: { ram: 16, cpu: 3.66, screenSize: 9.5 } },
      { _id: 3, spec: { ram: 12, cpu: 3.66, screenSize: 9.7 } },
      { _id: 4, spec: { ram: 8, cpu: 1.66, screenSize: 9.7 } },
      { _id: 5, spec: { ram: 4, cpu: 1.66, screenSize: 5.7 } }
    ]



As you can see from the output, the `screen` fields in the `spec` embedded
documents have been renamed to `screenSize`.



The following example uses the `$rename` operator to move the `cpu` field out
of the `spec` embedded document in the document `_id 1`:


    
    
    db.products.updateOne({
     _id: 1
    }, 
    {
        $rename: {
            "spec.cpu": "cpu"
        }
    })



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



The following query selects the document with `_id 1` to verify the rename:


    
    
    db.products.find({ _id: 1})



Output:


    
    
    [
      {
        _id: 1,
        price: 799,
        releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
        spec: { ram: 4, screenSize: 6.5 },
        color: [ 'white', 'black' ],
        storage: [ 64, 128, 256 ],
        name: 'xPhone',
        cpu: 2.66
      }
    ]



As you can see clearly from the output, the `cpu` field becomes the top-level
field.



The following example uses the `$rename` operator to rename the field `color`
to `storage` in the document with `_id 2`.



However, the `storage` field already exists. Therefore, the `$rename` operator
removes the `storage` field and renames the field `color` to `storage`:


    
    
    db.products.updateOne({
        _id: 2
    }, {
        $rename: {
            "color": "storage"
        }
    })
    



Output:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 0,
      upsertedCount: 0
    }



Let’s check the document `_id 2`:


    
    
    db.products.find({ _id: 2 })



Output:


    
    
    [
      {
        _id: 2,
        price: 899,
        releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
        spec: { ram: 16, cpu: 3.66, screenSize: 9.5 },
        storage: [ 'white', 'black', 'purple' ],
        name: 'xTablet'
      }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

