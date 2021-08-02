// Intern class, which extends Employee class
const Employee = require("./Employee");

class Intern extends Employee {
	constructor(person, id, email, school) {
		const role = "Intern";
		super(person, id, email, role);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}
}

module.exports = Intern;