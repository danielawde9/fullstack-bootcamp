

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $gt



 **Summary** : in this tutorial, you will learn how to use the MongoDB `$gt`
operator to select documents where the value of a field is greater than a
specified value.



The `$gt` operator is a comparison query operator that allows you to select
documents where the value of a field is greater than (`>`) a specified value.



The following shows the syntax of the `$gt` operator:


    
    
    { field: { $gt: value}}



We’ll use the following `widget` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$gt` operator to select documents from the
`products` collection where `price` is greater than `699`:


    
    
    db.products.find({
        price: {
            $gt: 699
        }
    }, {
        name: 1,
        price: 1
    })



The query returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]



The following example uses `$gt` operator to select documents where the value
of the `ram` field in the `spec` document is greater than `8`:


    
    
    db.products.find({
        "spec.ram": {
            $gt: 8
        }
    }, {
        name: 1,
        "spec.ram": 1
    });



Output:


    
    
    [
      { _id: 2, name: 'xTablet', spec: { ram: 16 } },
      { _id: 3, name: 'SmartTablet', spec: { ram: 12 } }
    ]



The following example uses the `$gt` operator to query the `products`
collection to find all documents where the `storage` array has at least one
element greater than 128:


    
    
    db.products.find({
        storage: {
            $gt: 128
        }
    }, {
        name: 1,
        storage: 1
    })



The query returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', storage: [ 64, 128, 256 ] },
      { _id: 2, name: 'xTablet', storage: [ 128, 256, 512 ] },
      { _id: 4, name: 'SmartPad', storage: [ 128, 256, 1024 ] },
      { _id: 5, name: 'SmartPhone', storage: [ 128, 256 ] }
    ]



The following example uses the `$gt` operator to query documents from the
`products` collection to find all documents where the release date is after
`2015-01-01`:


    
    
    db.products.find({
        "releaseDate": {
            $gt: new ISODate('2015-01-01')
        }
    }, {
        name: 1,
        releaseDate: 1
    });



The query returned the following documents:


    
    
    [
      {
        _id: 3,
        name: 'SmartTablet',
        releaseDate: ISODate("2015-01-14T00:00:00.000Z")
      },
      {
        _id: 4,
        name: 'SmartPad',
        releaseDate: ISODate("2020-05-14T00:00:00.000Z")
      },
      {
        _id: 5,
        name: 'SmartPhone',
        releaseDate: ISODate("2022-09-14T00:00:00.000Z")
      }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

