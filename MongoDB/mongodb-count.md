

[Home](https://www.mongodbtutorial.org/) » [MongoDB
Aggregation](https://www.mongodbtutorial.org/mongodb-aggregation/) » MongoDB
$count



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `$count`
to return the number of documents in a group.



MongoDB `$count` returns the number of documents in a group. Here’s the syntax
of the `$count`:


    
    
    { $count: {} }
    
    Code language: PHP (php)



Note that the `$count` does not accept any parameters.



The `$count` is functionally equivalent to using the following
`[$sum](https://www.mongodbtutorial.org/mongodb-aggregation/mongodb-sum/)` in
the `$group` stage:


    
    
    { $sum: 1 }
    
    Code language: PHP (php)



We’ll use the following `sales` collection to demonstrate the `$count`:


    
    
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



The following example uses the MongoDB `$count` to return the number of items
in the `sales` collection:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          itemCount: { $count: {} },
        },
      },
    ])
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Mochas', itemCount: 1 },
      { _id: 'Americanos', itemCount: 4 },
      { _id: 'Lattes', itemCount: 2 },
      { _id: 'Cappuccino', itemCount: 3 }
    ]
    
    Code language: JavaScript (javascript)



In this example:



The following example uses the `$count` to calculate the number of documents
per item and returns the item with a count greater than two:


    
    
    db.sales.aggregate([
      {
        $group: {
          _id: '$item',
          itemCount: { $count: {} },
        },
      },
      {
        $match: { itemCount: { $gt: 2 } },
      },
    ]);
    
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Americanos', itemCount: 4 },
      { _id: 'Cappuccino', itemCount: 3 }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

