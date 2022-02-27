const express = require('express');
const mysql = require('mysql2');

const inquirer = require('inquirer')
const fs = require('fs')

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`),
);

db.connect(err =>{
    if(err) {
        throw err
    }
    console.log('MySQL connected')
})

const init = async() => {
    return inquirer.prompt([
        {   type: 'list',
            name: 'Options',
            message: "What would you like to do",
            choices: [ 
            "View all departments", 
            "View all roles", 
            "View all employees",
            "Add a department", 
            "Add a role",  
            "Add an employee",
            "Update an employee role"],
        },
    ]).then (await function (answers) { if (answers.Options === "View all departments") {
            db.query('SELECT * FROM dept', function (err, results) {
            console.log(results);
              });
        } else if (answers.Options === "View all roles") {
            db.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
              });
            console.log("OK")
        } else if (answers.Options === "View all employees") { await
            db.query('SELECT * FROM employee', function (err, results) {
                console.log(results);
              });
        } else if (answers.Options === "Add a department") { await
            console.log("OK")
        } else if (answers.Options === "Add a role") { await
            console.log("OK")
        } else if (answers.Options === "Add an employee") { await
            console.log("OK")
        } else if (answers.Options === "Update an employee role") { await 
            console.log("OK") 
        
    }});
}


init();
