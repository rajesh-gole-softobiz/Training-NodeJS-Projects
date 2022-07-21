const http = require('http');
const port = 3000;
const hostname= '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.writeHead(202, {'Content-Type':'text/html'});
    res.end('<h1>Welcome to Home Page...</h1>');
});

myServer.listen(port,hostname, ()=>{
    console.log(`Server started at http://${hostname}:${port}`)
})
