const http=require("http");
const fs=require("fs");

// const myserver=http.createServer((req,res)=>{
//     console.log(req.method +"  "+req.url);
//     if(req.url==="/history"){
//         res.end("Here is the history")
//     }
//     else if(req.url==="/cart"){
//         res.write("cart page,");
//         res.write("cart products");
//         // return res.end();
//         res.end();
//         // this tell server response is ended to client
//     }else if(req.url==="/salt"){
//         res.write("Here is Salt");
//         // return res.end();
//         res.end();
//     }else if(req.url==="/lecture"){
//         fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//             if(err){
//                 res.write("err, plz try again");
//                 res.end();
//             }else{
//                 res.write(data)
//                 res.end();
//             }
//         })
//     }else if(req.url=="/post"){
//         // res.write()
//         // console.log(res);
//         res.end();
//     }else{
//         res.write("Server is working, check API docs for API endpoints");
//         res.end();
//     }
    
    
// })
// }).listen(8000)


// const myserver=http.createServer((req,res)=>{
//     if(req.url==="/posts"){
//         res.setHeader('content-type','text');
//         res.end("<h1>Post</h1>");
//     }else{
//         res.end("API is working")
//     }
// })

const myserver=http.createServer((req,res)=>{
    if(req.method==="GET"&&req.url==="/posts"){
        res.setHeader('content-type','text');
        res.end("<h1>Post</h1>");
    }else if(req.method==="POST"&&req.url==="/posts"){
        // onClick not only it posible onXyz
        // let result="";
        // req.on("data",(data)=>{
        //     result+=data
        // })
        // req.on("end",(data)=>{
        //     console.log(result)
        //     res.end("data received")
        // })
        let result="";
        req.on("data",(data)=>{
            result+=data;
        })
        req.on("end",()=>{
            console.log(result);
            res.end("data received")
        })
    }else if(req.url=="/carts"){
        res.write("cart");

    }else if(req.url=="/lecture"){
        fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
            res.end(data);
        })   
    }else{
        res.end("API is working")
    }
})

myserver.listen(3000)