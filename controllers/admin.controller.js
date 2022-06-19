const utilities = require('../utilities')
const Student = require('../models/student.model');
require("dotenv").config()
const {
    Op
} = require("sequelize");



exports.login = async(req, res) => {

    if ((req.body.username == process.env.adminusername) && (req.body.password == process.env.adminpassword)) {

        utilities.generateToken({
            type: 'admin',
            id: 'admin'
        }, (token) => {
            res.status(200).json(token);
        })

    } else res.status(401).send("Not Authorized");
}





// Block user
exports.blockstudent = async(req, res) => {

    if (req.body.admin) {
        // Change everyone without a last name to "Doe"
        await Student.update({
            banned: true
        }, {
            where: {
                id: req.body.studentid
            }
        });

        const student = await Student.findAll({
            where: {
                id: req.body.studentid
            }
        })

        res.send(student)

    } else res.status(401).send("Not Authorized")

}




// Unblock user
exports.unblockstudent = async(req, res) => {

    if (req.body.admin) {

        // Change everyone without a last name to "Doe"
        await Student.update({
            banned: false
        }, {
            where: {
                id: req.body.studentid
            }
        });

        const student = await Student.findAll({
            where: {
                id: req.body.studentid
            }
        })

        res.send(student)

    } else res.status(401).send("Not Authorized")

}