

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL HAVING



 **Summary** _:_ in this tutorial, you will learn how to use MySQL `HAVING`
clause to specify a filter condition for groups of rows or aggregates.



The `HAVING` clause is used in the
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` statement to specify filter conditions for a group of rows or
aggregates.



The `HAVING` clause is often used with the `[GROUP
BY](https://www.mysqltutorial.org/mysql-group-by.aspx)` clause to filter
groups based on a specified condition. If you omit the `GROUP BY` clause, the
`HAVING` clause behaves like the `[WHERE](https://www.mysqltutorial.org/mysql-
where/)` clause.



The following illustrates the syntax of the `HAVING` clause:


    
    
    SELECT 
        select_list
    FROM 
        table_name
    WHERE 
        search_condition
    GROUP BY 
        group_by_expression
    HAVING 
        group_condition;



In this syntax, you specify a condition in the `HAVING` clause.



The HAVING clause evaluates each group returned by the GROUP BY clause. If the
result is true, the row is included in the result set.



Notice that the `HAVING` clause applies a filter condition to each group of
rows, while the `WHERE` clause applies the filter condition to each individual
row.



MySQL evaluates the `HAVING` clause after the `FROM`,
`[WHERE](https://www.mysqltutorial.org/mysql-where/)`, `SELECT` and `[GROUP
BY](https://www.mysqltutorial.org/mysql-group-by.aspx)` clauses and before
`[ORDER BY](https://www.mysqltutorial.org/mysql-order-by/)`, and
`[LIMIT](https://www.mysqltutorial.org/mysql-limit.aspx)` clauses:

![](https://www.mysqltutorial.org/wp-content/uploads/2021/07/MySQL-Having.svg)


Note that the SQL standard specifies that the `HAVING` is evaluated before
`SELECT` clause and after `GROUP BY` clause.



Let’s take some examples of using the `HAVING` clause to see how it works.
We’ll use the `orderdetails` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx "MySQL
Sample Database") for the demonstration.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/orderdetails.png)


The following uses the `GROUP BY` clause to get order numbers, the number of
items sold per order, and total sales for each from the `orderdetails` table:


    
    
    SELECT 
        ordernumber,
        SUM(quantityOrdered) AS itemsCount,
        SUM(priceeach*quantityOrdered) AS total
    FROM
        orderdetails
    GROUP BY ordernumber;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-having/#1)

![](https://www.mysqltutorial.org/wp-content/uploads/2011/05/MySQL-HAVING-GROUP-BY-example.png)


Now, you can find which order has total sales greater than `1000` by using the
`HAVING` clause as follows:


    
    
    SELECT 
        ordernumber,
        SUM(quantityOrdered) AS itemsCount,
        SUM(priceeach*quantityOrdered) AS total
    FROM
        orderdetails
    GROUP BY 
       ordernumber
    HAVING 
       total > 1000;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-having/#2)

![](https://www.mysqltutorial.org/wp-content/uploads/2011/05/MySQL-HAVING-example.png)


It’s possible to form a complex condition in the `HAVING` clause using logical
operators such as `[OR](https://www.mysqltutorial.org/mysql-or/)` and
`[AND](https://www.mysqltutorial.org/mysql-and/)`.



The following example uses the `HAVING` clause to find orders that have total
amounts greater than `1000` and contain more than `600` items:


    
    
    SELECT 
        ordernumber,
        SUM(quantityOrdered) AS itemsCount,
        SUM(priceeach*quantityOrdered) AS total
    FROM
        orderdetails
    GROUP BY ordernumber
    HAVING 
        total > 1000 AND 
        itemsCount > 600;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-having/#3)

![](https://www.mysqltutorial.org/wp-content/uploads/2011/05/MySQL-HAVING-complex-condition.png)


Suppose that you want to find all orders that already shipped and have a total
amount greater than 1500, you can [join](https://www.mysqltutorial.org/mysql-
join/) the `orderdetails` table with the `orders` table using the `[INNER
JOIN](https://www.mysqltutorial.org/mysql-inner-join.aspx)` clause and apply a
condition on `status` column and `total` aggregate as shown in the following
query:


    
    
    SELECT 
        a.ordernumber, 
        status, 
        SUM(priceeach*quantityOrdered) total
    FROM
        orderdetails a
    INNER JOIN orders b 
        ON b.ordernumber = a.ordernumber
    GROUP BY  
        ordernumber, 
        status
    HAVING 
        status = 'Shipped' AND 
        total > 1500;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-having/#4)

![](https://www.mysqltutorial.org/wp-content/uploads/2011/05/MySQL-HAVING-with-INNER-JOIN-example.png)


The `HAVING` clause is only useful when you use it with the `GROUP BY` clause
to generate the output of the high-level reports. For example, you can use the
`HAVING` clause to answer the questions like finding the number of orders this
month, this quarter, or this year that have a total amount greater than 10K.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

