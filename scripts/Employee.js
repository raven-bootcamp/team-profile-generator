// Employee class which is extended by the other classes
class Employee {
	constructor(person, id, email, role = "Employee") {
		this.person = person;
		this.id = id;
		this.email = email;
		this.role = role;
	}

	getName() {
		return this.person;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}
}

module.exports = Employee;