// including Employee class
const Employee = require("./Employee").default;

// Engineer class extending Employee class used to return employee name, id, email, github
class Engineer extends Employee {
  // passing through arguments
  constructor(name, id, email, github) {
    // passing through original arguments from Employee class
    super(name, id, email);
    this.github = github;
  }

  // method to return employee github username
  getGithub() {
    return this.github;
  }

  // method to return employee role
  getRole() {
    return "Engineer";
  }
}

// exporting Engineer class
module.exports = Engineer;
