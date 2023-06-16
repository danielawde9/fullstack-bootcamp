

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $nin: Not In
Operator



 **Summary** : in this tutorial, you’ll learn about the MongoDB $nin (Not In)
operator and how to apply it effectively.



The `$nin` is a query comparison operator that allows you to
[find](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/) documents
where:



Here is the syntax of the `$nin` operator:


    
    
    { field: { $nin: [ <value1>, <value2> ...]} }
    
    Code language: CSS (css)



Like the `[$in](https://www.mongodbtutorial.org/mongodb-crud/mongodb-in/)`
operator, the value list (`<value1>`, `<value2>`,…) can be a list of literal
values or regular expressions.



We’ll use this `products` collections:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])
    
    Code language: JavaScript (javascript)



The following query uses the `$nin` operator to select documents from the
`products` collection whose `price` is neither `599` or `799`:


    
    
    db.products.find({
        price: {
            $nin: [699, 799]
        }
    }, {
        name: 1,
        price: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    [
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 5, name: 'SmartPhone', price: 599 }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the `$nin` operator to select documents where the
`color` array doesn’t have an element that is either `"black"` or `"white"`:


    
    
    db.products.find({
        color: {
            $nin: ["black", "white"]
        }
    }, {
        name: 1,
        color: 1
    })
    
    Code language: CSS (css)



The query returned the following documents:


    
    
    [ { _id: 3, name: 'SmartTablet', color: [ 'blue' ] } ]
    
    Code language: CSS (css)



The following query uses the `$nin` operator to find documents where the
`color` array doesn’t have an element that matches `/^g+/` and `/^w+/` regular
expression:


    
    
    db.products.find({
        color: {
            $nin: [/^g+/, /^w+/]
        }
    }, {
        name: 1,
        color: 1
    })
    
    Code language: CSS (css)



It returned the following documents:


    
    
    [ { _id: 3, name: 'SmartTablet', color: [ 'blue' ] } ]
    
    Code language: CSS (css)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

