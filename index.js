const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHtml = require('./src/generateHtml');
const teamMembers = [];

function startTeamProfile() {
    console.log('Create Team Profile')
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of team manager',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID number for team manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address of team manager',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter office number for team manager',
        },
    ])
    .then ((managerInput) => {
        const { name, id, email, officeNum } = managerInput;
        const manager = new Manager(name, id, email, officeNum);
        teamMembers.push(manager);
        addTeamMember();
    });
};

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of Engineer',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID number for Engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address of Engineer',
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter Engineer's GitHub username",
        },
    ])
    .then((engineerInput) => {
        const {name, id, email, github} = engineerInput;
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        addTeamMember();
    });
};

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of Intern',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID number for Intern',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address of Intern',
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school",
        },
    ])
    .then((internInput) => {
        const {name, id, email, school} = internInput;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        addTeamMember();
    });
};

const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) => 
    err
    ?console.log(err)
    : console.log('Team profile has been created! please open ./dist/index.html to view page')
    );
};

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Add team members',
            choices: ['Engineer', 'Intern', 'No more team members to add'],
        }
    ])
    .then ((response) => {
        if (response.role === 'Engineer') {
            addEngineer();
        } else if (response.role === 'Intern') {
            addIntern();
        } else {
            const initTeam = generateHtml(teamMembers);
            return writeToFile(initTeam);
        };
    })
    .catch ((err) => {
        console.log(err);
    })
}

startTeamProfile();