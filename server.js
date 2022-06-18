const express = require('express')
const app = express()
const utilities = require('./utilities');
require("dotenv").config()

//AUTH
const auth = function(req, res, next) {

    let exceptions = ['/student/create', '/student/login', '/landlord/create', '/landlord/login', '/housingtype/create', '/housing/create', '/eventtype/create', '/event/create'];

    if (exceptions.indexOf(req.url) >= 0) {
        next();
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if (result) {
                next();
            } else {
                res.status(401).send("Invalid Token");
            }
        })
    }

}


app.use(express.json())
app.use(auth);
app.use('/student', require('./routes/student.routes'))
app.use('/landlord', require('./routes/landlord.routes'))
app.use('/housingtype', require('./routes/housingtype.routes'))
app.use('/housing', require('./routes/housing.routes'))
app.use('/event', require('./routes/event.routes'))
app.use('/eventtype', require('./routes/eventtype.routes'))







app.get('*', (req, res) => {
    res.status(404)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
})