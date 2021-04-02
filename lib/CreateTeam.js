// Including packages needed for this application
// requiring inquirer
const inquirer = require("inquirer");
// requiring file system
const fs = require("fs");

// including other classes used to push data to the CreateTeam class
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const RenderHTML = require("../src/RenderHTML");
const RenderEmployee = require("../src/RenderEmployee");
const UserPrompts = require("./UserPrompts");

// empty array to store data in
const employees = [];

// constructor class
class CreateTeam {
  // addManager method used to prompt the user to gather info about manager
  addManager() {
    // creating a new UserPrompt
    const prompts = new UserPrompts();
    // using inquirer to prompt the user
    inquirer
      // passing through data from the teamManager method in UserPrompts
      .prompt(prompts.teamManager())
      // then passing data through a callback function
      .then((data) => {
        // setting data to individual objects
        const { managerName, managerID, managerEmail, managerOffice } = data;
        // creating a new Manager using data objects
        const newEmployee = new Manager(
          managerName,
          managerID,
          managerEmail,
          managerOffice
        );
        // using new RenderEmployee().renderManager() method to create html for the manager and setting into a variable
        const newManager = new RenderEmployee(newEmployee).renderManager();
        // pushing that variable to the employees array
        employees.push(newManager);
      })
      .then(() => {
        // then prompting the user to add a new employee
        this.addEmployee();
      });
  }

  // addEmployee method to prompt the user if they would like to add another employee
  addEmployee() {
    // using inquirer to prompt the user
    inquirer
      .prompt([
        {
          type: "list",
          name: "addMore",
          message: "Would you like to add another employee?",
          choices: ["yes", "no"],
        },
      ])
      // then passing data through a callback function
      .then((data) => {
        // setting data to an individual object
        const { addMore } = data;
        // using a switch statement to determine the value of addMore
        switch (addMore) {
          // if 'yes',
          case "yes":
            // then call employeeRole method
            this.employeeRole();
            break;
          // if 'no',
          case "no":
            // using new RenderEmployee() to create the final html for the team by passing through the employess arrayand setting it into a variable
            const team = new RenderHTML(employees);
            // then write a 'team.html' file into the 'dist' directory using renderTeam method to create html
            fs.writeFile("./dist/team.html", team.renderTeam(), (err) => {
              // if err then throw err
              if (err) throw err;
              // else, log success when completed if successful
              console.log(
                "Success! Your team.html file has been created and stored in the 'dist' directory!"
              );
            });
            break;
        }
      });
  }

  // employeeRole method to prompt the user to determine the role of the new employee
  employeeRole() {
    // using inquirer to prompt the user
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message:
            "What is the role of the new employee that you would like to add?",
          choices: ["Engineer", "Intern"],
        },
      ])
      // then passing data through a callback function
      .then((data) => {
        // setting data to an individual object
        const { role } = data;
        // if role is equal to 'Engineer', then return addEngineer method,
        // else, return addIntern method
        return role === "Engineer" ? this.addEngineer() : this.addIntern();
      });
  }

  // addEngineer method to prompt the user to gather data about the new engineer
  addEngineer() {
    // creating a new UserPrompt
    const prompts = new UserPrompts();
    // using inquirer to prompt the user
    inquirer
      // passing through data from the engineerRole method in UserPrompts
      .prompt(prompts.engineerRole())
      // then passing data through a callback function
      .then((data) => {
        // setting data to individual objects
        const {
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub,
        } = data;
        // creating a new Engineer using data objects
        const newEmployee = new Engineer(
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub
        );
        // using new RenderEmployee().renderEngineer() method to create html for the new engineer and setting into a variable
        const newEngineer = new RenderEmployee(newEmployee).renderEngineer();
        // pushing that variable to the employees array
        employees.push(newEngineer);
      })
      .then(() => {
        // then prompting the user to add a new employee
        this.addEmployee();
      });
  }

  // addIntern method to prompt the user to gather data about the new intern
  addIntern() {
    // creating a new UserPrompt
    const prompts = new UserPrompts();
    // using inquirer to prompt the user
    inquirer
      .prompt(prompts.internRole())
      // then passing data through a callback function
      .then((data) => {
        // setting data to individual objects
        const { internName, internID, internEmail, internSchool } = data;
        // creating a new Intern using data objects
        const newEmployee = new Intern(
          internName,
          internID,
          internEmail,
          internSchool
        );
        // using new RenderEmployee().renderIntern() method to create html for the new intern and setting into a variable
        const newIntern = new RenderEmployee(newEmployee).renderIntern();
        // pushing that variable to the employees array
        employees.push(newIntern);
      })
      .then(() => {
        // then prompting the user to add a new employee
        this.addEmployee();
      });
  }
}

// exporting CreateTeam class
module.exports = CreateTeam;
