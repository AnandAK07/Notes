const { Router } = require('express');
const { UserModel } = require('../models/User.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


// const userController=express.Router();
const userController = Router();

userController.post('/signup', (req, res) => {
    const { email, password, age } = req.body;

    bcrypt.hash(password, 5, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
            return res.send("Something went wrong, plz try again later")
        }
            const user = new UserModel({ email, password: hash, age })
            try {
                
                await user.save()
                return res.json({message:"Signup sucessfull"})
            } catch (error) {
                return res.send("Something went wrong")
            }
       
    });

})

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email })
    const hash = user.password;
    const userId = user._id.toString();
    console.log(userId)

    bcrypt.compare(password, hash, function (err, result) {
        // result == true
        if (err) {
            return res.json({ message: "Something went wrong, plz try again later" })
        }
        if (result) {
            const token = jwt.sign({ userId: userId }, process.env.JWT_SECRETE);
            return res.send({message:"login successfull",token})
        } else {
            return res.send("invalid credentials,plx signup if you haven't")
        }
    });
})

module.exports = { userController }