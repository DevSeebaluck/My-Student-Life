//Import neDB module
const nedb = require('nedb');



class Assignments {

    constructor(dbFilePath) {
        if (dbFilePath) {
        this.db = new nedb({ filename: dbFilePath, autoload: true });
        console.log('DB connected to ' + dbFilePath);
        } else {
        this.db = new nedb({ filename: 'assignments.db', autoload: true });
        }
    }

    // seeding the database
    init() {
        this.db.insert({
            title: 'WPD 1',
            module: 'Web Platform Development',
            milestones: 'Wireframing',
            due_date: '2020-11-01',
            completion_date: '2020-12-06'
        },
        function(err, newDoc) {
            if (err) {
                console.log('error', err);
            } else {
                console.log('Assignment "WPD 1"of '+ newDoc.module + ' is inserted')
            }   
        });


        this.db.insert({
            title: 'BD 3',
            module: 'Big Data',
            milestones: 'CRUD operations',
            due_date: '2020-09-23',
            completion_date: '2020-11-25'
        },
        function(err, newDoc) {
            if (err) {
                console.log('error', err);
            } else {
                console.log('Assignment "BD 3" of '+ newDoc.module + ' is inserted')
            } 
        });
    }

    //a function to return all entries from the database
    getAllAssignments() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                console.log('function all() returns: ', entries);
                }
            })
        })
    }
    
}

module.exports = Assignments;







