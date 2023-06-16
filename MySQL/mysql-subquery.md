

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Subquery



 **Summary** : in this tutorial, we will show you how to use the MySQL
subquery to write complex queries and explain the correlated subquery concept.



A MySQL subquery is a query nested within another query such as
[`SELECT`](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx), [`INSERT`](https://www.mysqltutorial.org/mysql-insert-
statement.aspx), [`UPDATE` ](https://www.mysqltutorial.org/mysql-update-
data.aspx)or [`DELETE`](https://www.mysqltutorial.org/mysql-delete-
statement.aspx). Also, a subquery can be nested within another subquery.



A MySQL subquery is called an inner query while the query that contains the
subquery is called an outer query. A subquery can be used anywhere that
expression is used and must be closed in parentheses.



For example, the following query uses a subquery to return the employees who
work in the offices located in the USA.


    
    
    SELECT 
        lastName, firstName
    FROM
        employees
    WHERE
        officeCode IN (SELECT 
                officeCode
            FROM
                offices
            WHERE
                country = 'USA');Code language: SQL (Structured Query Language) (sql)



In this example:

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/mysql-subquery.gif)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20395%20147%22%3E%3C/svg%3E)


When executing the query, MySQL evaluates the subquery first and uses the
result of the subquery for the outer query.



We will use the table `payments` in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/payments.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20144%20124%22%3E%3C/svg%3E)


You can use comparison operators e.g., =, >, < to compare a single value
returned by the subquery with the expression in the
`[WHERE](https://www.mysqltutorial.org/mysql-where/)` clause.



For example, the following query returns the customer who has the highest
payment.


    
    
    SELECT 
        customerNumber, 
        checkNumber, 
        amount
    FROM
        payments
    WHERE
        amount = (SELECT MAX(amount) FROM payments);Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-subquery/#1)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/mysql-subquery-with-equal-operator.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20272%2044%22%3E%3C/svg%3E)


Besides the `=` operator, you can use other comparison operators such as
greater than (`>`), greater than or equal to (>=) less than(`<`), and less
than or equal to (<=).



For example, you can find customers whose payments are greater than the
average payment using a subquery:


    
    
    SELECT 
        customerNumber, 
        checkNumber, 
        amount
    FROM
        payments
    WHERE
        amount > (SELECT 
                AVG(amount)
            FROM
                payments);Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-subquery/#2)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/mysql-subquery-with-greater-than-operator.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20269%20220%22%3E%3C/svg%3E)


In this example:



If a subquery returns more than one value, you can use other operators such as
`[IN](https://www.mysqltutorial.org/mysql-basics/mysql-in/)` or `[NOT
IN](https://www.mysqltutorial.org/mysql-basics/mysql-in/)` operator in the
`WHERE` clause.



See the following `customers` and `orders` tables:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/customers-orders.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20434%20304%22%3E%3C/svg%3E)


For example, you can use a subquery with `NOT IN` operator to find the
customers who have not placed any orders as follows:


    
    
    SELECT 
        customerName
    FROM
        customers
    WHERE
        customerNumber NOT IN (SELECT DISTINCT
                customerNumber
            FROM
                orders);Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-subquery/#3)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/mysql-subquery-not-in.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20177%20222%22%3E%3C/svg%3E)


