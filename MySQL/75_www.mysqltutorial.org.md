

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL TIMESTAMP



 **Summary** : in this tutorial, you will learn about **MySQL TIMESTAMP** data
type and `TIMESTAMP` column features such as automatic initialization and
updating.



The MySQL `TIMESTAMP` is a temporal [data
type](https://www.mysqltutorial.org/mysql-data-types.aspx "MySQL Data Types")
that holds the combination of [date](https://www.mysqltutorial.org/mysql-
date/) and [time](https://www.mysqltutorial.org/mysql-time/). The [format
](https://www.mysqltutorial.org/mysql-date_format/ "MySQL DATE_FORMAT
function")of a `TIMESTAMP` is `YYYY-MM-DD HH:MM:SS` which is fixed at 19
characters.



The `TIMESTAMP` value has a range from ` '1970-01-01 00:00:01' UTC` to
`'2038-01-19 03:14:07' UTC`.



When you [insert ](https://www.mysqltutorial.org/mysql-insert-statement.aspx
"MySQL INSERT statement")a `TIMESTAMP` value into a table, MySQL converts it
from your connection’s time zone to UTC for storing.



When you [query](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx) a `TIMESTAMP` value, MySQL converts the UTC value back to your
connection’s time zone. Note that this conversion does not take place for
other temporal data types such as
`[DATETIME](https://www.mysqltutorial.org/mysql-datetime/)`.



By default, the connection time zone is the MySQL Server’s time zone. And you
can use a different time zone when you connect to MySQL Server.



When you retrieve a `TIMESTAMP` value that was inserted by a client in a
different time zone, you will get a value that is not the same as the value
stored in the database. As long as you don’t change the time zone, you can get
the same `TIMESTAMP` value that you stored.



Let’s take an example to see how MySQL handles `TIMESTAMP` values.



First, [created a new table](https://www.mysqltutorial.org/mysql-create-table/
"MySQL Create Table") named `test_timestamp` that has a `TIMESTAMP` column:
`t1`;


    
    
    CREATE TABLE test_timestamp (
        t1  TIMESTAMP
    );



Second, set the session’s time zone to ‘+00:00’ UTC by using the `SET
time_zone` statement.


    
    
    SET time_zone='+00:00';



Third, insert a `TIMESTAMP` value into the `test_timestamp` table.


    
    
    INSERT INTO test_timestamp(t1)
    VALUES('2008-01-01 00:00:01');



Fourth, select the `TIMESTAMP` value from the `test_timestamp` table.


    
    
    SELECT t1 FROM test_timestamp;

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-Timestamp-example-1.jpg)


Fifth, set the session’s time zone to a different time zone to see what value
we will get from the database server:


    
    
    SET time_zone ='+03:00';



Finally, query data from the table:


    
    
    SELECT t1 FROM test_timestamp;

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-Timestamp-timezone-changes.jpg)


As you see, we received a different time value adjusted to the new time zone.



Consider the following example.



First, [creates a table](https://www.mysqltutorial.org/mysql-create-table/)
named `categories`:


    
    
    CREATE TABLE categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );



In the `categories` table, the `created_at` column is a `TIMESTAMP` column
whose default value is set to `CURRENT_TIMESTAMP`.



Second, [inserts](https://www.mysqltutorial.org/mysql-insert-statement.aspx) a
new row into the `categories` table without specifying the value for the
`created_at` column:


    
    
    INSERT INTO categories(name) 
    VALUES ('A');


    
    
    SELECT * FROM categories;

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-TIMESTAMP-Automatic-Initialization.png)


As you can see from the output, MySQL used the timestamp at the time of
inserting as a default value for the `created_at` column.



So a `TIMESTAMP` column can be automatically initialized to the current
timestamp for inserted rows that specify no value for the column. This feature
is called **automatic initialization**.



Third, [add a new column](https://www.mysqltutorial.org/mysql-add-column/)
named `updated_at` to the `categories` table.


    
    
    ALTER TABLE categories
    ADD COLUMN updated_at 
      TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      ON UPDATE CURRENT_TIMESTAMP;



The default value of the `updated_at` column is `CURRENT_TIMESTAMP`.



And, we have a new clause `ON UPDATE CURRENT_TIMESTAMP` that follows the
`DEFAULT CURRENT_TIMESTAMP` clause. Let’s see its effect.



Fourth, [inserts](https://www.mysqltutorial.org/mysql-insert-statement.aspx) a
new row into the `categories` table.


    
    
    INSERT INTO categories(name)
    VALUES('B');



Fifth, query data from the `categories` table:


    
    
    SELECT * FROM categories;

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-TIMESTAMP-Automatic-Updating.png)


The default value of the column `created_at` is the timestamp when the row was
inserted.



Sixth, update the value in the column `name` of the row id 2:


    
    
    UPDATE categories 
    SET name = 'B+'
    WHERE id = 2;
    



Seventh, query data from the `categories` table to check the update:


    
    
    SELECT *
    FROM categories
    WHERE id = 2;

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-TIMESTAMP-Automatic-Updating-feature.png)


Notice that the value in the `updated_at` column changed to the timestamp at
the time the row was updated.



The ability of a `TIMESTAMP` column to be automatically updated to the current
timestamp when the value in any other column in the row changed from its
current value is called **automatic updating**.



The column `updated_at` is referred to as an auto-updated column.



Note that if you execute the `UPDATE` statement to update the same value for
the `name` column, the `updated_at` column will not be updated.


    
    
    UPDATE categories 
    SET name = 'B+'
    WHERE id = 2;



The value in the `updated_at` remains unchanged.

![](https://www.mysqltutorial.org/wp-content/uploads/2011/03/MySQL-TIMESTAMP-Automatic-Updating-feature.png)


For more information on automatic initialized and updating, please check it
out the [time
initialization](https://dev.mysql.com/doc/refman/5.7/en/timestamp-
initialization.html) on MySQL website.



As of MySQL 5.6.5, the `[DATETIME](https://www.mysqltutorial.org/mysql-
datetime/)` columns also have automatic initialization and updating features.
In addition, the `DEFAULT_CURRENT_TIMESTAMP` and `ON UPDATE CURRENT TIMESTAMP`
can be applied to multiple columns.



In this tutorial, you have learned about MySQL `TIMESTAMP` data type and how
to use automatic initialization and updating features of `TIMESTAMP` columns.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

