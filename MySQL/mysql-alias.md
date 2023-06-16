

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Alias



 **Summary** : in this tutorial, you will learn how to use **MySQL alias** to
improve the readability of the queries.



MySQL supports two kinds of aliases: column alias and table alias.



Sometimes, column names are so technical that make the query’s output very
difficult to understand. To give a column a descriptive name, you can use a
column alias.



The following statement illustrates how to use the column alias:


    
    
    SELECT 
       [column_1 | expression] AS descriptive_name
    FROM table_name;Code language: SQL (Structured Query Language) (sql)



To assign an alias to a column, you use the `AS` keyword followed by the
alias. If the alias contains spaces, you must quote it as the following:


    
    
    SELECT 
       [column_1 | expression] AS `descriptive name`
    FROM 
       table_name;Code language: SQL (Structured Query Language) (sql)



Because the `AS` keyword is optional, you can omit it in the statement. Note
that you can also give an expression an alias.



Let’s look at the `employees` table in the [sample
database.](https://www.mysqltutorial.org/mysql-sample-database.aspx "MySQL
Sample Database")

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/employees_table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20206%20219%22%3E%3C/svg%3E)


The following query selects the first names and last names of employees. It
uses the `CONCAT_WS()` function to
[concatenate](https://www.mysqltutorial.org/sql-concat-in-mysql.aspx "MySQL
concatenate strings") first name and last name into full name.


    
    
    SELECT 
        CONCAT_WS(', ', lastName, firstname)
    FROM
        employees;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#1)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/MySQL-query-without-Alias-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20225%20241%22%3E%3C/svg%3E)


The column heading is quite difficult to read. To solve this, you can assign
the column heading of the output a column alias as shown in the following
query:


    
    
    SELECT
       CONCAT_WS(', ', lastName, firstname) AS `Full name`
    FROM
       employees;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#2)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/MySQL-Column-Alias-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20164%20238%22%3E%3C/svg%3E)


In MySQL, you can use the column alias in the `[ORDER
BY](https://www.mysqltutorial.org/mysql-order-by/)`, `[GROUP
BY](https://www.mysqltutorial.org/mysql-group-by.aspx)` and
`[HAVING](https://www.mysqltutorial.org/mysql-having.aspx)` clauses to refer
to the column.



The following query uses the column alias in the `ORDER BY` clause to sort the
employee’s full names alphabetically:


    
    
    SELECT
    	CONCAT_WS(', ', lastName, firstname) `Full name`
    FROM
    	employees
    ORDER BY
    	`Full name`;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#3)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/MySQL-Alias-with-ORDER-BY-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20164%20245%22%3E%3C/svg%3E)


The following statement selects the orders whose total amount is greater than
60000. It uses column aliases in `GROUP BY` and `HAVING` clauses.


    
    
    SELECT
    	orderNumber `Order no.`,
    	SUM(priceEach * quantityOrdered) total
    FROM
    	orderDetails
    GROUP BY
    	`Order no.`
    HAVING
    	total > 60000;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#4)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/MySQL-Alias-with-Expression-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20152%2090%22%3E%3C/svg%3E)


Notice that you cannot use a column alias in the
`[WHERE](https://www.mysqltutorial.org/mysql-where/)` clause. The reason is
that when MySQL evaluates the `WHERE` clause, the values of columns specified
in the `[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` clause are not be evaluated yet.



You can use an alias to give a table a different name. You assign a table an
alias by using the `AS` keyword as the following syntax:


    
    
    table_name AS table_aliasCode language: SQL (Structured Query Language) (sql)



The alias for a table is called a table alias. Like the column alias, the `AS`
keyword is optional so you can omit it.



This query shows how to assign the `employees` table alias as e:


    
    
    SELECT * FROM employees e;Code language: SQL (Structured Query Language) (sql)



Once a table is assigned an alias, you can refer to the table columns using
the following syntax:


    
    
    table_alias.column_nameCode language: SQL (Structured Query Language) (sql)



For example:


    
    
    SELECT 
        e.firstName, 
        e.lastName
    FROM
        employees e
    ORDER BY e.firstName;Code language: SQL (Structured Query Language) (sql)



The table aliases are often used in the statement that contains `[INNER
JOIN](https://www.mysqltutorial.org/mysql-inner-join.aspx)`, [`LEFT
JOIN`](https://www.mysqltutorial.org/mysql-left-join.aspx), `[RIGHT
JOIN](https://www.mysqltutorial.org/mysql-right-join/)` clauses and in
[subqueries](https://www.mysqltutorial.org/mysql-subquery/ "MySQL
subqueries").



Let’s look at the `customers` and `orders` tables:

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/customers_orders_tables.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20481%20319%22%3E%3C/svg%3E)


Both tables have the same column name:`customerNumber`.Without using the table
alias to qualify the `customerNumber` column, you will get an error message
like:


    
    
    Error Code: 1052. Column 'customerNumber' in on clause is ambiguousCode language: SQL (Structured Query Language) (sql)



To avoid this error, you use a table alias to qualify the `customerNumber`
column:


    
    
    SELECT
    	customerName,
    	COUNT(o.orderNumber) total
    FROM
    	customers c
    INNER JOIN orders o ON c.customerNumber = o.customerNumber
    GROUP BY
    	customerName
    ORDER BY
    	total DESC;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#5)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/MySQL-Table-Alias-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20216%20220%22%3E%3C/svg%3E)


The query above selects the customer name and the number of orders from the
`customers` and `orders` tables. It uses `c` as a table alias for the
`customers` table and `o` as a table alias for the `orders` table. The columns
in the `customers` and `orders` tables are referred to via the table aliases.



If you do not use the alias in the query above, you have to use the table name
to refer to its columns, which makes the query lengthy and less readable as
the following:


    
    
    SELECT
    	customers.customerName,
    	COUNT(orders.orderNumber) total
    FROM
    	customers
    INNER JOIN orders ON customers.customerNumber = orders.customerNumber
    GROUP BY
    	customerName
    ORDER BY
    	total DESCCode language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-alias/#6)



In this tutorial, you have learned how to use MySQL aliases including column
and table aliases.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

