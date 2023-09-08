

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » A Complete Guide To
MySQL DATETIME Data Type



 **Summary** : in this tutorial, you will learn about MySQL `DATETIME` data
type and how to use some handy functions for manipulating `DATETIME`
effectively.



You use MySQL `DATETIME` to store a value that contains both
[date](https://www.mysqltutorial.org/mysql-date/) and
[time](https://www.mysqltutorial.org/mysql-time/). When you [query
data](https://www.mysqltutorial.org/mysql-select-statement-query-data.aspx)
from a `DATETIME` column, MySQL displays the `DATETIME` value in the following
format:


    
    
    YYYY-MM-DD HH:MM:SS



By default, `DATETIME` values range from `1000-01-01 00:00:00` to `9999-12-31
23:59:59`.



A `DATETIME` value uses 5 bytes for storage. In addition, a `DATETIME` value
can include a trailing fractional second up to microseconds with the format
`YYYY-MM-DD HH:MM:SS[.fraction]` e.g., `2015-12-20 10:01:00.999999`. When
including the fractional second precision, `DATETIME` values require more
storage as illustrated in the following table:



For example, `2015-12-20 10:01:00.999999 `requires 8 bytes, 5 bytes for
`2015-12-20 10:01:00` and 3 bytes for `.999999` while `2015-12-20 10:01:00.9`
requires only 6 bytes, 1 byte for the fractional second precision.



Note that before MySQL 5.6.4, `DATETIME` values requires 8 bytes storage
instead of 5 bytes.



MySQL provides another temporal data type that is similar to the `DATETIME`
called `[TIMESTAMP](https://www.mysqltutorial.org/mysql-timestamp.aspx)`.



The `TIMESTAMP` requires 4 bytes while `DATETIME` requires 5 bytes. Both
`TIMESTAMP` and `DATETIME `require additional bytes for fractional seconds
precision.



`TIMESTAMP` values range from `1970-01-01 00:00:01 UTC` to `2038-01-19
03:14:07 UTC`. If you want to store temporal values that are beyond 2038, you
should use `DATETIME` instead of `TIMESTAMP`.



MySQL stores `TIMESTAMP` in UTC value. However, MySQL stores the `DATETIME`
value as is without timezone. Let’s see the following example.



First, set the timezone of the current connection to `+00:00`.


    
    
    SET time_zone = '+00:00';



Next, [create a table](https://www.mysqltutorial.org/mysql-create-table/)
named `timestamp_n_datetime` that consists of two columns: `ts` and `dt` with
`TIMESTAMP` and `DATETIME` types using the following statement.


    
    
    CREATE TABLE timestamp_n_datetime (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ts TIMESTAMP,
        dt DATETIME
    );



Then, [insert](https://www.mysqltutorial.org/mysql-insert-statement.aspx) the
current date and time into both `ts` and `dt` columns of the
`timestamp_n_datetime` table,


    
    
    INSERT INTO timestamp_n_datetime(ts,dt)
    VALUES(NOW(),NOW());



After that, [query data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `timestamp_n_datetime` table.


    
    
    SELECT 
        ts, 
        dt
    FROM
        timestamp_n_datetime;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-vs-TIMESTAMP.jpg)


Both values in `DATETIME` and `TIMESTAMP` columns are the same.



Finally, set the connection’s time zone to `+03:00` and query data from the
`timestamp_n_datetime` table again.


    
    
    SET time_zone = '+03:00';
    
    SELECT 
        ts, 
        dt
    FROM
        timestamp_n_datetime;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-vs-TIMESTAMP-timezone-changes.jpg)


As you can see, the value in the `TIMESTAMP` column is different. This is
because the `TIMESTAMP` column stores the date and time value in UTC when we
changed the time zone, the value of the `TIMESTAMP` column is adjusted
according to the new time zone.



It means that if you use the `TIMESTAMP` data to store date and time values,
you should take a serious consideration when you move your database to a
server located in a different time zone.



The following statement sets the variable `@dt` to the current date and time
using the `[NOW()](https://www.mysqltutorial.org/mysql-now/)` function.


    
    
    SET @dt =  NOW();



To query the value of the `@dt` variable, you use the following `SELECT`
statement:


    
    
    SELECT @dt;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-NOW-function.png)


To extract the date portion from a `DATETIME` value, you use the `DATE`
function as follows:


    
    
    SELECT DATE(@dt);

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATE-function-example.png)


This function is very useful in case you want to query data based on a date
but the data stored in the column is based on both date and time.



Let’s see the following example.


    
    
    CREATE TABLE test_dt (
        id INT AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME
    );
    
    INSERT INTO test_dt(created_at)
    VALUES('2015-11-05 14:29:36');



Suppose you want to know which row created on `2015-11-05`, you use the
following query:


    
    
    SELECT 
        *
    FROM
        test_dt
    WHERE
        created_at = '2015-11-05';



It returns no rows.



This is because the `created_at` column contains not only date but also time.
To correct it, you use the `DATE` function as follows:


    
    
    SELECT 
        *
    FROM
        test_dt
    WHERE
        DATE(created_at) = '2015-11-05';

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATE-function.png)


