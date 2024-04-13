const jwt = require('jsonwebtoken');
require("dotenv").config()

const authentication= (req, res, next) => {
    if (!req.headers.authorization){
        return res.send("Please login again")
    }
    let token = req.headers.authorization?.split(" ")[1]//[Bearer aaebaleenaleee]
    console.log(token)

    // verify a token symmetric
    jwt.verify(token, process.env.JWT_SECRETE, async function (err, decoded) {
        if (decoded) {
            console.log(decoded) // bar
            const userId = decoded.userId
            req.body.userId = userId
            next()
        } else {
            console.log('error in jwt')
            return res.send('login first')
        }
    });
}

module.exports = { authentication }