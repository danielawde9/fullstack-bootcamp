

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $lte



 **Summary** : in this tutorial, you will learn how to use the MongoDB `$lte`
operator to select documents where the value of a field is less than or equal
to a specified value.



The `$lte` is a comparison query operator that allows you to select documents
where the value of a field is less than or equal to ( `<=` ) a specified
value.



The following shows the `$lte` syntax:


    
    
    {field: {$lte: value} }
    
    Code language: CSS (css)



We’ll use the following `products` collection:


    
    
    db.products.drop();
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ]);
    
    Code language: JavaScript (javascript)



The following example uses the `$gt`e operator to select documents from the
`products` collection where `price` is less than 799:


    
    
    db.products.find({
        price: {
            $lte: 799
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]
    
    Code language: JavaScript (javascript)



The following query uses `$lte` operator to select documents where the value
of the `screen` field in the `spec` document is less than or equal to `6.5`:


    
    
    db.products.find({
        "spec.screen": {
            $lte: 6.5
        }
    }, {
        name: 1,
        "spec.screen": 1
    })
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 1, name: 'xPhone', spec: { screen: 6.5 } },
      { _id: 5, name: 'SmartPhone', spec: { screen: 5.7 } }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the `$lte` operator to query the `products`
collection to find all documents where the array `storage` has at least one
element less than or equal to 64:


    
    
    db.products.find({
        storage: {
            $lte: 64
        }
    }, {
        name: 1,
        storage: 1
    })
    
    Code language: CSS (css)



The query returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ 64, 128, 256 ] },
      { _id: 3, name: 'SmartTablet', storage: [ 16, 64, 128 ] }
    ]
    
    Code language: JavaScript (javascript)



The following query uses the `$lte` operator to select documents from the
`products` collection to find all documents where the release date is before
or on `2015-01-11`:


    
    
    db.products.find({
        "releaseDate": {
            $lte: new ISODate('2015-01-01')
        }
    }, {
        name: 1,
        releaseDate: 1
    });
    
    Code language: PHP (php)



The query returned the following documents:


    
    
    [
      {
        _id: 1,
        name: 'xPhone',
        releaseDate: ISODate("2011-05-14T00:00:00.000Z")
      },
      {
        _id: 2,
        name: 'xTablet',
        releaseDate: ISODate("2011-09-01T00:00:00.000Z")
      }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

