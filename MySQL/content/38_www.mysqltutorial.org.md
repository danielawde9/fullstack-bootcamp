

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL UPDATE



 **Summary** : updating data is one of the most important tasks when you work
with the database. In this tutorial, you will learn how to use the MySQL
`UPDATE` statement to update data in a table.



The `UPDATE` statement updates data in a table. It allows you to change the
values in one or more columns of a single row or multiple rows.



The following illustrates the basic syntax of the `UPDATE` statement:


    
    
    UPDATE [LOW_PRIORITY] [IGNORE] table_name 
    SET 
        column_name1 = expr1,
        column_name2 = expr2,
        ...
    [WHERE
        condition];



In this syntax:



Notice that the `WHERE` clause is so important that you should not forget.
Sometimes, you may want to update just one row; However, you may forget the
`WHERE` clause and accidentally update all rows of the table.



MySQL supports two modifiers in the `UPDATE` statement.



Let’s practice the `UPDATE` statement.



See the following `employees` table from the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx).

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/employees_table.png)


In this example, we will update the email of `Mary Patterson` to the new email
`mary.patterso@classicmodelcars.com` _._



First, find Mary’s email from the `employees` table using the following
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` statement:


    
    
    SELECT 
        firstname, 
        lastname, 
        email
    FROM
        employees
    WHERE
        employeeNumber = 1056;

![](https://www.mysqltutorial.org/wp-content/uploads/2013/01/MySQL-Update-example.jpg)


Second, update the email address of `Mary` to the new email
`mary.patterson@classicmodelcars.com` :


    
    
    UPDATE employees 
    SET 
        email = 'mary.patterson@classicmodelcars.com'
    WHERE
        employeeNumber = 1056;



MySQL issued the number of rows affected:


    
    
    1 row(s) affected



In this `UPDATE` statement:



Third, execute the `SELECT` statement again to verify the change:


    
    
    SELECT 
        firstname, 
        lastname, 
        email
    FROM
        employees
    WHERE
        employeeNumber = 1056;

![](https://www.mysqltutorial.org/wp-content/uploads/2013/01/MySQL-UPDATE-table-example.jpg)


To update values in the multiple columns, you need to specify the assignments
in the `SET` clause. For example, the following statement updates both last
name and email columns of employee number 1056:


    
    
    UPDATE employees 
    SET 
        lastname = 'Hill',
        email = 'mary.hill@classicmodelcars.com'
    WHERE
        employeeNumber = 1056;



Let’s verify the changes:


    
    
    SELECT 
        firstname, 
        lastname, 
        email
    FROM
        employees
    WHERE
        employeeNumber = 1056;

![](https://www.mysqltutorial.org/wp-content/uploads/2013/01/MySQL-UPDATE-multiple-columns.jpg)


The following example updates the domain parts of emails of all `Sales Reps`
with office code `6`:


    
    
    UPDATE employees
    SET email = REPLACE(email,'@classicmodelcars.com','@mysqltutorial.org')
    WHERE
       jobTitle = 'Sales Rep' AND
       officeCode = 6;



In this example, the `[REPLACE](https://www.mysqltutorial.org/mysql-string-
replace-function.aspx)()` function replaces `@classicmodelcars.com` in the
email column with `@mysqltutorial.org`.



You can supply the values for the `SET` clause from a `SELECT` statement that
queries data from other tables.



For example, in the `customers` table, some customers do not have any sale
representative. The value of the column `saleRepEmployeeNumber` is `NULL` as
follows:


    
    
    SELECT 
        customername, 
        salesRepEmployeeNumber
    FROM
        customers
    WHERE
        salesRepEmployeeNumber IS NULL;

![](https://www.mysqltutorial.org/wp-content/uploads/2013/01/MySQL-UPDATE-From-SELECT-example.jpg)


We can take a sale representative and update for those customers.



To do this, we can select a random employee whose job title is `Sales Rep`
from the `employees` table and update it for the `employees` table.



This query [selects a random](https://www.mysqltutorial.org/select-random-
records-database-table.aspx) employee from the table `employees` whose job
title is the `Sales Rep`.


    
    
    SELECT 
        employeeNumber
    FROM
        employees
    WHERE
        jobtitle = 'Sales Rep'
    ORDER BY RAND()
    LIMIT 1;



To update the sales representative employee number column in the `customers`
table, we place the query above in the `SET` clause of the `UPDATE` statement
as follows:


    
    
    UPDATE customers 
    SET 
        salesRepEmployeeNumber = (SELECT 
                employeeNumber
            FROM
                employees
            WHERE
                jobtitle = 'Sales Rep'
            ORDER BY RAND()
            LIMIT 1)
    WHERE
        salesRepEmployeeNumber IS NULL;



If you query data from the `employees` table, you will see that every customer
has a sales representative. In other words, the following query returns no
row.


    
    
    SELECT 
         salesRepEmployeeNumber
    FROM
        customers
    WHERE
        salesRepEmployeeNumber IS NULL;



In this tutorial, you have learned how to use MySQL `UPDATE` statement to
update data in a database table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

