

[Home](https://www.mysqltutorial.org/) » [MySQL
Basics](https://www.mysqltutorial.org/mysql-basics/) » MySQL Character Set



 **Summary** : in this tutorial, you will learn about **MySQL character set**.
After the tutorial, you will know how to get all character sets in MySQL, how
to convert strings between character sets, and how to configure proper
character sets for client connections.



A MySQL character set is a set of characters that are legal in a string. For
example, we have an alphabet with letters from `a` to z.We assign each letter
a number, for example, `a = 1`, `b = 2` etc. The letter `a` is a symbol, and
the number `1` that associates with the letter `a` is the encoding. The
combination of all letters from a to z and their corresponding encodings is a
character set.



Each character set has one or more collations that define a set of rules for
comparing characters within the character set. Check it out the [MySQL
collation](https://www.mysqltutorial.org/mysql-collation/ "MySQL Collation")
tutorial to learn about the collations in MySQL.



MySQL supports various character sets that allow you to store almost every
character in a string. To get all available character sets in MySQL database
server, you use the `SHOW CHARACTER SET` statement as follows:


    
    
    SHOW CHARACTER SET;Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-character-sets.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20414%20308%22%3E%3C/svg%3E)


The default character set in MySQL is `latin1`. If you want to store
characters from multiple languages in a single column, you can use Unicode
character sets, which is `utf8` or `ucs2`.



The values in the `Maxlen` column specify the number of bytes that a character
in a character set holds. Some character sets contain single-byte characters
e.g., `latin1` , `latin2` , `cp850` , etc., whereas other character sets
contain multi-byte characters.



MySQL provides the `LENGTH` function to get a length of a string in bytes, and
the `CHAR_LENGTH` function to get the length of a string in characters. If a
string contains the multi-bytes character, the result of the `LENGTH` function
is greater than the result of the `CHAR_LENGTH()` function. See the following
example:


    
    
    SET @str = CONVERT('MySQL Character Set' USING ucs2);
    SELECT LENGTH(@str), CHAR_LENGTH(@str);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/mysql-convert-character-set.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20269%2049%22%3E%3C/svg%3E)


The `CONVERT` function converts a string into a specific character set. In
this example, it converts the character set of the `MySQL Character Set`
string into `ucs2` . Because `ucs2` character set contains 2-byte characters,
therefore the length of the `@str` string in bytes is greater than its length
in characters.



Notice that some character sets contain multi-byte characters, but their
strings may contain only single-byte characters e.g., `utf8` as shown in the
following statements:


    
    
    SET @str = CONVERT('MySQL Character Set' USING utf8);
    SELECT LENGTH(@str), CHAR_LENGTH(@str);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/single-byte-character-set.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20270%2044%22%3E%3C/svg%3E)


However, if a `utf8` string contains special character e.g., `ü` in the
`pingüino `string; its length in bytes is different, see the following
example:


    
    
    SET @str = CONVERT('pingüino' USING utf8);
    SELECT LENGTH(@str), CHAR_LENGTH(@str);Code language: SQL (Structured Query Language) (sql)

![](https://www.mysqltutorial.org/wp-content/uploads/2013/05/unicode-character-set.png)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20268%2040%22%3E%3C/svg%3E)


MySQL provides two functions that allow you to convert strings between
different character sets: `CONVERT` and `CAST`. We have used the `CONVERT`
function several times in the above examples.



The syntax of the `CONVERT` function is as follows:


    
    
    CONVERT(expression USING character_set_name)Code language: SQL (Structured Query Language) (sql)



The `CAST` function is similar to the `CONVERT` function. It converts a string
to a different character set:


    
    
    CAST(string AS character_type CHARACTER SET character_set_name)Code language: SQL (Structured Query Language) (sql)



Take a look at the following example of using the `CAST ` function:


    
    
    SELECT CAST(_latin1'MySQL character set' AS CHAR CHARACTER SET utf8);Code language: SQL (Structured Query Language) (sql)



When an application exchanges data with a MySQL database server, the default
character set is `latin1`. However, if the database stores Unicode strings in
the `utf8` character set, using the `latin1` character set in the application
would not be sufficient. Therefore, the application needs to specify a proper
character set when it connects to MySQL database server.



To configure a character set for a client connection, you can do one of the
following ways:


    
    
    SET NAMES 'utf8';Code language: SQL (Structured Query Language) (sql)


    
    
    [mysql]
    default-character-set=utf8Code language: JavaScript (javascript)


    
    
    $dsn ="mysql:host=$host;dbname=$db;charset=utf8";Code language: PHP (php)



Regardless of which way you use, make sure that the character set used by the
application matches with the character set stored in the MySQL database
server.



In this tutorial, you have learned about MySQL character set, how to convert
strings between character sets and how to configure proper character sets for
client connections.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3C/svg%3E)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

