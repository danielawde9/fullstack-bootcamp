

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » How to Use MongoDB $inc
Operator in update() Method



 **Summary** : in this tutorial, you’ll learn how to use the `$inc` operator
in the `update()` method to increment a field by a specified value.



Sometimes, you need to increment the value of one or more fields by a
specified value. In this case, you can use the `update()` method with the $inc
operator.



The $inc operator has the following syntax:


    
    
    { $inc: {<field1>: <amount1>, <field2>: <amount2>, ...} }
    
    Code language: HTML, XML (xml)



In this syntax, the `amount` can be positive or negative. When it’s a positive
value, the $inc increases the `field` by `amount`. If the `amount` is a
negative value, then the $inc decreases the `field` by the absolute value of
the `amount`.



If the `field` doesn’t exist, the `$inc` creates the `field` and sets the
field to the specified `amount`.



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following example uses the $inc operator to increase the price of the
document `_id 1` from the `products` collection by 50:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $inc: {
            price: 50
        }
    })
    
    Code language: PHP (php)



It returned the following document indicating that one document matched and
has been updated:


    
    
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    
    Code language: CSS (css)



If you query the document _id 1, you’ll see that the price has been increased:


    
    
    db.products.find(
        {_id: 1},
        {name: 1, price: 1}
    )
    
    Code language: CSS (css)



Output:


    
    
    [ { _id: 1, name: 'xPhone', price: 849 } ]
    
    Code language: CSS (css)



The following example uses the $inc operator to decrease the price by 150:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $inc: {
            price: -150
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



The price of the document _id 1 has been decreased as shown in the output of
the following query:


    
    
    db.products.find(
        { _id: 1 },
        { name: 1, price: 1 }
    )
    
    Code language: CSS (css)



Output:


    
    
    [ { _id: 1, name: 'xPhone', price: 699 } ]
    
    Code language: CSS (css)



The following example uses the `$inc` operator to increase the value of the
`price` field as well as the `ram` field of the `spec` embedded document:


    
    
    db.products.updateOne({
        _id: 1
    }, {
        $inc: {
            price: 50,
            "spec.ram": 4
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



Note that to specify a field in an embedded document, you use the dot notation
e.g., `"spec.ram"`.



This query selects the document _id 1 to verify the update:


    
    
    db.products.find(
        {_id: 1},
        {name: 1, price: 1, "spec.ram": 1}
    )
    
    Code language: CSS (css)



The values of the `price` and `ram` fields have been increased as shown in the
following output:


    
    
    [ { _id: 1, name: 'xPhone', price: 749, spec: { ram: 8 } } ]
    
    Code language: CSS (css)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

