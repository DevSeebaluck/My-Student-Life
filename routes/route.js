const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

// Root Request handler
router.get("/", controller.landing_page);

// Root Request handler
router.get("/signUp", controller.signUp_page);

router.post("/signUp", controller.post_new_member);

// Dashboard request Handler | static page
//router.get('/dashboard', function(req, res) {
//    res.redirect('/dashboard.html');
//})
router.get("/dashboard", controller.dashboard_page);

// myDay request Handler | static page
router.get("/blackboard", controller.blackboard);

// modules request Handler | static page
router.get("/modules", controller.modules_page);

// calendar request Handler | static page
router.get("/calendar", controller.calendar_page);

router.get("/assignments", controller.assignments_list);
// assignments request Handler | static page
/*
router.get('/assignments', function(req, res) {
    res.redirect('/assignments.html');
    controller.assignments_list;
})*/

// new assignments request handler
router.get('/new', controller.new_assignment);

router.post("/new", controller.post_new_assignment);

router.get("/delete/:title", controller.delete_assignment);

router.get("/edit/:title", controller.edit_assignment);

//router.get("/editAssignment", controller.editing_assignment);

router.post("/edit/:title", controller.post_edited_assignment);

router.get("/share/:title", controller.shareable_assignment);

router.get("/shareAssignment", controller.share_assignment);

// Default 404 response
/*router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
}) */

// Internal server errors to route
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})

module.exports = router;