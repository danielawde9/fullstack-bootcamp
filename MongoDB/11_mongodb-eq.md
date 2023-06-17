

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $eq



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$eq`
operator to specify an equality condition.



The `$eq` operator is a comparison query operator that allows you to match
documents where the value of a field equals a specified value.



The following shows the syntax of `$eq` operator:


    
    
    { <field>: { $eq: <value> } }



The query is equivalent to the following:


    
    
    {<field>: <value>}



We’ll use the following `products` collection for the demonstration:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$eq` operator to query the `products`
collection to select all documents where the value of the `price` field equals
`899`:


    
    
    db.products.find({
        price: {
            $eq: 899
        }
    }, {
        name: 1,
        price: 1
    })



The query is equivalent to the following:


    
    
    db.products.find({
        price: 899
    }, {
        name: 1,
        price: 1
    })



They both match the following documents:


    
    
    [
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]



The following example uses the `$eq` operator to search for documents where
the value of the `ram` field in the `spec` document equals `4`:


    
    
    db.products.find({
        "spec.ram": {
            $eq: 4
        }
    }, {
        name: 1,
        "spec.ram": 1
    })



It is equivalent to the following:


    
    
    db.products.find({
        "spec.ram": 4
    
    }, {
        name: 1,
        "spec.ram": 1
    })



Both of these queries returns the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', spec: { ram: 4 } },
      { _id: 5, name: 'SmartPhone', spec: { ram: 4 } }
    ]



The following example uses the `$eq` operator to query the `products`
collection to find all documents where the array `color` contains an element
with the value `"black"`:


    
    
    db.products.find({
        color: {
            $eq: "black"
        }
    }, {
        name: 1,
        color: 1
    })



It’s equivalent to:


    
    
    db.products.find({
        color: "black"
    
    }, {
        name: 1,
        color: 1
    })



Both queries return the following matching documents:


    
    
    [
      { _id: 1, name: 'xPhone', color: [ 'white', 'black' ] },
      { _id: 2, name: 'xTablet', color: [ 'white', 'black', 'purple' ] }
    ]



The following example uses the `$eq` operator to select documents in the
`widget` collection with the published date is `2020-05-14`:


    
    
    db.products.find({
        releaseDate: {
            $eq: new ISODate("2020-05-14")
        }
    }, {
        name: 1,
        releaseDate: 1
    })



It returned the following document:


    
    
    [
      {
        _id: 4,
        name: 'SmartPad',
        releaseDate: ISODate("2020-05-14T00:00:00.000Z")
      }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

