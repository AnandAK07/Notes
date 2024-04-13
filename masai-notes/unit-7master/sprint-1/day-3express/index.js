const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Api is working")
    }else if(req.method==="POST"&&req.url==="/adddata"){
        let output="";
        req.on("data",(packet)=>{
            output+=packet;
        })

        req.on("end",()=>{
            console.log(output);
            req.end("Data received");
        })
    }else{
        res.end("Hello")
    }
})

server.listen(8080,()=>{
    console.log("server at 8080")
})