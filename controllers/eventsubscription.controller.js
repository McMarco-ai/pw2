const utilities = require('../utilities')
const EventSubscription = require('../models/eventsubscription.model');



// Create and Save a new Subscription
exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if (!req.body.eventid) {

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

    // Save Event Subscription in the database
    EventSubscription.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });

};