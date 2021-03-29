const Employee = require("../lib/Employee");
const employee = new Employee("Zoe", 1, "zoe@email.com");

describe("Employee", () => {});
describe("Employee name", () => {
  it("Returns the employee's name when a new employee is added", () => {
    expect(employee.getName()).toBe("Zoe");
  });
});
describe("Employee ID", () => {
  it("Returns the Employee ID when a new employee is added", () => {
    expect(employee.getID()).toBe(1);
  });
});
describe("Employee email", () => {
  it("Returns the employee's email when a new employee is added", () => {
    expect(employee.getEmail()).toBe("zoe@email.com");
  });
});
describe("Employee role", () => {
  it('Returns the role of the new employee as "Employee"', () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
