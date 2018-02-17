# Urlshortner Tool:

Given an URL, this application will return a tiny url

This application makes use of MySql database. Username is root and password is 1.

In db.js file, you can modify your username and password for MySQL if it's different.

If you don't have mysql,please install mysql. 
You can follow this url for the steps - https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04


Enter the following query in the mysql-client -

CREATE DATABASE urlshorten;

USE urlshorten;

CREATE TABLE urlshortner (id VARCHAR(10), shortUrl VARCHAR(50), longUrl VARCHAR(1024), burn_notice varchar(10));


Once installed, from the terminal enter the project directory using cd command.
Type npm install and this will install all the node modules which this project uses.
Once done, type node app.js and you are set. 

In your browser type http://localhost:3000.

End points for-
Creation of shortlink- /create (POST request)
Deletion of shortlink - /your_shortlink/del (GET call)

