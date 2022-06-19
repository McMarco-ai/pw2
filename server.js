const express = require('express')
const app = express()
const utilities = require('./utilities');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
require("dotenv").config()

//setup swagger
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

//AUTH
const auth = function(req, res, next) {

    let exceptions = ['/admin/login', '/student/create', '/student/login', '/landlord/create', '/landlord/login'];
    let method = req.method

    if ((exceptions.indexOf(req.url) >= 0) || (method.trim() == 'GET')) {
        next();
    } else {
        utilities.validateToken(req.headers.authorization, (result, decoded) => {
            if (result) {

                console.log(decoded)

                if (decoded.type == "student")
                    req.body.studentid = decoded.id
                else if (decoded.type == "landlord")
                    req.body.landlordid = decoded.id
                else if (decoded.type == "admin")
                    req.body.admin = true

                next();

            } else {
                res.status(401).send("Invalid Token");
            }
        })
    }

}


app.use(express.json())
app.use(auth);
app.use('/admin', require('./routes/admin.routes'))
app.use('/student', require('./routes/student.routes'))
app.use('/landlord', require('./routes/landlord.routes'))
app.use('/housing', require('./routes/housing.routes'))
app.use('/housing/type', require('./routes/housingtype.routes'))
app.use('/housing/comment', require('./routes/housingcomment.routes'))
app.use('/housing/rating', require('./routes/housingrating.routes'))
app.use('/housing/subscription', require('./routes/housingsubscription.routes'))
app.use('/event', require('./routes/event.routes'))
app.use('/event/type', require('./routes/eventtype.routes'))
app.use('/event/comment', require('./routes/eventcomment.routes'))
app.use('/event/rating', require('./routes/eventrating.routes'))
app.use('/event/subscription', require('./routes/eventsubscription.routes'))







app.get('*', (req, res) => {
    res.status(404)
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
})