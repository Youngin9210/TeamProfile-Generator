class UserPrompts {
  teamManager() {
    const manager = [
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
    return manager;
  }

  engineerRole() {
    const engineer = [
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
    return engineer;
  }

  internRole() {
    const intern = [
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
            : console.log(
                "‼️ Please enter the employee ID of the new intern. ‼️"
              );
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
    return intern;
  }
}

module.exports = UserPrompts;
