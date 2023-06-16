

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » An Introduction to
MySQL BOOLEAN Data Type



 **Summary** : this tutorial shows you how to use MySQL BOOLEAN data type to
store Boolean values, true and false.



MySQL does not have built-in Boolean type. However, it uses
[`TINYINT(1)`](https://www.mysqltutorial.org/mysql-int/) instead. To make it
more convenient, MySQL provides `BOOLEAN` or `BOOL` as the synonym of
`TINYINT(1)`.



In MySQL, zero is considered as false, and non-zero value is considered as
true. To use Boolean literals, you use the constants `TRUE` and `FALSE` that
evaluate to 1 and 0 respectively. See the following example:


    
    
    SELECT true, false, TRUE, FALSE, True, False;
    -- 1 0 1 0 1 0
    Code language: SQL (Structured Query Language) (sql)



MySQL stores Boolean value in the table as an integer. To demonstrate this,
let’s look at the following `tasks` table:


    
    
    CREATE TABLE tasks (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN
    );
    Code language: SQL (Structured Query Language) (sql)



Even though we specified the completed column as `BOOLEAN`, when we [show the
table](https://www.mysqltutorial.org/mysql-show-tables/) definition, it is
`TINYINT(1)` as follows:


    
    
    DESCRIBE tasks;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-Boolean-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20395%2082%22%3E%3C/svg%3E)


The following statement inserts 2 rows into the `tasks` table:


    
    
    INSERT INTO tasks(title,completed)
    VALUES('Master MySQL Boolean type',true),
          ('Design database table',false); 
    Code language: SQL (Structured Query Language) (sql)



Before saving data into the Boolean column, MySQL converts it into 1 or 0. The
following [query](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx) retrieves data from `tasks` table:


    
    
    SELECT 
        id, title, completed
    FROM
        tasks; 
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-Boolean-SELECT-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20282%2066%22%3E%3C/svg%3E)


As you see, the `true` and `false` were converted to 1 and 0.



Because Boolean is `TINYINT(1)`, you can insert value other than 1 and 0 into
the Boolean column. Consider the following example:


    
    
    INSERT INTO tasks(title,completed)
    VALUES('Test Boolean with a number',2);
    Code language: SQL (Structured Query Language) (sql)



It is working fine.

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BOOLEAN-integer-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20293%2090%22%3E%3C/svg%3E)


If you want to output the result as `true` and `false`, you can use the
[`IF`](https://www.mysqltutorial.org/mysql-if-function.aspx) function as
follows:


    
    
    SELECT 
        id, 
        title, 
        IF(completed, 'true', 'false') completed
    FROM
        tasks;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BOOLEAN-IF-function-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20291%2088%22%3E%3C/svg%3E)


To get all completed tasks in the `tasks` table, you might come up with the
following query:


    
    
    SELECT 
        id, title, completed
    FROM
        tasks
    WHERE
        completed = TRUE;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BOOLEAN-comparison-operator.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20284%2043%22%3E%3C/svg%3E)


As you see, it only returned the task with `completed` value 1. To fix it, you
must use `IS` operator:


    
    
    SELECT 
        id, title, completed
    FROM
        tasks
    WHERE
        completed IS TRUE;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BOOLEAN-IS-operator.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20289%2067%22%3E%3C/svg%3E)


In this example, we used the `IS` operator to test a value against a Boolean
value.



To get the pending tasks, you use `IS FALSE` or `IS NOT TRUE` as follows:


    
    
    SELECT 
        id, title, completed
    FROM
        tasks
    WHERE
        completed IS NOT TRUE
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/02/MySQL-BOOLEAN-IS-NOT-operator.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20257%2045%22%3E%3C/svg%3E)


In this tutorial, you have learned how to use the `MySQL BOOLEAN` data type,
which is the synonym of `TINYINT(1)`, and how to manipulate Boolean values.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

