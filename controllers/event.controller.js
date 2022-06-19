const utilities = require('../utilities')
const Event = require('../models/event.model');



// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if ((!req.body.startdate) || (!req.body.title) || (!req.body.desc) || (!req.body.enddate) || (!req.body.starttime) || (!req.body.endtime)) {

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
    Event.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });

};