const utilities = require('../utilities')
const Event = require('../models/event.model');
const { Op } = require("sequelize");




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


exports.list = async(req, res) => {

    const events = await Event.findAll({
        where: {
            title: {
                [Op.like]: "title" in req.query ? `%${req.query.title}%` : '%%'
            },
            startdate: {
                [Op.gte]: "startdate" in req.query ? req.query.startdate : new Date()
            }
        }
    });

    res.send(events)

}