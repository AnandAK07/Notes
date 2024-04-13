const express=require("express")


const app=express();

const mw1=(req,res,next)=>{
    console.log("1");
    next();
    console.log("2")
}

const mw2=(req,res,next)=>{
    console.log("3");
    next();
    console.log("4")
}

app.use(mw1)
app.use(mw2)
const logger=(req,res,next)=>{
    console.log(req.method+" "+req.url);
    console.log("x")    //xaby
    next()
    console.log("y")
}


const timer_logger=(req,res,next)=>{
    // console.log("")
    let entry_time=Date.now()
    console.log(entry_time)
    next();
    let exit_time=Date.now();
    console.log(exit_time)
    let time_taken=exit_time-entry_time;
    console.log(time_taken)
    // unit timeStamp=1702048668026 
}

// app.use(logger,timer_logger)
// app.use(timer_logger)

app.get("/",(req,res)=>{
    console.log("a")
    res.send("API is working")
    console.log("b")
})

app.get("/about",(req,res)=>{
    console.log("c")
    res.send("API is working")
    console.log("d")
})

app.use("/orders",orderRouter)

app.listen(8080,()=>{
    console.log("Listening at 8080")
});