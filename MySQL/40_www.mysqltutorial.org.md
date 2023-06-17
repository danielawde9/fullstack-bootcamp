

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL DELETE



 **Summary** : in this tutorial, you will learn how to use the **MySQL
DELETE** statement to delete data from a single table.



To delete data from a table, you use the MySQL `DELETE` statement. The
following illustrates the syntax of the `DELETE` statement:


    
    
    DELETE FROM table_name
    WHERE condition;



In this statement:



Notice that the `WHERE` clause is optional. If you omit the `WHERE` clause,
the `DELETE` statement will delete all rows in the table.



Besides deleting data from a table, the `DELETE` statement returns the number
of deleted rows.



To delete data from multiple tables using a single `DELETE` statement, you use
the `[DELETE JOIN](https://www.mysqltutorial.org/mysql-delete-join/)`
statement which will be covered in the [next
tutorial](https://www.mysqltutorial.org/mysql-delete-join/).



To delete all rows in a table without the need of knowing how many rows
deleted, you should use the `[TRUNCATE
TABLE](https://www.mysqltutorial.org/mysql-truncate-table/)` statement to get
better performance.



For a table that has a [foreign key](https://www.mysqltutorial.org/mysql-
foreign-key/) constraint, when you delete rows from the parent table, the rows
in the child table will be deleted automatically by using the `[ON DELETE
CASCADE](https://www.mysqltutorial.org/mysql-on-delete-cascade/)` option.



We will use the `employees` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration.

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/employees_table.png)


Note that once you delete data, it is gone. Later, you will learn how to put
the `DELETE` statement in a [transaction](https://www.mysqltutorial.org/mysql-
transaction.aspx) so that you can roll it back.



Suppose you want to delete employees whose the `officeNumber` is 4, you use
the `DELETE` statement with the `[WHERE](https://www.mysqltutorial.org/mysql-
where/)` clause as shown in the following query:


    
    
    DELETE FROM employees 
    WHERE officeCode = 4;



To delete all rows from the `employees` table, you use the `DELETE` statement
without the `WHERE` clause as follows:


    
    
    DELETE FROM employees;



All rows in the `employees` table deleted.



If you want to limit the number of rows to delete, use the
`[LIMIT](https://www.mysqltutorial.org/mysql-limit.aspx)` clause as follows:


    
    
    DELETE FROM table_table
    LIMIT row_count;



Note that the order of rows in a table is unspecified, therefore, when you use
the `LIMIT` clause, you should always use the `[ORDER
BY](https://www.mysqltutorial.org/mysql-order-by/)` clause.


    
    
    DELETE FROM table_name
    ORDER BY c1, c2, ...
    LIMIT row_count;



Consider the following `customers` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx):

![](https://www.mysqltutorial.org/wp-content/uploads/2014/05/customers_table.png)


For example, the following statement sorts customers by customer names
alphabetically and deletes the first 10 customers:


    
    
    DELETE FROM customers
    ORDER BY customerName
    LIMIT 10;



Similarly, the following `DELETE` statement selects customers in `France`,
sorts them by credit limit in from low to high, and deletes the first 5
customers:


    
    
    DELETE FROM customers
    WHERE country = 'France'
    ORDER BY creditLimit
    LIMIT 5;



In this tutorial, you have learned how to use the MySQL `DELETE` statement to
delete data from a table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

