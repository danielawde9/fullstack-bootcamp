

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB insertOne



 **Summary** : in this tutorial, you will learn how to use the MongoDB
`insertOne()` method to insert a single document into a collection.



The `insertOne()` method allows you to insert a single document into a
collection.



The `insertOne()` method has the following syntax:


    
    
    db.collection.insertOne(
       <document>,
       { writeConcern: <document>}
    )



The `insertOne()` method accepts two arguments:



The `insertOne()` method returns a document that contains the following
fields:



Note that if the `collection` does not exist, the `insertOne()` method will
also create the collection and insert the `document` into it.



If you don’t specify the `_id` field in the document, MongoDB will add the
`_id` field and generate a unique `ObjectId` for it before insert.



If you explicitly specify a value for the `_id` field, you need to ensure that
it is unique in the collection. Otherwise, you will get a duplicate key error.



To insert multiple documents into a collection, you use the
`[insertMany()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-
insertmany/)` method.



First, you need to launch the mongo shell and connect it to the `bookdb`
database:


    
    
    mongosh bookdb



The following example uses the `insertOne()` method to insert a new document
into the books collection:


    
    
    db.books.insertOne({ 
        title: 'MongoDB insertOne',
        isbn: '0-7617-6154-3'
    });



Output:


    
    
    {
            "acknowledged" : true,
            "insertedId" : ObjectId("5f31cf00902f22de3464ddc4")
    }



In this example, we passed a document to the `insertOne()` method without
specifying the `_id` field. Therefore, MongoDB automatically added the `_id`
field and assigned it a unique `ObjectId` value.



Note that you will see a different `ObjectId` value from this example because
`ObjectId` values are specific to machine and time when the `insertOne()`
method executes.



To select the document that you have inserted, you can use the
`[find()](https://www.mongodbtutorial.org/mongodb-crud/mongodb-find/)` method
like this:


    
    
    db.books.find()



Output:


    
    
    [
      {
        _id: ObjectId("621489fcf514a446bf1a98ea"),
        title: 'MongoDB insertOne',
        isbn: '0-7617-6154-3'
      }
    ]



The following example uses the `insertOne()` method to insert a document that
has an `_id` field into the `books `collection:


    
    
    db.books.insertOne({
       _id: 1,
       title: "Mastering Big Data",
       isbn: "0-9270-4986-4"
    });



Output:


    
    
    { "acknowledged" : true, "insertedId" : 1 }



The following example attempts to insert another document whose `_id` field
already exists into the `books` collection:


    
    
    db.books.insertOne({
       _id: 1,
       title: "MongoDB for JS Developers",
       isbn: "0-4925-3790-9"
    });



Since the `_id: 1` already exists, MongoDB threw the following exception:


    
    
    WriteError({
            "index" : 0,
            "code" : 11000,
            "errmsg" : "E11000 duplicate key error collection: bookstore.books index: _id_ dup key: { _id: 1.0 }",
            "op" : {
                    "_id" : 1,
                    "title" : "MongoDB for JS Developers",
                    "isbn" : "0-4925-3790-9"
            }
    })

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

