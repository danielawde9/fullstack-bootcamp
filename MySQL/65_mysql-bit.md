

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » Pramatic Uses of MySQL
BIT Data Type



 **Summary** : in this tutorial, you will learn about MySQL `BIT` data type
and how to use it to store `BIT` data in a table.



The `BIT` type that allows you to store bit values. Here is the syntax:


    
    
    BIT(n)



The `BIT(n)` can store up to n-bit values. The `n` can range from 1 to 64.



The default value of n is 1 if you skip it. Therefore the following statements
are equivalent:


    
    
    column_name BIT(1);
    



and


    
    
    column_name BIT;
    



To specify a bit value literal, you use `b'val'` or `0bval` notation, which
`val` is a binary value that contains only 0 and 1.



The leading `b` can be written as `B`, for example:


    
    
    b01
    B11 
    



are the valid bit literals.



However, the leading `0b` is case-sensitive, therefore, you cannot use `0B`.
The following is an invalid bit literal value:


    
    
    0B'1000'
    



By default the [character set](https://www.mysqltutorial.org/mysql-character-
set/) of a bit-value literal is the binary string as follows:


    
    
    SELECT CHARSET(B'); -- binary
    



The following statement [creates a new
table](https://www.mysqltutorial.org/mysql-create-table/) named
`working_calendars` that has the days column is `BIT(7)`:


    
    
    CREATE TABLE working_calendars(
        y INT
        w INT,
        days BIT(7),
        PRIMARY KEY(y,w)
    );
    



The values in column `days` indicate whether the day is a working day or day
off i.e., 1: working day and 0: day off.



Suppose that Saturday and Friday of the first week of 2017 are not the working
days, you can [insert a row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `working_calendars` table:


    
    
    INSERT INTO working_calendars(y,w,days)
    VALUES(2017,1,B'1111100');
    



The following query retrieves data from the `working_calendar` table:


    
    
    SELECT 
        y, w , days
    FROM
        working_calendars;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BIT-example.png)


As you see, the bit value in the `days` column is converted into an integer.
To represent it as bit values, you use the `BIN` function:


    
    
    SELECT 
        y, w , bin(days)
    FROM
        working_calendar;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BIT-BIN-function.png)


If you insert a value to a `BIT(n)` column that is less than `n` bits long,
MySQL will pad zeros on the left of the bit value.



Suppose the first day of the second week is off, you can insert `01111100`
into the `days `column. However, the `111100` value will also work because
MySQL will pad one zero to the left.


    
    
    INSERT INTO working_calendars(y,w,days)
    VALUES(2017,2,B'111100');
    



To view the data you use the same query as above:


    
    
    SELECT 
        y, w , bin(days)
    FROM
        working_calendars; 
    

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BIT-insert-example.png)


As you can see, MySQL removed the leading zeros prior to returning the result.
To display it correctly, you can use the `LPAD` function:


    
    
    SELECT 
        y, w , lpad(bin(days),7,'0')
    FROM
        working_calendars;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BIT-LPAD-example.png)


It works as expected.



In this tutorial, you have learned about MySQL `BIT` data type and how to use
it to store `BIT` data in a table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

