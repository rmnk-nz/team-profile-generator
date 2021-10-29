const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const generateHtml = require('./src/generateHtml');
const teamMembers = [];

const addManager = () => {
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
    .then ((managerInput) => {
            const {name, id, email, officeNum} = managerInput;
            const manager = new Manager(name, id, email, officeNum);
            teamMembers.push(manager);
            console.log(manager);
    });
};

 const addEmployee = () => {
    console.log('Add Team Memebers');
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Choose team members role',
            choices: ['Engineer', 'Intern'],
        }
    ])
 }