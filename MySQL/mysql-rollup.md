

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL ROLLUP



 **Summary** : in this tutorial, you will learn how to use the MySQL `ROLLUP`
clause to generate subtotals and grand totals.



The following statement [creates a new
table](https://www.mysqltutorial.org/mysql-create-table/) named `sales` that
stores the order values summarized by product lines and years. The data comes
from the `products`, `orders`, and `orderDetails` tables in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx).


    
    
    CREATE TABLE sales
    SELECT
        productLine,
        YEAR(orderDate) orderYear,
        SUM(quantityOrdered * priceEach) orderValue
    FROM
        orderDetails
            INNER JOIN
        orders USING (orderNumber)
            INNER JOIN
        products USING (productCode)
    GROUP BY
        productLine ,
        YEAR(orderDate);
    Code language: SQL (Structured Query Language) (sql)



The following query returns all rows from the `sales` table:


    
    
    SELECT * FROM sales;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-sample-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20244%20439%22%3E%3C/svg%3E)


A grouping set is a set of columns to which you want to group. For example,
the following query creates a grouping set denoted by `(productline)`


    
    
    SELECT 
        productline, 
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        productline;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-GROUP-BY-clause.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20219%20158%22%3E%3C/svg%3E)


The following query creates an empty grouping set denoted by the `()`:


    
    
    SELECT 
        SUM(orderValue) totalOrderValue
    FROM
        sales;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-Empty-Grouping-Set.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20114%2039%22%3E%3C/svg%3E)


If you want to generate two or more grouping sets together in one query, you
may use the `[UNION ALL](https://www.mysqltutorial.org/sql-union-mysql.aspx)`
operator as follows:


    
    
    SELECT 
        productline, 
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        productline 
    UNION ALL
    SELECT 
        NULL, 
        SUM(orderValue) totalOrderValue
    FROM
        sales;Code language: SQL (Structured Query Language) (sql)



Here’s the query output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-UNION-ALL.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20217%20181%22%3E%3C/svg%3E)


Because the `UNION ALL` requires all queries to have the same number of
columns, we added `NULL` in the select list of the second query to fulfill
this requirement.



The `NULL` in the `productLine` column identifies the grand total super-
aggregate line.



This query is able to generate the total order values by product lines and
also the grand total row. However, it has two problems:



To fix these issues, you can use the `ROLLUP` clause.



The `ROLLUP` clause is an extension of the `[GROUP
BY](https://www.mysqltutorial.org/mysql-group-by.aspx)` clause with the
following syntax:


    
    
    SELECT 
        select_list
    FROM 
        table_name
    GROUP BY
        c1, c2, c3 WITH ROLLUP;
    Code language: SQL (Structured Query Language) (sql)



The `ROLLUP` generates multiple grouping sets based on the columns or
expressions specified in the `GROUP BY` clause. For example:


    
    
    SELECT 
        productLine, 
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        productline WITH ROLLUP;Code language: SQL (Structured Query Language) (sql)



Here is the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20202%20176%22%3E%3C/svg%3E)


As clearly shown in the output, the `ROLLUP` clause generates not only the
subtotals but also the grand total of the order values.



If you have more than one column specified in the `GROUP BY` clause, the
`ROLLUP` clause assumes a hierarchy among the input columns.



For example:


    
    
    GROUP BY c1, c2, c3 WITH ROLLUPCode language: SQL (Structured Query Language) (sql)



The `ROLLUP` assumes that there is the following hierarchy:


    
    
    c1 > c2 > c3Code language: SQL (Structured Query Language) (sql)



And it generates the following grouping sets:


    
    
    (c1, c2, c3)
    (c1, c2)
    (c1)
    ()Code language: SQL (Structured Query Language) (sql)



And in case you have two columns specified in the `GROUP BY` clause:


    
    
    GROUP BY c1, c2 WITH ROLLUPCode language: SQL (Structured Query Language) (sql)



then the `ROLLUP` generates the following grouping sets:


    
    
    (c1, c2)
    (c1)
    ()Code language: SQL (Structured Query Language) (sql)



See the following query example:


    
    
    SELECT 
        productLine, 
        orderYear,
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        productline, 
        orderYear 
    WITH ROLLUP;Code language: SQL (Structured Query Language) (sql)



Here is the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-hierarchy.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20264%20599%22%3E%3C/svg%3E)


The `ROLLUP` generates the subtotal row every time the product line changes
and the grand total at the end of the result.



The hierarchy in this case is:


    
    
    productLine > orderYearCode language: SQL (Structured Query Language) (sql)



If you reverse the hierarchy, for example:


    
    
    SELECT 
        orderYear,
        productLine, 
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        orderYear,
        productline
    WITH ROLLUP;Code language: SQL (Structured Query Language) (sql)



The following picture shows the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-another-hierarchy.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20265%20523%22%3E%3C/svg%3E)


The `ROLLUP` generates the subtotal every time the year changes and the grand
total at the end of the result set.



The hierarchy in this example is:


    
    
    orderYear > productLine
    Code language: SQL (Structured Query Language) (sql)



To check whether `NULL` in the result set represents the subtotals or grand
totals, you use the `GROUPING()` function.



The `GROUPING()` function returns 1 when `NULL` occurs in a supper-aggregate
row, otherwise, it returns 0.



The `GROUPING()` function can be used in the select list, `HAVING` clause, and
(as of MySQL 8.0.12 ) `ORDER BY` clause.



Consider the following query:


    
    
    SELECT 
        orderYear,
        productLine, 
        SUM(orderValue) totalOrderValue,
        GROUPING(orderYear),
        GROUPING(productLine)
    FROM
        sales
    GROUP BY 
        orderYear,
        productline
    WITH ROLLUP;Code language: SQL (Structured Query Language) (sql)



The following picture shows the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-GROUPING-function-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20527%20516%22%3E%3C/svg%3E)


The `GROUPING(orderYear)` returns 1 when `NULL` in the `orderYear` column
occurs in a super-aggregate row, 0 otherwise.



Similarly, the `GROUPING(productLine)` returns 1 when `NULL` in the
`productLine` column occurs in a super-aggregate row, 0 otherwise.



We often use `GROUPING()` function to substitute meaningful labels for super-
aggregate `NULL` values instead of displaying it directly.



The following example shows how to combine the
`[IF()](https://www.mysqltutorial.org/mysql-if-function.aspx)` function with
the `GROUPING()` function to substitute labels for the super-aggregate `NULL`
values in `orderYear` and `productLine` columns:


    
    
    SELECT 
        IF(GROUPING(orderYear),
            'All Years',
            orderYear) orderYear,
        IF(GROUPING(productLine),
            'All Product Lines',
            productLine) productLine,
        SUM(orderValue) totalOrderValue
    FROM
        sales
    GROUP BY 
        orderYear , 
        productline 
    WITH ROLLUP;Code language: SQL (Structured Query Language) (sql)



The output is:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/08/MySQL-ROLLUP-GROUPING-function-substitution.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20282%20518%22%3E%3C/svg%3E)


In this tutorial, you have learned how to use the MySQL `ROLLUP()` to generate
multiple grouping sets considering a hierarchy between columns specified in
the `GROUP BY` clause.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

