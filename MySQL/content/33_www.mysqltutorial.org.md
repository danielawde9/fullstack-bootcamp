

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Insert



 **Summary** : in this tutorial, you will learn how to use the MySQL `INSERT`
statement to insert one or more rows into a table.



The `INSERT` statement allows you to insert one or more rows into a table. The
following illustrates the syntax of the `INSERT` statement:


    
    
    INSERT INTO table(c1,c2,...)
    VALUES (v1,v2,...);



In this syntax,



The number of columns and values must be the same. In addition, the positions
of columns must be corresponding with the positions of their values.



To [insert multiple rows](https://www.mysqltutorial.org/mysql-insert-multiple-
rows/) into a table using a single `INSERT` statement, you use the following
syntax:


    
    
    INSERT INTO table(c1,c2,...)
    VALUES 
       (v11,v12,...),
       (v21,v22,...),
        ...
       (vnn,vn2,...);



In this syntax, rows are separated by commas in the `VALUES` clause.



Let’s [create a new table](https://www.mysqltutorial.org/mysql-create-table/
"MySQL create new table") named `tasks` for practicing the `INSERT` statement.


    
    
    CREATE TABLE IF NOT EXISTS tasks (
        task_id INT AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        start_date DATE,
        due_date DATE,
        priority TINYINT NOT NULL DEFAULT 3,
        description TEXT,
        PRIMARY KEY (task_id)
    );



The following statement inserts a new row into the `tasks` table:


    
    
    INSERT INTO tasks(title,priority)
    VALUES('Learn MySQL INSERT Statement',1);



MySQL returns the following message:


    
    
    1 row(s) affected



It means that one row has been inserted into the `tasks` table successfully.



This query returns data from the `tasks` table:


    
    
    SELECT * FROM tasks;



Here is the output:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-Example.png)


In this example, we specified the values for only `title` and `priority`
columns. For other columns, MySQL uses the default values.



The `task_id` column is an
`[AUTO_INCREMENT](https://www.mysqltutorial.org/mysql-sequence/)` column. It
means that MySQL generates a sequential integer whenever a row is inserted
into the table.



The `start_date`, `due_date`, and `description` columns use `NULL` as the
default value, therefore, MySQL uses
`[NULL](https://www.mysqltutorial.org/mysql-null/)` to insert into these
columns if you don’t specify their values in the `INSERT` statement.



If you want to insert a default value into a column, you have two ways:



The following example demonstrates the second way:


    
    
    INSERT INTO tasks(title,priority)
    VALUES('Understanding DEFAULT keyword in INSERT statement',DEFAULT);



In this example, we specified the `priority` column and the `DEFAULT` keyword.



Because the default value for the column `priority` is 3 as declared in the
table definition:


    
    
    priority TINYINT NOT NULL DEFAULT 3



MySQL uses the number 3 to insert into the `priority` column.



The following statement returns the contents of the `tasks` table after the
insert:


    
    
    SELECT * FROM tasks;

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-DEFAULT-values.png)


To insert a literal date value into a column, you use the following format:


    
    
    'YYYY-MM-DD'



In this format:



The following statement inserts a new row to the `tasks` table with the start
and due date values:


    
    
    INSERT INTO tasks(title, start_date, due_date)
    VALUES('Insert date into table','2018-01-09','2018-09-15');



The following picture shows the contents of the `tasks` table after the
insert:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-dates-into-table.png)


It is possible to use expressions in the `VALUES` clause. For example, the
following statement adds a new task using the current date for start date and
due date columns:


    
    
    INSERT INTO tasks(title,start_date,due_date)
    VALUES('Use current date for the task',CURRENT_DATE(),CURRENT_DATE())



In this example, we used the `CURRENT_DATE()` function as the values for the
`start_date` and `due_date` columns. Note that the
`[CURRENT_DATE()](https://www.mysqltutorial.org/mysql-curdate/)` function is a
[date function](https://www.mysqltutorial.org/mysql-date-functions/) that
returns the current system date.



Here are the contents of the `tasks` table after insert:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-current-date-example.png)


The following statement inserts three rows into the `tasks` table:


    
    
    INSERT INTO tasks(title, priority)
    VALUES
    	('My first task', 1),
    	('It is the second task',2),
    	('This is the third task of the week',3);



In this example, each row data is specified as a list of values in the
`VALUES` clause.



MySQL returns the following message:


    
    
    3 row(s) affected Records: 3  Duplicates: 0  Warnings: 0



It means that the three rows have been inserted successfully with no
duplicates or warnings.


    
    
    SELECT * FROM tasks;



The table `tasks` has the following data:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-INSERT-multiple-rows-into-table-1.png)


In this tutorial, you have learned how to use the MySQL `INSERT` statement to
add one or more rows into a table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

