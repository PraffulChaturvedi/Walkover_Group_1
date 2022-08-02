# Walkover_Project_Group_1 

This is an Android Application where you can use this to do CRUD methods on a Database running on the server.

You can use this App for following uses :

1] Create/Drop Tables

2] Alter Tables

3] Insert Rows

4] To view data stored in row

5] Execute any SQL command on Database on local server and Shows the results in Android app.


How does it work ?

User sets an IP address of local server in the android app.

Then the SQL_QUERIES entered by user is sent to the local server where the PHP scripts are used to receive the GET/POST methods and executes the QUERY on database which is given in the php file /PHP_scripts/dbms/include/DbConnect.php

Then the result given after executing the SQL_QUERY on the database the output is sent back to the Client in JSON format.

After receiving the JSON data it is parced into usable data and then the UI is updated accordingly.



How to run ?

In order to run the Project you should have to open Visual studio code on you PC.


Installation Steps

Install packages and dependencies:-

   npm install
   
Run the app:-

   npm start
   
   
🌟 You are all set!


After installing the XAMPP server copy the /PHP_scripts/dbms folder to your XAMPP working directory so that you can access the folder through the url : http(s)://localhost:/dbms/

After setting the address the app is ready to use for querying on the database.


Prerequisites for OS

   Node @latest
  
   Npm @latest
  
   MongoDB (Mlab)
  
   Firebase

Hooray !!!! You are ready to use the app ...
