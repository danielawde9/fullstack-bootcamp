# Challenge 4: Exploring JOIN Operations
## Objective: Understand and differentiate among various JOIN operations using the relationship between the students and teachers tables.

## Setup:

Ensure you have the teachers and students tables available.
Use the following query to populate the students table.

```sql
CREATE TABLE students(
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    teacher_id INT
);

INSERT INTO students(id, first_name, last_name, teacher_id)
VALUES (1, 'Alice', 'Brown', 1),
       (2, 'Bob', 'Johnson', 2);
```

## Tasks:

a. INNER JOIN: Use this type of join to combine data from the students and teachers tables based on the relationship between teacher_id and id. Aim to retrieve all students' names with their corresponding teachers' names.

b. LEFT JOIN (or LEFT OUTER JOIN): This time, ensure that all students are displayed, even if they don't have an associated teacher. If there's no teacher for a student, the teacher's column should display a NULL value.

c. RIGHT JOIN (or RIGHT OUTER JOIN): Now, ensure all teachers are listed, whether or not they have associated students. If a teacher doesn't have any associated student, the student's column should display a NULL value.

d. Emulated FULL JOIN (or FULL OUTER JOIN): Although MySQL doesn't support FULL JOIN natively, challenge yourself to emulate its effect. A FULL JOIN aims to retrieve all records from both tables, matching them where available. Where there's no match, the missing side should contain NULL.
