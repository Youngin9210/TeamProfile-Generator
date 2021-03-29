const Manager = require("../lib/Manager");
const manager = new Manager("Zoe", 1, "zoe@email.com", 1);

describe("Manager's office number", () => {
  it("Returns the Manager's office number", () => {
    expect(manager.getOfficeNumber()).toBe(1);
  });
});
describe("Manager role", () => {
  it('Returns the role of the new employee as "Manager"', () => {
    expect(manager.getRole()).toBe("Manager");
  });
});
