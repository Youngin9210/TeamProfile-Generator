const CreateTeam = require("./lib/CreateTeam");

const init = () => {
  new CreateTeam().addManager();
};

init();
