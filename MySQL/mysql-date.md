

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » The Ultimate Guide To
MySQL DATE and Date Functions



 **Summary** : in this tutorial, we will introduce you to the MySQL `DATE`
data type and show you some useful date functions to handle the date data
effectively.



MySQL `DATE` is one of the five temporal [data
types](https://www.mysqltutorial.org/mysql-data-types.aspx) used for managing
date values. MySQL uses `yyyy-mm-dd` format for storing a date value. This
format is fixed and it is not possible to change it.



For example, you may prefer to use `mm-dd-yyyy` format but you can’t. Instead,
you follow the standard date format and use the
`[DATE_FORMAT](https://www.mysqltutorial.org/mysql-date_format/)` function to
format the date the way you want.



MySQL uses 3 bytes to store a `DATE` value. The `DATE` values range from
`1000-01-01` to `9999-12-31`. If you want to store a date value that is out of
this range, you need to use a non-temporal data type like
[integer](https://www.mysqltutorial.org/mysql-int/) e.g., three columns, and
each column for the year, month, and day. You also need to create [stored
functions](https://www.mysqltutorial.org/mysql-stored-function/) to simulate
the built-in date functions provided by MySQL, which is not recommended.



When strict mode is disabled, MySQL converts any invalid date e.g.,
`2015-02-30` to the zero date value `0000-00-00`.



MySQL stores the year of the date value using four digits. In case you use
two-digit year values, MySQL still accepts them with the following rules:



However, a date value with two digits is ambiguous therefore you should avoid
using it.



Let’s take a look at the following example.



First, [create a table](https://www.mysqltutorial.org/mysql-create-table/)
named people with birth date column with `DATE` data type.


    
    
    CREATE TABLE people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        birth_date DATE NOT NULL
    );Code language: SQL (Structured Query Language) (sql)



Next, [insert a row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `people` table.


    
    
    INSERT INTO people(first_name,last_name,birth_date)
    VALUES('John','Doe','1990-09-01');Code language: SQL (Structured Query Language) (sql)



Then, [query the data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `people` table.


    
    
    SELECT 
        first_name, 
        last_name, 
        birth_date
    FROM
        people;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATE-Data-Type-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20230%2043%22%3E%3C/svg%3E)


After that, use the two-digit year format to insert data into the `people`
table.


    
    
    INSERT INTO people(first_name,last_name,birth_date)
    VALUES('Jack','Daniel','01-09-01'),
          ('Lily','Bush','80-09-01');Code language: SQL (Structured Query Language) (sql)



In the first row, we used 01 (range 00-69) as the year, so MySQL converted it
to 2001. In the second row, we used 80 (range 70-99) as the year, MySQL
converted it to 1980.



Finally, we can query data from the `people` table to check whether data was
converted based on the conversion rules.


    
    
    SELECT 
        first_name, 
        last_name, 
        birth_date
    FROM
        people;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-Date-Data-Type-Two-digit-Year-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20229%2077%22%3E%3C/svg%3E)


MySQL provides many useful date functions that allow you to manipulate date
effectively.



To get the current date and time, you use
`[NOW()](https://www.mysqltutorial.org/mysql-now/)` function.


    
    
    SELECT NOW();Code language: SQL (Structured Query Language) (sql)


    
    
    +---------------------+
    | NOW()               |
    +---------------------+
    | 2017-05-13 07:59:38 |
    +---------------------+
    1 row in set (0.02 sec)Code language: SQL (Structured Query Language) (sql)



To get only date part of a `[DATETIME](https://www.mysqltutorial.org/mysql-
datetime/)` value, you use the `DATE()` function.


    
    
    SELECT DATE(NOW());Code language: SQL (Structured Query Language) (sql)


    
    
    +-------------+
    | DATE(NOW()) |
    +-------------+
    | 2015-07-13  |
    +-------------+
    1 row in set (0.01 sec)Code language: SQL (Structured Query Language) (sql)



To get the current system date, you use
`[CURDATE()](https://www.mysqltutorial.org/mysql-curdate/)` function as
follows:


    
    
    SELECT CURDATE();Code language: SQL (Structured Query Language) (sql)


    
    
    +------------+
    | CURDATE()  |
    +------------+
    | 2015-07-13 |
    +------------+
    1 row in set (0.02 sec)Code language: SQL (Structured Query Language) (sql)



To format a date value, you use
`[DATE_FORMAT](https://www.mysqltutorial.org/mysql-date_format/)` function.
The following statement formats the date as`mm/dd/yyyy` using the date format
pattern `%m/%d/%Y` :


    
    
    SELECT DATE_FORMAT(CURDATE(), '%m/%d/%Y') today;Code language: SQL (Structured Query Language) (sql)


    
    
    +------------+
    | today      |
    +------------+
    | 07/13/2015 |
    +------------+
    1 row in set (0.02 sec)Code language: SQL (Structured Query Language) (sql)



To calculate the number of days between two date values, you use the
`[DATEDIFF](https://www.mysqltutorial.org/mysql-datediff.aspx)` function as
follows:


    
    
    SELECT DATEDIFF('2015-11-04','2014-11-04') days;Code language: SQL (Structured Query Language) (sql)


    
    
    +------+
    | days |
    +------+
    |  365 |
    +------+
    1 row in set (0.02 sec)Code language: SQL (Structured Query Language) (sql)



To add a number of days, weeks, months, years, etc., to a date value, you use
the [`DATE_ADD`](https://www.mysqltutorial.org/mysql-date_add/) function:


    
    
    SELECT 
        '2015-01-01' start,
        DATE_ADD('2015-01-01', INTERVAL 1 DAY) 'one day later',
        DATE_ADD('2015-01-01', INTERVAL 1 WEEK) 'one week later',
        DATE_ADD('2015-01-01', INTERVAL 1 MONTH) 'one month later',
        DATE_ADD('2015-01-01', INTERVAL 1 YEAR) 'one year later';Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATE-DATE_ADD-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20598%2037%22%3E%3C/svg%3E)


Similarly, you can subtract an [interval](https://www.mysqltutorial.org/mysql-
interval/) from a date using the
[`DATE_SUB`](https://www.mysqltutorial.org/mysql-date_sub/) function:


    
    
    SELECT 
        '2015-01-01' start,
        DATE_SUB('2015-01-01', INTERVAL 1 DAY) 'one day before',
        DATE_SUB('2015-01-01', INTERVAL 1 WEEK) 'one week before',
        DATE_SUB('2015-01-01', INTERVAL 1 MONTH) 'one month before',
        DATE_SUB('2015-01-01', INTERVAL 1 YEAR) 'one year before';Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DATE-DATE_SUB-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20523%2037%22%3E%3C/svg%3E)


If you want to get the day, month, quarter, and year of a date value, you can
use the corresponding function [`DAY`](https://www.mysqltutorial.org/mysql-
day/), [`MONTH`](https://www.mysqltutorial.org/mysql-month/), `QUARTER`, and
[`YEAR`](https://www.mysqltutorial.org/mysql-year/) as follows:


    
    
    SELECT DAY('2000-12-31') day, 
           MONTH('2000-12-31') month, 
           QUARTER('2000-12-31') quarter, 
           YEAR('2000-12-31') year;Code language: SQL (Structured Query Language) (sql)


    
    
    +------+-------+---------+------+
    | day  | month | quarter | year |
    +------+-------+---------+------+
    |   31 |    12 |       4 | 2000 |
    +------+-------+---------+------+
    1 row in set (0.00 sec)Code language: SQL (Structured Query Language) (sql)



To get the week information week related functions. For example,
[`WEEK`](https://www.mysqltutorial.org/mysql-week/) function returns the week
number, `WEEKDAY` function returns the weekday index, and `WEEKOFYEAR`
function returns the calendar week.


    
    
    SELECT 
        WEEKDAY('2000-12-31') weekday,
        WEEK('2000-12-31') week,
        WEEKOFYEAR('2000-12-31') weekofyear;Code language: SQL (Structured Query Language) (sql)


    
    
    +---------+------+------------+
    | weekday | week | weekofyear |
    +---------+------+------------+
    |       6 |   53 |         52 |
    +---------+------+------------+
    1 row in set (0.04 sec)Code language: SQL (Structured Query Language) (sql)



The week function returns the week number with the zero-based index if you
don’t pass the second argument or if you pass 0. If you pass 1, it will return
week number with 1-indexed.


    
    
    SELECT 
        WEEKDAY('2000-12-31') weekday,
        WEEK('2000-12-31',1) week,
        WEEKOFYEAR('2000-12-31') weekofyear;Code language: SQL (Structured Query Language) (sql)


    
    
    +---------+------+------------+
    | weekday | week | weekofyear |
    +---------+------+------------+
    |       6 |   52 |         52 |
    +---------+------+------------+
    1 row in set (0.00 sec)Code language: SQL (Structured Query Language) (sql)



In this tutorial, you have learned about the MySQL `DATE` data type and how to
use some useful date functions to manipulate date values.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

