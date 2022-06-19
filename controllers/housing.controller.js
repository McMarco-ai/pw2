const utilities = require('../utilities')
const Housing = require('../models/housing.model');



// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if ((!req.body.title) || (!req.body.price) || (!req.body.info) || (!req.body.date) || (!req.body.location) || (!req.body.maxpeople) || (!req.body.currpeople)) {

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



    // Save Student in the database
    Housing.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });

};