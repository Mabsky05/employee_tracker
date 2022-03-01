# Employee Tracker

![alt text](assets/sample.jpg)

## Video Walkthrough
https://www.youtube.com/watch?v=RI1UBNfYUXg

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Summary
Employee Tracker utilising Node and MySQL. 


## Description 
A program for creating and maintaining an employee database.

Seed sql file to set initial 'employees' database with tables for department, roles, and employees.  

Node connection to sql to initiate editing capabilities; Options as follows: 

1) View all departments
2) View all roles
3) View all employees
4) Add a department
5) Add a role
6) Add an employee
7) Update an employee role

Prompts are initiated with each option, and tables edited as necessary. 


## Instructions

### Pre-requisites
Visual Studio to run code. 
Node.js installed
MySQL Installed

### NPM Installations
NPM install: express, mysql2, console.table, fs, inquirer

### Execution: Run SQL
From root/db: run schema.sql, then run seeds.sql to populate.
Optional: Edit seeds file to add roles/employees/departments. 

### Execution: Run Node
Run 'node server' via integrated terminal, then select option to execute.

Each 'View' option displays relevant data in tables.

Each 'Add' or 'Update' Option: 'INT' requires an integer input. Check tables to find 
corresponding integer for required data. 

## Contact
grimdango@gmail.com


## Log 
### 03/01/22
Polishing, adding README. Organising files. 

### 12/02/22
Code complete

### 27/02/22
Initiated project

   

