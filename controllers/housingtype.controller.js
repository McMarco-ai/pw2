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




exports.login = async(req, res) => {

    var landlord = await Landlord.findAll({
        where: {
            email: req.body.email
        }
    });

    landlord = landlord[0].dataValues


    bcrypt.compare(req.body.password, landlord.password).then((result) => {


        if (result) {
            utilities.generateToken({
                type: 'landlord',
                id: landlord.id
            }, (token) => {
                res.status(200).json(token);
            })
        } else {
            res.status(401).send("Not Authorized");
        }

    })




};