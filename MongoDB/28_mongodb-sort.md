

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB sort



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `sort()`
method to sort the matching documents returned by a query in ascending or
descending order.



To specify the order of the documents returned by a query, you use the
`sort()` method:


    
    
    cursor.sort({field1: order, field2: order, ...})



The `sort()` method allows you to sort the matching documents by one or more
fields (`field1`, `field2`, …) in ascending or descending order.



The `order` takes two values: `1` and `-1`. If you specify `{ field: 1 }`, the
`sort()` will sort the matching documents by the `field` in ascending order:


    
    
    cursor.sort({ field: 1 })



If you specify `{ field: -1}`, the `sort()` method will sort matching
documents by the `field` in descending order:


    
    
    cursor.sort({field: -1})



The following sorts the returned documents by the `field1` in ascending order
and `field2` in descending order:


    
    
    cursor.sort({field1: 1, field2: -1});



It’s straightforward to compare values of the same type. However, it is not
the case for comparing the values of different BSON types.



MongoDB uses the following comparison order from lowest to highest for
comparing values of different BSON types:



For more information on comparison/sort order, [check out this
page](https://docs.mongodb.com/manual/reference/bson-type-comparison-
order/#bson-types-comparison-order).



We’ll use the following `products` collection to illustrate how the `sort()`
method works.


    
    
    db.products.insertMany([
        { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
        { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
        { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
        { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
        { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
        { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
        { "_id" : 7, "name" : "xReader", "price" : null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
    ])



The following query returns all documents from the `products` collection where
the `price` field [exists](https://www.mongodbtutorial.org/mongodb-
crud/mongodb-exists/). For each document, it selects the `_id`, `name`, and
`price` fields:


    
    
    db.products.find({
        'price': {
            $exists: 1
        }
    }, {
        name: 1,
        price: 1
    })



Output:


    
    
    [
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 7, name: 'xReader', price: null }
    ]



To sort the products by prices in ascending order, you use the `sort()` method
like this:


    
    
    db.products.find({
        'price': {
            $exists: 1
        }
    }, {
        name: 1,
        price: 1
    }).sort({
        price: 1
    })



Output:


    
    
    [
      { _id: 7, name: 'xReader', price: null },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]



In this example, the `sort()` method places the document whose price is `null`
first, and then the documents with the prices from lowest to highest.



To sort the documents in descending order, you change the value of the price
field to `-1` as shown in the following query:


    
    
    db.products.find({
        'price': {
            $exists: 1
        }
    }, {
        name: 1,
        price: 1
    }).sort({
        price: -1
    })



Output:


    
    
    [
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 7, name: 'xReader', price: null }
    ]



In this example, the `sort()` method places the document with the highest
price first and the one whose price is `null` last. (See the sort order above)



The following example uses the `sort()` method to sort the products by name
and price in ascending order. It selects only documents where the `price`
field exists and includes the `_id`, `name`, and `price` fields in the
matching documents.


    
    
    db.products.find({
        'price': {
            $exists: 1
        }
    }, {
        name: 1,
        price: 1
    }).sort({
        price: 1,
        name: 1
    });



Output:


    
    
    [
      { _id: 7, name: 'xReader', price: null },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 3, name: 'SmartTablet', price: 899 },
      { _id: 2, name: 'xTablet', price: 899 }
    ]



In this example, the `sort()` method sorts the products by prices first. Then
it sorts the sorted result set by names.



If you look at the result set more closely, you’ll see that the products with
`_id` 3 and 2 have the same price `899`. The `sort()` method places the
`SmartTablet` before the `xTablet` based on the ascending order specified by
the `name` field.



The following example sorts the products by prices in ascending order and
sorts the sorted products by names in descending order:


    
    
    db.products.find({
        'price': {
            $exists: 1
        }
    }, {
        name: 1,
        price: 1
    }).sort({
        price: 1,
        name: -1
    })



Output:


    
    
    [
      { _id: 7, name: 'xReader', price: null },
      { _id: 5, name: 'SmartPhone', price: 599 },
      { _id: 4, name: 'SmartPad', price: 699 },
      { _id: 1, name: 'xPhone', price: 799 },
      { _id: 2, name: 'xTablet', price: 899 },
      { _id: 3, name: 'SmartTablet', price: 899 }
    ]



In this example, the `sort()` method sorts the products by prices in ascending
order. However, it sorts sorted products by names in descending order.



Unlike the previous example, the `sort()` places the `xTable` before
`SmartTablet`.



The following example sorts the documents from the `products` collection by
values in the `releaseDate` field. It selects only document whose
`releaseDate` field exists and includes the `_id`, `name`, and `releaseDate`
fields in the matching documents:


    
    
    db.products.find({
        releaseDate: {
            $exists: 1
        }
    
    }, {
        name: 1,
        releaseDate: 1
    }).sort({
        releaseDate: 1
    });



Output:


    
    
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



In this example, the `sort()` method places the documents with the
`releaseDate` in ascending order.



The following query sorts the products by the values in the `releaseDate`
field in descending order:


    
    
    db.products.find({
        releaseDate: {
            $exists: 1
        }
    
    }, {
        name: 1,
        releaseDate: 1
    }).sort({
        releaseDate: -1
    });



Output:


    
    
    [
      {
        _id: 5,
        name: 'SmartPhone',
        releaseDate: ISODate("2022-09-14T00:00:00.000Z")
      },
      {
        _id: 4,
        name: 'SmartPad',
        releaseDate: ISODate("2020-05-14T00:00:00.000Z")
      },
      {
        _id: 3,
        name: 'SmartTablet',
        releaseDate: ISODate("2015-01-14T00:00:00.000Z")
      },
      {
        _id: 2,
        name: 'xTablet',
        releaseDate: ISODate("2011-09-01T00:00:00.000Z")
      },
      {
        _id: 1,
        name: 'xPhone',
        releaseDate: ISODate("2011-05-14T00:00:00.000Z")
      }
    ]



The following example sorts the products by the values in the `ram` field in
the `spec` embedded documents. It includes the `_id`, `name`, and `spec`
fields in the matching documents.


    
    
    db.products.find({}, {
        name: 1,
        spec: 1
    }).sort({
        "spec.ram": 1
    });



Output:


    
    
    [
      { _id: 1, name: 'xPhone', spec: { ram: 4, screen: 6.5, cpu: 2.66 } },
      {
        _id: 5,
        name: 'SmartPhone',
        spec: { ram: 4, screen: 9.7, cpu: 1.66 }
      },
      {
        _id: 4,
        name: 'SmartPad',
        spec: { ram: 8, screen: 9.7, cpu: 1.66 }
      },
      {
        _id: 3,
        name: 'SmartTablet',
        spec: { ram: 12, screen: 9.7, cpu: 3.66 }
      },
      {
        _id: 2,
        name: 'xTablet',
        spec: { ram: 16, screen: 9.5, cpu: 3.66 }
      },
      {
        _id: 6,
        name: 'xWidget',
        spec: { ram: 64, screen: 9.7, cpu: 3.66 }
      },
      {
        _id: 7,
        name: 'xReader',
        spec: { ram: 64, screen: 6.7, cpu: 3.66 }
      }
    ]

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

