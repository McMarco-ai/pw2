const bcrypt = require('bcrypt')
const utilities = require('../utilities')
const Student = require('../models/student.model');



// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if ((!req.body.name) || (!req.body.password)) {

            res.status(400).json({
                message: "Content cannot be empty!"
            });

            return;

        }

    } else {

        res.status(400).json({
            message: "Body not defined!"
        });

        return;
    }

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {

            // Create a Student
            req.body.password = hash

            // Save Student in the database
            Student.create(req.body)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Student."
                    });
                });

        })
    })

};




exports.login = async(req, res) => {

    var student = await Student.findAll({
        where: {
            email: req.body.email
        }
    });

    student = student[0].dataValues


    bcrypt.compare(req.body.password, student.password).then((result) => {

        if (result) {
            utilities.generateToken({ type: 'student', id: student.id }, (token) => {
                res.status(200).json(token);
            })
        } else {
            res.status(401).send("Not Authorized");
        }

    })




};