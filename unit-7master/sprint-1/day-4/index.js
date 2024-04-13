const express=require('express');
const { userRouter } = require('./routes/user.routes');
const {reportsRouter}=require("./routes/reports.routes")
const app=express();

// app.use((req,res,next)=>{
//     console.log("n");
//     next()
//     console.log("p")
// })

// app.use((req,res,next)=>{
//     console.log("q");
//     next()
//     console.log("m")
// })
// app.get("/",(req,res)=>{
//     console.log("y");
//     res.send({message:"Welcome"});
//     console.log("a")
// })

// const timeLogger=(req,res,next)=>{
//     // const startTime=new Date().getTime();
//     const startTime=Date.now()
//     console.log(startTime);
//     next()
//     // const endTime=new Date().getTime();
//     const endTime=Date.now()
//     console.log(endTime-startTime);
// }

// app.use(timeLogger)

// const middleWare=(req,res,next)=>{
//     // console.log("mw1")
//     console.log("mw1")
//     // this line can avoid repeation of for every url
//     console.log(req.method+" "+req.url)
//     next();
// }

// // app.use(middleWare)
// const limiter=(req,res,next)=>{
//     if(req.url==="/reports"){
//         next();
//     }else{
//         res.send("Not allowed")
//     }
// }

// // app.use(limiter)



// app.get("/",(req,res)=>{
//     // http://localhost:8080?name=Anand&age=18
//     console.log(req.query)
//     console.log("/"+req.method+" "+req.url)
//     const {name,age}=req.query
//     res.send({message:"Welcome"+" "+name+age})
// })

app.use("/users",userRouter)

app.use("/reports",reportsRouter);



app.listen(8080,()=>{
    console.log("8080")
})