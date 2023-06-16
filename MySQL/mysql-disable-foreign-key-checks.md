

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Disable Foreign
Key Checks



 **Summary** : in this tutorial, you will learn how to disable foreign key
constraint checks in MySQL.



Sometimes, it is very useful to disable [foreign
key](https://www.mysqltutorial.org/mysql-foreign-key/) checks. For example,
you can load data to the parent and child tables in any order with the foreign
key constraint check disabled. If you don’t disable foreign key checks, you
have to load data into the parent tables first and then the child tables in
sequence, which can be tedious.



Another scenario that you want to disable the foreign key check is when you
want to [drop a table](https://www.mysqltutorial.org/mysql-drop-table). Unless
you disable the foreign key checks, you cannot [drop a
table](https://www.mysqltutorial.org/mysql-drop-table "MySQL DROP TABLE")
referenced by a foreign key constraint.



To disable foreign key checks, you set the `foreign_key_checks` variable to
zero as follows:


    
    
    SET foreign_key_checks = 0;Code language: SQL (Structured Query Language) (sql)



To re-enable foreign key constraint check, you set the value of the
`foreign_key_checks` to 1:


    
    
    SET foreign_key_checks = 1;Code language: SQL (Structured Query Language) (sql)



Notice that setting `foreign_key_checks` to 1 does not trigger any validation
of the existing table data. In other words, MySQL will not verify the
consistency of the data that was added during the foreign key check disabled.



First, [create a new table](https://www.mysqltutorial.org/mysql-create-table/)
named `countries`:


    
    
    CREATE TABLE countries(
        country_id INT AUTO_INCREMENT,
        country_name VARCHAR(255) NOT NULL,
        PRIMARY KEY(country_id)
    ) ENGINE=InnoDB;
    Code language: SQL (Structured Query Language) (sql)



Second, [create another table](https://www.mysqltutorial.org/mysql-create-
table/) named `cities`:


    
    
    CREATE TABLE cities(
        city_id INT AUTO_INCREMENT,
        city_name VARCHAR(255) NOT NULL,
        country_id INT NOT NULL,
        PRIMARY KEY(city_id),
        FOREIGN KEY(country_id) 
    		REFERENCES countries(country_id)
    )ENGINE=InnoDB;Code language: SQL (Structured Query Language) (sql)



The table `cities` has a foreign key constraint that refers to the column
`country_id` of the table `countries`.



Third, [insert a new row](https://www.mysqltutorial.org/mysql-insert-
statement.aspx) into the `cities` table:


    
    
    INSERT INTO cities(city_name, country_id)
    VALUES('New York',1);Code language: SQL (Structured Query Language) (sql)



MySQL issued the following error:


    
    
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`classicmodels`.`cities`, CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`))Code language: JavaScript (javascript)



Fourth, disable foreign key checks:


    
    
    SET foreign_key_checks = 0;Code language: SQL (Structured Query Language) (sql)



Fifth, insert a new row into the `cities` table:


    
    
    INSERT INTO cities(city_name, country_id)
    VALUES('New York',1);Code language: SQL (Structured Query Language) (sql)



This time the `INSERT` statement executed successfully due to the foreign key
check disabled.



The following [query](https://www.mysqltutorial.org/mysql-select-statement-
query-data.aspx) returns the contents of the table `cities`:


    
    
    SELECT * FROM cities;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-Disable-Foreign-Key-Checks-example.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20206%2039%22%3E%3C/svg%3E)


Sixth, re-enable foreign key constraint check:


    
    
    SET foreign_key_checks = 1;Code language: SQL (Structured Query Language) (sql)



When the foreign key checks re-enabled, MySQL did not re-validate data in the
table. However, it won’t allow you to
[insert](https://www.mysqltutorial.org/mysql-insert-statement.aspx) or
[update](https://www.mysqltutorial.org/mysql-update-data.aspx) data that
violate the foreign key constraint.



Finally, insert a row into the `countries` table whose value in the column
`country_id` is 1 to make the data consistent in both tables:


    
    
    INSERT INTO countries(country_id, country_name)
    VALUES(1,'USA');Code language: SQL (Structured Query Language) (sql)



Suppose that you want to drop the `countries` and `cities` tables.



First, drop the table `countries` :


    
    
    DROP TABLE countries;Code language: SQL (Structured Query Language) (sql)



MySQL issued this error:


    
    
    Error Code: 3730. Cannot drop table 'countries' referenced by a foreign key constraint 'cities_ibfk_1' on table 'cities'.Code language: JavaScript (javascript)



To fix this, you have two options:



We’ll demonstrate the second way which disables foreign key constraint check
before dropping the tables.



Second, disable the foreign key check:


    
    
    SET foreign_key_checks = 0;Code language: SQL (Structured Query Language) (sql)



Third, drop both tables `countries` and `cities`:


    
    
    DROP TABLE countries;
    DROP TABLE cities;Code language: SQL (Structured Query Language) (sql)



Both statements executed successfully.



Finally, enable the foreign key check:


    
    
    SET foreign_key_checks = 1;Code language: SQL (Structured Query Language) (sql)



In this tutorial, you have learned how to use the `SET foreign_key_checks = 0`
to disable foreign key checks in MySQL.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

