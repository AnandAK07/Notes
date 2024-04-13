const express =require("express");


// secondGo is done sufficient manner


// this create a app
const app=express()

// convert undefined into data
app.use(express.json())
// instead of body-select text
// app.use(express.text())



// // step 1
// // method+route
// app.get("/",(req,res)=>{
//     // res.write("API works")
//     // res.end()
//     res.send("API works")
// })

// app.get("/orders",(req,res)=>{
//     // res.end("order...")
//     res.send("Here the orders...")
// })

// app.post("/add",(req,res)=>{
//     const data=req.body;
//     console.log(data);
//     res.send("data received")
// })



// step 2

const fs=require("fs");

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.get("/posts",(req,res)=>{
    // fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
    //     // res.send(data)
    //     // const obj=={
    //         // "name":"nihal"
    //     // }
    //     // const json=JSON.stringify(obj)
    //     // const normalObj=JSON.parse(json)
    //     // console.log(normalObj.name)
    //     const normalObj=JSON.parse(data);
    //     console.log(normalObj.posts)
    //     // res.send(normalObj)
    // })
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"})
    data=JSON.parse(data)
    res.send(data.posts)
})

app.post("/posts/add",(req,res)=>{
    const post=req.body;
    // console.log(post)
    // res.send("Post added")
    // JSON.strigify "{obj:}" json is a strigified obj
    // fs.writeFile("./posts.json",JSON.stringify(post),{encoding:"utf-8"},()=>{
    //     res.send("Post added")
    // })
    // fs.appendFile("./db.json",JSON.stringify(post),{encoding:"utf-8"},()=>{
    //     res.send("Post added")
    // })

    // step 2
    // fs.appendFileSync("./db.json",JSON.stringify(post),{encoding:"utf-8"})
    // res.send("Data send")



    // first get the json data;
    const existingData=fs.readFileSync("./db.json",{encoding:"utf-8"})

    // convert it to normal obj -parse it ;
    const parsedData=JSON.parse(existingData);
    console.log(parsedData,"before data added")

    // once it is a normal object, can we do the manipulation
    // in this normal obj, we add the new post

    parsedData.posts.push(post)
    console.log(parsedData,"after added")
    // dbJsonObj={
    //     post:[{1},{2}]
    // }
    // obj.post.push() or obj.post.pus(...obj,newPost)
    
    
    
    const strigifiedData=JSON.stringify(parsedData)
    // now stringify the normal obj back to json
    // store the json in db.json

    fs.writeFileSync("./db.json",strigifiedData,{encoding:"utf-8"})
    
    
    
    res.send("Post successfully added")

})

// app.put("/posts/edit:id",(req,res)=>{

// })
// app.delete


// query?name=anand&age=18
app.get("/lectures",(req,res)=>{
    const unit=req.query.unit
    res.send(`lecture ${unit}`)
})

app.get("/welcome",(req,res)=>{
    // const name=req.query.name;
    const {name,age}=req.query;
    if(name){
        res.send(`welcome ${name} eligible ${age}`)
    }else{
        res.send(`welcome user`)
    }
})

// params=   /masai/1234 

app.get("/lecture/:lectureID",(req,res)=>{
    const lectureID=req.params.lectureID;
    res.send(`Here is your ${lectureID} lecture`)
})
app.listen(3000)