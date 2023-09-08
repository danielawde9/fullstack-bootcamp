# Challenge 2: Using and Displaying Tables
## Objective: Understand how to create tables and view their structure.

## Setup:
Ensure you're in the schoolDB database using USE schoolDB;.

## Tasks:

Use a CREATE TABLE statement to create a teachers table with the specified columns (id, first_name, last_name, subject)
Verify your table creation using SHOW TABLES; and DESCRIBE teachers;.
Insert the following data into the terminal:

```sql 
INSERT INTO teachers(id, first_name, last_name, subject)
VALUES (1, 'John', 'Doe', 'Math'),
       (2, 'Jane', 'Smith', 'Science');
```