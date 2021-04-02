// including Employee class to test
const Manager = require("../lib/Manager");
// setting new Manager with arguments into a variable
const manager = new Manager("Zoe", 1, "zoe@email.com", 1);

// 'describing' -- (testing) -- Manager class method getOfficeNumber()
describe("Manager's office number", () => {
  // testing the value returned by getOfficeNumber method
  it("Returns the Manager's office number", () => {
    // expecting return value to be '1'
    expect(manager.getOfficeNumber()).toBe(1);
  });
});
// 'describing' -- (testing) -- Manager class method getRole()
describe("Manager role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Manager"', () => {
    // expecting return value to be 'Manager'
    expect(manager.getRole()).toBe("Manager");
  });
});
