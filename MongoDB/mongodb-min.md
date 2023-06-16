

[Home](https://www.mongodbtutorial.org/) » [MongoDB
Aggregation](https://www.mongodbtutorial.org/mongodb-aggregation/) » MongoDB
$min



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$min` to
return the minimum value.



The MongoDB `$min` returns the minimum value. The `$min` operator uses both
value and type for comparing according to the [BSON comparison order for
values of different types](https://docs.mongodb.com/manual/reference/bson-
type-comparison-order/#std-label-bson-types-comparison-order).



Here’s the syntax of the `$min` operator:


    
    
    { $min: <expression> }
    
    Code language: HTML, XML (xml)



If you apply the `$min` to the field that has a null or missing value in all
documents, the `$min` returns `null`.



However, if you apply the `$min` to the field that has a null or missing value
in some documents, but not all, the `$min` only considers non-null and non-
missing values for that field.



We’ll use the following `sales` collection to demonstrate the `$min`:


    
    
    db.sales.insertMany([
    	{ "_id" : 1, "item" : "Americanos", "price" : 5, "size": "Short", "quantity" : 22, "date" : ISODate("2022-01-15T08:00:00Z") },
    	{ "_id" : 2, "item" : "Cappuccino", "price" : 6, "size": "Short","quantity" : 12, "date" : ISODate("2022-01-16T09:00:00Z") },
    	{ "_id" : 3, "item" : "Lattes", "price" : 15, "size": "Grande","quantity" : 25, "date" : ISODate("2022-01-16T09:05:00Z") },
    	{ "_id" : 4, "item" : "Mochas", "price" : 25,"size": "Tall", "quantity" : 11, "date" : ISODate("2022-02-17T08:00:00Z") },
    	{ "_id" : 5, "item" : "Americanos", "price" : 10, "size": "Grande","quantity" : 12, "date" : ISODate("2022-02-18T21:06:00Z") },
    	{ "_id" : 6, "item" : "Cappuccino", "price" : 7, "size": "Tall","quantity" : 20, "date" : ISODate("2022-02-20T10:07:00Z") },
    	{ "_id" : 7, "item" : "Lattes", "price" : 25,"size": "Tall", "quantity" : 30, "date" : ISODate("2022-02-21T10:08:00Z") },
    	{ "_id" : 8, "item" : "Americanos", "price" : 10, "size": "Grande","quantity" : 21, "date" : ISODate("2022-02-22T14:09:00Z") },
    	{ "_id" : 9, "item" : "Cappuccino", "price" : 10, "size": "Grande","quantity" : 17, "date" : ISODate("2022-02-23T14:09:00Z") },
    	{ "_id" : 10, "item" : "Americanos", "price" : 8, "size": "Tall","quantity" : 15, "date" : ISODate("2022-02-25T14:09:00Z")}
    ]);
    
    Code language: JavaScript (javascript)



The following example uses the `$min` to find the minimum quantity from all
the documents:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: null,
          maxQty: { $min: '$quantity' },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    
    
    Code language: PHP (php)



Output:


    
    
    [ { minQty: 11 } ]
    
    Code language: CSS (css)



The following example uses the `$min` operator to group documents in the
`item` field and returns the minimum quantity per group of documents:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          minQty: { $min: '$quantity' },
        },
      },
    ]);
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Mochas', minQty: 11 },
      { _id: 'Americanos', minQty: 12 },
      { _id: 'Lattes', minQty: 25 },
      { _id: 'Cappuccino', minQty: 12 }
    ]
    
    Code language: JavaScript (javascript)



The following groups the documents by the `item` field and returns the minimum
amount for each group of sales:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          maxQty: { $min: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Cappuccino', minQty: 72 },
      { _id: 'Americanos', minQty: 110 },
      { _id: 'Lattes', minQty: 375 },
      { _id: 'Mochas', minQty: 275 }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

