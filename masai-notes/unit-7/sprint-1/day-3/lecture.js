const express = require("express");
const fs = require("fs");

const app = express()

app.use(express.json())
//method + route;

app.get("/", (req, res) => {
    res.send("API works")
})

app.get("/posts", (req, res) => {
    let data = fs.readFileSync("./db.json", {encoding : "utf-8"})
    data = JSON.parse(data)
    res.send(data.posts)
})


app.post("/posts/add", (req, res) => {
    const post  = req.body;
    // first get the json data;
    const existing_data = fs.readFileSync("./db.json", {encoding : "utf-8"})
    // convert it to normal object - parse it;

    const parsed_data = JSON.parse(existing_data)
    console.log("parsed data before the new post is added")
    console.log(parsed_data)

    //once it is a normal object, can we do the manipulation? Yes;
    // in this normal object, we add the new post
    parsed_data.posts.push(post)
    console.log("parsed data after the new post is added")
    console.log(parsed_data)

    //now stringify the normal object back to json
    const stringified_data = JSON.stringify(parsed_data)

    // store the json in db.json;
    fs.writeFileSync("./db.json", stringified_data, {encoding : "utf-8"})

    res.send("Post successfully added")
   
})

app.get("/welcome", (req, res) => {
    // const name = req.query.name;
    // const age = req.query.age

    const {name, age} = req.query;

    res.send(age > 18 ? `Welcome ${name}, You are eligible`: `Sorry ${name}, you are not eligible`)
})

//write an API endpoint /welcome, where the query that we accept is name and age;
//if the age is above 18, send response as 'Welcome _the_value_of_name, you are eligible`
//if the age is below 18, send response as 'Sorry _the_value_of_name you are not eligible`


//params

app.get("/lectures/:id", (req, res) => {
    const lectureID = req.params.id
   res.send(`Here is your ${lectureID} lecture`)
})

app.listen(4000)