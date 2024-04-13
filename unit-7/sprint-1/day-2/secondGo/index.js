const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    console.log(req.url+" "+req.method)
    if(req.url==="/"){
        res.write("App is working")
        res.end("App is working")
    }
    else if(req.url==="/sugar"){
        res.write("Here is the sugar")
        
        res.end()
    }else if(req.url==="/salt"){
        res.write("Here is the salt")
        res.end()
    }else if(req.url==="/lecture"){
        fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                res.write("plz try later")
                res.end()
            }else{
                res.write(data)
                res.end("data")
            }
        })
    }
    // res.write("Hello from my first server")
    
    // client will not konw that res is ended
    // res.end();
    // res.end("done");
})
// .listen(8080)

server.listen(8080)

