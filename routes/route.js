const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

// Root Request handler
router.get("/", controller.landing_page);

// Dashboard request Handler | static page
router.get('/dashboard', function(req, res) {
    res.redirect('/dashboard.html');
})

// myDay request Handler | static page
router.get('/myDay', function(req, res) {
    res.redirect('/myDay.html');
})

// modules request Handler | static page
router.get('/modules', function(req, res) {
    res.redirect('/modules.html');
})

router.get("/assignments", controller.assignments_list);
// assignments request Handler | static page
/*
router.get('/assignments', function(req, res) {
    res.redirect('/assignments.html');
    controller.assignments_list;
})*/

// new assignments request handler
router.get('/new', controller.new_assignment);

// calendar request Handler | static page
router.get('/calendar', function(req, res) {
    res.redirect('calendar.html');
})

// Default 404 response
//router.use(function(req, res) {
//    res.status(404);
//    res.type('text/plain');
//    res.send('404 Not found.');
//}) 

// Internal server errors to route
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})

module.exports = router;