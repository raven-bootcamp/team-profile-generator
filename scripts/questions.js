const idValid = require('./idValid');

const validate = (userInput) => {
	if (!userInput) {
		return "Please enter something!"
	}
	return true;
};

const validateId = (id) => {
	if (!id) {
		return "Please enter something!"
	} else if (idValid.ids.includes(id)) {
		return "ID already exists!";
	}
	return true;
};

const manager = [
	{
		type: 'input',
		message: "What is the manager's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the manager's ID?",
		name: 'id',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the manager's email?",
		name: 'email',
        validate: function(email)
        {
            // check for valid email format
            return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
        }
	},
	{
		type: 'input',
		message: "What is the manager's office number?",
		name: 'officeNumber',
		validate: validate
	}
];

const engineer = [
	{
		type: 'input',
		message: "What is the engineer's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the engineer's ID?",
		name: 'id',
		validate: validateId
	},
	{
		type: 'input',
		message: "What is the engineer's email?",
		name: 'email',
		validate: function(email)
        {
            // check for valid email format
            return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
        }
	},
	{
		type: 'input',
		message: "What is the engineer's Github username?",
		name: 'github',
		validate: validate
	}
];

const intern = [
	{
		type: 'input',
		message: "What is the intern's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the intern's ID?",
		name: 'id',
		validate: validateId
	},
	{
		type: 'input',
		message: "What is the intern's email?",
		name: 'email',
		validate: function(email)
        {
            // check for valid email format
            return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
        }
	},
	{
		type: 'input',
		message: "What is the intern's school?",
		name: 'school',
		validate: validate
	}
];

const nextPerson = [
	{
		type: 'list',
		message: 'Which type of team member would you like to add?',
		name: 'role',
		choices: ['Engineer', 'Intern', 'No more to add, team is complete']
	}
];


module.exports = { manager, engineer, intern, nextPerson };