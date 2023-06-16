

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » A Comprehensive Guide
to Using MySQL ENUM



 **Summary** : in this tutorial, you will learn how to use MySQL `ENUM` data
type for defining columns that store enumeration values.



In MySQL, an `ENUM` is a string object whose value is chosen from a list of
permitted values defined at the time of column creation.



The `ENUM` data type provides the following advantages:



To define an `ENUM` column, you use the following syntax:


    
    
    CREATE TABLE table_name (
        ...
        col ENUM ('value1','value2','value3'),
        ...
    );
    Code language: SQL (Structured Query Language) (sql)



In this syntax, you can have more than three enumeration values. However, it
is a good practice to keep the number of enumeration values under 20.



Let’s see the following example.



Suppose, we have to store ticket information with the priority: low, medium,
and high. To assign the `priority` column the `ENUM` type, you use the
following `[CREATE TABLE](https://www.mysqltutorial.org/mysql-create-table/)`
statement:


    
    
    CREATE TABLE tickets (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        priority ENUM('Low', 'Medium', 'High') NOT NULL
    );
    Code language: SQL (Structured Query Language) (sql)



The `priority` column will accept only three values `Low`, `Medium` and
`High`. Behind the scenes, MySQL maps each enumeration member to a numeric
index. In this case, `Low`, `Medium`, and `High` are map to 1, 2 and 3
respectively.



To [insert data](https://www.mysqltutorial.org/mysql-insert-statement.aspx)
into an `ENUM` column, you use the enumeration values in the predefined list.
For example, the following statement inserts a new row into the `tickets`
table.


    
    
    INSERT INTO tickets(title, priority)
    VALUES('Scan virus for computer A', 'High');
    Code language: SQL (Structured Query Language) (sql)



Besides the enumeration values, you can use the numeric index of the
enumeration member for inserting data into an `ENUM` column. For instance, the
following statement inserts a new ticket with the `Low` priority:


    
    
    INSERT INTO tickets(title, priority)
    VALUES('Upgrade Windows OS for all computers', 1);
    Code language: SQL (Structured Query Language) (sql)



In this example, instead of using the `Low` enumeration value, we used value
1. Since `Low` is mapped to 1, it is acceptable.



Let’s add some more rows to the `tickets` table:


    
    
    INSERT INTO tickets(title, priority)
    VALUES('Install Google Chrome for Mr. John', 'Medium'),
          ('Create a new user for the new employee David', 'High');       
    Code language: SQL (Structured Query Language) (sql)



Because we defined the `priority` as a `NOT NULL` column, when you insert a
new row without specifying the value for the `priority` column, MySQL will use
the first enumeration member as the default value.



See the following statement:


    
    
    INSERT INTO tickets(title)
    VALUES('Refresh the computer of Ms. Lily');
    Code language: SQL (Structured Query Language) (sql)



In the non-strict SQL mode, if you insert an invalid value into an `ENUM`
column, MySQL will use an empty string `''` with the numeric index `0` for
inserting. In case the strict SQL mode is enabled, trying to insert an invalid
`ENUM` value will result in an error.



Note that an `ENUM` column can accept `NULL` values if it is defined as a
null-able column.



The following statement gets all high priority tickets:


    
    
    SELECT 
        *
    FROM
        tickets
    WHERE
        priority = 'High';
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-ENUM-filtering-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20360%2057%22%3E%3C/svg%3E)


Because the enumeration member ‘High’ is mapped to 3, the following query
returns the same result set:


    
    
    SELECT 
        *
    FROM
        tickets
    WHERE
        priority = 3;
    Code language: SQL (Structured Query Language) (sql)



MySQL [sorts](https://www.mysqltutorial.org/mysql-order-by/) `ENUM` values
based on their index numbers. Therefore, the order of member depends on how
they were defined in the enumeration list.



The following query selects the tickets and sorts them by the priority from
`High` to `Low`:


    
    
    SELECT 
        title, priority
    FROM
        tickets
    ORDER BY priority DESC;
    Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2017/07/MySQL-ENUM-sorting.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20312%20120%22%3E%3C/svg%3E)


It’s always a good practice to define the enumeration values in the order that
you want to sort when you create the column.



MySQL `ENUM` has the following disadvantages:


    
    
    SELECT 
        column_type
    FROM
        information_schema.COLUMNS
    WHERE
        TABLE_NAME = 'tickets'
            AND COLUMN_NAME = 'priority';
    



In this tutorial, we have introduced you to MySQL `ENUM` data type and how to
use it for defining columns that store enumeration values.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

