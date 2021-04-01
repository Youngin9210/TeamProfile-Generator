const Intern = require("../lib/Intern");

class RenderEmployee {
  constructor(data) {
    this.data = data;
  }

  renderManager() {
    let m = this.data;
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

  renderEngineer() {
    let e = this.data;
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

  renderIntern() {
    let i = this.data;
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
