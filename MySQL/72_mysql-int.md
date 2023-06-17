

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL INT Data Type



 **Summary** : in this tutorial, you will learn about MySQL `INT` or integer
data type and how to use it in your database table design. In addition, we
will show you how to use the _display width_ and _ZEROFILL_ attributes of an
integer column.



In MySQL, `INT` stands for the integer that is a whole number. An integer can
be written without a fractional component e.g., 1, 100, 4, -10, and it cannot
be 1.2, 5/3, etc. An integer can be zero, positive, and negative.



MySQL supports all standard SQL integer types `INTEGER` or `INT` and
`SMALLINT`. In addition, MySQL provides `TINYINT` `MEDIUMINT`, and `BIGINT` as
extensions to the SQL standard.



MySQL `INT` [data type](https://www.mysqltutorial.org/mysql-data-types.aspx)
can be signed and unsigned. The following table illustrates the
characteristics of each integer type including storage in bytes, minimum
value, and maximum value.



Let’s look at some examples of using integer data type.



Because integer type represents exact numbers, you usually use it as the
[primary key ](https://www.mysqltutorial.org/mysql-primary-key/)of a table. In
addition, the `INT` column can have an `AUTO_INCREMENT `attribute.



When you [insert](https://www.mysqltutorial.org/mysql-insert-statement.aspx) a
`NULL` value or 0 into the `INT AUTO_INCREMENT` column, the value of the
column is set to the next [sequence](https://www.mysqltutorial.org/mysql-
sequence/) value. Notice that the sequence value starts with 1.



When you insert a value, which is not `NULL` or zero, into the
`AUTO_INCREMENT` column, the column accepts the value. In addition, the
sequence is reset to the next value of the inserted value.



First, [create a new table](https://www.mysqltutorial.org/mysql-create-table/)
named `items` with an integer column as the [primary
key](https://www.mysqltutorial.org/mysql-primary-key/):


    
    
    CREATE TABLE items (
        item_id INT AUTO_INCREMENT PRIMARY KEY,
        item_text VARCHAR(255)
    );



You can use either `INT` or `INTEGER` in the [`CREATE
TABLE`](https://www.mysqltutorial.org/mysql-create-table/) statement above
because they are interchangeable. Whenever you insert a new row into the
`items` table, the value of the `item_id` column is increased by 1.



Next, the following `[INSERT](https://www.mysqltutorial.org/mysql-insert-
statement.aspx)` statement [inserts three
rows](https://www.mysqltutorial.org/mysql-insert-multiple-rows/) into the
`items` table.


    
    
    INSERT INTO 
        items(item_text)
    VALUES
        ('laptop'), 
        ('mouse'),
        ('headphone');



Then, query data from the `items` table using the following
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` statement:


    
    
    SELECT * FROM items;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-INT-AUTO_INCREMENT.jpg)


After that, insert a new row whose value of the `item_id` column is specified
explicitly.


    
    
    INSERT INTO items(item_id,item_text)
    VALUES(10,'Server');



Since the current value of the `item_id` column is 10, the sequence is reset
to 11. If you insert a new row, the `AUTO_INCREMENT` column will use 11 as the
next value.


    
    
    INSERT INTO items(item_text)
    VALUES('Router');



Finally, query the data of the `items` table again to see the result.


    
    
    SELECT * FROM items;

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-INT-AUTO_INCREMENT-Example.jpg)


Note that starting from MySQL 5.1, the `AUTO_INCREMENT` column accepts only
positive values and does not allow negative values.



First, [create a table](https://www.mysqltutorial.org/mysql-create-table/)
called `classes` that has the column `total_member` with the unsigned integer
data type:


    
    
    CREATE TABLE classes (
        class_id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        total_member INT UNSIGNED,
        PRIMARY KEY (class_id)
    );
    



Second, [insert a new row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `classes` table:


    
    
    INSERT INTO classes(name, total_member)
    VALUES('Weekend',100);



It worked as expected.



Third, attempt to insert a negative value into the `total_member` column:


    
    
    INSERT INTO classes(name, total_member)
    VALUES('Fly',-50);
    



MySQL issued the following error:


    
    
    Error Code: 1264. Out of range value for column 'total_member' at row 1



MySQL provides an extension that allows you to specify the display width along
with the `INT` datatype. The display width is wrapped inside parentheses
following the `INT` keyword e.g., `INT(5)` specifies an `INT` with the display
width of five digits.



It is important to note that the display width attribute does not control the
value ranges that the column can store. The display width attribute is
typically used by the applications to format the integer values. MySQL
includes the display width attribute as the metadata of the returned result
set.



In addition to the display width attribute, MySQL provides a non-standard
`ZEROFILL` attribute. In this case, MySQL replaces spaces with zero. Consider
the following example.



First, create a table named `zerofill_tests` :


    
    
    CREATE TABLE zerofill_tests(
        id INT AUTO_INCREMENT PRIMARY KEY,
        v1 INT(2) ZEROFILL,
        v2 INT(3) ZEROFILL,
        v3 INT(5) ZEROFILL
    );



Second, insert a new row into the `zerofill_tests` table.


    
    
    INSERT INTO zerofill_tests(v1,v2,v3)
    VALUES(1,6,9);



Third, [query data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `zerofill_tests `table.


    
    
    SELECT 
        v1, v2, v3
    FROM
        zerofill_tests;



![MySQL INT with ZEROFILL](https://www.mysqltutorial.org/wp-
content/uploads/2015/11/MySQL-INT-with-ZEROFILL.jpg)![MySQL INT with
ZEROFILL](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20151%2043%22%3E%3C/svg%3E)  
The `v1` column has a display width 2 including `ZEROFILL.`Its value is 1
therefore, you see `01` in the output. MySQL replaces the first space by 0.

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-INT-with-ZEROFILL.jpg)


The v2 column has a display with 3 including `ZEROFILL`. Its value is 6
therefore, you see `00` as the leading zeros.



The v3 column has the display width 5 with `ZEROFILL`, while its value is 9,
therefore MySQL pads `0000` at the beginning of the number in the output.



Note that if you use `ZEROFILL` attribute for an integer column, MySQL will
automatically add an `UNSIGNED` attribute to the column.



In this tutorial, you have learned how to use the MySQL `INT` data type for
designing database tables.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

