// including Employee class
const Employee = require("./Employee");

// Intern class extending Employee class used to return employee name, id, email, school
class Intern extends Employee {
  // passing through arguments
  constructor(name, id, email, school) {
    // passing through original arguments from Employee class
    super(name, id, email);
    this.school = school;
  }

  // method to return employee school
  getSchool() {
    return this.school;
  }

  // method to return employee role
  getRole() {
    return "Intern";
  }
}

// exporting Intern class
module.exports = Intern;
