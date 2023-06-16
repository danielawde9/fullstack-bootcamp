

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL DECIMAL Data Type



 **Summary** : in this tutorial, we will introduce you to the MySQL DECIMAL
data type and how to use it effectively in your database table.



The MySQL DECIMAL data type is used to store exact numeric values in the
database. We often use the DECIMAL data type for columns that preserve exact
precision e.g., money data in accounting systems.



To define a column whose data type is DECIMAL you use the following syntax:


    
    
    column_name  DECIMAL(P,D);Code language: SQL (Structured Query Language) (sql)



In the syntax above:



The `DECIMAL(P,D)` means that the column can store up to P digits with D
decimals. The actual range of the decimal column depends on the precision and
scale.



Besides the `DECIMAL` keyword, you can also use `DEC`, `FIXED`, or `NUMERIC`
because they are synonyms for `DECIMAL`.



Like the [INT data type](https://www.mysqltutorial.org/mysql-int/), the
`DECIMAL` type also has `UNSIGNED` and `ZEROFILL` attributes. If we use the
`UNSIGNED` attribute, the column with `DECIMAL UNSIGNED` will not accept
negative values.



In case we use `ZEROFILL`, MySQL will pad the display value by 0 up to display
width specified by the column definition. In addition, if we use `ZERO FILL`
for the `DECIMAL` column, MySQL will add the `UNSIGNED` attribute to the
column automatically.



The following example defines amount column with `DECIMAL` data type.


    
    
    amount DECIMAL(6,2);Code language: SQL (Structured Query Language) (sql)



In this example, the amount column can store 6 digits with 2 decimal places;
therefore, the range of the amount column is from 9999.99 to -9999.99.



MySQL allows us to use the following syntax:


    
    
    column_name DECIMAL(P);Code language: SQL (Structured Query Language) (sql)



This is equivalent to:


    
    
    column_name DECIMAL(P,0);Code language: SQL (Structured Query Language) (sql)



In this case, the column contains no fractional part or decimal point.



In addition, we can even use the following syntax.


    
    
    column_name DECIMAL;Code language: SQL (Structured Query Language) (sql)



The default value of P is 10 in this case.



MySQL assigns the storage for integer and fractional parts separately. MySQL
uses binary format to store the `DECIMAL` values. It packs 9 digits into 4
bytes.



For each part, it takes 4 bytes to store each multiple of 9 digits. The
storage required for leftover digits is illustrated in the following table:



For example, `DECIMAL(19,9)` has 9 digits for the fractional part and 19-9 =
10 digits for integer part. The fractional part requires 4 bytes. The integer
part requires 4 bytes for the first 9 digits, for 1 leftover digit, it
requires 1 more byte. In total, the `DECIMAL(19,9)` column requires 9 bytes.



We often use the `DECIMAL` data type for monetary data such as prices, salary,
account balances, etc. If you design a database that handle the monetary data,
the following syntax should be OK.


    
    
    amount DECIMAL(19,2);Code language: SQL (Structured Query Language) (sql)



However, if you want to comply with Generally Accepted Accounting Principles
(GAAP) rules, the monetary column must have at least 4 decimal places to make
sure that the rounding value does not exceed $0.01. In this case, you should
define the column with 4 decimal places as follows:


    
    
    amount DECIMAL(19,4);Code language: SQL (Structured Query Language) (sql)



First, [create a new table](https://www.mysqltutorial.org/mysql-create-table/)
named `materials `with three columns: id, description, and cost.


    
    
    CREATE TABLE materials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255),
        cost DECIMAL(19 , 4 ) NOT NULL
    );Code language: PHP (php)



Second, [insert data](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `materials` table.


    
    
    INSERT INTO materials(description,cost)
    VALUES('Bicycle', 500.34),('Seat',10.23),('Break',5.21);Code language: SQL (Structured Query Language) (sql)



Third, [query data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `materials` table.


    
    
    SELECT 
        *
    FROM
        materials;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DECIMAL-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20188%2081%22%3E%3C/svg%3E)


Fourth, change the cost column to include the `ZEROFILL` attribute.


    
    
    ALTER TABLE materials
    MODIFY cost DECIMAL(19,4) zerofill;Code language: SQL (Structured Query Language) (sql)



Fifth, query the materials table again.


    
    
    SELECT 
        *
    FROM
        materials;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/11/MySQL-DECIMAL-ZEROFILL-Example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20266%2087%22%3E%3C/svg%3E)


As you see, we have many zeros padded in the output values.



In this tutorial, we have shown gave you detailed information on MySQL DECIMAL
data type and shown you how to apply it to the columns that store exact
numeric data such as financial data.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

