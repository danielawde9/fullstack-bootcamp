

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL AND Operator



 **Summary** : in this tutorial, you will learn how to the MySQL `AND`
operator to combine multiple Boolean expressions to filter data.



MySQL doesn’t have a built-in Boolean type. Instead, it uses the number zero
as FALSE and non-zero values as TRUE.



The `AND` operator is a logical operator that combines two or more
[Boolean](https://www.mysqltutorial.org/mysql-boolean/) expressions and
returns 1, 0, or NULL:


    
    
    A AND B



In this expression, A and B are called operands. They can be literal values or
expressions.



The logical AND operator returns 1 if both A and B are non-zero and not NULL.
It returns 0 if either operand is zero; otherwise, it returns NULL.



The logical AND operator returns 1 if both A and B are non-zero and NOT NULL.
For example:


    
    
    SELECT 1 AND 1;


    
    
    +---------+
    | 1 AND 1 |
    +---------+
    |       1 |
    +---------+
    1 row in set (0.00 sec)



The logical AND operator returns 0 if A or B is zero or both A and B are zero:


    
    
    SELECT 1 AND 0, 0 AND 1, 0 AND 0, 0 AND NULL;


    
    
    +---------+---------+---------+------------+
    | 1 AND 0 | 0 AND 1 | 0 AND 0 | 0 AND NULL |
    +---------+---------+---------+------------+
    |       0 |       0 |       0 |          0 |
    +---------+---------+---------+------------+
    1 row in set (0.00 sec)



The logical AND operator returns NULL if either operand is non-zero or both
operands are NULL.


    
    
    SELECT 1 AND NULL, NULL AND NULL;


    
    
    +------------+---------------+
    | 1 AND NULL | NULL AND NULL |
    +------------+---------------+
    |       NULL |          NULL |
    +------------+---------------+
    1 row in set (0.00 sec)



The following table illustrates the results of the `AND` operator when
combining true, false, and null.



In practice, you’ll use the `AND` operator in the
`[WHERE](https://www.mysqltutorial.org/mysql-where/)` clause of the
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)`, `[UPDATE](https://www.mysqltutorial.org/mysql-update-data.aspx)`,
`[DELETE](https://www.mysqltutorial.org/mysql-delete-statement.aspx)`
statements to form a condition. Also, you can the `AND` operator in the
conditions of the `[INNER JOIN](https://www.mysqltutorial.org/mysql-inner-
join.aspx)` and `[LEFT JOIN](https://www.mysqltutorial.org/mysql-left-
join.aspx)` clauses.



When evaluating an expression that contains the `AND` operator, MySQL stops
evaluating the remaining parts of the expression as soon as it can determine
the result.



This is called short-circuit evaluation. In other words, the `AND` operator is
short-circuited. For example:


    
    
    SELECT 1 = 0 AND 1 / 0 ;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-and/#1)


    
    
    +-----------------+
    | 1 = 0 AND 1 / 0 |
    +-----------------+
    |               0 |
    +-----------------+
    1 row in set (0.01 sec)



In this example, MySQL only evaluates the first part `1 = 0` of the expression
`1 = 0 AND 1 / 0`.



Since the expression `1 = 0` returns 0, MySQL can determine the result of the
whole expression, which is 0.



Therefore, MySQL doesn’t need to evaluate the remaining part of the
expression, which is `1/0`; it would issue a division by zero error.



Let’s use the `customers` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/customers.png)


The following statement uses the `AND` operator to find customers who locate
in California (CA), USA:


    
    
    SELECT 
        customername, 
        country, 
        state
    FROM
        customers
    WHERE
        country = 'USA' AND 
        state = 'CA';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-and/#2)


    
    
    +------------------------------+---------+-------+
    | customername                 | country | state |
    +------------------------------+---------+-------+
    | Mini Gifts Distributors Ltd. | USA     | CA    |
    | Mini Wheels Co.              | USA     | CA    |
    | Technics Stores Inc.         | USA     | CA    |
    | Toys4GrownUps.com            | USA     | CA    |
    | Boards & Toys Co.            | USA     | CA    |
    | Collectable Mini Designs Co. | USA     | CA    |
    | Corporate Gift Ideas Co.     | USA     | CA    |
    | Men 'R' US Retailers, Ltd.   | USA     | CA    |
    | The Sharp Gifts Warehouse    | USA     | CA    |
    | West Coast Collectables Co.  | USA     | CA    |
    | Signal Collectibles Ltd.     | USA     | CA    |
    +------------------------------+---------+-------+
    11 rows in set (0.00 sec)



By using the `AND` operator, you can combine more than two Boolean
expressions. For example, the following query returns the customers who locate
in California, USA, and have a credit limit greater than 100K.


    
    
    SELECT 
        customername, 
        country, 
        state, 
        creditlimit
    FROM
        customers
    WHERE
        country = 'USA' AND 
        state = 'CA' AND 
        creditlimit > 100000;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-and/#3)


    
    
    +------------------------------+---------+-------+-------------+
    | customername                 | country | state | creditlimit |
    +------------------------------+---------+-------+-------------+
    | Mini Gifts Distributors Ltd. | USA     | CA    |   210500.00 |
    | Collectable Mini Designs Co. | USA     | CA    |   105000.00 |
    | Corporate Gift Ideas Co.     | USA     | CA    |   105000.00 |
    +------------------------------+---------+-------+-------------+
    3 rows in set (0.00 sec)

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

