

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL IS NULL



 **Summary** : in this tutorial, you will learn how to use the MySQL `IS NULL`
operator to test whether a value is `NULL` or not.



To test whether a value is `NULL` or not, you use the `IS NULL` operator.
Here’s the basic syntax of the `IS NULL` operator:


    
    
    value IS NULLCode language: SQL (Structured Query Language) (sql)



If the value is `NULL`, the expression returns true. Otherwise, it returns
false.



Note that MySQL does not have a built-in
[`BOOLEAN`](https://www.mysqltutorial.org/mysql-boolean/) type. It uses the
[`TINYINT(1)`](https://www.mysqltutorial.org/mysql-int/) to represent the
`BOOLEAN` values i.e., true means 1 and false means 0.



Because the `IS NULL` is a comparison operator, you can use it anywhere that
an operator can be used e.g., in the
[`SELECT`](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx) or [`WHERE`](https://www.mysqltutorial.org/mysql-where/) clause.



See the following example:


    
    
    SELECT 1 IS NULL,  -- 0
           0 IS NULL,  -- 0
           NULL IS NULL; -- 1Code language: SQL (Structured Query Language) (sql)



To check if a value is not `NULL`, you use `IS NOT NULL` operator:


    
    
    value IS NOT NULLCode language: SQL (Structured Query Language) (sql)



This expression returns true (1) if the value is not `NULL`. Otherwise, it
returns false (0).



Consider the following example:


    
    
    SELECT 1 IS NOT NULL, -- 1
           0 IS NOT NULL, -- 1
           NULL IS NOT NULL; -- 0Code language: SQL (Structured Query Language) (sql)



We will use the `customers` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/customers.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20184%20304%22%3E%3C/svg%3E)


The following query uses the `IS NULL` operator to find customers who do not
have a sales representative:


    
    
    SELECT 
        customerName, 
        country, 
        salesrepemployeenumber
    FROM
        customers
    WHERE
        salesrepemployeenumber IS NULL
    ORDER BY 
        customerName; 
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-IS-NULL-Operator-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20385%20219%22%3E%3C/svg%3E)


This example uses the `IS NOT NULL` operator to get the customers who have a
sales representative:


    
    
    SELECT 
        customerName, 
        country, 
        salesrepemployeenumber
    FROM
        customers
    WHERE
        salesrepemployeenumber IS NOT NULL
    ORDER BY 
       customerName;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-IS-NOT-NULL-Operator-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20368%20221%22%3E%3C/svg%3E)


To be compatible with ODBC programs, MySQL supports some specialized features
of the `IS NULL` operator.



1) If a [`DATE`](https://www.mysqltutorial.org/mysql-date/) or
[`DATETIME`](https://www.mysqltutorial.org/mysql-datetime/) column has a [`NOT
NULL`](https://www.mysqltutorial.org/mysql-not-null-constraint/) constraint
and contains a special date `'0000-00-00'`, you can use the `IS NULL` operator
to find such rows.



First, create a table called `projects`:


    
    
    CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT,
        title VARCHAR(255),
        begin_date DATE NOT NULL,
        complete_date DATE NOT NULL,
        PRIMARY KEY(id)
    );Code language: SQL (Structured Query Language) (sql)



Second, insert some rows into the `projects` table:


    
    
    INSERT INTO projects(title,begin_date, complete_date)
    VALUES('New CRM','2020-01-01','0000-00-00'),
          ('ERP Future','2020-01-01','0000-00-00'),
          ('VR','2020-01-01','2030-01-01');Code language: SQL (Structured Query Language) (sql)



Third, use the `IS NULL` operator to select rows with the values in the
`complete_date` column is `'0000-00-00'`.


    
    
    SELECT * 
    FROM projects
    WHERE complete_date IS NULL;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-IS-NULL-with-special-date-value.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20289%2056%22%3E%3C/svg%3E)


If the variable `@@sql_auto_is_null` is set to 1, you can get the value of an
[auto_increment column](https://www.mysqltutorial.org/mysql-sequence/) after
executing an `[INSERT](https://www.mysqltutorial.org/mysql-insert-
statement.aspx)` statement by using the `IS NULL` operator.



Note that by default the variable `@@sql_auto_is_null` is 0. Consider the
following example.



First, set the variable `@@sql_auto_is_null` to 1.


    
    
    SET @@sql_auto_is_null = 1;Code language: SQL (Structured Query Language) (sql)



Second, insert a new row into the `projects` table:


    
    
    INSERT INTO projects(title,begin_date, complete_date)
    VALUES('MRP III','2010-01-01','2020-12-31');Code language: SQL (Structured Query Language) (sql)



Third, use the `IS NULL` operator to get the generated value of the `id`
column:


    
    
    SELECT 
        id
    FROM
        projects
    WHERE
        id IS NULL;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-IS-NULL-sql_auto_is_null-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2068%2047%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

