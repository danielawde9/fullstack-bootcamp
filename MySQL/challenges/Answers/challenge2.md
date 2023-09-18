# Challenge 2: Using and Displaying Tables

- Ensured that I was in the `schoolDB` database.
- Created a teachers table using:

```sql
CREATE TABLE teachers(
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    subject VARCHAR(50)
);
```

- Verified table creation with:

```sql
SHOW TABLES;
```

and

```sql
DESCRIBE teachers;
```

- Inserted the provided data using:

```sql
INSERT INTO teachers(id, first_name, last_name, subject)
VALUES (1, 'John', 'Doe', 'Math'),
       (2, 'Jane', 'Smith', 'Science');
```
