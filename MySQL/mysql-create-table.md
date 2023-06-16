

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL CREATE TABLE



 **Summary** _:_ in this tutorial, we will show you how to use the MySQL
`CREATE TABLE` statement to create a new table in the database.



The `CREATE TABLE` statement allows you to create a new table in a database.



The following illustrates the basic syntax of the `CREATE TABLE` statement:


    
    
    CREATE TABLE [IF NOT EXISTS] table_name(
       column_1_definition,
       column_2_definition,
       ...,
       table_constraints
    ) ENGINE=storage_engine;Code language: SQL (Structured Query Language) (sql)



Let’s examine the syntax in greater detail.



First, you specify the name of the table that you want to create after the
`CREATE TABLE` keywords. The table name must be unique within a database. The
`IF NOT EXISTS` is optional. It allows you to check if the table that you
create already exists in the database. If this is the case, MySQL will ignore
the whole statement and will not create any new table.



Second _,_ you specify a list of columns of the table in the `column_list`
section, columns are separated by commas.



Third, you can optionally specify the [storage
engine](https://www.mysqltutorial.org/understand-mysql-table-types-innodb-
myisam.aspx "Understanding MySQL Table Types, or Storage Engines") for the
table in the `ENGINE` clause. You can use any storage engine such as InnoDB
and MyISAM. If you don’t explicitly declare a storage engine, MySQL will use
InnoDB by default.



InnoDB became the default storage engine since MySQL version 5.5. The InnoDB
storage engine brings many benefits of a relational database management system
such as ACID transaction, referential integrity, and crash recovery. In the
previous versions, MySQL used MyISAM as the default storage engine.



The following shows the syntax for a column’s definition:


    
    
    column_name data_type(length) [NOT NULL] [DEFAULT value] [AUTO_INCREMENT] column_constraint;Code language: SQL (Structured Query Language) (sql)



Here are the details:



After the column list, you can define table constraints such as
[UNIQUE](https://www.mysqltutorial.org/mysql-unique-constraint/),
[CHECK](https://www.mysqltutorial.org/mysql-check-constraint/), [PRIMARY
KEY](https://www.mysqltutorial.org/mysql-primary-key/) and [FOREIGN
KEY](https://www.mysqltutorial.org/mysql-foreign-key/).



For example, if you want to set a column or a group of columns as the primary
key, you use the following syntax:


    
    
    PRIMARY KEY (col1,col2,...)Code language: SQL (Structured Query Language) (sql)



Let’s take some examples of creating new tables.



The following statement creates a new table named `tasks`:


    
    
    CREATE TABLE IF NOT EXISTS tasks (
        task_id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        start_date DATE,
        due_date DATE,
        status TINYINT NOT NULL,
        priority TINYINT NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  ENGINE=INNODB;Code language: SQL (Structured Query Language) (sql)



The tasks table has the following columns:



The `task_id` is the primary key column of the `tasks` table. It means that
the values in the `task_id` column will uniquely identify rows in the table.



Once you execute the `CREATE TABLE` statement to create the `tasks` table, you
can view its structure by using the `DESCRIBE` statement:


    
    
    DESCRIBE tasks;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-CREATE-TABLE-DESCRIBE-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20504%20172%22%3E%3C/svg%3E)


This picture shows the database diagram of the `tasks` table:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-CREATE-TABLE-Tasks-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20178%20204%22%3E%3C/svg%3E)


Suppose each task has a checklist or to-do list. To store checklists of tasks,
you can create a new table named `checklists` as follows:


    
    
    CREATE TABLE IF NOT EXISTS checklists (
        todo_id INT AUTO_INCREMENT,
        task_id INT,
        todo VARCHAR(255) NOT NULL,
        is_completed BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (todo_id , task_id),
        FOREIGN KEY (task_id)
            REFERENCES tasks (task_id)
            ON UPDATE RESTRICT ON DELETE CASCADE
    );Code language: SQL (Structured Query Language) (sql)



The table `checklists` has a primary key that consists of two columns.
Therefore, we used a table constraint to define the [primary
key](https://www.mysqltutorial.org/mysql-primary-key/):


    
    
    PRIMARY KEY (todo_id , task_id)Code language: SQL (Structured Query Language) (sql)



In addition, the `task_id` is the foreign key column that references to the
`task_id` column of the table `tasks`, we used a foreign key constraint to
establish this relationship:


    
    
    FOREIGN KEY (task_id) 
        REFERENCES tasks (task_id) 
        ON UPDATE RESTRICT 
        ON DELETE CASCADECode language: SQL (Structured Query Language) (sql)



You will learn more about the [foreign key
constraint](https://www.mysqltutorial.org/mysql-foreign-key/) in the
subsequent tutorial.



This picture illustrates the `checklists` table and its relationship with the
`tasks` table:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/08/MySQL-CREATE-TABLE-checklists-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20440%20221%22%3E%3C/svg%3E)


In this tutorial, you have learned how to use MySQL `CREATE TABLE` statement
to create a new table in the database.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

