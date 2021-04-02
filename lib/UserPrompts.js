// UserPrompts class using methods to prompt th user to gather data
class UserPrompts {
  // method returning an array of objects used to pass through inquirer.prompt() to prompt the user
  teamManager() {
    const manager = [
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "managerName",
        // message displayed when prompted
        message: "What is the team manager's name?",
        // validating that the user has inputed a response
        validate: (managerName) => {
          // if true
          return managerName
            ? // return true
              true
            : // else, console log message to user to input response
              console.log("‼️ Please enter the name of the team manager. ‼️");
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "managerID",
        // message displayed when prompted
        message: "What is the team manager's employee ID?",
        // validating that the user has inputed a response
        validate: (managerID) => {
          // if true
          return managerID
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the employee ID of the team manager. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "managerEmail",
        // message displayed when prompted
        message: "What is the team manager's email address?",
        // validating that the user has inputed a response
        validate: (managerEmail) => {
          // if true
          return managerEmail
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the email address of the team manager. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "managerOffice",
        // message displayed when prompted
        message: "What is the team manager's office number?",
        // validating that the user has inputed a response
        validate: (managerOffice) => {
          // if true
          return managerOffice
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the office number of the team manager. ‼️"
              );
        },
      },
    ];
    // returning array
    return manager;
  }

  // method returning an array of objects used to pass through inquirer.prompt() to prompt the user
  engineerRole() {
    const engineer = [
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "engineerName",
        // message displayed when prompted
        message: "What is the name of your new engineer?",
        // validating that the user has inputed a response
        validate: (engineerName) => {
          // if true
          return engineerName
            ? // return true
              true
            : // else, console log message to user to input response
              console.log("‼️ Please enter the name of the new engineer. ‼️");
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "engineerID",
        // message displayed when prompted
        message: "What is the employee ID of your new engineer?",
        // validating that the user has inputed a response
        validate: (engineerID) => {
          // if true
          return engineerID
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the employee ID of the new engineer. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "engineerEmail",
        // message displayed when prompted
        message: "What is the email address of your new engineer?",
        // validating that the user has inputed a response
        validate: (engineerEmail) => {
          // if true
          return engineerEmail
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the email address of the new engineer. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "engineerGithub",
        // message displayed when prompted
        message: "What is the GitHub username of your new engineer?",
        // validating that the user has inputed a response
        validate: (engineerGithub) => {
          // if true
          return engineerGithub
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the GitHub username of the new engineer. ‼️"
              );
        },
      },
    ];
    // returning array
    return engineer;
  }

  // method returning an array of objects used to pass through inquirer.prompt() to prompt the user
  internRole() {
    const intern = [
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "internName",
        // message displayed when prompted
        message: "What is the name of your new intern?",
        // validating that the user has inputed a response
        validate: (internName) => {
          // if true
          return internName
            ? // return true
              true
            : // else, console log message to user to input response
              console.log("‼️ Please enter the name of the new intern. ‼️");
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "internID",
        // message displayed when prompted
        message: "What is the employee ID of your new intern?",
        // validating that the user has inputed a response
        validate: (internID) => {
          // if true
          return internID
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the employee ID of the new intern. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "internEmail",
        // message displayed when prompted
        message: "What is the email address of your new intern?",
        // validating that the user has inputed a response
        validate: (internEmail) => {
          // if true
          return internEmail
            ? // return true
              true
            : // else, console log message to user to input response
              console.log(
                "‼️ Please enter the email address of the new intern. ‼️"
              );
        },
      },
      {
        // setting type of prompt
        type: "input",
        // name of prompt
        name: "internSchool",
        // message displayed when prompted
        message: "What is the school of your new intern?",
        // validating that the user has inputed a response
        validate: (internSchool) => {
          // if true
          return internSchool
            ? // return true
              true
            : // else, console log message to user to input response
              console.log("‼️ Please enter the school of the new intern. ‼️");
        },
      },
    ];
    // returning array
    return intern;
  }
}

// exporting UserPrompts class
module.exports = UserPrompts;
