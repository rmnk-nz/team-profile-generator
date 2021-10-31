function renderManager(Manager) {
    return `<section>
    <i class="material-icons" id="managerIcon">person</i>
    <div>
        <h2>${Manager.name}</h2>
        <h3>Operations Manager</h3>
    </div>
    <ul>
        <li>ID: ${Manager.id}</li>
        <li>Email: <a href="${Manager.email}">${Manager.email}</a></li>
        <li>Office Number: ${Manager.officeNum}</li>
    </ul>
    </section>`;
};

function renderEngineer(Engineer) {
    return `<section>
    <i class="material-icons" id="engineerIcon">engineering</i>
    <div>
        <h2>${Engineer.name}</h2>
        <h3>Team Engineer</h3>
    </div>
    <ul>
        <li>ID: ${Engineer.id}</li>
        <li>Email: <a href="${Engineer.email}">${Engineer.email}</a></li>
        <li>Github: <a href="https://github.com/${Engineer.github}" target="_blank" rel="noopener noreferrer">${Engineer.github}</a></li>
    </ul>
    </section>`;
};

function renderIntern (Intern) {
    return `<section>
    <i class="material-icons" id="internIcon">school</i>
    <div>
        <h2>${Intern.name}</h2>
        <h3>Intern</h3>
    </div>
    <ul>
        <li>ID: ${Intern.id}</li>
        <li>Email: <a href="${Intern.email}">${Intern.email}</a></li>
        <li>School: ${Intern.school}</li>
    </ul>
    </section>`;
};

function generateHtml(data) {
    newTeam = [];

    for (let i = 0; i < data.length; i++) {

        const addEmployee = data[i];
        const role = addEmployee.getRole();

        if (role === 'Manager') {
            const addManager = renderManager(addEmployee);
            newTeam.push(addManager);
        }

        if (role === 'Engineer') {
            const addEngineer = renderEngineer(addEmployee);
            newTeam.push(addEngineer);
        }

        if (role === 'Intern') {
            const addIntern = renderIntern(addEmployee);
            newTeam.push(addIntern);
        }
    };

    const teamCreated = newTeam.join('');
    const newHtml = renderTeam(teamCreated);
    return newHtml;
};

function renderTeam(teamCreated) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel='stylesheet' href="./styles.css"/>
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <i class="material-icons" id="groupIcon">groups</i>
            <h1>Professional Team Profile</h1>
        </header>
        <main>
            ${teamCreated}
        </main>
    </body>
    </html>`;
};

module.exports = generateHtml