// Employee class used to return employee name, id, email
class Employee {
  // passing through arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // method to return employee name
  getName() {
    return this.name;
  }

  // method to return employee id
  getID() {
    return this.id;
  }

  // method to return employee email
  getEmail() {
    return this.email;
  }

  // method to return employee role
  getRole() {
    return "Employee";
  }
}

// exporting Employee class
module.exports = Employee;
