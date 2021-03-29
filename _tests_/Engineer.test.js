const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Zoe", 1, "zoe@email.com", "ZJY2017");

describe("Engineer's GitHub", () => {
  it("Returns the Engineer's GitHub username", () => {
    expect(engineer.getGithub()).toBe("ZJY2017");
  });
});
describe("Engineer's role", () => {
  it('Returns the role of the new employee as "Engineer"', () => {
    expect(engineer.getRole()).toBe("Engineer");
  });
});
