

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » A Practical Guide to
MySQL JSON Data Type By Example



 **Summary** : in this tutorial, you will learn how to use MySQL JSON data
type to store JSON documents in the database.



MySQL supports the native JSON data type since version 5.7.8. The native JSON
data type allows you to store JSON documents more efficiently than the JSON
text format in the previous versions.



MySQL stores JSON documents in an internal format that allows quick read
access to document elements. The JSON binary format is structured in the way
that permits the server to search for values within the JSON document directly
by key or array index, which is very fast.



The storage of a JSON document is approximately the same as the storage of
`LONGBLOB` or `LONGTEXT` data.



To define a column whose data type is JSON, you use the following syntax:


    
    
    CREATE TABLE table_name (
        ...
        json_column_name JSON,
        ... 
    );
    



Notice that a JSON column cannot have a default value. In addition, a JSON
column cannot be [indexed](https://www.mysqltutorial.org/mysql-index/mysql-
create-index/) directly. Instead, you can create an index on a [generated
column](https://www.mysqltutorial.org/mysql-generated-columns/) that contains
values extracted from the JSON column. When you [query
data](https://www.mysqltutorial.org/mysql-select-statement-query-data.aspx)
from the JSON column, the MySQL optimizer will look for compatible indexes on
virtual columns that match JSON expressions.



Suppose, we have to track the visitors and their actions on our website. Some
visitors may just view the pages and other may view the pages and buy the
products. To store this information, we will [create a new
table](https://www.mysqltutorial.org/mysql-create-table/) called `events`.


    
    
    CREATE TABLE events( 
      id int auto_increment primary key, 
      event_name varchar(255), 
      visitor varchar(255), 
      properties json, 
      browser json
    );
    



Each event in the events table has an `id` that uniquely identifies the event.
An event also has a name e.g., pageview, purchase, etc., The `visitor` column
is used to store the visitor information.



The `properties` and `browser` columns are the JSON columns. They are used to
store properties of an event and specification of the browser that visitors
use to browse the website.



Let’s [insert some data](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `events` table:


    
    
    INSERT INTO events(event_name, visitor,properties, browser) 
    VALUES (
      'pageview', 
       '1',
       '{ "page": "/" }',
       '{ "name": "Safari", "os": "Mac", "resolution": { "x": 1920, "y": 1080 } }'
    ),
    ('pageview', 
      '2',
      '{ "page": "/contact" }',
      '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 2560, "y": 1600 } }'
    ),
    (
      'pageview', 
      '1',
      '{ "page": "/products" }',
      '{ "name": "Safari", "os": "Mac", "resolution": { "x": 1920, "y": 1080 } }'
    ),
    (
      'purchase', 
       '3',
      '{ "amount": 200 }',
      '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1600, "y": 900 } }'
    ),
    (
      'purchase', 
       '4',
      '{ "amount": 150 }',
      '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
    ),
    (
      'purchase', 
      '4',
      '{ "amount": 500 }',
      '{ "name": "Chrome", "os": "Windows", "resolution": { "x": 1680, "y": 1050 } }'
    );
    



To pull values out of the JSON columns, you use the column path operator (
`->`).


    
    
    SELECT id, browser->'$.name' browser
    FROM events;
    



This query returns the following output:


    
    
    +----+-----------+
    | id | browser   |
    +----+-----------+
    |  1 | "Safari"  |
    |  2 | "Firefox" |
    |  3 | "Safari"  |
    |  4 | "Firefox" |
    |  5 | "Firefox" |
    |  6 | "Chrome"  |
    +----+-----------+
    6 rows in set (0.00 sec)
    



Notice that data in the `browser` column is surrounded by quote marks. To
remove the quote marks, you use the inline path operator (`->>`) as follows:


    
    
    SELECT id, browser->>'$.name' browser
    FROM events;
    



As you can see in the following output, the quote marks were removed:


    
    
    +----+---------+
    | id | browser |
    +----+---------+
    |  1 | Safari  |
    |  2 | Firefox |
    |  3 | Safari  |
    |  4 | Firefox |
    |  5 | Firefox |
    |  6 | Chrome  |
    +----+---------+
    6 rows in set (0.00 sec)
    



To get the browser usage, you can use the following statement:


    
    
    SELECT browser->>'$.name' browser, 
          count(browser)
    FROM events
    GROUP BY browser->>'$.name';
    



The output of the query is as follows:


    
    
    +---------+----------------+
    | browser | count(browser) |
    +---------+----------------+
    | Safari  |              2 |
    | Firefox |              3 |
    | Chrome  |              1 |
    +---------+----------------+
    3 rows in set (0.02 sec)
    



To calculate the total revenue by the visitor, you use the following query:


    
    
    SELECT visitor, SUM(properties->>'$.amount') revenue
    FROM events
    WHERE properties->>'$.amount' > 0
    GROUP BY visitor;
    



Here is the output:


    
    
    +---------+---------+
    | visitor | revenue |
    +---------+---------+
    | 3       |     200 |
    | 4       |     650 |
    +---------+---------+
    2 rows in set (0.00 sec)
    



In this tutorial, you have learned about the MySQL JSON data type and how to
use it for storing JSON documents in the database.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

