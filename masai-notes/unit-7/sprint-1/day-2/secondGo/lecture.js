const http = require("http")
const fs = require("fs")

const myserver =  http.createServer((req, res) => {
                    if(req.method === "GET" && req.url === "/posts"){
                        res.end("Here are your posts")
                    }
                    else if(req.method === "POST" && req.url === "/posts"){
                        let result = "";
                        req.on("data", (data) => {
                            result += data;
                        })

                        req.on("end", () => {
                            console.log(result)
                            res.end("Data received");
                        })
                    }
                    else if(req.url === "/reports"){
                        res.end("Here are your reports")
                    }
                    else if(req.url === "/lectures"){
                        fs.readFile("./lecture.txt", {encoding : "utf-8"}, (err, data) => {
                            res.end(data)
                        })
                    }
                    else{
                        res.end("API working")
                    }
})


myserver.listen(8000)




//Problem statement
//Whenever a request comes to our server,in our server,
// print(console.log) the request URL and the http method

//GET /cart
//POST /cart