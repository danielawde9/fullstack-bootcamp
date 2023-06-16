

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL MINUS



 **Summary** : in this tutorial, you will learn how about SQL `MINUS` operator
and how to simulate `MINUS` in MySQL using join.



Note that MySQL does not support the `MINUS` operator. This tutorial shows you
to how to emulate the `MINUS` operator in MySQL using join clauses.



The `MINUS` operator is one of three set operators in the SQL standard that
includes [`UNION`](https://www.mysqltutorial.org/sql-union-mysql.aspx),
`[INTERSECT](https://www.mysqltutorial.org/mysql-intersect/)`, and `MINUS`.



The `MINUS` compares the results of two queries and returns distinct rows from
the result set of the first query that does not appear in the result set of
the second query.



The following illustrates the syntax of the `MINUS` operator:


    
    
    SELECT select_list1 
    FROM table_name1
    MINUS 
    SELECT select_list2 
    FROM table_name2;
    Code language: SQL (Structured Query Language) (sql)



The basic rules for a query that uses `MINUS` operator are the following:



Suppose that we have two tables `t1` and `t2` with the following structure and
data:


    
    
    CREATE TABLE t1 (
        id INT PRIMARY KEY
    );
    
    CREATE TABLE t2 (
        id INT PRIMARY KEY
    );
    
    INSERT INTO t1 VALUES (1),(2),(3);
    INSERT INTO t2 VALUES (2),(3),(4);
    Code language: SQL (Structured Query Language) (sql)



The following query returns distinct values from the query of the `t1` table
that is not found in the result of the query of the `t2` table.


    
    
    SELECT id FROM t1
    MINUS
    SELECT id FROM t2; 
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-MINUS-Example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20518%20177%22%3E%3C/svg%3E)


The following Venn diagram illustrates the `MINUS` operation:

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-MINUS.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20449%20261%22%3E%3C/svg%3E)


Note that some database systems e.g., Microsoft SQL Server and PostgreSQL use
the `EXCEPT` instead of `MINUS`. They have the same function.



Unfortunately, MySQL does not support `MINUS` operator. However, you can use
[join](https://www.mysqltutorial.org/mysql-join/) to emulate it.



To emulate the `MINUS` of two queries, you use the following syntax:


    
    
    SELECT 
        select_list
    FROM 
        table1
    LEFT JOIN table2 
        ON join_predicate
    WHERE 
        table2.column_name IS NULL; 
    Code language: SQL (Structured Query Language) (sql)



For example, the following query uses the `[LEFT
JOIN](https://www.mysqltutorial.org/mysql-left-join.aspx)` clause to return
the same result as the `MINUS` operator:


    
    
    SELECT 
        id
    FROM
        t1
    LEFT JOIN
        t2 USING (id)
    WHERE
        t2.id IS NULL;
    Code language: SQL (Structured Query Language) (sql)



In this tutorial, you have learned about the SQL MINUS operator and how to
emulate MINUS operator in MySQL using `LEFT JOIN` clause.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

