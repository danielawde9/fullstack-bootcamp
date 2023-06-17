

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL IN



 **Summary** : in this tutorial, you will learn how to use MySQL `IN` operator
to determine if a specified value matches any value in a list of values.



The `IN` operator allows you to determine if a value matches any value in a
list of values. Here’s the syntax of the `IN` operator:


    
    
    value IN (value1, value2, value3,...)



The `IN` operator returns 1 (true) if the `value` equals any value in the list
(`value1`, `value2`, `value3`,…). Otherwise, it returns 0.



In this syntax:



The `IN` operator is functionally equivalent to the combination of multiple
`[OR](https://www.mysqltutorial.org/mysql-or/)` operators:


    
    
    value = value1 OR value = value2 OR value = value3 OR ...



The following example returns 1 because 1 is in the list:


    
    
    SELECT 1 IN (1,2,3);


    
    
    +--------------+
    | 1 IN (1,2,3) |
    +--------------+
    |            1 |
    +--------------+
    1 row in set (0.00 sec)



The following example returns 0 because 4 is not in the list:


    
    
    SELECT 4 IN (1,2,3);


    
    
    +--------------+
    | 4 IN (1,2,3) |
    +--------------+
    |            0 |
    +--------------+
    1 row in set (0.00 sec)



In practice, you’ll use the `IN` operator to form conditions in a
`[WHERE](https://www.mysqltutorial.org/mysql-where/)` clause of the
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)`, `[DELETE](https://www.mysqltutorial.org/mysql-delete-
statement.aspx)`, and `[UPDATE](https://www.mysqltutorial.org/mysql-update-
data.aspx)` statements. Also, you’ll use the `IN` operator in a query that
contains a [subquery](https://www.mysqltutorial.org/mysql-subquery/).



Generally, the `IN` operator returns `NULL` in two cases:



The following example returns NULL because the value of the left side of the
IN operator is NULL:


    
    
    SELECT NULL IN (1,2,3);


    
    
    +-----------------+
    | NULL IN (1,2,3) |
    +-----------------+
    |            NULL |
    +-----------------+
    1 row in set (0.00 sec)



The following example also returns NULL because the 0 is not equal to any
value in the list and the list has one NULL:


    
    
    SELECT 0 IN (1 , 2, 3, NULL);


    
    
    +-----------------------+
    | 0 IN (1 , 2, 3, NULL) |
    +-----------------------+
    |                  NULL |
    +-----------------------+
    1 row in set (0.00 sec)



The following example also returns NULL because NULL is not equal to any value
in the list and the list has one NULL. Note that NULL is not equal to NULL.


    
    
    SELECT NULL IN (1 , 2, 3, NULL);



See the following `offices` table from the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx):

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/offices_table.png)


The following example uses the `IN` operator to find the offices located in
the USA and France:


    
    
    SELECT 
        officeCode, 
        city, 
        phone, 
        country
    FROM
        offices
    WHERE
        country IN ('USA' , 'France');



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-in/#1)


    
    
    +------------+---------------+-----------------+---------+
    | officeCode | city          | phone           | country |
    +------------+---------------+-----------------+---------+
    | 1          | San Francisco | +1 650 219 4782 | USA     |
    | 2          | Boston        | +1 215 837 0825 | USA     |
    | 3          | NYC           | +1 212 555 3000 | USA     |
    | 4          | Paris         | +33 14 723 4404 | France  |
    +------------+---------------+-----------------+---------+
    4 rows in set (0.01 sec)



You can also get the same result with the
`[OR](https://www.mysqltutorial.org/mysql-or/)` operator like this:


    
    
    SELECT 
        officeCode, 
        city, 
        phone
    FROM
        offices
    WHERE
        country = 'USA' OR country = 'France';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-in/#2)



In case the list has many values, you need to construct a very long statement
with multiple `OR` operators. Hence, the `IN` operator allows you to shorten
the query and make it more readable.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

