// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


// Initialize the main project folder
//connects the server-side code with the client-side code
app.use(express.static('website'));


// Setup Server
const PORT = 3001;

app.listen(PORT, listening);

//check if server is running
function listening() {
    console.log(`Server is running, listening on port ${PORT}.`);
}

//get request to get all project data objects in the array
app.get('/projectData', sendProjectData);

//get all project data objects in the array
function sendProjectData(req, res) {
    res.send(projectData);
}

//post request to add new entry to the project data
app.post('/addData', addWeatherData);

//adds new entry to the project data
function addWeatherData(req, res) {
    const newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData.push(newEntry);
    res.send(newEntry);
}