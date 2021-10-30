const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHtml = require('./src/generateHtml');
const teamMembers = [];

function createTeam() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'team',
            message: 'Team Generator! Please enter team name',
        }
    ])
    .then((response) => {
        const teamName = response.team;
        teamMembers.push(teamName);
        addManager();
    })
}

function addManager() {
    inquirer
    .prompt ([
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
    .then((managerInput) => {
            const {name, id, email, officeNum} = managerInput;
            const manager = new Manager(name, id, email, officeNum);
            teamMembers.push(manager);
            addTeamMember();
        });
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
    .then((response) => {
        if (response.role === 'Engineer') {
            return addEngineer();
        } else if (response.role === 'Intern') {
            return addIntern();
        } else {
            return generateHtml();
        }
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
}

createTeam();