When you use a subquery in the `FROM` clause, the result set returned from a
subquery is used as a [temporary table.](https://www.mysqltutorial.org/mysql-
temporary-table/) This table is referred to as a [derived
table](https://www.mysqltutorial.org/mysql-derived-table/) or materialized
subquery.



The following subquery finds the
[maximum](https://www.mysqltutorial.org/mysql-max-function/), [minimum,
](https://www.mysqltutorial.org/mysql-min/)and [average
](https://www.mysqltutorial.org/mysql-avg/)number of items in sale orders:


    
    
    SELECT 
        MAX(items), 
        MIN(items), 
        FLOOR(AVG(items))
    FROM
        (SELECT 
            orderNumber, COUNT(orderNumber) AS items
        FROM
            orderdetails
        GROUP BY orderNumber) AS lineitems;Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-subquery/#6)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/mysql-subquery-from-clause-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20278%2045%22%3E%3C/svg%3E)


Note that the `[FLOOR()](https://www.mysqltutorial.org/mysql-math-
functions/mysql-floor/)` is used to remove decimal places from the average
values of items.



In the previous examples, you notice that a subquery is independent. It means
that you can execute the subquery as a standalone query, for example:


    
    
    SELECT 
        orderNumber, 
        COUNT(orderNumber) AS items
    FROM
        orderdetails
    GROUP BY orderNumber;Code language: SQL (Structured Query Language) (sql)



Unlike a standalone subquery, a correlated subquery is a subquery that uses
the data from the outer query. In other words, a correlated subquery depends
on the outer query. A correlated subquery is evaluated once for each row in
the outer query.



See the following `products` table from the sample database:

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/products_table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20181%20231%22%3E%3C/svg%3E)


The following example uses a correlated subquery to select products whose buy
prices are greater than the average buy price of all products in each __
product line.


    
    
    SELECT 
        productname, 
        buyprice
    FROM
        products p1
    WHERE
        buyprice > (SELECT 
                AVG(buyprice)
            FROM
                products
            WHERE
                productline = p1.productline)Code language: SQL (Structured Query Language) (sql)



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-subquery/#7)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/MySQL-correlated-subquery-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20283%20199%22%3E%3C/svg%3E)


In this example, both outer query and correlated subquery reference the same
`products` table. Therefore, we need to use a table alias `p1` for the
`products` table in the outer query.



Unlike a regular subquery, you cannot execute a correlated subquery
independently like this. If you do so, MySQL doesn’t know the p1 table and
will issue an error.


    
    
    SELECT 
        AVG(buyprice)
    FROM
        products
    WHERE
        productline = p1.productline;



For each row in the `products` (or p1) table, the correlated subquery needs to
execute once to get the average buy price of all products in the `productline`
of that row.



If the buy price of the current row is greater than the average buy price
returned by the correlated subquery, the query includes the row in the result
set.



When a subquery is used with the
[`EXISTS`](https://www.mysqltutorial.org/mysql-exists/) or `[NOT
EXISTS](https://www.mysqltutorial.org/mysql-exists/)` operator, a subquery
returns a Boolean value of `TRUE` or `FALSE`. The following query illustrates
a subquery used with the `EXISTS` operator:


    
    
    SELECT 
        *
    FROM
        table_name
    WHERE
        EXISTS( subquery );Code language: SQL (Structured Query Language) (sql)



In the query above, if the subquery returns any rows, `EXISTS subquery`
returns `TRUE`, otherwise, it returns `FALSE`.



The `EXISTS` and `NOT EXISTS` are often used in the correlated subqueries.



Let’s take a look at the `orders` and `orderdetails` tables from the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx):

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/orders-orderdetails-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20424%20184%22%3E%3C/svg%3E)


The following query finds sales orders whose total values are greater than
60K.


    
    
    SELECT 
        orderNumber, 
        SUM(priceEach * quantityOrdered) total
    FROM
        orderdetails
            INNER JOIN
        orders USING (orderNumber)
    GROUP BY orderNumber
    HAVING SUM(priceEach * quantityOrdered) > 60000;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/MySQL-subquery-exists.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20170%2068%22%3E%3C/svg%3E)


It returns 3 rows, meaning that there are three sales orders whose total
values are greater than 60K.



You can use the query above as a correlated subquery to find customers who
placed at least one sales order with the total value greater than 60K by using
the `EXISTS` operator:


    
    
    SELECT 
        customerNumber, 
        customerName
    FROM
        customers
    WHERE
        EXISTS( SELECT 
                orderNumber, SUM(priceEach * quantityOrdered)
            FROM
                orderdetails
                    INNER JOIN
                orders USING (orderNumber)
            WHERE
                customerNumber = customers.customerNumber
            GROUP BY orderNumber
            HAVING SUM(priceEach * quantityOrdered) > 60000);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/MySQL-correlated-subquery-exists-operator-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20257%2079%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

