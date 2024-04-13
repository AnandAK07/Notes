const express = require('express');
const { authModel, connection } = require('./db')
const jwt = require('jsonwebtoken');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("App is running sucess")
})

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log(password, email)
    try {
        await authModel.create({ email, password })
        console.log('singup successfull')
    } catch (error) {
        console.log('failed to signup')
    }
    res.send("Register successfull")
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(password, email)
    const user = await authModel.findOne({ email, password })

    if (user) {
        let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        return res.send({ message: 'login sucessfull', token })
    } else {
        return res.send({ message: "error login" })
    }

})

app.get('/reports', async (req, res) => {
    const  authoriztion_header=req.headers.authorization
    let token = authoriztion_header.split(" ")[1]//[Bearer aaebaleenaleee]

    console.log(token)

    // verify a token symmetric
    jwt.verify(token, 'shhhhh', function (err, decoded) {
        if (err) {
            console.log('error in jwt')
            return res.send('access... failer')
        } else {

            console.log(decoded.foo) // bar
            return res.send('report successfull accessable')
        }
    });

})

app.listen(8080, async () => {
    try {
        await connection
        console.log(`8080`)
    } catch (error) {
        console.log('fail')
    }
})