// const { log } = require('console');
const http= require('http');
const fs=require('fs');

const mySever=http.createServer((req,res)=>{
    // console.log('Recieved new request');
    // console.log(req.headers);
    // console.log(req);

    const log=`${Date.now().toString()} as Request Recieved in 8000 and url seek for ${req.url} \n`;
    fs.appendFile('log.txt',log,(error,data)=>{
           switch (req.url) {
            case '/': res.end('This is home for Server')
                break;
        
            case '/about': res.end('This is about Section')
                break;

             case '/home': res.end('This is HOME Section')
                break;    
            
            default:
                res.end("<h1>404 Not found</h1>");
        }
    })
    //using switch case for the specified URL

});

mySever.listen(8000,()=>console.log('Server Created')) 