

[Home](https://www.mysqltutorial.org/) » [Getting Started with
MySQL](https://www.mysqltutorial.org/getting-started-with-mysql/) » Connect to
MySQL Server



 **Summary** : in this tutorial, you will learn how to connect to MySQL Server
using mysql command-line client and MySQL Workbench.



Once you have the [MySQL Server
installed](https://www.mysqltutorial.org/install-mysql/), you can connect to
it using any client program such as mysql command-line client and MySQL
workbench.



mysql is a command-line client program that allows you to interact with MySQL
in the interactive and non-interactive mode.



The mysql command-line client is typically located in the bin directory of the
MySQL’s installation folder.



To invoke the mysql program, you just simply navigate to the bin directory of
the MySQL’s installation folder and type:


    
    
    mysql
    



If the mysql program is already in the `PATH`, you can simply invoke it using
mysql command.



To connect to the MySQL Server, you use this command:


    
    
    shell>mysql -u root -p
    



`-u root` means that you connect to the MySQL Server using the user account
`root`.



`-p` instructs mysql to prompt for a password.



You type the password for the user account root and press Enter:


    
    
    Enter password: ********
    



If everything is OK, you will connect to the MySQL Server with the following
command:


    
    
    mysql>
    



To display the databases in the current server, you use the `[SHOW
DATABASES](https://www.mysqltutorial.org/mysql-show-databases/)` statement:


    
    
    mysql> show databases;
    



Here is the output:


    
    
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+
    4 rows in set (0.01 sec)
    



Step 1. Launch the MySQL Workbench.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-1.png)


You can connect to a MySQL Server using the Database > Connect to Database…
menu or click the + button that locates next to the MySQL Connections.



Just click the + button in next to the MySQL Connections to continue.



Step 2. Enter the connection name e.g., Localhost. You can name it whatever
makes sense to you. By default, the username is `root`. If you use a different
user account, you can change it in the Username textbox.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-2.png)


Step 3. Click the `Store in Vault ...` button to enter the password for the
provided user account. A window will display. You enter the password and click
the OK button.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-3.png)


Step 4. Click the Test Connection button to test if the connection to the
MySQL Server is successful or not. Then click the OK button if the connection
is established successfully.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-4.png)


Step 5. Click the OK button to save the connection.

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-5.png)


Step 6. Click the newly created connection under MySQL Connections to connect
to the MySQL Server:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-6.png)


Step 7. MySQL Workbench display with the current schemas and a pane for
entering queries:

![](https://www.mysqltutorial.org/wp-content/uploads/2019/09/connect-to-mysql-mysql-workbench-step-7.png)


In this tutorial, you have learned how to connect to the MySQL Server using
mysql command-line client and MySQL Workbench.

![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/left.svg)
![](https://www.mysqltutorial.org/wp-content/themes/evolution/img/right.svg)


All MySQL tutorials are practical and easy-to-follow, with SQL script and
screenshots available. [More About Us](/about-us/)

