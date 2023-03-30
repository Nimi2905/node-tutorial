const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is my home page');
    }
    else if(req.url==='/about'){
        res.end('This is my about us page');
    }
    else{
        res.end('<h1>Oops!!</h1> <p>Page Not Found</p> <a href="/">Back Home</a>')
    }
})

server.listen(5000);