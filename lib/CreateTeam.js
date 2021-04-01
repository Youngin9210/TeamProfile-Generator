const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const RenderHTML = require("../src/RenderHTML");
const RenderEmployee = require("../src/RenderEmployee");
const UserPrompts = require("./UserPrompts");

const employees = [];

class CreateTeam {
  addManager() {
    const prompts = new UserPrompts();
    inquirer
      .prompt(prompts.teamManager())
      .then((data) => {
        const { managerName, managerID, managerEmail, managerOffice } = data;
        const newEmployee = new Manager(
          managerName,
          managerID,
          managerEmail,
          managerOffice
        );
        const newManager = new RenderEmployee(newEmployee).renderManager();
        employees.push(newManager);
      })
      .then(() => {
        this.addEmployee();
      });
  }

  addEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addMore",
          message: "Would you like to add another employee?",
          choices: ["yes", "no"],
        },
      ])
      .then((data) => {
        const { addMore } = data;

        switch (addMore) {
          case "yes":
            this.employeeRole();
            break;
          case "no":
            const team = new RenderHTML(employees);
            // team.printTeam();
            fs.writeFile("./dist/team.html", team.renderTeam(), (err) => {
              if (err) throw err;
              // logging success when completed if successful
              console.log(
                "Success! Your team.html file has been created and stored in the 'dist' directory!"
              );
            });
            break;
        }
      });
  }

  employeeRole() {
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
      .then((data) => {
        const { role } = data;
        return role === "Engineer" ? this.addEngineer() : this.addIntern();
      });
  }

  addEngineer() {
    const prompts = new UserPrompts();
    inquirer
      .prompt(prompts.engineerRole())
      .then((data) => {
        // EngineerTemplate(data);
        const {
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub,
        } = data;
        const newEmployee = new Engineer(
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub
        );
        const newEngineer = new RenderEmployee(newEmployee).renderEngineer();
        employees.push(newEngineer);
      })
      .then(() => {
        this.addEmployee();
      });
  }

  addIntern() {
    const prompts = new UserPrompts();
    inquirer
      .prompt(prompts.internRole())
      .then((data) => {
        // InternTemplate(data);
        const { internName, internID, internEmail, internSchool } = data;
        const newEmployee = new Intern(
          internName,
          internID,
          internEmail,
          internSchool
        );
        const newIntern = new RenderEmployee(newEmployee).renderIntern();
        employees.push(newIntern);
      })
      .then(() => {
        this.addEmployee();
      });
  }
}

module.exports = CreateTeam;
