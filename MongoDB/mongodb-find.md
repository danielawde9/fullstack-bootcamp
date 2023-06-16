

[Home](https://www.mongodbtutorial.org/) » [MongoDB
CRUD](https://www.mongodbtutorial.org/mongodb-crud/) » MongoDB find



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB `find()`
method to select documents from a collection.



The `find()` method finds the documents that satisfy a specified condition and
returns a cursor to the matching documents.



The following shows the syntax of the `find()` method:


    
    
    db.collection.find(query, projection)
    
    Code language: CSS (css)



Similar to the `[findOne()](https://www.mongodbtutorial.org/mongodb-
crud/mongodb-findone/)` method, the `find()` method accepts two optional
arguments.



The `query` is a document that specifies the criteria for selecting documents
from the collection. If you omit the `query` or pass an empty document(`{}`),
the `find()` returns a cursor that returns all documents in the collection.



The `projection` is a document that specifies the fields in the matching
documents to return. If you omit the `projection` argument, the `find()`
method returns all fields in the matching documents.



By default, the `find()` method includes the `_id` field in the matching
documents unless you explicitly specify `_id: false` in the `projection`
document.



Since the mongo shell automatically iterates the cursor returned by the
`find()` method, you don’t need to do any extra steps to get the document from
the cursor.



By default, the mongo shell shows up the first 20 documents. To continue
iteration, you type the `it` command in the shell.



We’ll use the following `books` collection for the demonstration:


    
    
    db.books.insertMany([
    	{ "_id" : 1, "title" : "Unlocking Android", "isbn" : "1933988673", "categories" : [ "Open Source", "Mobile" ] },
    	{ "_id" : 2, "title" : "Android in Action, Second Edition", "isbn" : "1935182722", "categories" : [ "Java" ] },
    	{ "_id" : 3, "title" : "Specification by Example", "isbn" : "1617290084", "categories" : [ "Software Engineering" ] },
    	{ "_id" : 4, "title" : "Flex 3 in Action", "isbn" : "1933988746", "categories" : [ "Internet" ] },
    	{ "_id" : 5, "title" : "Flex 4 in Action", "isbn" : "1935182420", "categories" : [ "Internet" ] },
    	{ "_id" : 6, "title" : "Collective Intelligence in Action", "isbn" : "1933988312", "categories" : [ "Internet" ] },
    	{ "_id" : 7, "title" : "Zend Framework in Action", "isbn" : "1933988320", "categories" : [ "Web Development" ] },
    	{ "_id" : 8, "title" : "Flex on Java", "isbn" : "1933988797", "categories" : [ "Internet" ] },
    	{ "_id" : 9, "title" : "Griffon in Action", "isbn" : "1935182234", "categories" : [ "Java" ] },
    	{ "_id" : 10, "title" : "OSGi in Depth", "isbn" : "193518217X", "categories" : [ "Java" ] },
    	{ "_id" : 11, "title" : "Flexible Rails", "isbn" : "1933988509", "categories" : [ "Web Development" ] },
    	{ "_id" : 13, "title" : "Hello! Flex 4", "isbn" : "1933988762", "categories" : [ "Internet" ] },
    	{ "_id" : 14, "title" : "Coffeehouse", "isbn" : "1884777384", "categories" : [ "Miscellaneous" ] },
    	{ "_id" : 15, "title" : "Team Foundation Server 2008 in Action", "isbn" : "1933988592", "categories" : [ "Microsoft .NET" ] },
    	{ "_id" : 16, "title" : "Brownfield Application Development in .NET", "isbn" : "1933988711", "categories" : [ "Microsoft" ] },
    	{ "_id" : 17, "title" : "MongoDB in Action", "isbn" : "1935182870", "categories" : [ "Next Generation Databases" ] },
    	{ "_id" : 18, "title" : "Distributed Application Development with PowerBuilder 6.0", "isbn" : "1884777686", "categories" : [ "PowerBuilder" ] },
    	{ "_id" : 19, "title" : "Jaguar Development with PowerBuilder 7", "isbn" : "1884777864", "categories" : [ "PowerBuilder", "Client-Server" ] },
    	{ "_id" : 20, "title" : "Taming Jaguar", "isbn" : "1884777686", "categories" : [ "PowerBuilder" ] },
    	{ "_id" : 21, "title" : "3D User Interfaces with Java 3D", "isbn" : "1884777902", "categories" : [ "Java", "Computer Graphics" ] },
    	{ "_id" : 22, "title" : "Hibernate in Action", "isbn" : "193239415X", "categories" : [ "Java" ] },
    	{ "_id" : 23, "title" : "Hibernate in Action (Chinese Edition)", "categories" : [ "Java" ] },
    	{ "_id" : 24, "title" : "Java Persistence with Hibernate", "isbn" : "1932394885", "categories" : [ "Java" ] },
    	{ "_id" : 25, "title" : "JSTL in Action", "isbn" : "1930110529", "categories" : [ "Internet" ] },
    	{ "_id" : 26, "title" : "iBATIS in Action", "isbn" : "1932394826", "categories" : [ "Web Development" ] },
    	{ "_id" : 27, "title" : "Designing Hard Software", "isbn" : "133046192", "categories" : [ "Object-Oriented Programming", "S" ] },
    	{ "_id" : 28, "title" : "Hibernate Search in Action", "isbn" : "1933988649", "categories" : [ "Java" ] },
    	{ "_id" : 29, "title" : "jQuery in Action", "isbn" : "1933988355", "categories" : [ "Web Development" ] },
    	{ "_id" : 30, "title" : "jQuery in Action, Second Edition", "isbn" : "1935182323", "categories" : [ "Java" ] }
    ]);
    
    Code language: JavaScript (javascript)



The following example uses the `find()` method with no parameters to return
all documents from the `books` collection:


    
    
    db.books.find()
    
    Code language: CSS (css)



In the mongo shell, the statement returns the first 20 documents with all
available fields in the matching documents.



If you type `it` command and press enter, you’ll see the next 20 documents.



The following example uses the `find()` method to search for the document with
id 10:


    
    
    db.books.find({_id: 10})
    
    Code language: CSS (css)



The statement returns the document whose `_id` is 10. Since it doesn’t have
the `projection` argument, the returned document includes all available
fields:


    
    
    [
      {
        _id: 10,
        title: 'OSGi in Depth',
        isbn: '193518217X',
        categories: [ 'Java' ]
      }
    ]
    
    Code language: JavaScript (javascript)



The following example uses the `find()` method to search for documents whose
category is `Java`. It returns the fields `_id`, `title` and `isbn`:


    
    
    db.books.find({ categories: 'Java'}, { title: 1,isbn: 1})
    
    Code language: CSS (css)



Output:


    
    
    [
      {
        _id: 2,
        title: 'Android in Action, Second Edition',
        isbn: '1935182722'
      },
      { _id: 9, title: 'Griffon in Action', isbn: '1935182234' },
      { _id: 10, title: 'OSGi in Depth', isbn: '193518217X' },
      {
        _id: 21,
        title: '3D User Interfaces with Java 3D',
        isbn: '1884777902'
      },
      { _id: 22, title: 'Hibernate in Action', isbn: '193239415X' },
      { _id: 23, title: 'Hibernate in Action (Chinese Edition)' },
      {
        _id: 24,
        title: 'Java Persistence with Hibernate',
        isbn: '1932394885'
      },
      { _id: 28, title: 'Hibernate Search in Action', isbn: '1933988649' },
      {
        _id: 30,
        title: 'jQuery in Action, Second Edition',
        isbn: '1935182323'
      }
    ]
    
    Code language: JavaScript (javascript)



To remove the `_id` field from the matching documents, you need to explicitly
specify `_id: 0` in the `projection` argument like this:


    
    
    db.books.find({ categories: 'Java'}, { title: 1,isbn: 1,_id: 0})
    
    Code language: CSS (css)



Output:


    
    
    [
      { title: 'Android in Action, Second Edition', isbn: '1935182722' },
      { title: 'Griffon in Action', isbn: '1935182234' },
      { title: 'OSGi in Depth', isbn: '193518217X' },
      { title: '3D User Interfaces with Java 3D', isbn: '1884777902' },
      { title: 'Hibernate in Action', isbn: '193239415X' },
      { title: 'Hibernate in Action (Chinese Edition)' },
      { title: 'Java Persistence with Hibernate', isbn: '1932394885' },
      { title: 'Hibernate Search in Action', isbn: '1933988649' },
      { title: 'jQuery in Action, Second Edition', isbn: '1935182323' }
    ]
    
    Code language: JavaScript (javascript)



Note that you’ll learn how to construct more complex conditions using
operators in the next tutorials.

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

