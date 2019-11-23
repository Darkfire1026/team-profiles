const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function rating() {
    api.github.com / users / { username }
    /starred
}

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "whats the first workers name"
        }, {
            type: "input",
            name: "location",
            message: "where do they work"
        }, {
            type: "input",
            name: "github",
            message: "what is the workers github"
        },
        {
            type: "input",
            name: "position",
            message: "what is the workers position?"
        },

        {
            type: "input",
            name: "rating",
            message: "what is the workers star rating (please use only the numbers 1-5) "
        },









        {
            type: "input",
            name: "name1",
            message: "whats the second workers name"
        }, {
            type: "input",
            name: "location1",
            message: "where do they work"
        }, {
            type: "input",
            name: "github1",
            message: "what is the workers github"
        },
        {
            type: "input",
            name: "position1",
            message: "what is the workers position?"
        },

        {
            type: "input",
            name: "rating1",
            message: "what is the workers star rating (please use only the numbers 1-5) "
        },







        {
            type: "input",
            name: "name2",
            message: "whats third the workers name"
        }, {
            type: "input",
            name: "location2",
            message: "where do they work"
        }, {
            type: "input",
            name: "github2",
            message: "what is the workers github"
        },
        {
            type: "input",
            name: "position2",
            message: "what is the workers position?"
        },

        {
            type: "input",
            name: "rating2",
            message: "what is the workers star rating (please use only the numbers 1-5) "
        },


    ]);
}

function generateHTML(info) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<https://api.github.com/resource?page=2>; 
      <https://api.github.com/resource?page=5>;
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body style="background-color:LightBlue;">
  <div class="jumbotron jumbotron-fluid">
  <div class="container"style="background-color:silver;">
    <h1 class="display-4"> name ${info.name}</h1>
    <p class="lead" style="background-color:silver;"> job location  ${info.location}.</p>  <h3><span class="badge badge-secondary">IMPORTEN WORKER PROFILE </span></h3> <ul class="list-group">
      <li class="list-group-item">workers github is <a href="https://github.com/${info.github}">${info.github}</li>
      <li class="list-group-item">position:my position is a ${info.position} </li>
    <li class="list-group-item"> workers rating <img src="${info.rating}.png" width="250px"  height="48px"></img></ul>
  </div>
</div>



<div class="jumbotron jumbotron-fluid">
<div class="container"style="background-color:silver;">
  <h1 class="display-4"> workers name  ${info.name1}</h1>
  <p class="lead" style="background-color:silver;"> job location  ${info.location1}.</p>  <h3><span class="badge badge-secondary">IMPORTEN WORKER PROFILE </span></h3> <ul class="list-group">
    <li class="list-group-item">workers github is <a href="https://github.com/${info.github1}">${info.github1}</li>
    <li class="list-group-item">workers position:my position is a ${info.position1} </li>
  <li class="list-group-item"> workers rating <img src="${info.rating1}.png" width="250px"  height="48px"></img></ul>
</div>
</div>



<div class="jumbotron jumbotron-fluid">
<div class="container"style="background-color:silver;">
  <h1 class="display-4"> name ${info.name2}</h1>
  <p class="lead" style="background-color:silver;"> job location  ${info.location2}.</p>  <h3><span class="badge badge-secondary">IMPORTEN WORKER PROFILE </span></h3> <ul class="list-group">
    <li class="list-group-item">workers github is <a href="https://github.com/${info.github2}">${info.github2}</li>
    <li class="list-group-item">position: my position is a ${info.position2} </li>
  <li class="list-group-item"> workers rating <img src="${info.rating2}.png" width="250px"  height="48px"></img></ul>
</div>
</div>



















</body>
</html>`
};

async function init() {
    console.log("hi");
    try {
        const info = await promptUser();

        const html = generateHTML(info);

        await writeFileAsync("index.html", html);
        var readHtml = fs.readFileSync('index.html', 'utf8');
        var options = { format: 'Letter' };
        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    }
}
init();