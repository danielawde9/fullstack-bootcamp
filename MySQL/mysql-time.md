

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » Mastering MySQL TIME
Data Type



 **Summary** : in this tutorial, we will introduce you to the MySQL `TIME`
data type and show you useful temporal functions to manipulate time data
effectively.



MySQL uses the `'HH:MM:SS'` format for querying and displaying a time value
that represents a time of day, which is within 24 hours. To represent a time
[interval](https://www.mysqltutorial.org/mysql-interval/) between two events,
MySQL uses the `'HHH:MM:SS'` format, which is larger than 24 hours.



To define a `TIME `column, you use the following syntax:


    
    
    column_name TIME;Code language: SQL (Structured Query Language) (sql)



For example, the following snippet defines a column named `start_at` with
`TIME` data type.


    
    
    start_at TIME;Code language: SQL (Structured Query Language) (sql)



A `TIME` value ranges from `-838:59:59` to `838:59:59`. In addition, a `TIME`
value can have fractional seconds part that is up to microseconds precision (6
digits). To define a column whose data type is `TIME` with a fractional second
precision part, you use the following syntax:


    
    
    column_name TIME(N);Code language: SQL (Structured Query Language) (sql)



N is an [integer](https://www.mysqltutorial.org/mysql-int/) that represents
the fractional part, which is up to 6 digits.



The following snippet defines a column with `TIME` data type including 3
digits of fractional seconds.


    
    
    begin_at TIME(3);Code language: SQL (Structured Query Language) (sql)



A `TIME` value takes 3 bytes for storage. In case a `TIME` value includes
fractional second precision, it will take additional bytes based on the number
of digits of the fractional second precision. The following table illustrates
the storage required for fractional second precision.



For example, `TIME` and `TIME(0)` takes 3 bytes. `TIME(1)` and `TIME(2)` takes
4 bytes (3 + 1); `TIME(3)` and `TIME(6)` take 5 and 6 bytes.



Let’s take a look at an example of using the `TIME` data type for columns in a
table.



First, [create a new table](https://www.mysqltutorial.org/mysql-create-table/)
named `tests` that consists of four columns: `id`, `name`, `start_at`, and
`end_at`. The data types of the `start_at` and `end_at` columns are `TIME`.


    
    
    CREATE TABLE tests (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        start_at TIME,
        end_at TIME
    );Code language: SQL (Structured Query Language) (sql)



Second, [insert a row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `tests` table.


    
    
    INSERT INTO tests(name,start_at,end_at)
    VALUES('Test 1', '08:00:00','10:00:00');Code language: SQL (Structured Query Language) (sql)



Third, [query data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `tests` table.


    
    
    SELECT 
        name, start_at, end_at
    FROM
        tests;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-TIME-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20195%2043%22%3E%3C/svg%3E)


Notice that we use `'HH:MM:SS'` as the literal time value in the
`[INSERT](https://www.mysqltutorial.org/mysql-insert-statement.aspx)`
statement. Let’s examine all the valid time literals that MySQL can recognize.



MySQL recognizes various time formats besides the `'HH:MM:SS'` format that we
mentioned earlier.



MySQL allows you to use the `'HHMMSS'` format without delimiter ( : ) to
represent time value. For example, `'08:30:00'` and `'10:15:00'` can be
rewritten as `'083000'` and `'101500'`.


    
    
    INSERT INTO tests(name,start_at,end_at)
    VALUES('Test 2','083000','101500');Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-TIME-HHMMSS-literal.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20197%2066%22%3E%3C/svg%3E)


However, `108000` is not a valid time value because `80` does not represent
the correct minute. In this case, MySQL will raise an error if you try to
insert an invalid time value into a table.


    
    
    INSERT INTO tests(name,start_at,end_at)
    VALUES('Test invalid','083000','108000');Code language: SQL (Structured Query Language) (sql)



MySQL issued the following error message after executing the above statement.


    
    
    Error Code: 1292. Incorrect time value: '108000' for column 'end_at' at row 1Code language: SQL (Structured Query Language) (sql)



In addition to the string format, MySQL accepts the `HHMMSS` as a number that
represents a time value. You can also use `SS`, `MMSS`. For example, instead
of using `'082000'`, you can use `082000` as follows:


    
    
    INSERT INTO tests(name,start_at,end_at)
    VALUES('Test 3',082000,102000);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-TIME-HHMMSS-numeric.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20195%2087%22%3E%3C/svg%3E)


For the time interval, you can use the `'D HH:MM:SS'` format where `D`
represents days with a range from 0 to 34. A more flexible syntax is
`'HH:MM'`, `'D HH:MM'`, `'D HH'`, or `'SS'`.



If you use the delimiter:, you can use 1 digit to represent hours, minutes, or
seconds. For example, `9:5:0` can be used instead of `'09:05:00'`.


    
    
    INSERT INTO tests(name,start_at,end_at)
    VALUES('Test 4','9:5:0',100500);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-TIME-literals-1-digit.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20193%20109%22%3E%3C/svg%3E)


MySQL provides several useful temporal functions for manipulating `TIME` data.



To get the current time of the database server, you use the `CURRENT_TIME`
function. The `CURRENT_TIME` function returns the current time value as a
string ( `'HH:MM:SS'`) or a numeric value ( `HHMMSS`) depending on the context
where the function is used.



The following statements illustrate the `CURRENT_TIME` function in both string
and numeric contexts:


    
    
    SELECT 
        CURRENT_TIME() AS string_now,
        CURRENT_TIME() + 0 AS numeric_now;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-CURRENT_TIME-function.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20177%2045%22%3E%3C/svg%3E)


