

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL CREATE DATABASE



 **Summary** : in this tutorial, you will learn how to use the MySQL `CREATE
DATABASE` statement to create a new database on a MySQL database server.



To create a new database in MySQL, you use the `CREATE DATABASE` statement
with the following syntax:


    
    
    CREATE DATABASE [IF NOT EXISTS] database_name
    [CHARACTER SET charset_name]
    [COLLATE collation_name]



In this syntax:



To create a new database via the mysql client tool, you follow these steps:



First, log in to the MySQL Server using a user account that has the `CREATE
DATABASE` privilege:


    
    
    mysql -u root -p



It’ll prompt you for entering a password. To authenticate, you need to type
the password for the `root` user account and press the `Enter` key.



Next, display the current databases available on the server using the `[SHOW
DATABASES](https://www.mysqltutorial.org/mysql-show-databases/)` statement.
This step is optional.


    
    
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
    +--------------------+
    5 rows in set (0.00 sec)



Then, issue the `CREATE DATABASE` command with a database name e.g., `testdb`
and press Enter:


    
    
    CREATE DATABASE testdb;



It’ll return the following:


    
    
    Query OK, 1 row affected (0.02 sec)



After that, use the `SHOW CREATE DATABASE` command to review the created
database:


    
    
    SHOW CREATE DATABASE testdb;



MySQL returns the database name and the character set and collation of the
database:


    
    
    +----------+----------------------------------------------------------------------------------------------------------------------------------+
    | Database | Create Database                                                                                                                  |
    +----------+----------------------------------------------------------------------------------------------------------------------------------+
    | testdb   | CREATE DATABASE `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */ |
    +----------+----------------------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.01 sec)



Finally, [select the newly created
database](https://www.mysqltutorial.org/mysql-select-database/) to work with
by using the `USE` statement:


    
    
    USE testdb;



Output:


    
    
    Database changed



Now, you can start [creating tables](https://www.mysqltutorial.org/mysql-
create-table/) and other databases objects within the `testdb` database.



To quit the **mysql** program, type `exit` command:


    
    
    exit



Output:


    
    
    Bye



To create a new database using the MySQL Workbench, you follow these steps:



First, launch the MySQL Workbench and click the **setup new connection**
button as shown in the following screenshot:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-new-connection.png)


Second, type the name for the connection and click the **Test Connection**
button.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-connection-name.png)


MySQL Workbench displays a dialog asking for the password of the `root` user:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-enter-password.png)


You need to (1) type the password for the `root` user, (2) check the **Save
password in vault** , and (3) click **OK** button.



Third, double-click the connection name **Local** to connect to the MySQL
Server.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-new-connection-created.png)


MySQL Workbench opens the following window which consists of four parts:
Navigator, Query, Information, and Output.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-MySQL-Workbench.png)


Fourth, click the **create a new schema in the connected server** button from
the toolbar:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-create-new-schema.png)


In MySQL, the schema is the synonym for the database. Creating a new schema
also means creating a new database.



Fifth, the following window is open. You need to (1) enter the schema name,
(2) change the character set and collation if necessary, and click the
**Apply** button:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-new-schema.png)


Sixth, MySQL Workbench opens the following window that displays the SQL script
which will be executed. Note that the `CREATE SCHEMA` statement command has
the same effect as the `CREATE DATABASE` statement.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-review-SQL-Script.png)


If everything is fine, you will see the new database created and showed in the
**schemas** tab of the **Navigator** section.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-new-database-created.png)


Seventh, to select the `testdb2` database, (1) right-click the database name
and (2) choose **Set as Default Schema** menu item:

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-set-default-schema.png)


The `testdb2` node is open as shown in the following screenshot.

![](https://www.mysqltutorial.org/wp-content/uploads/2018/09/MySQL-CREATE-DATABASE-display-default-schema.png)


Now, you can work with `testdb2` from the MySQL Workbench.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

