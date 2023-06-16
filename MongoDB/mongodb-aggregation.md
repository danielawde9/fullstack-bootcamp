

[Home](https://www.mongodbtutorial.org/) » MongoDB Aggregation



 **Summary** : in this tutorial, you’ll learn how to use MongoDB aggregation
operations to group documents and apply one or more aggregation functions to
the groups.



MongoDB aggregation operations allow you to process multiple documents and
return the calculated results.



Typically, you use aggregation operations to group documents by specific field
values and perform aggregations on the grouped documents to return computed
results.



For example, you can use aggregation operations to take a list of sales orders
and calculate the total sales amounts grouped by the products.



To perform aggregation operations, you use aggregation pipelines. An
aggregation pipeline contains one or more stages that process the input
documents:

![](https://www.mongodbtutorial.org/wp-content/uploads/2022/03/mongodb-aggregation.svg)


Each stage in the aggregation pipeline performs an operation on the input
documents and returns the output documents. The output documents are then
passed to the next stage. The final stage returns the calculated result.



The operations on each stage can be one of the following:



The following shows the syntax for defining an aggregation pipeline:


    
    
    db.collection.aggregate([{ $match:...},{$group:...},{$sort:...}]);
    
    Code language: CSS (css)



In this syntax:



MongoDB 4.2 or later allows you to use an aggregation pipeline to update
documents.



First, switch to the `coffeeshop` database that stores the coffee sales:


    
    
    use coffeeshop
    
    Code language: PHP (php)



Second, insert documents into the `sales` collection:


    
    
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



Third, use an aggregation pipeline to filter the sales by the `Americanos`,
calculate the sum of quantity grouped by sizes, and sort the result document
by the total quantity in descending order.


    
    
    db.sales.aggregate([
    	{ 
    		$match: { item: "Americanos" } 
    	},
    	{ 
    		$group: {
    			_id: "$size",
    			totalQty: {$sum: "$quantity"}
    		}
    	},
    	{
    		$sort: { totalQty : -1}		
    	}
    ]);
    
    
    Code language: PHP (php)



Output:


    
    
    [
      { _id: 'Grande', totalQty: 33 },
      { _id: 'Short', totalQty: 22 },
      { _id: 'Tall', totalQty: 15 }
    ]
    
    Code language: JavaScript (javascript)



This aggregation pipeline contains three stages:

![](https://www.mongodbtutorial.org/wp-content/uploads/2022/03/mongodb-aggregation-pipleline-example.svg)


If you’re familiar with SQL, the above aggregation pipeline is equivalent to
the following SQL statement:


    
    
    select 
       name as _id, 
       sum(quantity) as totalQty
    from 
       sales 
    where name = 'Americanos'
    group by name
    order by totalQty desc; 
    
    Code language: SQL (Structured Query Language) (sql)



The following table shows the comparison between SQL and MongoDB aggregation:



In this next tutorial, you’ll learn how to use the aggregation pipeline to
perform more complex operations.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

