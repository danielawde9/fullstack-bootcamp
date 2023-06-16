

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB limit



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `limit()`
method to specify the number of documents returned by a query.



The `[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)`
method may return a lot of documents to the application. Typically, the
application may not need that many documents.



To limit the number of returned documents, you use the `limit()` method:


    
    
    db.collection.find(<query>).limit(<documentCount>)
    
    Code language: CSS (css)



The `<documentCount>` is in the range of -231 and 231. If you specify a value
for the `<documentCount>` that is out of this range, the behavior of the
`limit()` is unpredictable.



If the `<documentCount>` is negative, the `limit()` returns the same number of
documents as if the `<documentCount>` is positive. In addition, it closes the
cursor after returning a single batch of documents.



If the result set does not fit into a single batch, the number of returned
documents will be less than the specified limit.



If the `<documentCount>` is zero, then is equivalent to setting no limit.



Note that the `limit()` is analogous to the [`LIMIT` clause in
SQL](https://www.sqltutorial.org/sql-limit/).



To get the predictable result set using the `limit()`, you need to
[sort](https://www.mongodbtutorial.org/mongodb-crud/mongodb-sort/) the result
set first before applying the method like this:


    
    
    cursor
       .sort({...})
       .limit(<documentCount>)
    
    Code language: HTML, XML (xml)



In practice, you often use the `limit()` with the `skip()` method to paginate
a collection.



The `skip()` method specifies from where the query should start returning the
documents:


    
    
    cursor.skip(<offset>)
    
    Code language: HTML, XML (xml)



The following shows the documents on the page `pageNo` with the
`documentCount` documents per page:


    
    
    db.collection.find({...}
    ).sort({...}
    ).skip(pageNo > 0 ? ( ( pageNo - 1 ) * documentCount) : 0
    ).limit(documentCount);



The `skip(<offset>)` requires the MongoDB server to scan from the beginning of
the result set before starting to return the documents. When the `<offset>`
increases, the `skip()` will become slower.



Note that the `limit()` and `skip()` is analogous to the [`LIMIT` `OFFSET`
clause in SQL](https://www.sqltutorial.org/sql-limit/).



We’ll use the following `products` collection:


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
        { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
        { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
        { "_id" : 7, "name" : "xReader", "price" : null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
    ])
    
    Code language: JavaScript (javascript)



The following example uses the `limit()` method to get the most expensive
product in the `products` collection. It includes the `_id`, `name`, and
`price` fields in the returned documents:


    
    
    db.products.find({}, {
        name: 1,
        price: 1
    }).sort({
        price: -1
    }).limit(1);
    
    Code language: CSS (css)



Output:


    
    
    [ { _id: 2, name: 'xTablet', price: 899 } ]
    
    Code language: CSS (css)



In this example, we sort the products by prices in descending order and use
`limit()` to select the first one.



The `products` collection has two products at the same price `899`. The
returned document depends on the order of documents stored on the disk.



To get the predictable result, the sort should be unique. For example:


    
    
    db.products.find({}, {
        name: 1,
        price: 1
    }).sort({
        price: -1,
        name: 1
    }).limit(1);
    
    Code language: CSS (css)



Output:


    
    
    [ { _id: 3, name: 'SmartTablet', price: 899 } ]
    
    Code language: CSS (css)



This example sorts the document by prices in descending order. And then it
sorts the sorted result set by names in ascending order. The `limit()` returns
the first document in the final result set.



Suppose you want to divide the products collection into pages, each has 2
products.



The following query uses the `skip()` and `limit()` to get the documents on
the second page:


    
    
    db.products.find({}, {
        name: 1,
        price: 1
    }).sort({
        price: -1,
        name: 1
    }).skip(2).limit(2);
    
    Code language: CSS (css)



Output:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 4, name: 'SmartPad', price: 699 }
    ]
    
    Code language: JavaScript (javascript)

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

