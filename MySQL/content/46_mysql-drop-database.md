

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL DROP DATABASE



 **Summary** : in this tutorial, you will learn how to use the MySQL `DROP
DATABASE` statement to delete an existing database in the server.



The `DROP DATABASE` statement drops all tables in the database and deletes the
database permanently. Therefore, you need to be very careful when using this
statement.



The following shows the syntax of the `DROP DATABASE` statement:


    
    
    DROP DATABASE [IF EXISTS] database_name;



In this statement, you specify the name of the database which you want to
delete after the `DROP DATABASE` keywords.



If you drop a database that does not exist, MySQL will issue an error.



To prevent an error from occurring if you delete a non-existing database, you
can use the `IF EXISTS` option. In this case, MySQL will terminate the
statement without issuing any error.



The `DROP DATABASE` statement returns the number of tables it deleted.



In MySQL, the schema is the synonym for the database. Therefore, you can use
them interchangeably:


    
    
    DROP SCHEMA [IF EXISTS] database_name;



In the next section, we will use the `testdb` and `testdb2` created in the
`[CREATE DATABASE](https://www.mysqltutorial.org/mysql-create-database/)`
tutorial. If you do not have these databases available, you can follow the
[previous tutorial](https://www.mysqltutorial.org/mysql-create-database/) to
create them.



First, log in to the MySQL Server using the `root` user:


    
    
    mysql -u root -p



Type the password for the `root` user and press Enter.


    
    
    Enter password: ********



Second, display all the databases using the `[SHOW
DATABASES](https://www.mysqltutorial.org/mysql-show-databases/)` statement:


    
    
    SHOW DATABASES;



Output:


    
    
    +--------------------+
    | Database           |
    +--------------------+
    | classicmodels      |
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    | testdb             |
    | testdb2            |
    +--------------------+
    7 rows in set (0.00 sec)



Third, drop the `testdb` database by issuing the `DROP DATABASE` statement:


    
    
    DROP DATABASE testdb;



Output:


    
    
    Query OK, 0 rows affected (0.03 sec)



MySQL returned zero affected rows indicating that the `testdb` database has no
tables.



First, launch the MySQL workbench and log in to the MySQL Server.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-using-MySQL-Workbench.png)


Second, right-click the database that you want to remove, for example, testdb2
and choose the `Drop Schema...` option.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-drop-schema.png)


Third, MySQL Workbench displays a dialog to confirm the deletion.



If you choose **Review SQL** , you’ll see the SQL statement that will be
executed. If you choose **Drop Now** , it’ll delete the database immediately.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-confirmation.png)


To be safe, let’s choose Review SQL:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-review-SQL.png)


Fourth, once you are sure that the SQL statement is going to drop the right
database, you can click the **Execute** button to execute the statement.



MySQL returns the following output indicating that the database is dropped
successfully. Because the `testdb2` is an empty database, the number of
affected rows is zero.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-output.png)


If you view the **schemas** pane, you will see that the **testdb2** is not on
the list anymore.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-DROP-DATABASE-schemas-in-Workbench.png)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

