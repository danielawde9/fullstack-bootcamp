

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Sequence



 **Summary** : in this tutorial, you will learn how to use **MySQL sequence**
to automatically generate unique numbers for ID columns of tables.



In MySQL, a sequence is a list of
[integers](https://www.mysqltutorial.org/mysql-int/) generated in the
ascending order i.e., 1,2,3… Many applications need sequences to generate
unique numbers mainly for identification e.g., customer ID in CRM, employee
numbers in HR, and equipment numbers in the services management system.



To create a sequence in MySQL automatically, you set the `AUTO_INCREMENT`
attribute for a column, which typically is a [primary
key](https://www.mysqltutorial.org/mysql-primary-key/) column.



The following rules are applied when you use the `AUTO_INCREMENT` attribute:



The following statement [creates a table](https://www.mysqltutorial.org/mysql-
create-table/) named `employees` that has the `emp_no` column is an
`AUTO_INCREMENT` column:


    
    
    CREATE TABLE employees (
        emp_no INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50)
    );Code language: SQL (Structured Query Language) (sql)



The `AUTO_INCREMENT` column has the following attributes:



Once you set the `AUTO_INCREMENT` attribute for a column, you can [reset the
auto increment](https://www.mysqltutorial.org/mysql-reset-auto-increment
"MySQL Reset Auto Increment Values") value in various ways e.g., by using the
[`ALTER TABLE`](https://www.mysqltutorial.org/mysql-alter-table.aspx)
statement.



Let’s take a look at some examples to get a better understanding of the MySQL
sequence.



First, insert two new rows into the `employees` table:


    
    
    INSERT INTO employees(first_name,last_name)
    VALUES('John','Doe'),
          ('Mary','Jane');Code language: SQL (Structured Query Language) (sql)



Second, select data from the `employees` table:


    
    
    SELECT * FROM employees;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-sequence-insert.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20256%2057%22%3E%3C/svg%3E)


Third, delete the second employee whose `emp_no` is 2:


    
    
    DELETE FROM employees 
    WHERE emp_no = 2;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-sequence-delete.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20256%2046%22%3E%3C/svg%3E)


Fourth, insert a new employee:


    
    
    INSERT INTO employees(first_name,last_name)
    VALUES('Jack','Lee');Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-sequence-insert-after-delete.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20248%2062%22%3E%3C/svg%3E)


Because the storage engine of the `employees` table is InnoDB, it does not
reuse the deleted sequence number. The new row has `emp_no` 3.



Fifth, update an existing employee with `emp_no` 3 to 1:


    
    
    UPDATE employees 
    SET 
        first_name = 'Joe',
        emp_no = 1
    WHERE
        emp_no = 3;Code language: SQL (Structured Query Language) (sql)



MySQL issued an error of duplicate entry for the primary key. Let’s fix it.


    
    
    UPDATE employees 
    SET 
        first_name = 'Joe',
        emp_no = 10
    WHERE
        emp_no = 3;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-sequence-update.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E)


Sixth, insert a new employee after updating the sequence number to 10:


    
    
    INSERT INTO employees(first_name,last_name)
    VALUES('Wang','Lee');Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-sequence-insert-after-update.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20251%2086%22%3E%3C/svg%3E)


The next sequence number of the last insert is number 4, therefore, MySQL uses
number 4 for the new row instead of 11.



In this tutorial, you have learned how to use MySQL sequence to generate
unique numbers for a primary key column by assigning the `AUTO_INCREMENT`
attribute to the column.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

