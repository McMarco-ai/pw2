const utilities = require('../utilities')
const HousingSubscription = require('../models/housingsubscription.model');
const Housing = require('../models/housing.model');
const sequelize = require('sequelize')
const {
    Op
} = require("sequelize");



exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if (!req.body.housingid) {

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
    HousingSubscription.create(req.body)
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

    const mySubs = await HousingSubscription.findAll({
        where: {
            housingid: "housingid" in req.body ? req.body.housingid : {
                [Op.in]: sequelize.literal(`(SELECT id FROM housings WHERE landlordid = ${req.body.landlordid})`)
            }
        }
    })


    res.send(mySubs)

}


exports.approve = async(req, res) => {

    // Change everyone without a last name to "Doe"
    await HousingSubscription.update({
        approved: true
    }, {
        where: {
            id: req.body.subscriptionid
        }
    });

    const sub = await HousingSubscription.findAll({
        where: {
            id: req.body.subscriptionid
        }
    })

    res.send(sub)

}



exports.disapprove = async(req, res) => {

    // Change everyone without a last name to "Doe"
    await HousingSubscription.update({
        approved: false
    }, {
        where: {
            id: req.body.subscriptionid
        }
    });

    const sub = await HousingSubscription.findAll({
        where: {
            id: req.body.subscriptionid
        }
    })

    res.send(sub)

}