It returns one row as expected. In case the table has many rows, MySQL has to
perform a full table scan to locate the rows that match the condition.



To extract the time portion from a `DATETIME` value, you use the `TIME`
function as the following statement:


    
    
    SELECT TIME(@dt);

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-TIME-function.png)


To get the year, quarter, month, week, day, hour, minute, and second from a
`DATETIME` value, you use the functions as shown in the following statement:


    
    
    SELECT 
        HOUR(@dt),
        MINUTE(@dt),
        SECOND(@dt),
        DAY(@dt),
        WEEK(@dt),
        MONTH(@dt),
        QUARTER(@dt),
        YEAR(@dt);

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-datetime-functions.png)


To format a `DATETIME` value, you use the
`[DATE_FORMAT](https://www.mysqltutorial.org/mysql-date_format/)` function.
For example, the following statement formats a `DATETIME` value based on the
`%H:%i:%s - %W %M %Y` format:


    
    
    SELECT DATE_FORMAT(@dt, '%H:%i:%s - %W %M %Y');

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATE_FORMAT-function.png)


To add an [interval ](https://www.mysqltutorial.org/mysql-interval/)to a
`DATETIME` value, you use [`DATE_ADD`](https://www.mysqltutorial.org/mysql-
date_add/) function as follows:


    
    
    SELECT @dt start, 
           DATE_ADD(@dt, INTERVAL 1 SECOND) '1 second later',
           DATE_ADD(@dt, INTERVAL 1 MINUTE) '1 minute later',
           DATE_ADD(@dt, INTERVAL 1 HOUR) '1 hour later',
           DATE_ADD(@dt, INTERVAL 1 DAY) '1 day later',
           DATE_ADD(@dt, INTERVAL 1 WEEK) '1 week later',
           DATE_ADD(@dt, INTERVAL 1 MONTH) '1 month later',
           DATE_ADD(@dt, INTERVAL 1 YEAR) '1 year later';

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATE_ADD-function.png)


To subtract an interval from a `DATETIME` value, you use
[`DATE_SUB`](https://www.mysqltutorial.org/mysql-date_sub/) function as
follows:


    
    
    SELECT @dt start, 
           DATE_SUB(@dt, INTERVAL 1 SECOND) '1 second before',
           DATE_SUB(@dt, INTERVAL 1 MINUTE) '1 minute before',
           DATE_SUB(@dt, INTERVAL 1 HOUR) '1 hour before',
           DATE_SUB(@dt, INTERVAL 1 DAY) '1 day before',
           DATE_SUB(@dt, INTERVAL 1 WEEK) '1 week before',
           DATE_SUB(@dt, INTERVAL 1 MONTH) '1 month before',
           DATE_SUB(@dt, INTERVAL 1 YEAR) '1 year before';

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATE_SUB-function.png)


To calculate a difference in days between two `DATETIME` values, you use the
`[DATEDIFF](https://www.mysqltutorial.org/mysql-datediff.aspx)` function.
Notice that the `DATEDIFF` function only considers the date part of a
`DATETIME` value in the calculation.



See the following example.



First, [create a table](https://www.mysqltutorial.org/mysql-create-table/)
named `datediff_test` that has one column whose data type is `DATETIME`.


    
    
    CREATE TABLE datediff_test (
        dt DATETIME
    );



Second, insert some rows into the `datediff_test` table.


    
    
    INSERT INTO datediff_test(dt)
    VALUES('2010-04-30 07:27:39'),
    	('2010-05-17 22:52:21'),
    	('2010-05-18 01:19:10'),
    	('2010-05-22 14:17:16'),
    	('2010-05-26 03:26:56'),
    	('2010-06-10 04:44:38'),
    	('2010-06-13 13:55:53');



Third, use the `DATEDIFF` function to compare the current date and time with
the value in each row of the `datediff_test` table.


    
    
    SELECT 
        dt, 
        DATEDIFF(NOW(), dt)
    FROM
        datediff_test;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATETIME-DATEDIFF-Example.png)


In this tutorial, you have learned about MySQL `DATETIME` data type and some
useful `DATETIME` functions.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

