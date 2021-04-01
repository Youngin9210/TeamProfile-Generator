const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const RenderHTML = require("./src/RenderHTML");
const RenderEmployee = require("./src/RenderEmployee");

const employees = [];

const teamManager = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
    validate: (managerName) => {
      return managerName
        ? true
        : console.log("‼️ Please enter the name of the team manager. ‼️");
    },
  },
  {
    type: "input",
    name: "managerID",
    message: "What is the team manager's employee ID?",
    validate: (managerID) => {
      return managerID
        ? true
        : console.log(
            "‼️ Please enter the employee ID of the team manager. ‼️"
          );
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email address?",
    validate: (managerEmail) => {
      return managerEmail
        ? true
        : console.log(
            "‼️ Please enter the email address of the team manager. ‼️"
          );
    },
  },
  {
    type: "input",
    name: "managerOffice",
    message: "What is the team manager's office number?",
    validate: (managerOffice) => {
      return managerOffice
        ? true
        : console.log(
            "‼️ Please enter the office number of the team manager. ‼️"
          );
    },
  },
];

const engineerRole = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of your new engineer?",
    validate: (engineerName) => {
      return engineerName
        ? true
        : console.log("‼️ Please enter the name of the new engineer. ‼️");
    },
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the employee ID of your new engineer?",
    validate: (engineerID) => {
      return engineerID
        ? true
        : console.log(
            "‼️ Please enter the employee ID of the new engineer. ‼️"
          );
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the email address of your new engineer?",
    validate: (engineerEmail) => {
      return engineerEmail
        ? true
        : console.log(
            "‼️ Please enter the email address of the new engineer. ‼️"
          );
    },
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the GitHub username of your new engineer?",
    validate: (engineerGithub) => {
      return engineerGithub
        ? true
        : console.log(
            "‼️ Please enter the GitHub username of the new engineer. ‼️"
          );
    },
  },
];

const internRole = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of your new intern?",
    validate: (internName) => {
      return internName
        ? true
        : console.log("‼️ Please enter the name of the new intern. ‼️");
    },
  },
  {
    type: "input",
    name: "internID",
    message: "What is the employee ID of your new intern?",
    validate: (internID) => {
      return internID
        ? true
        : console.log("‼️ Please enter the employee ID of the new intern. ‼️");
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the email address of your new intern?",
    validate: (internEmail) => {
      return internEmail
        ? true
        : console.log(
            "‼️ Please enter the email address of the new intern. ‼️"
          );
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the school of your new intern?",
    validate: (internSchool) => {
      return internSchool
        ? true
        : console.log("‼️ Please enter the school of the new intern. ‼️");
    },
  },
];

const addEngineer = () => {
  inquirer
    .prompt(engineerRole)
    .then((data) => {
      // EngineerTemplate(data);
      const { engineerName, engineerID, engineerEmail, engineerGithub } = data;
      const newEmployee = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        engineerGithub
      );
      const newEngineer = new RenderEmployee(newEmployee).renderEngineer();
      employees.push(newEngineer);
      console.log(employees);
    })
    .then(() => {
      addEmployee();
    });
};

const addIntern = () => {
  inquirer
    .prompt(internRole)
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
      console.log(employees);
    })
    .then(() => {
      addEmployee();
    });
};

const employeeRole = () => {
  return inquirer
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
      return role === "Engineer" ? addEngineer() : addIntern();
    });
};

const addEmployee = () => {
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
          employeeRole();
          break;
        case "no":
          const team = new RenderHTML(employees);
          // team.printTeam();
          fs.writeFile("./dist/team.html", team.renderTeam(), (err) => {
            if (err) throw err;
            // logging success when completed if successful
            console.log("Success! Your team.html file has been created!");
          });
          break;
      }
    });
};

const addManager = (data) => {
  inquirer
    .prompt(teamManager)
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
      console.log(employees);
    })
    .then(() => {
      addEmployee();
    });
};

const init = () => {
  addManager();
};

init();
