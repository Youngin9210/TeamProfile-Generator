// including Employee class to test
const Engineer = require("../lib/Engineer");
// setting new Engineer with arguments into a variable
const engineer = new Engineer("Zoe", 1, "zoe@email.com", "ZJY2017");

// 'describing' -- (testing) -- Engineer class method getGithub()
describe("Engineer's GitHub", () => {
  // testing the value returned by getGithub method
  it("Returns the Engineer's GitHub username", () => {
    // expecting return value to be 'ZJY2017'
    expect(engineer.getGithub()).toBe("ZJY2017");
  });
});
// 'describing' -- (testing) -- Engineer class method getRole()
describe("Engineer's role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Engineer"', () => {
    // expecting return value to be 'Engineer'
    expect(engineer.getRole()).toBe("Engineer");
  });
});
