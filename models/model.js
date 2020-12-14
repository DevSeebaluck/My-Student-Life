//Import neDB module
const Datastore = require('nedb');
const { resolve } = require('path');



class Assignments {

    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Datastore({ filename: dbFilePath, autoload: true });
            console.log('New in-memory datastore created' + dbFilePath);
        } else {
            this.db = new Datastore({ filename: "assignments.db", autoload: true });
            console.log('DB connected to ' + Datastore.filename);
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
                    console.log('Assignment "WPD 1"of ' + newDoc.module + ' is inserted')
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
                    console.log('Assignment "BD 3" of ' + newDoc.module + ' is inserted')
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


    addEntry(title, module, milestones, due_date, completion_date) {
        var entry = {
            title: title,
            module: module,
            milestones: milestones,
            due_date: due_date,
            completion_date: completion_date,
            published: new Date().toISOString().split('T')[0]
        }
        console.log('Assignment created', entry);

        this.db.insert(entry, function(err, doc) {
            if (err) {
                console.log('Error inserting assignment', title);
            } else {
                console.log('Assignment inserted into the database', doc);
            }
        })
    }


    deleteEntry(user) {
        var remove = {
            title: user
        }
        console.log('Deleting Assignment', remove);

        this.db.remove(remove, function(err, numRemoved) {
            if (err) {
                console.log('Error deleting assignment', title);
            } else {
                console.log('Assignment deleted from the database', numRemoved);
            }
        })
    }


    findEntry(usersChoice) {
        console.log('Assignment found', usersChoice);
        return new Promise((resolve, reject) => {

            this.db.find({ 'title': usersChoice }, function(err, list) {
                if (err) {
                    reject(err)
                    console.log('Error retrieving assignment', title);
                } else {
                    resolve(list);
                    console.log('Assignment retrieved', list);
                }
            })
        })
    }


    modifyEntry(usersChoice, title, module, milestones, due_date, completion_date) {
        var update = {
            title: title,
            module: module,
            milestones: milestones,
            due_date: due_date,
            completion_date: completion_date,
            published: new Date().toISOString().split('T')[0]
        }
        console.log('Modifying Assignment', update);

        //this.db.update({ title: 'title' }, { $set: { 'title': title, 'module': module, 'milestones': milestones, 'due_date': due_date, 'completion_date': completion_date } }, {}, function(err, numUp) {
        this.db.update({ title: usersChoice }, { $set: update }, function(err, numUp) {
            if (err) {
                console.log('Error modifying assignment', title);
            } else {
                console.log('Assignment modified into the database', numUp);
            }
        })
    }

}

/*
class Members {

    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Datastore({ filename: dbFilePath, autoload: true });
            console.log('New in-memory datastore created' + dbFilePath);
        } else {
            this.db = new Datastore({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + Datastore.filename);
        }
    }


    init() {
        this.db.insert({
                username: 'Joe',
                email: 'jkawasaki@gmail.com',
                password: 'kawasaki007',
            },
            function(err, newDoc) {
                if (err) {
                    console.log('error', err);
                } else {
                    console.log('Member of username: ' + newDoc.username + ' is inserted')
                }
            });
    }


    addMember(username, email, password) {
        var member = {
            username: username,
            email: email,
            password: password,
            created: new Date().toISOString().split('T')[0]
        }
        console.log('Creating new member', member);

        this.db.insert(member, function(err, doc) {
            if (err) {
                console.log('Error creating member', title);
            } else {
                console.log('New member successfully created', doc);
            }
        })
    }


}*/


module.exports = Assignments;
//module.exports = Members;