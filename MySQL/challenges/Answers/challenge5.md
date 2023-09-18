# Challenge 5: Creating Tables and Designing Schema

- For a digital library system:

  - Entities:

    1. Books
    2. Authors
    3. Publishers

  - Relationships:

    - Books have authors and publishers.
    - Authors can write multiple books.
    - Publishers can publish multiple books.

  - Design:

    1. **authors** table:

       - id (INT, PRIMARY KEY)
       - first_name (VARCHAR)
       - last_name (VARCHAR)
       - birth_date (DATE)

    2. **publishers** table:

       - id (INT, PRIMARY KEY)
       - name (VARCHAR)
       - established_date (DATE)

    3. **books** table:
       - id (INT, PRIMARY KEY)
       - title (VARCHAR)
       - publication_date (DATE)
       - author_id (INT, FOREIGN KEY)
       - publisher_id (INT, FOREIGN KEY)

+-----------+      +-------+            +----------+
|  authors  |      | books |            |publishers|
+-----------+      +-------+            +----------+
| id (PK)   |<---1-| id (PK)|           | id (PK)  |
| first_name|      | title  |           | name     |
| last_name |      | pub_date|----1-----| est_date |
| birth_date|      | author_id(FK)|     |          |
|           |      | publisher_id(FK)   |          |
+-----------+      +-----------------+  +----------+
