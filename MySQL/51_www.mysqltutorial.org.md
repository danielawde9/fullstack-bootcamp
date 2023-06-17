

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL ALTER TABLE



 **Summary** : in this tutorial, you will learn how to use the MySQL `ALTER
TABLE` statement to add a column, alter a column, rename a column, drop a
column and rename a table.



Let’s [create a table](https://www.mysqltutorial.org/mysql-create-table/)
named `vehicles` for the demonstration:


    
    
    CREATE TABLE vehicles (
        vehicleId INT,
        year INT NOT NULL,
        make VARCHAR(100) NOT NULL,
        PRIMARY KEY(vehicleId)
    );
    

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-sample-table.png)


The `ALTER TABLE ADD` statement allows you to add one or more columns to a
table.



To [add a column](https://www.mysqltutorial.org/mysql-add-column/) to a table,
you use the `ALTER TABLE ADD` syntax:


    
    
    ALTER TABLE table_name
    ADD 
        new_column_name column_definition
        [FIRST | AFTER column_name]
    



In this syntax:



The following example uses the `ALTER TABLE ADD` statement to add a column at
the end of the `vehicles` table:


    
    
    ALTER TABLE vehicles
    ADD model VARCHAR(100) NOT NULL;
    



This statement shows the column list of the `vehicles` table:


    
    
    DESCRIBE vehicles;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-add-column-example.png)


As shown clearly from the output, the column `model` has been added to the
`vehicles` table.



To [add multiple columns](https://www.mysqltutorial.org/mysql-add-column/) to
a table, you use the following form of the `ALTER TALE ADD` statement:


    
    
    ALTER TABLE table_name
        ADD new_column_name column_definition
        [FIRST | AFTER column_name],
        ADD new_column_name column_definition
        [FIRST | AFTER column_name],
        ...;
    



For example, this statement adds two columns `color` and `note` to the
`vehicles` table:


    
    
    ALTER TABLE vehicles
    ADD color VARCHAR(50),
    ADD note VARCHAR(255);
    



This statement shows the new structure of the `vehicles` table:


    
    
    DESCRIBE vehicles;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-add-multiple-columns-example.png)


Here is the basic syntax for modifying a column in a table:


    
    
    ALTER TABLE table_name
    MODIFY column_name column_definition
    [ FIRST | AFTER column_name];    
    



It’s a good practice to view the attributes of a column before modifying it.



Suppose that you want to change the `note` column a `[NOT
NULL](https://www.mysqltutorial.org/mysql-not-null-constraint/)` column with a
maximum of 100 characters.



First, show the column list of the `vehicles` table:


    
    
    DESCRIBE vehicles;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-before-modify-column.png)


Then, modify the `note` column:


    
    
    ALTER TABLE vehicles 
    MODIFY note VARCHAR(100) NOT NULL;
    



Finally, show the column list of the `vehicles` table to verify the change:


    
    
    DESCRIBE vehicles;
    

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-after-modify-column.png)


The following statement allows you to modify multiple columns:


    
    
    ALTER TABLE table_name
        MODIFY column_name column_definition
        [ FIRST | AFTER column_name],
        MODIFY column_name column_definition
        [ FIRST | AFTER column_name],
        ...;
    



First, show the current columns of the `vehicles` table:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-before-modify-multiple-columns.png)


Second, use the `ALTER TABLE MODIFY` statement to modify multiple columns:


    
    
    ALTER TABLE vehicles 
    MODIFY year SMALLINT NOT NULL,
    MODIFY color VARCHAR(20) NULL AFTER make;
    



In this example:



Third, show the new column list of the `vehicles` table to verify the
modifications:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-after-modify-multiple-columns.png)


To rename a column, you use the following statement:


    
    
    ALTER TABLE table_name
        CHANGE COLUMN original_name new_name column_definition
        [FIRST | AFTER column_name];
    



In this syntax:



The following example uses the `ALTER TABLE CHANGE COLUMN` statement to rename
the column `note` to `vehicleCondition`:


    
    
    ALTER TABLE vehicles 
    CHANGE COLUMN note vehicleCondition VARCHAR(100) NOT NULL;
    



Let’s review the column list of the `vehicles` table:


    
    
    DESCRIBE vehicles;

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/MySQL-ALTER-TABLE-after-rename-column.png)


To [drop a column](https://www.mysqltutorial.org/mysql-drop-column/) in a
table, you use the `ALTER TABLE DROP COLUMN` statement:


    
    
    ALTER TABLE table_name
    DROP COLUMN column_name;
    



In this syntax:



This example shows how to remove the `vehicleCondition` column from the
`vehicles` table:


    
    
    ALTER TABLE vehicles
    DROP COLUMN vehicleCondition;
    



To [rename a table](https://www.mysqltutorial.org/mysql-rename-table/), you
use the `ALTER TABLE RENAME TO` statement:


    
    
    ALTER TABLE table_name
    RENAME TO new_table_name;
    



In this syntax:



This example renames the `vehicles` table to `cars`:


    
    
    ALTER TABLE vehicles 
    RENAME TO cars; 
    



In this tutorial, you have learned how to use the MySQL `ALTER TABLE`
statement to add a column, modify a column, rename a column, drop a column and
rename a table.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

