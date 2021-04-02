// including Employee class to test
const Intern = require("../lib/Intern");
// setting new Intern with arguments into a variable
const intern = new Intern(
  "Zoe",
  1,
  "zoe@email.com",
  "The Ohio State University"
);

// 'describing' -- (testing) -- Intern class method getSchool()
describe("Intern's school", () => {
  // testing the value returned by getSchool method
  it("Returns the Intern's school", () => {
    // expecting return value to be 'The Ohio State University'
    expect(intern.getSchool()).toBe("The Ohio State University");
  });
});
// 'describing' -- (testing) -- Intern class method getRole()
describe("Intern's role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Intern"', () => {
    // expecting return value to be 'Intern'
    expect(intern.getRole()).toBe("Intern");
  });
});
