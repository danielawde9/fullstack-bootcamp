

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » The Essential Guide to
MySQL VARCHAR Data Type



 **Summary** : this tutorial introduces you to the MySQL `VARCHAR` data type
and discusses some important features of `VARCHAR`.



MySQL `VARCHAR` is the variable-length string whose length can be up to
65,535. MySQL stores a `VARCHAR` value as a 1-byte or 2-byte length prefix
plus actual data.



The length prefix specifies the number of bytes in the value. If a column
requires less than 255 bytes, the length prefix is 1 byte. In case the column
requires more than 255 bytes, the length prefix is two length bytes.



The maximum length, however, is subject to maximum row size (65,535 bytes) and
the [character set](https://www.mysqltutorial.org/mysql-character-set/) used.
It means that the total length of all columns should be less than 65,535
bytes.



Let’s take a look at an example.



We will [create a new table](https://www.mysqltutorial.org/mysql-create-
table/) that has two columns `s1` and `s2` with the length of 32765(+2 for
length prefix) and 32766 (+2).Note that 32765+2+32766+2=65535, which is the
maximum row size.


    
    
    CREATE TABLE IF NOT EXISTS varchar_test (
        s1 VARCHAR(32765) NOT NULL,
        s2 VARCHAR(32766) NOT NULL
    )  CHARACTER SET 'latin1' COLLATE LATIN1_DANISH_CI;
    Code language: SQL (Structured Query Language) (sql)



The statement created the table successfully. However, if we increase the
length of the `s1` column by 1.


    
    
    CREATE TABLE IF NOT EXISTS varchar_test_2 (
        s1 VARCHAR(32766) NOT NULL, -- error
        s2 VARCHAR(32766) NOT NULL
    )  CHARACTER SET 'latin1' COLLATE LATIN1_DANISH_CI;
    Code language: SQL (Structured Query Language) (sql)



MySQL will issue the error message:


    
    
    Error Code: 1118. Row size too large. The maximum row size for the used table type, not counting BLOBs, is 65535. This includes storage overhead, check the manual. You have to change some columns to TEXT or BLOBs 0.000 secCode language: JavaScript (javascript)



As you can see, the row size is too large and the statement failed.



If you [insert](https://www.mysqltutorial.org/mysql-insert-statement.aspx) a
string whose length is greater than the length of a `VARCHAR` column, MySQL
will issue an error. Consider the following example:


    
    
    CREATE TABLE items (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(3)
    );
    
    INSERT INTO items(title)
    VALUES('ABCD');
    Code language: SQL (Structured Query Language) (sql)



In this example, MySQL issued the following error message:


    
    
    Error Code: 1406. Data too long for column 'title' at row 1 0.000 secCode language: JavaScript (javascript)



MySQL does not pad space when it stores the `VARCHAR` values. Also, MySQL
retains the trailing spaces when it inserts or selects `VARCHAR` values. See
the following example:


    
    
    INSERT INTO items(title)
    VALUES('AB ');
    Code language: SQL (Structured Query Language) (sql)


    
    
    SELECT 
        id, title, length(title)
    FROM
        items;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-VARCHAR-Trailing-Space.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20179%2047%22%3E%3C/svg%3E)


However, MySQL will truncate the trailing spaces when inserting a `VARCHAR`
value that contains trailing spaces which cause the column length exceeded. In
addition, MySQL issues a warning. Let’s see the following example:


    
    
    INSERT INTO items(title)
    VALUES('ABC ');
    Code language: SQL (Structured Query Language) (sql)



This statement inserts a string whose length is 4 into the `title` column.
MySQL still inserts the string, however, it truncates the trailing space
before inserting the value.


    
    
    1 row(s) affected, 1 warning(s): 1265 Data truncated for column 'title' at row 1
    Code language: SQL (Structured Query Language) (sql)



You can verify it by using the following query:


    
    
    SELECT 
        title, LENGTH(title)
    FROM
        items;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-VARCHAR-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20148%2068%22%3E%3C/svg%3E)


In this tutorial, you have learned how to use MySQL `VARCHAR` data type to
store variable strings in the database.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

