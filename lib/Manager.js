// including Employee class
const Employee = require("./Employee");

// Manager class extending Employee class used to return employee name, id, email, officeNumber
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // passing through original arguments from Employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // method to return employee office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // method to return employee role
  getRole() {
    return "Manager";
  }
}

// exporting Manager class
module.exports = Manager;
