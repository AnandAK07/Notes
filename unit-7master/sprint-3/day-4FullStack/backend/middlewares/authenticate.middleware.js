const jwt=require('jsonwebtoken')


const authentication=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.send("login first")
    }
    jwt.verify(token,'secreateKey123',function(err,decoded){
        console.log(decoded)
    })
    next()
}