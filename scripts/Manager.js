// Manager class, which extends Employee class
const Employee = require("./Employee");

class Manager extends Employee {
	constructor(person, id, email, officeNumber) {
		const role = "Manager";
		super(person, id, email, role);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

module.exports = Manager;