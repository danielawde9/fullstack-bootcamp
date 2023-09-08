

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL SELECT



 **Summary** : in this tutorial, you will learn how to use the basic form of
the MySQL `SELECT` statement to query data from a table.



The `SELECT` statement allows you to select data from one or more tables. To
write a `SELECT` statement in MySQL, you use this syntax:


    
    
    SELECT select_list
    FROM table_name;



In this syntax:



The semicolon (`;`) is optional. It denotes the end of a statement. If you
have two or more statements, you need to use the semicolon(`;)` to separate
them so that MySQL will execute each statement individually.



The `SELECT` and `FROM` are the keywords. By convention, you write the SQL
keywords in uppercase. However, it’s not mandatory. Because SQL is case-
insensitive, you can write the SQL statement in lowercase, uppercase, etc. For
example:


    
    
    select select_list
    from table_name;



When executing the `SELECT` statement, MySQL evaluates the `FROM` clause
before the `SELECT` clause:

![](https://www.mysqltutorial.org/wp-content/uploads/2021/07/MySQL-Select.svg)


We’ll use the `employees` table in the [sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx) for the
following examples.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/employees.png)


The `employees` table has eight columns: employeeNumber, lastName, firstName,
extension, email, officeCode, reportsTo, and jobTitle. The table also has many
rows as shown in the following picture:

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-employees-table.png)


The following example uses the `SELECT` statement to select the last names of
all employees:


    
    
    SELECT lastName
    FROM employees;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-select/#1)



Here’s the partial output:


    
    
    +-----------+
    | lastName  |
    +-----------+
    | Murphy    |
    | Patterson |
    | Firrelli  |
    | Patterson |
    | Bondur    |
    | Bow       |
    | Jennings  |
    ...
    



The result of a `SELECT` statement is called a result set as it’s a set of
rows that results from the query.



The following example uses the `SELECT` statement to get the first name, last
name, and job title of employees:


    
    
    SELECT 
        lastName, 
        firstName, 
        jobTitle
    FROM
        employees;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-select/#2)



Even though the `employees` table has many columns, the `SELECT` statement
returns data of three columns `lastName`, `firstName`, and `jobTitle`
specified in the `SELECT` clause:


    
    
    +-----------+-----------+----------------------+
    | lastname  | firstname | jobtitle             |
    +-----------+-----------+----------------------+
    | Murphy    | Diane     | President            |
    | Patterson | Mary      | VP Sales             |
    | Firrelli  | Jeff      | VP Marketing         |
    | Patterson | William   | Sales Manager (APAC) |
    | Bondur    | Gerard    | Sale Manager (EMEA)  |
    ...
    
    



If you want to select data from all the columns of the `employees` table, you
can specify all the column names in the `SELECT` clause like this:


    
    
    SELECT employeeNumber,
           lastName,
           firstName,
           extension,
           email,
           officeCode,
           reportsTo,
           jobTitle
    FROM   employees; 



Alternatively, you can use the asterisk (*) which is the shorthand for all
columns. For example:


    
    
    SELECT * 
    FROM employees;



[Try It Out](https://www.mysqltutorial.org/tryit/query/mysql-select/#3)



The query returns data from all the columns of the `employees` table.



The `SELECT *` is often called “select star” or “select all” since it selects
data from all columns of the table. In practice, you should use the `SELECT *`
for the ad-hoc queries only.



If you embed the `SELECT` statement in the code such as
[PHP](https://www.mysqltutorial.org/php-mysql/),
[Java](https://www.mysqltutorial.org/mysql-jdbc-tutorial/),
[Python](https://www.mysqltutorial.org/python-mysql/),
[Node.js](https://www.mysqltutorial.org/mysql-nodejs/), you should explicitly
specify the columns from which you want to select data.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