To add a `TIME` value to another `TIME` value, you use the `ADDTIME` function.
To subtract a `TIME` value from another `TIME` value, you use the `SUBTIME`
function.



The following statement adds and subtracts 2 hours 30 minutes to and from the
current time.


    
    
    SELECT 
        CURRENT_TIME(),
        ADDTIME(CURRENT_TIME(), 023000),	
        SUBTIME(CURRENT_TIME(), 023000);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-ADDTIME-SUBTIME-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20519%2056%22%3E%3C/svg%3E)


In addition, you can use the `TIMEDIFF()` function to get a difference between
two `TIME` values.


    
    
    SELECT 
        TIMEDIFF(end_at, start_at)
    FROM
        tests;Code language: SQL (Structured Query Language) (sql)



Although MySQL uses `'HH:MM:SS'` when retrieving and displaying the a `TIME`
value, you can display the `TIME` value in your preferred way using the
`TIME_FORMAT` function.



The `TIME_FORMAT` function is like the
`[DATE_FORMAT](https://www.mysqltutorial.org/mysql-date_format/)` function
except that the `TIME_FORMAT` function is used to format a `TIME` value only.



See the following example.


    
    
    SELECT 
        name,
        TIME_FORMAT(start_at, '%h:%i %p') start_at,
        TIME_FORMAT(end_at, '%h:%i %p') end_at
    FROM
        tests;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-TIME_FORMAT-function-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20110%22%3E%3C/svg%3E)


In the time format string above:



To extract the hour, minute, and second from a `TIME` value, you use `HOUR`,
`MINUTE`, and `SECOND` functions as follows:

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-HOUR-MINUTE-SECOND-functions.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20207%20110%22%3E%3C/svg%3E)


To get the UTC time, you use `UTC_TIME` function as follows:


    
    
    SELECT 
       CURRENT_TIME(), 
       UTC_TIME();Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-UTC_TIME.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20204%2045%22%3E%3C/svg%3E)


In this tutorial, we have been covered a lot about MySQL `TIME` data type and
some commonly used temporal functions for manipulating `TIME` values.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

