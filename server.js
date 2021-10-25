const http = require('http');
const fs = require('fs');

const serv = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    console.log('Request made');

    res.setHeader('Content-Type','text/html');
    // res.write('HELLO');
    // res.end();

    let path = './HTML/';

    switch(req.url)
    {
        case '/':
            path += 'Sample.html';
            res.statusCode = 200;
            break;
        
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
                res.end(data);
        }
    })
});

serv.listen(3000,'localhost',()=>{
    console.log("Listening to port 3000");
});