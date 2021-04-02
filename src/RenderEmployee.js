// including Intern class
const Intern = require("../lib/Intern");

// RenderEmployee class to render employee html
class RenderEmployee {
  // passing through an argument
  constructor(data) {
    this.data = data;
  }

  // renderManager method to create manager html
  renderManager() {
    // setting data argument into a variable
    let m = this.data;
    // returning html structure using methods from data argument
    return `
	<!-- Manager Template -->
	<div class="card employeeCard" style="width: 18rem">
		<div class="card-body bg-primary text-white">
			<h3 class="card-title">${m.getName()}</h3>
			<h5><i class="fas fa-mug-hot"></i> ${m.getRole()}</h5>
		</div>
		<div class="mx-3 my-5">
			<ul class="list-group">
				<li class="list-group-item">ID: ${m.getID()}</li>
				<li class="list-group-item">
					Email: <a href="mailto:${m.getEmail()}">${m.getEmail()}</a>
				</li>
				<li class="list-group-item">Office #: ${m.getOfficeNumber()}</li>
			</ul>
		</div>
	</div>
	`;
  }

  // renderManager method to create manager html
  renderEngineer() {
    // setting data argument into a variable
    let e = this.data;
    // returning html structure using methods from data argument
    return `
	<!-- Engineer Template -->
	<div class="card employeeCard" style="width: 18rem">
		<div class="card-body bg-primary text-white">
			<h3 class="card-title">${e.getName()}</h3>
			<h5><i class="fas fa-mug-hot"></i> ${e.getRole()}</h5>
		</div>
		<div class="mx-3 my-5">
			<ul class="list-group">
				<li class="list-group-item">ID: ${e.getID()}</li>
				<li class="list-group-item">
					Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a>
				</li>
				<li class="list-group-item">GitHub: <a href="https://github.com/${e.getGithub()}">${e.getGithub()}</a></li>
			</ul>
		</div>
	</div>
	`;
  }

  // renderManager method to create manager html
  renderIntern() {
    // setting data argument into a variable
    let i = this.data;
    // returning html structure using methods from data argument
    return `
  <!-- Intern Template -->
  <div class="card employeeCard" style="width: 18rem">
  	<div class="card-body bg-primary text-white">
  		<h3 class="card-title">${i.getName()}</h3>
  		<h5><i class="fas fa-user-graduate"></i> ${i.getRole()}</h5>
  	</div>
  	<div class="mx-3 my-5">
  		<ul class="list-group">
  			<li class="list-group-item">ID: ${i.getID()}</li>
  			<li class="list-group-item">
  				Email: <a href="mailto:${i.getEmail()}">${i.getEmail()}</a>
  			</li>
  			<li class="list-group-item">School: ${i.getSchool()}</li>
  		</ul>
  	</div>
  </div>
  `;
  }
}

module.exports = RenderEmployee;
