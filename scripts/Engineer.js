// Engineer class, which extends Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(person, id, email, github) {
		const role = "Engineer";
		super(person, id, email, role);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;