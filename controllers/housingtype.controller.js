const bcrypt = require('bcrypt')
const utilities = require('../utilities')
const HousingType = require('../models/housingtype.model');



exports.create = (req, res) => {

    // Validate request
    if ("body" in req) {

        if ((!req.body.info)) {

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



    // Create a Landlord
    const newHousingType = {
        info: req.body.info
    };


    // Save Landlord in the database
    HousingType.create(newHousingType)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Landlord."
            });
        });


};




exports.list = async(req , res) => {
    res.send(await HousingType.findAll())
};