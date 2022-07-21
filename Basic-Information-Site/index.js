const http = require('http');
const fs = require('fs');
const port = 8080;
const hostname= '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile('index.html',(err,data)=> {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/about"){
        fs.readFile('about.html',(err,data)=> {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/contact"){
        fs.readFile('contact-me.html',(err,data)=> {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else {
            fs.readFile('404.html',(err,data)=> {
            res.writeHead(404, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
});

myServer.listen(port,hostname, ()=>{
    console.log(`Server started at http://${hostname}:${port}`)
})
