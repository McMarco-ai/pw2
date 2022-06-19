const utilities = require('../utilities')
const EventComment = require('../models/eventcomment.model');



// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if (!req.body.comment) {

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



    // Save Event in the database
    EventComment.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });

};