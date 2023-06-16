

[Home](https://www.mongodbtutorial.org/) » [Getting Started with
MongoDB](https://www.mongodbtutorial.org/getting-started/) » MongoDB Basics



 **Summary** : in this tutorial, you’ll learn some basic concepts of MongoDB
such as documents, collections, databases, and namespaces.



In MongoDB, you will often deal with JSON and BSON formats. Therefore, it’s
important to fully understand them.



JSON stands for JavaScript Object Notation. JSON syntax is based on a subset
of JavaScript ECMA-262 3rd edition.



A JSON document is a collection of fields and values in a structured format.
For example:


    
    
    {
       "first_name": "John",
       "last_name": "Doe",
       "age": 22,
       "skills": ["Programming","Databases", "API"]
    }
    
    Code language: JSON / JSON with Comments (json)



BSON stands for Binary JSON, which is a binary-coded serialization of JSON-
like documents.



MongoDB stores data records as BSON documents, which are simply called
documents.

![](https://www.mongodbtutorial.org/wp-content/uploads/2020/08/MongoDB-Document.png)


A document is a set of field-and-value pairs with the following structure:


    
    
    {
       field_name1: value1,
       field_name2: value2,
       field_name3: value3,
       ...
    }



In this syntax, the field names are strings and values can be numbers,
strings, objects, arrays, etc. For example:


    
    
    {
        _id: ObjectId("5f339953491024badf1138ec"),
        title: "MongoDB Tutorial",
        isbn: "978-4-7766-7944-8",
        published_date: new Date('June 01, 2020'),
        author: { first_name: "John"
    , last_name: "Doe"}
    }
    
    Code language: CSS (css)



This document has the following field-and-value pairs:



If you are familiar with a relational database management system (RDBMS), you
will find that a document is similar to a row in a table, but it is much more
expressive.



Field names have the following restrictions:



MongoDB stores documents in a collection. A collection is a group of
documents.

![](https://www.mongodbtutorial.org/wp-content/uploads/2020/08/MongoDB-Collection.png)


A collection is analogous to a table in an RDBMS.



Unlike a table that has a fixed schema, a collection has a dynamic schema.



It means that a collection may contain documents that have any number of
different “shapes”. For example, you can store the following documents in the
same collection:


    
    
    {
        title: "MongoDB Tutorial",
        published_date: new Date('June 01, 2020')
    }
    
    {
        title: "MongoDB Basics",
        published_date: new Date('Jan 01, 2021'),
        isbn": "978-4-7766-7944-8"
    }
    
    Code language: PHP (php)



Note that the second document has one more field than the first one. In
theory, you can have completely different fields for every document.



A collection has a name e.g., `books`. The collection name cannot:



MongoDB stores collections into a database. A single instance of MongoDB can
host multiple databases.

![](https://www.mongodbtutorial.org/wp-content/uploads/2020/08/MongoDB-Database-1.png)


A database can be referenced by a name for example `bookdb`. The database
names cannot:



MongoDB also has some reserved database names such as `admin`, `local`, and
`config` that you cannot use to create new databases.



A namespace is a concatenation of the database name with a collection in that
database. Namespaces allow you to fully qualify collections.



For example, if the collection name is `books` and database name is `bookdb`,
the namespace of the `books` collection would be `bookdb.books`.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

