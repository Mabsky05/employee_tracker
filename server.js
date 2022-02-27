const express = require('express');
const mysql = require('mysql2');
const cTable = ('console.table')

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
    ]).then (function (answers) { if (answers.Options === "View all departments") {
            db.query ('SELECT * FROM dept', function (err, results) {
            console.table(results);
            init()
              });   
        } else if (answers.Options === "View all roles") {
            db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
              });
            console.log("OK")
        } else if (answers.Options === "View all employees") {
            db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
              });
        } else if (answers.Options === "Add a department") { add_dept()
            console.log("OK")
        } else if (answers.Options === "Add a role") { add_role()
            console.log("OK")
        } else if (answers.Options === "Add an employee") { add_employee()
            console.log("OK")
        } else if (answers.Options === "Update an employee role") {
            console.log("OK") 
        
    }});
}


const add_dept = async() => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Input Department name:",
            name: "new_dept"
        },
    ]).then (function (dept) { 
        // console.log(dept);
        // console.log(dept.new_dept)
        let sql = `INSERT INTO dept(dept_name) VALUES("${dept.new_dept}")`;
        console.log(sql)
        db.query(sql);

    })
};

const add_role = async() => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Input Role Title:",
            name: "new_role"
        },
        {
            type: "input",
            message: "Input Salary:",
            name: "salary"
        },
        {
            type: "input",
            message: "Input Department ID (Integer only):",
            name: "department_id"
        },
    ]).then (function (role) { 
        // console.log(role);
        // console.log(dept.new_role)
        let sql = `INSERT INTO roles(title, salary, department_id) VALUES("${role.new_role}", "${role.salary}", "${role.department_id}")`;
        db.query(sql);
    })
};

const add_employee = async() => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Input first name:",
            name: "first_name"
        },
        {
            type: "input",
            message: "Input last name",
            name: "last_name"
        },
        {
            type: "input",
            message: "Input Department ID (Integer only):",
            name: "department_id"
        },
        {
            type: "list",
            message: "Select Manager ID:",
            name: "manager_id",
            choices: ['1','2','3','4',] 
        },
    ]).then (function (role) { 
        // console.log(role);
        // console.log(dept.new_role)
        console.log(role.manager_id)
        let sql = 
        `INSERT INTO employee(first_name, last_name, role_id, manager_id) \
         VALUES("${role.first_name}", "${role.last_name}", "${role.department_id}", "${role.manager_id}")`;
        db.query(sql);
    })
};

init();

// 'INSERT INTO dept(dept_name) VALUES(' + '"' + `${dept.new_dep}` + '"' + ")"
