

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » An Essential Guide to
MySQL Derived Tables



 **Summary** : in this tutorial, you will learn about the MySQL derived tables
and how to use them to simplify complex queries.



A derived table is a virtual table returned from a
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` statement. A derived table is similar to a [temporary
table](https://www.mysqltutorial.org/mysql-temporary-table/), but using a
derived table in the `SELECT` statement is much simpler than a temporary table
because it does not require creating the temporary table.



The term derived table and [subquery](https://www.mysqltutorial.org/mysql-
subquery/) is often used interchangeably. When a stand-alone subquery is used
in the `FROM` clause of a `SELECT` statement, it is also called a derived
table.



The following illustrates a query that uses a derived table:

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-Derived-Table.png)


Note that a stand-alone subquery is a subquery that can execute independently
of the outer query.



Unlike a subquery, a derived table must have an
[alias](https://www.mysqltutorial.org/mysql-alias/) so that you can reference
its name later in the query. If a derived table does not have an alias, MySQL
will issue the following error:


    
    
    Every derived table must have its own alias.



The following illustrates the syntax of a query that uses a derived table:


    
    
    SELECT 
        select_list
    FROM
        (SELECT 
            select_list
        FROM
            table_1) derived_table_name
    WHERE 
        derived_table_name.c1 > 0;



The following query gets the top five products by sales revenue in 2003 from
the `orders` and `orderdetails` tables in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx):

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/orders_order_details_tables.png)

    
    
    SELECT 
        productCode, 
        ROUND(SUM(quantityOrdered * priceEach)) sales
    FROM
        orderdetails
            INNER JOIN
        orders USING (orderNumber)
    WHERE
        YEAR(shippedDate) = 2003
    GROUP BY productCode
    ORDER BY sales DESC
    LIMIT 5;

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-Derived-Table-Example-1.png)


You can use the result of this query as a derived table and join it with the
`products` table as follows:

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/products_table.png)

    
    
    SELECT 
        productName, sales
    FROM
        (SELECT 
            productCode, 
            ROUND(SUM(quantityOrdered * priceEach)) sales
        FROM
            orderdetails
        INNER JOIN orders USING (orderNumber)
        WHERE
            YEAR(shippedDate) = 2003
        GROUP BY productCode
        ORDER BY sales DESC
        LIMIT 5) top5products2003
    INNER JOIN
        products USING (productCode);
    



The following shows the output of the query above:

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-Derived-Table-Top-5-Products-2013.png)


In this example:



Suppose you have to classify the customers who bought products in 2003 into 3
groups: `platinum`, `gold`, and `silver`. And you need to know the number of
customers in each group with the following conditions:



To form this query, you first need to put each customer into the respective
group using `[CASE](https://www.mysqltutorial.org/mysql-case-function/)`
expression and `[GROUP BY](https://www.mysqltutorial.org/mysql-group-by.aspx)`
clause as follows:


    
    
    SELECT 
        customerNumber,
        ROUND(SUM(quantityOrdered * priceEach)) sales,
        (CASE
            WHEN SUM(quantityOrdered * priceEach) < 10000 THEN 'Silver'
            WHEN SUM(quantityOrdered * priceEach) BETWEEN 10000 AND 100000 THEN 'Gold'
            WHEN SUM(quantityOrdered * priceEach) > 100000 THEN 'Platinum'
        END) customerGroup
    FROM
        orderdetails
            INNER JOIN
        orders USING (orderNumber)
    WHERE
        YEAR(shippedDate) = 2003
    GROUP BY customerNumber;
    



The following is the output of the query:

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-Derived-Table-Customer-Groups.png)


Then, you can use this query as the derived table and perform grouping as
follows:


    
    
    SELECT 
        customerGroup, 
        COUNT(cg.customerGroup) AS groupCount
    FROM
        (SELECT 
            customerNumber,
                ROUND(SUM(quantityOrdered * priceEach)) sales,
                (CASE
                    WHEN SUM(quantityOrdered * priceEach) < 10000 THEN 'Silver'
                    WHEN SUM(quantityOrdered * priceEach) BETWEEN 10000 AND 100000 THEN 'Gold'
                    WHEN SUM(quantityOrdered * priceEach) > 100000 THEN 'Platinum'
                END) customerGroup
        FROM
            orderdetails
        INNER JOIN orders USING (orderNumber)
        WHERE
            YEAR(shippedDate) = 2003
        GROUP BY customerNumber) cg
    GROUP BY cg.customerGroup;    
    



The query returns the customer groups and the number of customers in each.

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-Derived-Table-Customer-Group-Counts.png)


In this tutorial, you have learned how to use the MySQL derived tables which
are subqueries in the `FROM` clause to simplify complex queries.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

