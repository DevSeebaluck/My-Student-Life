// Import Assignments class from model
const Assignments = require('../models/model');
const assignmentsDAO = require('../models/model');
const db = new assignmentsDAO();
db.init();

// Import Assignments class from model
//const Members = require('../models/model');
//const membersDAO = require('../models/model');
//const dbm = new membersDAO();
//dbm.init();

// Create Instance of class Assignments 


exports.assignments_list = function(req, res) {
    //res.send('<h1>Not yet implemented: show a list of assignments.</h1>');
    //db.getAllAssignment();
    //const db = new assignmentsDAO();
    //db.init();
    //console.log('Database instantiated');
    //res.render('navbar', {
    //    'title': 'My Student Life'
    //});

    db.getAllAssignments().then((list) => {
        res.render('assignment', {
            'title': 'Assignments',
            'page_title': 'Incomplete Assignments',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err) => {
        console.log('Promise rejected', err);
    })
}

/*exports.landing_page = async function(req, res) {
    //const db = new assignmentsDAO();
    //db.init();
    //console.log('Database instantiated');
    res.send('<h1>Welcome to my Application.</h1>');
    res.render("signUp", {
        'title': 'Guest Book',
        'entries': [{
                'subject': 'A good day out',
                'contents': 'We hang out to Eiffel Tower.'
            },
            {
                'subject': 'Shark Attack',
                'contents': 'I lost my leg.'
            },
            {
                'subject': 'Spiritual Dimension',
                'contents': 'We were blessed.'
            }

        ]
    });
    

        db.getAllAssignments().then((list) => {
            res.render('assignment', {
            'title': 'Assignments',
            'entries': list
        });
        console.log('Promise Resolved');
        }).catch((err) => {
            console.log('Promise rejected', err);
        })
}

*/

exports.landing_page = function(req, res) {
    res.render('login');
    //res.send('<h1>Welcome to my Application.</h1>');

}

exports.dashboard_page = function(req, res) {
    db.getAllAssignments().then((list) => {
        res.render('dashboard', {
            'page_title': 'Dashboard',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err) => {
        console.log('Promise rejected', err);
    })
}

exports.blackboard = function(req, res) {
    res.redirect('https://blackboard.gcal.ac.uk/ultra/')
}



exports.modules_page = function(req, res) {
    db.getAllAssignments().then((list) => {
        res.render('modules', {
            'page_title': 'Incomplete Assignments',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err) => {
        console.log('Promise rejected', err);
    })
}

exports.calendar_page = function(req, res) {
    res.render('calendar', {
        'page_title': 'Your Schedule'
    });
}

exports.new_assignment = function(req, res) {
    res.render('newAssignment', {
        'page_title': 'New Assignment'
    });
}

exports.post_new_assignment = function(req, res) {
    console.log('processing post-new_assignment controller');
    db.addEntry(req.body.title, req.body.module, req.body.milestones, req.body.due_date, req.body.completion_date);
    res.redirect('/assignments');
}

exports.delete_assignment = function(req, res) {
    console.log('filtering assignment title name', req.params.title);
    let user = req.params.title;
    db.deleteEntry(user);
    res.redirect('/assignments');
}

exports.edit_assignment = function(req, res) {
    console.log('logging into', req.params.title);
    let usersChoice = req.params.title;
    db.findEntry(usersChoice).then((list) => {
        res.render('editAssignment', {
            'page_title': 'Edit Assignment',
            'entries': list
        });
    }).catch((err) => {
        console.log('error handling Assignment entries', err);
    })
}

//exports.editing_assignment = function(req, res) {
//    res.render('editAssignment')
//}

exports.post_edited_assignment = function(req, res) {
    console.log('processing post-edited_assignment in controller of ', req.params.title);
    let usersChoice = req.params.title;
    db.modifyEntry(usersChoice, req.body.title, req.body.module, req.body.milestones, req.body.due_date, req.body.completion_date);
    res.redirect('/assignments');
}

exports.shareable_assignment = function(req, res) {
    res.redirect('/shareAssignment')
}

exports.share_assignment = function(req, res) {
    res.render('shareAssignment', {
        'page_title': 'Share Assignment'
    });
}

exports.signUp_page = function(req, res) {
    res.render('signUp');
}

exports.post_new_member = function(req, res) {
    dbm.addMember(req.body.username, req.body.email, req.body.password);
    res.redirect('/');
}