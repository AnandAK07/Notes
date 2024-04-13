const http=require("http");
const fs=require("fs")

const server=http.createServer((req,res)=>{
    if(req.method==="GET"&&req.url==="/posts"){
        // res.setHeader('content-type','text');
        res.setHeader('content-type','application/json');
        res.end("<h1>post</h1>")
    }
    else if(req.method==="POST"&&req.url==="/posts"){
        // res.end("Api working")
        let result="";
        req.on("data",(data)=>{
            result+=data;
            //event it will add the "data" is comming
        })
        req.on("end",()=>{
            // event "end" then clg() res.send("")
            fs.writeFile("./data.txt",result,{encoding:"utf-8"},()=>{
                console.log("data is writen")
            })
            console.log(result);
            res.end("Data received")
        })
        res.end();
    }else if(req.url==="/reports"){
        res.write("Here your report cart");
        res.end("Here are your reports");
        // on terminal run this to see how many req/sec
        // npx autocannon http://localhost:8080/reports 
    }else if(req.rul==="/readFile"){
        fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
            res.end(data);
        })
    }
})


server.listen(8080,()=>{
    console.log("8080")
});
