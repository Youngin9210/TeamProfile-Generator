const Intern = require("../lib/Intern");
const intern = new Intern(
  "Zoe",
  1,
  "zoe@email.com",
  "The Ohio State University"
);

describe("Intern's school", () => {
  it("Returns the Intern's school", () => {
    expect(intern.getSchool()).toBe("The Ohio State University");
  });
});
describe("Intern's role", () => {
  it('Returns the role of the new employee as "Intern"', () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
