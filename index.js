const CreateTeam = require("./CreateTeam");

const init = () => {
  new CreateTeam().addManager();
};

init();
