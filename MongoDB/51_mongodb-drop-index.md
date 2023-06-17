

[Home](https://www.mongodbtutorial.org/) » [MongoDB
Indexes](https://www.mongodbtutorial.org/mongodb-indexes/) » MongoDB Drop
Index



 **Summary** : in this tutorial, you’ll learn how to use the MongoDB
`dropIndex()` method to drop an index from a collection.



To drop an index from a collection, you use the `db.collection.dropIndex()`
method:


    
    
    db.collection.dropIndex(index)



In this syntax, the `index` specifies an index to be dropped. The `index` can
be either a string that specifies the name of an index or a document that
describes the specification of the index that you want to drop.



Note that you cannot drop the default index on the `_id` field.



Starting in MongoDB 4.2, you cannot use the `db.collection.dropIndex('*')` to
drop all non-_id indexes. Instead, you use the `dropIndexes()` method:


    
    
    db.collection.dropIndexes()



Let’s take some examples of dropping one or more indexes from a collection.



First, [create a new index](https://www.mongodbtutorial.org/mongodb-
indexes/mongodb-createindex/) for the `year` field in the `movies` collection:


    
    
    db.movies.createIndex({year: 1})



Output:


    
    
    year_1



In this example, the `createIndex()` method creates an index with the name
`year_1`.



Second, show all the indexes of the `movies` collection by using the
`getIndexes()` method:


    
    
    db.movies.getIndexes()



Output:


    
    
    [
      { v: 2, key: { _id: 1 }, name: '_id_' },
      { v: 2, key: { year: 1 }, name: 'year_1' }
    ]



Third, drop the `year_1` index using the `dropIndex()` method:


    
    
    db.movies.dropIndex('year_1')



Output:


    
    
    { nIndexesWas: 2, ok: 1 }



The output shows that one index has been dropped.



Finally, verify the index deletion using the `getIndexes()` method:


    
    
    db.movies.getIndexes()



Output:


    
    
    [ { v: 2, key: { _id: 1 }, name: '_id_' } ]



The output shows that the `year_1` index was deleted and is not in the index
list of the `movies` collection.



First, create an index for runtime field in the movies collection:


    
    
    db.movies.createIndex({runtime: -1})



Second, list the indexes of the movies collection:


    
    
    db.movies.getIndexes()



Output:


    
    
    [
      { v: 2, key: { _id: 1 }, name: '_id_' },
      { v: 2, key: { runtime: -1 }, name: 'runtime_-1' }
    ]



Third, drop the index `runtime_-1` but use the index specification instead of
the index name:


    
    
    db.movies.dropIndex({runtime: -1});



Output:


    
    
    { nIndexesWas: 2, ok: 1 }



First, create two indexes for the year and runtime fields of the movies
collection:


    
    
    db.movies.createIndex({year: 1})
    db.movies.createIndex({runtime: 1})



Second, show the indexes of the movies collection:


    
    
    db.movies.getIndexes()



Output:


    
    
    [
      { v: 2, key: { _id: 1 }, name: '_id_' },
      { v: 2, key: { year: 1 }, name: 'year_1' },
      { v: 2, key: { runtime: 1 }, name: 'runtime_1' }
    ]



Third, drop all non-_id indexes of movies collection using the `dropIndexes()`
method:


    
    
    db.movies.dropIndexes()



Output:


    
    
    {
      nIndexesWas: 3,
      msg: 'non-_id indexes dropped for collection',
      ok: 1
    }

![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mongodbtutorial.org/wp-content/themes/evolution/img/right.svg)


Copyright © 2022 by mongodbtutorial.org Website. All Right Reserved.

