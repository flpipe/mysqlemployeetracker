//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  userQuestions();
  //readDepartment();
  //readRole();
  //readEmployee();

});

/*
 * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles
*/
function userQuestions(){
  inquirer
    .prompt({
      name: "choices",
      type: "list",
      messages: "What would you like to do?",
      choices:[ "Add", "View", "Update", "Exit"]
    })
    .then( function(selection){
      if (selection.choices === "Add"){
        console.log(selection.choices);
        addAction();
        //onnection.end();
      }
      else if (selection.choices === "View"){
        console.log(selection.choices);
        viewAction();
        //connection.end();
      }
      else if (selection.choices === "Update"){
        console.log(selection.choices);
        //updateAction();
        console.log("This feature is currently work in progress. Bye Now !" + "\n");
        connection.end();
      }
      else if (selection.choices === "Exit"){
        connection.end();
      }
      else {
        connection.end();
      }
    });
}
function viewAction(){
  /*  * View departments, roles, employees */
  inquirer
  .prompt({
    name: "choices",
    type: "list",
    messages: "What would you like to View?",
    choices:[ "Departments", "Roles", "Employees", "Exit"]
  })
  .then( function(selection){
    if (selection.choices === "Departments"){
      console.log(selection.choices);
      readRole();
      //connection.end();
    }
    else if (selection.choices === "Roles"){
      console.log(selection.choices);
      readRole();
      //connection.end();
    }
    else if (selection.choices === "Employees"){
      console.log(selection.choices);
      readEmployee();
      //connection.end();
    }
    else if (selection.choices === "Exit"){
      console.log(selection.choices);
      connection.end();
    }
    else {
      connection.end();
    }
  });
}


function addAction(){
  /** Add departments, roles, employees */
  inquirer
  .prompt({
    name: "choices",
    type: "list",
    messages: "What would you like to Add?",
    choices:[ "Department", "Role", "Employee", "Exit"]
  })
 .then( function(selection){
    if (selection.choices === "Department"){
      console.log(selection.choices);
      addDepartment();
      //connection.end();
    }
    else  if (selection.choices === "Role"){
      console.log(selection.choices);
      addRole();
       //connection.end();
    }
    else  if (selection.choices === "Employee"){
      console.log(selection.choices);
      addEmployee();
       //connection.end();
    }

  })

}

function addRole(){
  console.log("This feature is currently work in progress. Bye Now !" + "\n");
  connection.end();
}

function addEmployee(){
  console.log("This feature is currently work in progress. Bye Now !" + "\n");
  connection.end();
}

function updateAction(){
  console.log("This feature is currently work in progress. Bye Now !" + "\n");
  connection.end();
}

function addDepartment(){
  inquirer
  .prompt({
    name: "AddDepartment",
    type: "input",
    message: "Please enter the department that you want to add: "
  })
  .then(function(answer){
    console.log(answer);
    connection.query("INSERT INTO department(name) VALUES (?)",answer.AddDepartment,function(err,res){
      if(err) throw err;
    console.log("===Successfully added a New Department to the table !! ====" + "\n");
    });
    readDepartment();
  })
}

function readRole() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log("\n");
    console.log("======Displaying results of Role table=====")
    console.log("\n");
    console.table(res);

    console.log("===========================================")
    connection.end();
  });
}

function readEmployee() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log("\n");
    console.log("======Displaying results of Employee table=====")

    console.table(res);

    console.log("===============================================")

    connection.end();

  });
}

function readDepartment() {
  connection.query("SELECT name FROM department", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log("\n");
    console.log("======Displaying results of Department table=====")

    console.table(res);

    console.log("===========================================")
    console.log("\n");
   connection.end();

  });

}