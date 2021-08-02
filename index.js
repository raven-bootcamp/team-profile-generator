// require the external libraries
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// require the other scripts for the different employee types
const Manager = require('./scripts/Manager');
const Engineer = require('./scripts/Engineer');
const Intern = require('./scripts/Intern');

// require the questions to ask, and the file for the IDs
const questions = require('./scripts/questions');
const containers = require('./scripts/idValid');

// set the output path and directory
const OUTPUT_DIRECTORY = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIRECTORY, 'team.html');

// require the script to generate the html code for the end product
const render = require('./scripts/htmlGen');


const employees = [];

// ask the user the questions
const promptUser = (type) => {
	return inquirer.prompt(questions[type]);
};

// write the new page to the right place
const writeOutput = (page) => {
	if (!fs.existsSync(OUTPUT_DIRECTORY)) {
		fs.mkdirSync(OUTPUT_DIRECTORY);
	}
	fs.writeFileSync(outputPath, page);
	console.log("HTML file has been generated; please find it in the Output folder.");
}

// ask the right questions depending on the user's input
const askForNext = () => {
	return promptUser('nextPerson').then((answer) => {
		if (answer.role === 'Engineer') {
			promptUser('engineer').then((emp) => {
				const newEmp = new Engineer(emp.name, emp.id, emp.email, emp.github);
				employees.push(newEmp);
				containers.ids.push(emp.id);
				askForNext();
			})
				.catch((err) => {
					console.log(err);
				});
		} else if (answer.role === 'Intern') {
			promptUser('intern').then((emp) => {
				const newEmp = new Intern(emp.name, emp.id, emp.email, emp.school);
				employees.push(newEmp);
				containers.ids.push(emp.id);
				askForNext();
			})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log('Team is complete - generating team page...');
			const htmlPage = render(employees);
			writeOutput(htmlPage);
		}
	});
};

// start with the "manager" question, then keep gathering information until the end
const init = () => {
	return promptUser('manager').then((emp) => {
		const newEmp = new Manager(emp.name, emp.id, emp.email, emp.officeNumber);
		employees.push(newEmp);
		containers.ids.push(emp.id);
		askForNext();
	})
		.catch((err) => {
			console.log(err);
		});
};

init();