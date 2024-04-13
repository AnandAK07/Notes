const express = require('express');
const { authModel, connection } = require('./db')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("App is running sucess")
})

app.post('/signup', async (req, res) => {
    const { email, password, role } = req.body;

    console.log(password, email,role)
    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            // Store hash in your password DB.
            await authModel.create({ email, password: hash, role })
            console.log(hash)
            console.log('singup successfull')
            return res.send("Register successfull")
        });
    } catch (error) {
        console.log('failed to signup')
        return res.send("Register failer")
    }
    
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(password, email)

    const user = await authModel.findOne({ email})

    if(!user){
        return res.send({message:"login failed, Signup first"})
    }

    const hashed_password=user.password;
    // Load hash from your password DB.
    bcrypt.compare(password, hashed_password, function (err, result) {
        // result == true
        if(result){
            let token = jwt.sign({userId:user._id}, 'shhhhh');
            return res.send({ message: 'login sucessfull', token })
        }else{
            return res.send({message:"login failed, Invalid credentials"})
        }
    });

    

})

const authentication_middleware = (req, res, next) => {
    const authoriztion_header = req.headers.authorization
    let token = authoriztion_header?.split(" ")[1]//[Bearer aaebaleenaleee]

    console.log(token)

    // verify a token symmetric
    jwt.verify(token, 'shhhhh', async function (err, decoded) {
        if (decoded) {
            console.log(decoded) // bar
            const userId=decoded.userId
            const user = await authModel.findOne({_id:userId})
            console.log(user)
            const role=user.role
            console.log(role)
            req.userrole=role
            next()
        } else {

            console.log('error in jwt')
            return res.send('login first')
        }
    });
}

// app.get("/contact", (req, res) => {
//     return res.send({ message: "contact us at ...." })

// })
// app.use(authentication_middleware)

app.get('/reports', authentication_middleware, async (req, res) => {
   
    // const authoriztion_header = req.headers.authorization
    // let token = authoriztion_header.split(" ")[1]//[Bearer aaebaleenaleee]

    // console.log(token)

    // // verify a token symmetric
    // jwt.verify(token, 'shhhhh', function (err, decoded) {
    //     if (err) {
    //         console.log('error in jwt')
    //         return res.send('login first')
    //     } else {

    //         console.log(decoded.foo) // bar
    //         return res.send('report successfull accessable')
    //     }
    // });

    return res.send({ message: "here are the reports" })

})

app.get("/contact", (req, res) => {
    return res.send({ message: "contact us at ...." })

})

app.get("/summary", authentication_middleware, (req, res) => {
    return res.send({ message: "here are the summary" })

})


// students and instuctors should be able to access this
app.get("/lecture", authentication_middleware,(req,res)=>{
    const role=req.userrole
    console.log("lecture", req.userrole)
    if (role === "student" || role ==="instructure"){
        
        return res.send({message:"lecture ..."})
    }else{
        return res.send({message:"your not authorised"})
    }
    // how do we know the role of the user who's making this request;
  
})

// instructors should be able to access this
app.get("/reviews", authentication_middleware, (req, res) => {
    const role = req.userrole
    console.log("lecture", req.userrole)
    if (role === "instructure") {
        return res.send({ message: "reviews ..." })
    } else {
        return res.send({ message: "your not authorised" })
    }
    
})

app.listen(8080, async () => {
    try {
        await connection
        console.log(`8080`)
    } catch (error) {
        console.log('fail')
    }
})