

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL RIGHT JOIN



 **Summary** : in this tutorial, you will learn how to use the MySQL `RIGHT
JOIN` to query data from two tables.



MySQL `RIGHT JOIN` is similar to `[LEFT
JOIN](https://www.mysqltutorial.org/mysql-left-join.aspx),` except that the
treatment of the joined tables is reversed.



Here’s the syntax of the `RIGHT JOIN` of two tables `t1` and `t2`:


    
    
    SELECT 
        select_list
    FROM t1
    RIGHT JOIN t2 ON 
        join_condition;Code language: SQL (Structured Query Language) (sql)



In this syntax:



If the `join_condition` uses the equal operator (`=`) and the joined columns
of both tables have the same name, and you can use the `USING` syntax like
this:


    
    
    SELECT 
        select_list
    FROM t1
    RIGHT JOIN t2 USING(column_name);Code language: SQL (Structured Query Language) (sql)



Therefore, the following join conditions are equivalent:


    
    
    ON t1.column_name = t2.column_nameCode language: SQL (Structured Query Language) (sql)



and


    
    
    USING (column_name);Code language: SQL (Structured Query Language) (sql)



How the `RIGHT JOIN` works.



The `RIGHT JOIN` starts selecting data from the right table (`t2`). It matches
each row from the right table with every row from the left table. If both rows
cause the join condition to evaluate to `TRUE`, the `RIGHT JOIN` combines
columns of these rows into a new row and includes this new row in the result
set.



If a row from the right table does not have a matching row from the left
table, the `RIGHT JOIN` combines columns of rows from the right table with
`NULL` values for all columns of the right table into a new row and includes
this row in the result set.



In other words, the `RIGHT JOIN` returns all rows from the right table
regardless of having matching rows from the left table or not.



It’s important to emphasize that `RIGHT JOIN` and `LEFT JOIN` clauses are
functionally equivalent, and they can replace each other as long as the table
order is reversed.



Notice that the `RIGHT OUTER JOIN` is a synonym for `RIGHT JOIN`. Therefore,
you can use them interchangeably.



We’ll use the tables `employees` and `customers` from the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/customers-employees.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20433%20304%22%3E%3C/svg%3E)


The column `salesRepEmployeeNumber` in the table `customers` links to the
column `employeeNumber` in the `employees` table.



A sales representative, or an employee, may be in charge of zero or more
customers. And each customer is taken care of by zero or one sales
representative.



If the value in the column `salesRepEmployeeNumber` is NULL, which means the
customer does not have any sales representative.



This statement uses the `RIGHT JOIN` clause join the table `customers` with
the table `employees`.


    
    
    SELECT 
        employeeNumber, 
        customerNumber
    FROM
        customers
    RIGHT JOIN employees 
        ON salesRepEmployeeNumber = employeeNumber
    ORDER BY 
    	employeeNumber;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-RIGHT-JOIN-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20213%20162%22%3E%3C/svg%3E)


In this example:



The following statement uses the `RIGHT JOIN` clause to find employees who do
not in charge of any customers:


    
    
    SELECT 
        employeeNumber, 
        customerNumber
    FROM
        customers
    RIGHT JOIN employees ON 
    	salesRepEmployeeNumber = employeeNumber
    WHERE customerNumber is NULL
    ORDER BY employeeNumber;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-RIGHT-JOIN-find-unmatching-rows.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20218%20174%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

