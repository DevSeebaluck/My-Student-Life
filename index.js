// Import express framework
const express = require('express');
// Import path module
const path = require('path')
    // Import the nedb module
const nedb = require('nedb');
// Import router controller
const router = require('./routes/route.js');
// Import mustache express framework
const mustache = require('mustache-express');
// Import body-parser
const bodyParser = require('body-parser');



// Using express to create the application
const app = express();

// Set Template Engine in the Express Application 
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// Using body-parser to extract the submitted form data
app.use(bodyParser.urlencoded({ extended: false }));

// Using router controller
app.use('/', router);

//app.use(express.static(path.join(__dirname, 'public')));



// Create the db and log message
//const db = new nedb({ filename: 'assignments.db', autoload: true });
//console.log('assignments database created.')

// Joined public subdirectory
const public = path.join(__dirname, 'public');

// Instruct to use the public subdirectory
app.use(express.static(public));

// Root Request handler
//app.get('/', function(req, res) {
//    res.send('Hello! Welcome to my application.');
//}) 

/// Dashboard Request handler
///app.get('/Guest', function(req, res) {
//    res.send('<h1>Dashboard</h1>');
//}) 

// Dashboard request Handler | static page
//app.get('/dashboard', function(req, res) {
//   res.sendFile(path.join(public, 'dashboard.html'));
//})

// myDay request Handler | static page
//app.get('/myDay', function(req, res) {
//    res.sendFile(path.join(public, 'myDay.html'));
//})

// modules request Handler | static page
//app.get('/modules', function(req, res) {
//    res.sendFile(path.join(public, 'modules.html'));
//})

// assignments request Handler | static page
//app.get('/assignments', function(req, res) {
//   res.sendFile(path.join(public, 'assignments.html'));
//})

// calendar request Handler | static page
//app.get('/calendar', function(req, res) {
//    res.sendFile(path.join(public, 'calendar.html'));
//})

// Default 404 response
//app.use(function(req, res) {
//    res.status(404);
//    res.send('Oops! We didn\'t find what you are looking for.');
//}) 

// Application connected to port 2000 server using callback function
app.listen(2000, () => {
    console.log('Server started on port 2000. Ctrl^c to quit.');
})