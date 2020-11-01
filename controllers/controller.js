// Import Assignments class from model
const assignmentsDAO = require('../models/model.js');

// Create Instance of class Assignments 


exports.assignments_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of assignments.</h1>');
    db.getAllAssignments();
} 

exports.landing_page = async function(req, res) {
    const db = new assignmentsDAO();
    db.init();
    console.log('Database instantiated');
    res.send('<h1>Welcome to my Application.</h1>');
} 

//exports.landing_page = function(req, res) {
//    res.send('<h1>Welcome to my Application.</h1>');
//} 

exports.new_assignment = function(req, res) {
    res.send('<h1>Not yet implemented: show a new assignment page.</h1>');
}
