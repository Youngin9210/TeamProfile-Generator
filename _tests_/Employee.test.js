const Employee = require("../lib/Employee");

describe("Employee", () => {});
describe("Employee name", () => {
  it("Returns the employee's name when a new employee is added", () => {
    expect(new Employee("Zoe").getName()).toBe("Zoe");
  });
});
describe("Employee ID", () => {
  it("Returns the Employee ID when a new employee is added", () => {
    expect(new Employee("Zoe", 1).getID()).toBe(1);
  });
});
describe("Employee email", () => {
  it("Returns the employee's email when a new employee is added", () => {
    expect(new Employee("Zoe", 1, "zoe@email.com").getEmail()).toBe(
      "zoe@email.com"
    );
  });
});
describe("Employee role", () => {
  it('Returns the role of the new employee as "Employee"', () => {
    expect(new Employee("Zoe", 1, "zoe@email.com").getRole()).toBe("Employee");
  });
});
