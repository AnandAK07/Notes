const express=require("express");

const app=express();

// last 
    const {orderRouter}=require("./routes/order.routes")
    const {cartRouter}=require("./routes/cart.routes")

    // 2last
    const cors=require("cors");

// 

// step 1
// const firstMW=(req,res,next)=>{
//     console.log("hey from ur first MW")
//     next();
// }

// app.use(firstMW)
// //MW should used all the end points


// // step 2
// const logger=(req,res,next)=>{
//     console.log(req.method+" "+req.url)
//     next();
// }

// app.use(logger)

// // step 3 practice
// const mw=(req,res,next)=>{
//     console.log("y");
//     next();
//     console.log("z")
// }

// app.use(mw)

// step 4
// const timerLogger=(req,res,next)=>{
//     let entry_time=Date.now();
//     console.log(entry_time)
//     next()
//     const exit_time=Date.now();
//     console.log(exit_time)
//     const timeTaken=exit_time-entry_time;
//     console.log(timeTaken)
// }

// app.use(timerLogger);



const mw1=(req,res,next)=>{
    console.log("x")
    next();
    console.log("y")
}



const mw2=(req,res,next)=>{
    console.log("l");
    next();
    console.log("m")
}

// app.use(mw2);
// app.use(mw1);

// // step Up
// app.use(mw2,mw1)


// app.get("/",(req,res)=>{
//     console.log("b")
//     console.log(req.method+" "+req.url)
//     res.send("API is working")
//     console.log("a")
// })

// app.get("/about",(req,res)=>{
//     console.log("l")
//     res.send("about page")
//     console.log("m")
// })


// app.get("/",(req,res)=>{
//     console.log("b")
//     console.log(req.method+" "+req.url)
//     res.send("API is working")
//     console.log("a")
// })


// app.use(cors())
// app.use("*")all origins
// app.use(url)codesand box
// app.use({origin:["url1","url2"]})

app.use("/orders",orderRouter)

// this middle ware will only work for cart endpoints it wan't work for above mw
app.use(mw2,mw1)
app.use("/cart",cartRouter)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

// write a mw called timelogger, it should log/print
// the time it took for our server to process a request

// Unit time= no's of miliseconds after jan 1 1970