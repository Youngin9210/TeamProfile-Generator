const Manager = require("../lib/Manager");

describe("Manager office number", () => {
  it("Returns the Manager's office number", () => {
    const manager = new Manager("Zoe", 1, "zoe@email.com", 1).getOfficeNumber();
    expect(manager).toBe(1);
  });
});
describe("Manager role", () => {
  it('Returns the role of the new employee as "Manager"', () => {
    const manager = new Manager("Zoe", 1, "zoe@email.com", 1).getRole();
    expect(manager).toBe("Manager");
  });
});
