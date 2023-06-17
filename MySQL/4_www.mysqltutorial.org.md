

[Home](https://www.mysqltutorial.org/) » [Getting Started with
MySQL](https://www.mysqltutorial.org/getting-started-with-mysql/) » MySQL
Sample Database



We use the `classicmodels` database as a **MySQL sample database** to help you
work with MySQL quickly and effectively. The `classicmodels` database is a
retailer of scale models of classic cars database. It contains typical
business data such as customers, products, sales orders, sales order line
items, etc.



We use this sample database in our [MySQL
tutorials](https://www.mysqltutorial.org/ "MySQL Tutorial") to demonstrate
many MySQL features from [simple queries](https://www.mysqltutorial.org/mysql-
basics/ "Basic MySQL Tutorial") to complex [stored
procedures](https://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx
"MySQL Stored Procedures").



You can download the MySQL sample database via the following link:



[Download MySQL Sample Database](https://www.mysqltutorial.org/wp-
content/uploads/2018/03/mysqlsampledatabase.zip)



The download file is in ZIP format so you need a zip program to unzip it. You
can download a free zip program at [www.7-zip.org](http://www.7-zip.org
"download free zip program").



After uncompressing the `sampledatabase.zip` file, you can load the sample
database into MySQL database server by following [how to load sample database
into MySQL database server tutorial](https://www.mysqltutorial.org/how-to-
load-sample-database-into-mysql-database-server.aspx "Load MySQL Sample
Database") and test it by using the following SQL statements:


    
    
    USE classicmodels;
    SELECT * FROM customers;



Basically, those statements switch the current database to `classicmodels` and
query data from the `customers` table. If you see the customer data returned,
you have successfully imported the sample database into the MySQL database
server.



The MySQL sample database schema consists of the following tables:

![](https://www.mysqltutorial.org/wp-content/uploads/2009/12/MySQL-Sample-Database-Schema.png)


You can download the MySQL sample database ER-diagram in PDF format via the
following link.



[Download MySQL Sample Database Diagram PDF
A4](https://www.mysqltutorial.org/wp-content/uploads/2018/04/MySQL-Sample-
Database-Diagram-PDF-A4.pdf)



We recommend that you print the ER diagram out and stick it to your desk to
get familiar with the schema while learning MySQL.



Have fun learning MySQL!

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

