

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $ne



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$ne`
operator to query documents from a collection.



The `$ne` is a comparison query operator that allows you to select documents
where the value of a filed is **not equal to** a specified value. It also
includes documents that **don’t contain the field**.



The `$ne` is called the **inequality operator**. Here is the syntax of the
`$ne` operator:


    
    
    { field: {$ne: value}}



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
    ,
        { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 },"color":["black"],"storage":[1024]}
     ])



The following example uses the `$ne` operator to select documents from the
`products` collection where the price is not equal to `899`:


    
    
    db.products.find({
        price: {
            $ne: 899
        }
    }, {
        name: 1,
        price: 1
    })



It matches the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 6, name: 'xWidget' }
    ]



The following example uses `$ne` operator to select documents where the value
of the `screen` field in the `spec` document is not equal to 9.7:


    
    
    db.products.find({
        "spec.screen": {
            $ne: 9.7
        }
    }, {
        name: 1,
        "spec.screen": 1
    })



Output:


    
    
    [
      { _id: 1, name: 'xPhone', spec: { screen: 6.5 } },
      { _id: 2, name: 'xTablet', spec: { screen: 9.5 } }
    ]



The following example uses the `$ne` operator to query the `products`
collection to find documents where the array `storage` does not have any
element that equals 128:


    
    
    db.products.find({
        storage: {
            $ne: 128
        }
    }, {
        name: 1,
        storage: 1
    });



It matched the following documents:


    
    
    [ { _id: 6, name: 'xWidget', storage: [ 1024 ] } ]



The following query uses the `$ne` operator to find documents from the
`products` collection where the release date is not `2015-01-14`:


    
    
    db.products.find({
        releaseDate: {
            $ne: new ISODate('2015-01-14')
        }
    }, {
        name: 1,
        releaseDate: 1
    });



It returns the documents whose release dates are not `2015-01-14` and also the
document that does not include the field `releaseDate` :


    
    
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
      },
      { _id: 6, name: 'xWidget' }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

