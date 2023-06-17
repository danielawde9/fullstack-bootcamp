

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL LIKE



 **Summary** _:_ in this tutorial, you will learn how to use the MySQL `LIKE`
operator to query data based on a specified pattern.



The `LIKE` operator is a logical operator that tests whether a string contains
a specified pattern or not.



Here’s the syntax of the `LIKE` operator:


    
    
    expression LIKE pattern ESCAPE escape_character



In this syntax, if the `expression` matches the `pattern`, the `LIKE` operator
returns 1. Otherwise, it returns 0.



MySQL provides two wildcard characters for constructing patterns: percentage
`%` and underscore `_` .



For example, `s%` matches any string starts with the character `s` such as
`sun` and `six`. The `se_` matches any string starts with `se` and is followed
by any character such as `see` and `sea`.



When the pattern contains the wildcard character and you want to treat it as a
regular character, you can use the `ESCAPE` clause.



Typically, you’ll use the `LIKE` operator in the
`[WHERE](https://www.mysqltutorial.org/mysql-where/)` clause of the
`[SELECT](https://www.mysqltutorial.org/mysql-select-statement-query-
data.aspx)` , `[DELETE](https://www.mysqltutorial.org/mysql-delete-
statement.aspx)`, and `[UPDATE](https://www.mysqltutorial.org/mysql-update-
data.aspx)` statement.



Let’s practice with some examples of using the `LIKE` operator. We will use
the following `employees` table from the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
demonstration:

![](https://www.mysqltutorial.org/wp-content/uploads/2013/02/employees_table.png)


This example uses the `LIKE `operator to find employees whose first names
start with the letter `a`:


    
    
    SELECT 
        employeeNumber, 
        lastName, 
        firstName
    FROM
        employees
    WHERE
        firstName LIKE 'a%';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#1)



![MySQL LIKE Operator Example](https://www.mysqltutorial.org/wp-
content/uploads/2009/12/MySQL-LIKE-Operator-Example.png)![MySQL LIKE Operator
Example](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20250%2065%22%3E%3C/svg%3E)  
In this example, MySQL scans the whole `employees` table to find employees
whose first names start with the letter `a` and are followed by any number of
characters.

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-LIKE-Operator-Example.png)


This example uses the `LIKE` operator to find employees whose last names end
with the literal string `on` e.g., `Patterson`, `Thompson`:


    
    
    SELECT 
        employeeNumber, 
        lastName, 
        firstName
    FROM
        employees
    WHERE
        lastName LIKE '%on';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#2)

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-LIKE-operator-lastname-pattern-example.png)


To check if a string contains a substring, you can use the percentage ( `%` )
wildcard at the beginning and the end of the substring.



For example, the following query uses the `LIKE` operator to find all
employees whose last names contain the substring `on`:


    
    
    SELECT 
        employeeNumber, 
        lastName, 
        firstName
    FROM
        employees
    WHERE
        lastname LIKE '%on%';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#3)

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-LIKE-operator-with-prefix-and-suffix-patterns.png)


To find employees whose first names start with the letter `T` , end with the
letter `m`, and contain any single character between e.g., `Tom` , `Tim`, you
use the underscore (_) wildcard to construct the pattern as follows:


    
    
    SELECT 
        employeeNumber, 
        lastName, 
        firstName
    FROM
        employees
    WHERE
        firstname LIKE 'T_m';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#4)

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/mysql-like-with-_-pattern.png)


The MySQL allows you to combine the `NOT` operator with the `LIKE` operator to
find a string that does not match a specific pattern.



Suppose you want to search for employees whose last names don’t start with the
letter `B`, you can use the `NOT LIKE` operator as follows:


    
    
    SELECT 
        employeeNumber, 
        lastName, 
        firstName
    FROM
        employees
    WHERE
        lastName NOT LIKE 'B%';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#5)

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-NOT-LIKE-example-1.png)


Note that the pattern is not case-sensitive. Therefore, the `b%` and `B%`
patterns return the same result.



Sometimes the pattern may contain the wildcard characters e.g., 10%, _20, etc.



In this case, you can use the `ESCAPE` clause to specify the escape character
so that the LIKE operator interprets the wildcard character as a literal
character.



If you don’t specify the escape character explicitly, the backslash character
(`\`) is the default escape character.



For example, if you want to find products whose product codes contain the
string `_20` , you can use the pattern `%\_20%` with the default escape
character:


    
    
    SELECT 
        productCode, 
        productName
    FROM
        products
    WHERE
        productCode LIKE '%\_20%';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#6)



Alternatively, you can specify a different escape character e.g., `$` using
the `ESCAPE` clause:


    
    
    SELECT 
        productCode, 
        productName
    FROM
        products
    WHERE
        productCode LIKE '%$_20%' ESCAPE '$';



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-like/#7)

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-LIKE-ESCAPE-example.png)


The pattern `%$_20%` matches any string that contains the `_20` string.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

