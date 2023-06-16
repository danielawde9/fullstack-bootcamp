

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL CHAR Data Type



 **Summary** : in this tutorial, you will learn about MySQL `CHAR` data type
and how to apply it in your database table design.



The `CHAR` data type is a fixed-length character type in MySQL. You often
declare the `CHAR` type with a length that specifies the maximum number of
characters that you want to store. For example, `CHAR(20)` can hold up to 20
characters.



If the data that you want to store is a fixed size, then you should use the
`CHAR` data type. You’ll get a better performance in comparison with `VARCHAR`
in this case.



The length of the `CHAR` data type can be any value from 0 to 255. When you
store a `CHAR` value, MySQL pads its value with spaces to the length that you
declared.



When you query the `CHAR` value, MySQL removes the trailing spaces.



Note that MySQL will not remove the trailing spaces if you enable the
[PAD_CHAR_TO_FULL_LENGTH](http://dev.mysql.com/doc/refman/5.7/en/sql-
mode.html#sqlmode_pad_char_to_full_length) SQL mode.



Consider the following example.



First, [creates a table](https://www.mysqltutorial.org/mysql-create-table/)
with a `CHAR` column.


    
    
    CREATE TABLE mysql_char_test (
        status CHAR(3)
    );Code language: SQL (Structured Query Language) (sql)



The data type of the `status` column is `CHAR` . And it can hold up to 3
characters.



Second, [insert two rows](https://www.mysqltutorial.org/mysql-insert-multiple-
rows/) into the `mysql_char_test` table.


    
    
    INSERT INTO mysql_char_test(status)
    VALUES('Yes'),('No');Code language: SQL (Structured Query Language) (sql)



Third, use the [length](https://www.mysqltutorial.org/mysql-string-length/)
function to get the length of each `CHAR` value.


    
    
    SELECT 
        status, 
        LENGTH(status)
    FROM
        mysql_char_test;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2016/01/MySQL-CHAR-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20163%2067%22%3E%3C/svg%3E)


Fourth, inserts a `CHAR` value with the leading and trailing spaces.


    
    
    INSERT INTO mysql_char_test(status)
    VALUES(' Y ');Code language: SQL (Structured Query Language) (sql)



Finally, query the inserted values, you will see that MySQL removes the
trailing spaces.


    
    
    SELECT 
        status, 
        LENGTH(status)
    FROM
        mysql_char_test;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2016/01/MySQL-CHAR-with-leading-and-trailing-spaces.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20169%2091%22%3E%3C/svg%3E)


When storing or comparing the `CHAR` values, MySQL uses the [character
set](https://www.mysqltutorial.org/mysql-character-set/)
[collation](https://www.mysqltutorial.org/mysql-collation/) assigned to the
column.



MySQL does not consider trailing spaces when comparing `CHAR` values using the
comparison operator such as =, <>, >, <, etc.



Notice that the `[LIKE](https://www.mysqltutorial.org/mysql-like/)` operator
does consider the trailing spaces when you do pattern matching with `CHAR`
values.



In the previous example, we stored the value `Y` with both leading and
trailing spaces. However, when we execute the following query:


    
    
    SELECT * 
    FROM mysql_char_test
    WHERE status = 'Y';Code language: SQL (Structured Query Language) (sql)



MySQL returns no row because it does not consider the trailing space. To match
with the ‘ Y ‘, we need to remove the trailing space as follows:


    
    
    SELECT *
    FROM mysql_char_test
    WHERE status = ' Y';Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2016/01/MySQL-CHAR-query.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2076%2045%22%3E%3C/svg%3E)


If the `CHAR` column has a `[UNIQUE](https://www.mysqltutorial.org/mysql-
unique/)` index and you insert a value that is different from an existing
value in a number of trailing spaces, MySQL will reject the changes because of
duplicate-key error.



See the following example.



First, [create a unique index](https://www.mysqltutorial.org/mysql-unique/)
for the `status` column of the `mysql_char_test` table.


    
    
    CREATE UNIQUE INDEX uidx_status 
    ON mysql_char_test(status);Code language: SQL (Structured Query Language) (sql)



Second, [insert a new row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `mysql_char_test` table.


    
    
    INSERT INTO mysql_char_test(status)
    VALUES('N');Code language: SQL (Structured Query Language) (sql)



Third, insert the following value will cause a duplicate key error.


    
    
    INSERT INTO mysql_char_test(status)
    VALUES('N ');Code language: SQL (Structured Query Language) (sql)


    
    
    Error Code: 1062. Duplicate entry 'N' for key 'uidx_status'Code language: JavaScript (javascript)



In this tutorial, we have introduced you to the MySQL `CHAR` data type and its
features. Now, you should have a good understanding of the CHAR data type to
apply it in your database design.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

