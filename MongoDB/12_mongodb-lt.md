

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $lt



 **Summary** : in this tutorial, you will learn how to use the MongoDB $lt
operator to select documents where the value of a field is less than (`<`) a
specified value.



The `$lt` operator is a comparison query operator that allows you to select
the documents where the value of a field is less than a specified value.



Here is the syntax of the $lt operator:


    
    
    {field: {$lt: value} }



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$lt` operator to select documents from the
`products` collection where `price` is less than 799:


    
    
    db.products.find({
        price: {
            $lt: 799
        }
    }, {
        name: 1,
        price: 1
    })



Output:


    
    
    [
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]



The following query uses `$lt` operator to select documents where the value of
the `screen` field in the `spec` document is less than `7`:


    
    
    db.products.find({
        "spec.screen": {
            $lt: 7
        }
    }, {
        name: 1,
        "spec.screen": 1
    })



Output:


    
    
    [ { _id: 1, name: 'xPhone', spec: { screen: 6.5 } } ]



The following example uses the `$lt` operator to query the `products`
collection to find all documents where the array `storage` has at least one
element less than `128`:


    
    
    db.products.find({
        storage: {
            $lt: 128
        }
    }, {
        name: 1,
        storage: 1
    })



The query returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ 64, 128, 256 ] },
      { _id: 3, name: 'SmartTablet', storage: [ 16, 64, 128 ] }
    ]



The following query uses the `$lt` operator to select documents from the
`products` collection to find all documents where the release date before
`2015-01-01`:


    
    
    db.products.find({
        "releaseDate": {
            $lt: new ISODate('2015-01-01')
        }
    }, {
        name: 1,
        releaseDate: 1
    })



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

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

