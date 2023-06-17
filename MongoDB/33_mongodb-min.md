

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » How to Use the MongoDB
$min Operator to Update Field Values



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$min`
operator in the `update()` method to update the values of one or more fields.



The `$min` operator is a field update operator that allows you to update the
value of a field to a specified value if the specified value is less than
(`<`) the current value of the field.



The `$min` operator has the following syntax:


    
    
    { $min: {<field1>: <value1>, ...} }



If the current value of a field is greater than or equal to the value that you
want to update, the `$min` operator won’t update the value.



If the field doesn’t exist, the `$min` operator creates the field and sets its
value to the specified value.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$min` operator to update the price of the
document _id 5:


    
    
    db.products.updateOne({
        _id: 5
    }, {
        $min: {
            price: 699
        }
    })



The query found a matching document. However, it didn’t update any:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 0,
      upsertedCount: 0
    }



The reason is that the new value 699 is greater than the current value 599.



The following example uses the `$min` operator to update the price of the
document `_id 5`:


    
    
    db.products.updateOne({
        _id: 5
    }, {
        $min: {
            price: 499
        }
    })
    



In this case, the `price` field of the document `_id 5` is updated to `499`:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }



This query verifies the update:


    
    
    db.products.find({ _id: 5 }, { name: 1, price: 1 })



Output:


    
    
    [ { _id: 5, name: 'SmartPhone', price: 499 } ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

