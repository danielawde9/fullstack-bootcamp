# Challenge 4: Exploring JOIN Operations

- Created and populated the students table using:

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

a. INNER JOIN:

```sql
SELECT students.first_name AS student_name, teachers.first_name AS teacher_name
FROM students
INNER JOIN teachers ON students.teacher_id = teachers.id;
```

b. LEFT JOIN:

```sql
SELECT students.first_name AS student_name, teachers.first_name AS teacher_name
FROM students
LEFT JOIN teachers ON students.teacher_id = teachers.id;
```

c. RIGHT JOIN:

```sql
SELECT students.first_name AS student_name, teachers.first_name AS teacher_name
FROM students
RIGHT JOIN teachers ON students.teacher_id = teachers.id;
```

d. Emulated FULL JOIN:

```sql
SELECT students.first_name AS student_name, teachers.first_name AS teacher_name
FROM students
LEFT JOIN teachers ON students.teacher_id = teachers.id
UNION ALL
SELECT NULL AS student_name, teachers.first_name AS teacher_name
FROM teachers
WHERE id NOT IN (SELECT DISTINCT teacher_id FROM students);
```
