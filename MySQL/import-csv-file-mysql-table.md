

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » Import CSV File Into
MySQL Table



This tutorial shows you how to use the `LOAD DATA INFILE` statement to import
CSV file into MySQL table.



The `LOAD DATA INFILE` statement allows you to read data from a text file and
import the file’s data into a database table very fast.



Before importing the file, you need to prepare the following:



Suppose we have a table named `discounts` with the following structure:

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/discounts-table.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20157%20160%22%3E%3C/svg%3E)


We use [CREATE TABLE statement](https://www.mysqltutorial.org/mysql-create-
table/ "Creating Tables Using MySQL CREATE TABLE Statement") to create the
`discounts` table as follows:


    
    
    CREATE TABLE discounts (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        expired_date DATE NOT NULL,
        amount DECIMAL(10 , 2 ) NULL,
        PRIMARY KEY (id)
    );Code language: SQL (Structured Query Language) (sql)



The following `discounts.csv` file contains the first line as column headings
and other three lines of data.

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/discount-csv-file.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20408%20114%22%3E%3C/svg%3E)


The following statement imports data from the `c:\tmp\discounts.csv` file into
the `discounts` table.


    
    
    LOAD DATA INFILE 'c:/tmp/discounts.csv' 
    INTO TABLE discounts 
    FIELDS TERMINATED BY ',' 
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS;Code language: SQL (Structured Query Language) (sql)



The field of the file is terminated by a comma indicated by `FIELD TERMINATED
BY ','` and enclosed by double quotation marks specified by `ENCLOSED BY '"`
‘.



Each line of the CSV file is terminated by a newline character indicated by
`LINES TERMINATED BY '\n'` .



Because the file has the first line that contains the column headings, which
should not be imported into the table, therefore we ignore it by specifying
`IGNORE 1 ROWS` option.



Now, we can check the `discounts` table to see whether the data is imported.


    
    
    SELECT * FROM discounts;

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/discounts-table-data.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20337%2085%22%3E%3C/svg%3E)


Sometimes the format of the data does not match the target columns in the
table. In simple cases, you can transform it by using the `SET` clause in the
`LOAD DATA INFILE` statement.



Suppose the expired date column in the `discount_2.csv` file is in
`mm/dd/yyyy` format.

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/discount_2-csv-file.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20443%20111%22%3E%3C/svg%3E)


When importing data into the `discounts` table, we have to transform it into
MySQL date format by using [str_to_date()
function](https://www.mysqltutorial.org/mysql-str_to_date/ "MySQL
STR_TO_DATE\(\) Function") as follows:


    
    
    LOAD DATA INFILE 'c:/tmp/discounts_2.csv'
    INTO TABLE discounts
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (title,@expired_date,amount)
    SET expired_date = STR_TO_DATE(@expired_date, '%m/%d/%Y');Code language: SQL (Structured Query Language) (sql)



It is possible to import data from client (local computer) to a remote MySQL
database server using the `LOAD DATA INFILE` statement.



When you use the `LOCAL` option in the `LOAD DATA INFILE` , the client program
reads the file on the client and sends it to the MySQL server. The file will
be uploaded into the database server operating system’s temporary folder e.g.,
`C:\windows\temp` on Windows or `/tmp` on Linux. This folder is not
configurable or determined by MySQL.



Let’s take a look at the following example:


    
    
    LOAD DATA LOCAL INFILE  'c:/tmp/discounts.csv'
    INTO TABLE discounts
    FIELDS TERMINATED BY ',' 
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS;Code language: SQL (Structured Query Language) (sql)



The only difference is the `LOCAL` option in the statement. If you load a big
CSV file, you will see that with the `LOCAL` option, it will be a little bit
slower to load the file because it takes time to transfer the file to the
database server.



The account that connects to MySQL server doesn’t need to have the FILE
privilege to import the file when you use the `LOCAL` option.



Importing the file from client to a remote database server using `LOAD DATA
LOCAL` has some [security
issues](https://dev.mysql.com/doc/refman/5.7/en/load-data-local.html "Security
Issues with LOAD DATA LOCAL") that you should be aware of to avoid potential
security risks.



MySQL workbench provides a tool to import data into a table. It allows you to
edit data before making changes.



The following are steps that you want to import data into a table:



Open table to which the data is loaded.

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/mysql-workbench-import-csv.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20501%2079%22%3E%3C/svg%3E)


Click Import button, choose a CSV file and click Open button

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/import-csv-into-mysql.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20646%20477%22%3E%3C/svg%3E)


Review the data, click Apply button.

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/edit-table-content.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20590%20386%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/review-data.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%20600%22%3E%3C/svg%3E)


MySQL workbench will display a dialog “Apply SQL Script to Database”, click
Apply button to insert data into the table.



We have shown you how to import CSV into MySQL table using ` LOAD DATA LOCAL`
and using MySQL Workbench. With these techniques, you can load data from other
text file formats such as tab-delimited.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

