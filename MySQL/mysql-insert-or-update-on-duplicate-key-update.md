

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL INSERT ON
DUPLICATE KEY UPDATE



 **Summary** : in this tutorial, you will learn how to use MySQL `INSERT ON
DUPLICATE KEY UPDATE` statement to update data if a duplicate in the `UNIQUE`
index or `PRIMARY KEY` error occurs when you insert a row into a table.



The `INSERT ON DUPLICATE KEY UPDATE` is a MySQL’s extension to the SQL
standard’s `[INSERT](https://www.mysqltutorial.org/mysql-insert-
statement.aspx)` statement.



When you insert a new row into a table if the row causes a duplicate in
`[UNIQUE](https://www.mysqltutorial.org/mysql-unique/)` index or `[PRIMARY
KEY](https://www.mysqltutorial.org/mysql-primary-key/)`, MySQL will issue an
error.



However, if you specify the `ON DUPLICATE KEY UPDATE` option in the `INSERT`
statement, MySQL will [update](https://www.mysqltutorial.org/mysql-update-
data.aspx) the existing row with the new values instead.



The syntax of `INSERT ON DUPLICATE KEY UPDATE` statement is as follows:


    
    
    INSERT INTO table (column_list)
    VALUES (value_list)
    ON DUPLICATE KEY UPDATE
       c1 = v1, 
       c2 = v2,
       ...;Code language: SQL (Structured Query Language) (sql)



The only addition to the `[INSERT](https://www.mysqltutorial.org/mysql-insert-
statement.aspx)` statement is the `ON DUPLICATE KEY UPDATE` clause where you
specify a list of column-value-pair assignments in case of duplicate.



Basically, the statement first tries to insert a new row into the table. If a
duplicate error occurs, it will update the existing row with the value
specified in the `ON DUPLICATE KEY UPDATE` clause.



MySQL returns the number of affected rows based on the action it performs:



To use the values from the `INSERT` clause in the `DUPLICATE KEY UPDATE`
clause, you use the `VALUES()` function as follows:


    
    
    INSERT INTO table_name(c1)
    VALUES(c1)
    ON DUPLICATE KEY UPDATE c1 = VALUES(c1) + 1;



The statement above sets the value of the `c1` to its current value specified
by the expression `VALUES(c1)` plus 1 if there is a duplicate in `UNIQUE`
index or `PRIMARY KEY`.



Let’s take a look at an example of using the `INSERT ON DUPLICATE KEY UPDATE`
to understand how it works.



First, [create a table](https://www.mysqltutorial.org/mysql-create-table/)
named `devices` to store the network devices:


    
    
    CREATE TABLE devices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100)
    );Code language: SQL (Structured Query Language) (sql)



Next, [insert](https://www.mysqltutorial.org/mysql-insert-statement.aspx) rows
into the `devices` table.


    
    
    INSERT INTO devices(name)
    VALUES('Router F1'),('Switch 1'),('Switch 2');Code language: SQL (Structured Query Language) (sql)



Then, [query the data](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) from the `devices` table to verify the insert:


    
    
    SELECT 
        id, 
        name
    FROM	
        devices;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/12/MySQL-Insert-on-duplicate-key-update-example.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20128%2084%22%3E%3C/svg%3E)


Now, we have three rows in the `devices` table.



After that, insert one more row into the `devices` table.


    
    
    INSERT INTO 
       devices(name) 
    VALUES 
       ('Printer') 
    ON DUPLICATE KEY UPDATE name = 'Printer';Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2015/12/MySQL-Insert-or-Update.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20128%20109%22%3E%3C/svg%3E)


Because there is no duplicate, MySQL inserts a new row into the `devices`
table. The statement above has the same effect as the following statement:


    
    
    INSERT INTO devices(name) 
    VALUES ('Printer');Code language: SQL (Structured Query Language) (sql)



Finally, insert a row with a duplicate value in the `id` column.


    
    
    INSERT INTO devices(id,name) 
    VALUES 
       (4,'Printer') 
    ON DUPLICATE KEY UPDATE name = 'Central Printer';Code language: SQL (Structured Query Language) (sql)



MySQL issues the following message:


    
    
    2 row(s) affectedCode language: SQL (Structured Query Language) (sql)



Because a row with id 4 already exists in the `devices` table, the statement
updates the name from `Printer` to `Central Printer`.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-ON-DUPLICATE-KEY-UPDATE-update-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20145%2098%22%3E%3C/svg%3E)


In this tutorial, you have learned how to insert or update data in a table
using the `ON DUPLICATE KEY UPDATE` option of the `INSERT` statement.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

