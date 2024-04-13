const express=require('express');
const fs=require("fs");
const app=express();

app.use(express.json())//mw

// method +route

app.get("/",(req,res)=>{
    // res.write("hello");
    // res.end();
    res.send("App is working at 8080")
})

app.get("/post",(req,res)=>{
    res.send("Here are your post")
})

app.get("/reports",(req,res)=>{
    res.send("Here are your reports")
})

app.get("/info",(req,res)=>{
    fs.readFile("./info.txt",{encoding:"utf-8"},(err,data)=>{
        if(err) throw err;
        console.log(data)
        res.send(data)
    })
    res.send("hello")
})


app.post("/add-user",(req,res)=>{
    console.log(req.body);
    res.send()
})


// CR Create Read

// Read
app.get("/users",(req,res)=>{
    const data_json=fs.readFileSync("./data.json","utf-8")
    // console.log(data)
    const data_obj=JSON.parse(data_json);
    const users=data_obj.users;
    res.send(users);
})

// Create
app.post("/users/create",(req,res)=>{
    console.log(req.body);
    const new_user=req.body;
    // fs.writeFile
    // fs.appendFileSync("./data.json",JSON.stringify(new_user));
    


    // first get all data from data.json file --JSON --data.json
    // we'll convert it to obj using JSON.parse --OBJ

    // data_obj.users.push(new_user)---Object --data_obj_with_new_user

    // to store in json, we convert it to json --Json --data_json
    const exsisting_data_json=fs.readFileSync("./data.json","utf-8");
    const exsisting_data_obj=JSON.parse(exsisting_data_json);
    console.log("before adding new_user",exsisting_data_obj)
    exsisting_data_obj.users.push(new_user)

    console.log("after adding new_user",exsisting_data_obj)

    console.log("after converting it back to JSON");
    const data_json=JSON.stringify(exsisting_data_obj)
    console.log(data_json)

    // store it back
    fs.writeFileSync("./data.json",data_json);

    res.send("user created")
})

app.listen(8080,()=>{
    console.log("Listening is at 8080")
})