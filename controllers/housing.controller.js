const sequelize = require('sequelize')
const utilities = require('../utilities')
const Housing = require('../models/housing.model');
const { Op } = require("sequelize");



// Create and Save a new housing
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



exports.list = async(req, res) => {

    const housings = await Housing.findAll({
        where: {

            title: {
                [Op.like]: "title" in req.query ? `%${req.query.title}%` : '%%'
            },
            date: {
                [Op.gte]: "date" in req.query ? req.query.date : new Date()
            },
            location: {
                [Op.like]: "location" in req.query ? `%${req.query.location}%` : '%%'
            },
            maxpeople: {
                [Op.lte]: "maxpeople" in req.query ? req.query.maxpeople : '999'
            },
            typeid: "typeid" in req.query ? req.query.typeid : {
                [Op.gte]: '0'
            }

        },
        attributes: {
            include: [
                [
                    sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM housingsubscriptions AS sub
                        WHERE
                            sub.housingid = housing.id
                        AND sub.approved = 1
                    )`),
                    'currpeople'
                ],
                [
                    sequelize.literal(`(
                        SELECT SUM(rating)
                        FROM housingratings AS rating
                        WHERE
                            rating.housingid = housing.id
                       
                    )/(
                        SELECT COUNT(*)
                        FROM housingratings AS rating
                        WHERE
                            rating.housingid = housing.id
                       
                    )` ),
                    'rating'
                ]
            ]
        }
    });

    res.send(housings)

}