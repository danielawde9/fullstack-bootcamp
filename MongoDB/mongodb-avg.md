

[Home](https://www.mongodbtutorial.org/) » [MongoDB
Aggregation](https://www.mongodbtutorial.org/mongodb-aggregation/) » MongoDB
$avg



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$avg` to
return the average value of the numeric values.



The MongoDB `$avg` returns the average value of numeric values. The syntax of
the `$avg` is as follows:


    
    
    { $avg: <expression> }
    
    Code language: HTML, XML (xml)



The `$avg` ignores the non-numeric and missing values. If all values are non-
numeric, the `$avg` returns `null`.



Let’s take some examples of using the `$avg`. We’ll use the following `sales`
collection:


    
    
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



The following example groups the documents by the `item` field and uses the
`$avg` to calculate the average quantity for each group:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          averageQty: { $avg: '$quantity' },
        },
      },
    ]);
    
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Americanos', averageQty: 17.5 },
      { _id: 'Lattes', averageQty: 27.5 },
      { _id: 'Mochas', averageQty: 11 },
      { _id: 'Cappuccino', averageQty: 16.333333333333332 }
    ]
    
    Code language: JavaScript (javascript)



The following example groups the documents by the `item` field and use the
`$avg` to calculate the average amount for each group:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
        },
      },
      { $sort: { averageAmount: 1 } },
    ])
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Cappuccino', averageAmount: 127.33333333333333 },
      { _id: 'Americanos', averageAmount: 140 },
      { _id: 'Mochas', averageAmount: 275 },
      { _id: 'Lattes', averageAmount: 562.5 }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the `$avg` to calculate the average amount per
group and returns the group with the average amount greater than `150`:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
        },
      },
      { $match: { averageAmount: { $gt: 150 } } },
      { $sort: { averageAmount: 1 } },
    ]);
    
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Mochas', averageAmount: 275 },
      { _id: 'Lattes', averageAmount: 562.5 }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

