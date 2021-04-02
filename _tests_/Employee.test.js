// including Employee class to test
const Employee = require("../lib/Employee");
// setting new Employee with arguments into a variable
const employee = new Employee("Zoe", 1, "zoe@email.com");

// 'describing' -- (testing) -- Employee class
describe("Employee", () => {
  // testing the typeof the return value
  it("Validates that the user input is formatted as an object", () => {
    // expecting the type of employee to be an object
    expect(typeof employee).toBe("object");
  });
});
// 'describing' -- (testing) -- Employee class method getName()
describe("Employee name", () => {
  // testing the value returned by getName method
  it("Returns the employee's name when a new employee is added", () => {
    // expecting return value to be 'Zoe'
    expect(employee.getName()).toBe("Zoe");
  });
});
// 'describing' -- (testing) -- Employee class method getID()
describe("Employee ID", () => {
  // testing the value returned by getID method
  it("Returns the Employee ID when a new employee is added", () => {
    // expecting return value to be 1
    expect(employee.getID()).toBe(1);
  });
});
// 'describing' -- (testing) -- Employee class method getEmail()
describe("Employee email", () => {
  // testing the value returned by getEmail method
  it("Returns the employee's email when a new employee is added", () => {
    // expecting return value to be 'zoe@email.com'
    expect(employee.getEmail()).toBe("zoe@email.com");
  });
});
// 'describing' -- (testing) -- Employee class method getRole()
describe("Employee role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Employee"', () => {
    // expecting return value to be 'Employee'
    expect(employee.getRole()).toBe("Employee");
  });
});
