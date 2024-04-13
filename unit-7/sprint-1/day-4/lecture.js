const express = require("express")
const cors = require("cors")

const app = express()

const {ordersRouter} = require("./routes/order.routes")
const {cartRouter} = require("./routes/cart.routes")

// const logger = (req, res, next) => {
//     console.log(req.method + " " + req.url)
//     next()
// }

// app.use(logger)




// const time_logger = (req, res, next) => {
//      let entry_time = Date.now()
//      console.log(entry_time)

//      next()

//      let exit_time = Date.now()
//      console.log(exit_time)

//      const time_taken = exit_time - entry_time
//      console.log(time_taken)
// }

// app.use(time_logger)


const mw1 = (req, res, next) => {
    console.log("b") // done
    next() //done
    console.log("g") //done
}

const mw2 = (req, res, next) => {                               //xbzygp 
    console.log("x") // done
    next() // done
    console.log("p") //done
}

             
app.use(mw2, mw1)

app.use(cors({
    origin : ["https://8qylpo.csb.app", "https://nsndgm.csb.app"]
}))

app.get("/", (req, res) => {
    // console.log("z") //done
    res.send("API is working")
    // console.log("y")//done
})



app.use("/orders", ordersRouter)



app.use("/cart", cartRouter)

app.listen(8080, () => {
    console.log("Listening on port 8080")
})
