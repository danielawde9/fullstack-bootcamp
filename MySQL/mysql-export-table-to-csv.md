

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Export Table to
CSV



 **Summary** : in this tutorial, you will learn various techniques of how to
export a MySQL table to a CSV file.



The CSV stands for comma separated values. You often use the CSV file format
to exchange data between applications such as Microsoft Excel, Open Office,
Google Docs, etc.



It will be useful to have data from MySQL database in CSV file format because
you can analyze and format the data in the way you want.



MySQL provides an easy way to export the query’s result into a CSV file that
resides in the database server.



Before exporting data, you must ensure that:



The following query selects cancelled orders from the `orders` table:


    
    
    SELECT 
        orderNumber, status, orderDate, requiredDate, comments
    FROM
        orders
    WHERE
        status = 'Cancelled';Code language: SQL (Structured Query Language) (sql)



To export this result set into a CSV file, you add some clauses to the query
above as follows:


    
    
    SELECT 
        orderNumber, status, orderDate, requiredDate, comments
    FROM
        orders
    WHERE
        status = 'Cancelled' 
    INTO OUTFILE 'C:/tmp/cancelled_orders.csv' 
    FIELDS ENCLOSED BY '"' 
    TERMINATED BY ';' 
    ESCAPED BY '"' 
    LINES TERMINATED BY '\r\n';Code language: SQL (Structured Query Language) (sql)



The statement created a CSV file named `cancelled_orders.csv` in the `C:\tmp`
folder that contains the result set.



The CSV file contains lines of rows in the result set. Each line is terminated
by a sequence of carriage return and a line feed character specified by the
`LINES TERMINATED BY '\r\n'` clause. Each line contains values of each column
of the row in the result set.



Each value is enclosed by double quotation marks indicated by `FIELDS ENCLOSED
BY '”'` clause. This prevents the value that may contain a comma (,) will be
interpreted as the field separator. When enclosing the values by the double
quotation marks, the commas inside the value are not recognized as the field
separators.



You often need to export data into a CSV file whose name contains timestamp at
which the file is created. To do so, you need to use the [MySQL prepared
statement](https://www.mysqltutorial.org/mysql-prepared-statement.aspx "MySQL
Prepared Statement").



The following commands export the whole orders table into a CSV file with
timestamp as a part of the file name.


    
    
    SET @TS = DATE_FORMAT(NOW(),'_%Y_%m_%d_%H_%i_%s');
    
    SET @FOLDER = 'c:/tmp/';
    SET @PREFIX = 'orders';
    SET @EXT    = '.csv';
    
    SET @CMD = CONCAT("SELECT * FROM orders INTO OUTFILE '",@FOLDER,@PREFIX,@TS,@EXT,
    				   "' FIELDS ENCLOSED BY '\"' TERMINATED BY ';' ESCAPED BY '\"'",
    				   "  LINES TERMINATED BY '\r\n';");
    
    PREPARE statement FROM @CMD;
    
    EXECUTE statement;Code language: SQL (Structured Query Language) (sql)



Let’s examine the commands above in more detail.



You can wrap the command by an [event ](https://www.mysqltutorial.org/mysql-
triggers/working-mysql-scheduled-event/ "Working with MySQL Scheduled
Event")and schedule the event run periodically if needed.



It would be convenient if the CSV file contains the first line as the column
headings so that the file is more understandable.



To add the column headings, you need to use the [UNION
](https://www.mysqltutorial.org/sql-union-mysql.aspx "Combining Result Sets by
Using MySQL UNION")statement as follows:


    
    
    (SELECT 'Order Number','Order Date','Status')
    UNION 
    (SELECT orderNumber,orderDate, status
    FROM orders
    INTO OUTFILE 'C:/tmp/orders.csv'
    FIELDS ENCLOSED BY '"' TERMINATED BY ';' ESCAPED BY '"'
    LINES TERMINATED BY '\r\n');Code language: SQL (Structured Query Language) (sql)



As the query showed, you need to include the column heading of every column.



In case the values in the result set contain
[NULL](https://www.mysqltutorial.org/mysql-null/) values, the target file will
contain `"N` instead of `NULL`. To fix this issue, you need to replace the
`NULL` value by another value e.g., not applicable ( `N/A` ) by using the
[IFNULL function](https://www.mysqltutorial.org/mysql-ifnull/ "MySQL IFNULL")
as the following query:


    
    
    SELECT 
        orderNumber, orderDate, IFNULL(shippedDate, 'N/A')
    FROM
        orders INTO OUTFILE 'C:/tmp/orders2.csv' 
        FIELDS ENCLOSED BY '"' 
        TERMINATED BY ';' 
        ESCAPED BY '"' LINES 
        TERMINATED BY '\r\n';Code language: SQL (Structured Query Language) (sql)



We replaced `NULL` values in the `shippedDate` column by the `N/A` strings.
The CSV file shows `N/A` instead of `NULL` values.



In case you don’t have access to the database server to get the exported CSV
file, you can use MySQL Workbench to export the result set of a query to a CSV
file in your local computer as follows:

![](https://www.mysqltutorial.org/wp-content/uploads/2014/02/MySQL-Export-Table-to-CSV.jpg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20885%20462%22%3E%3C/svg%3E)


The CSV file exported by MySQL Workbench supports column headings, `NULL`
values and other great features.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

