// including createTeam class
const CreateTeam = require("./lib/CreateTeam");

// creating a function to initialize the app
const init = () => {
  // when initialized, then they CreateTeam().addManager() method is called to prompt the user
  new CreateTeam().addManager();
};

// initializing app
init();
