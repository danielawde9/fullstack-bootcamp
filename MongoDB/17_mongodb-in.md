

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB $in



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$in`
operator to select documents where the value of a field equals any value in an
array.



The `$in` is a comparison query operator that allows you to select documents
where the value of a field is equal to any value in an array.



The following shows the syntax of the `$in` operator:


    
    
    { field: { $in: [<value1>, <value2>,...] }}



If the `field` holds a single value, then the `$in` operator selects documents
where the value of the `field` is equal to any value such as `<value1>`,
`<value2>`.



In case the `field` holds an array, the `$in` operator selects documents where
the array contains at least one element that equals any value (`<value1>`,
`<value2>`).



The value list `<value1>`, `<value2>`, etc., can be a list of literal values
or regular expressions.



A [regular expression](https://www.javascripttutorial.net/javascript-regular-
expression/) is a set of characters that defines a search pattern e.g.,
`/\d+/` any digits such as 1, 123, and 1234.



We’ll use this `products` collections in the following examples:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
        { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
     ])



The following example uses the `$in` operator to select documents from the
`products` collection whose the `price` is either `599` or `799`:


    
    
    db.products.find({
        price: {
            $in: [699, 799]
        }
    }, {
        name: 1,
        price: 1
    })



It returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 4, name: 'SmartPad', price: 699 }
    ]



The products collection has the `color` array that contains some colors.



The following example uses the `$in` operator to select documents where the
`color` array has at least one element either `"black"` or `"white"`:


    
    
    db.products.find({
        color: {
            $in: ["black", "white"]
        }
    }, {
        name: 1,
        color: 1
    })



The query returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', color: [ 'white', 'black' ] },
      { _id: 2, name: 'xTablet', color: [ 'white', 'black', 'purple' ] },
      {
        _id: 4,
        name: 'SmartPad',
        color: [ 'white', 'orange', 'gold', 'gray' ]
      },
      {
        _id: 5,
        name: 'SmartPhone',
        color: [ 'white', 'orange', 'gold', 'gray' ]
      }
    ]



The following query uses the $in operator to find documents where the `color`
array has at least one element that matches either `/^g+/` or `/^w+/` regular
expression:


    
    
    db.products.find({
        color: {
            $in: [/^g+/, /^w+/]
        }
    }, {
        name: 1,
        color: 1
    })



It returned the following documents:


    
    
    [
      { _id: 1, name: 'xPhone', color: [ 'white', 'black' ] },
      { _id: 2, name: 'xTablet', color: [ 'white', 'black', 'purple' ] },
      {
        _id: 4,
        name: 'SmartPad',
        color: [ 'white', 'orange', 'gold', 'gray' ]
      },
      {
        _id: 5,
        name: 'SmartPhone',
        color: [ 'white', 'orange', 'gold', 'gray' ]
      }
    ]



The `/^g+`/ regular expression matches any string that begins with the letter
`g` and is followed by any number of characters (`+`). Similarly, the `/^w+/`
regular expression matches any string that starts with the letter `w` and is
followed by any number of characters (`+`). This tutorial explains the
[regular expressions in
JavaScript](https://www.javascripttutorial.net/javascript-regular-expression/)
in detail.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

