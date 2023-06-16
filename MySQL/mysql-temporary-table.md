

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Temporary Table



 **Summary** : in this tutorial, we will discuss **MySQL temporary table** and
show you how to create, use and drop temporary tables.



In MySQL, a temporary table is a special type of table that allows you to
store a temporary result set, which you can reuse several times in a single
session.



A temporary table is very handy when it is impossible or expensive to query
data that requires a single [`SELECT`](https://www.mysqltutorial.org/mysql-
select-statement-query-data.aspx) statement with the
[`JOIN`](https://www.mysqltutorial.org/mysql-join/) clauses. In this case, you
can use a temporary table to store the immediate result and use another query
to process it.



A MySQL temporary table has the following specialized features:



For example, in case the connection to the database server is lost and you
reconnect to the server automatically, you cannot differentiate between the
temporary table and the permanent one. Then, you may issue a `DROP TABLE`
statement to remove the permanent table instead of the temporary table, which
is not expected. To avoid this issue, you can use the `DROP TEMPORARY TABLE`
statement to drop a temporary table.



The syntax of the `CREATE TEMPORARY TABLE` staetment is similar to the syntax
of the `CREATE TABLE` statement except for the `TEMPORARY` keyword:


    
    
    CREATE TEMPORARY TABLE table_name(
       column_1_definition,
       column_2_definition,
       ...,
       table_constraints
    );Code language: SQL (Structured Query Language) (sql)



To create a temporary table whose structure is based on an existing table, you
cannot use the `CREATE TEMPORARY TABLE ... LIKE` statement. Instead, you use
the following syntax:


    
    
    CREATE TEMPORARY TABLE temp_table_name
    SELECT * FROM original_table
    LIMIT 0;Code language: SQL (Structured Query Language) (sql)



First, create a new temporary table called `credits` that stores customers’
credits:


    
    
    CREATE TEMPORARY TABLE credits(
        customerNumber INT PRIMARY KEY,
        creditLimit DEC(10,2)
    );Code language: SQL (Structured Query Language) (sql)



Then, insert rows from the `customers` table into the temporary table
`credits`:


    
    
    INSERT INTO credits(customerNumber,creditLimit)
    SELECT customerNumber, creditLimit
    FROM customers
    WHERE creditLimit > 0;Code language: SQL (Structured Query Language) (sql)



The following example creates a temporary table that stores the top 10
customers by revenue. The structure of the temporary table is derived from a
`SELECT` statement:


    
    
    CREATE TEMPORARY TABLE top_customers
    SELECT p.customerNumber, 
           c.customerName, 
           ROUND(SUM(p.amount),2) sales
    FROM payments p
    INNER JOIN customers c ON c.customerNumber = p.customerNumber
    GROUP BY p.customerNumber
    ORDER BY sales DESC
    LIMIT 10;Code language: SQL (Structured Query Language) (sql)



Now, you can query data from the `top_customers` temporary table like querying
from a permanent table:


    
    
    SELECT 
        customerNumber, 
        customerName, 
        sales
    FROM
        top_customers
    ORDER BY sales;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2018/07/MySQL-Temporary-Table-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20346%20219%22%3E%3C/svg%3E)


You can use the `DROP TABLE` statement to remove temporary tables however it
is good practice to add the `TEMPORARY` keyword as follows:


    
    
    DROP TEMPORARY TABLE table_name;Code language: SQL (Structured Query Language) (sql)



The `DROP TEMPORARY TABLE` statement removes a temporary table only, not a
permanent table. It helps you avoid the mistake of dropping a permanent table
when you name your temporary table the same as the name of a permanent table



For example, to remove the `topcustomers` temporary table, you use the
following statement:


    
    
    DROP TEMPORARY TABLE top_customers;Code language: SQL (Structured Query Language) (sql)



Notice that if you try to remove a permanent table with the `DROP TEMPORARY
TABLE` statement, you will get an error message saying that the table that you
are trying drop is unknown.



If you develop an application that uses a connection pooling or persistent
connections, it is not guaranteed that the temporary tables are removed
automatically when your application is terminated. Because the database
connection that the application uses may be still open and placed in a
connection pool for other clients to reuse later. Therefore, it is a good
practice to always remove the temporary tables whenever you are no longer use
them.



MySQL does not provide a function or statement to directly check if a
temporary table exists. However, we can create a stored procedure that checks
if a temporary table exists or not as follows:


    
    
    DELIMITER //
    CREATE PROCEDURE check_table_exists(table_name VARCHAR(100)) 
    BEGIN
        DECLARE CONTINUE HANDLER FOR SQLSTATE '42S02' SET @err = 1;
        SET @err = 0;
        SET @table_name = table_name;
        SET @sql_query = CONCAT('SELECT 1 FROM ',@table_name);
        PREPARE stmt1 FROM @sql_query;
        IF (@err = 1) THEN
            SET @table_exists = 0;
        ELSE
            SET @table_exists = 1;
            DEALLOCATE PREPARE stmt1;
        END IF;
    END //
    DELIMITER ;Code language: SQL (Structured Query Language) (sql)



In this procedure, we try to select data from a temporary table. If the
temporary table exists, the `@table_exists` variable is set to 1, otherwise,
it sets to 0.



This statement calls the `check_table_exists` to check if the temporary table
`credits` exists:


    
    
    CALL check_table_exists('credits');
    SELECT @table_exists;
    Code language: SQL (Structured Query Language) (sql)



Here is the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-check-temporary-table-exists.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20106%2036%22%3E%3C/svg%3E)


In this tutorial, you have learned about the MySQL temporary tables and how to
manage temporary tables such as creating and removing a new temporary table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

