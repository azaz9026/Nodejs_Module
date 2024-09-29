const http = require("http");


const PORT = 3000
const HOST = 'localhost'


const server = http.createServer((req , res) => {

    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("This is a Home Page");
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("This is a About Page");
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end( "This is a Contact Page");
    }
    
    else if(req.url == '/produc'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/JSON");
        res.end(JSON.stringify({ProductName: "This is a Product 1"}));
    }
    else{
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error!");
    }
    
    
})




server.listen(PORT, () => {
    console.log(`Server is running on port ${HOST} and ${PORT}`);
});