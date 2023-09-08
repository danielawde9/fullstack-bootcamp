

[Home](https://www.mysqltutorial.org/) » [Getting Started with
MySQL](https://www.mysqltutorial.org/getting-started-with-mysql/) » How to
Load the Sample Database into MySQL Server



 **Summary** _:_ in this tutorial, you will learn how to load the sample
database into your MySQL Server using the `mysql` program.



Download the `classicmodels` database from the [MySQL sample
database](https://www.mysqltutorial.org/mysql-sample-database.aspx "MySQL
Sample Database") section.



Unzip the downloaded file into a temporary folder. You can use any folder you
want. To make it simple, we will unzip the file to the `C:\temp` folder.



If you use another operating system such as macOS, Linux, or Unix, please feel
free to unzip it to any directory you like.



Connect to the MySQL server using the `mysql` client program. The `mysql`
program is located in the `bin` directory of the MySQL installation folder.


    
    
    > mysql -u root -p
    Enter password: ********



You will need to enter the password for the `root` user account to log in.



Use the `source` command to load data into the MySQL Server:


    
    
    mysql> source c:\temp\mysqlsampledatabase.sql



Use the `[SHOW DATABASES](https://www.mysqltutorial.org/mysql-show-
databases/)` command to list all databases in the current server:


    
    
    mysql> show databases;



The output will look like the following that includes the newly created
`classicmodels` database:


    
    
    +--------------------+
    | Database           |
    +--------------------+
    | classicmodels      |
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+



In this tutorial, you have learned step by step how to load the sample
database into MySQL server using the `mysql` tool.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

