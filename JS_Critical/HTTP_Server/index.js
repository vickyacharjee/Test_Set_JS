
const http= require('http');
const fs=require('fs');

const mySever=http.createServer((req,res)=>{
    // console.log('Recieved new request');
    // console.log(req.headers);
    // console.log(req);

    const log=`${Date.now().toString()} as Request Recieved in 8000 and url seek for ${req.url} \n`;
    fs.appendFile('log.txt',log,(error,data)=>{
         const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Embedded HTML</title>
      </head>
      <body>
        <h1>Hello, this is embedded HTML!</h1>
        <h1>404 Not Found</h1>
        
         
        <style>
        
        h1{
            background-color: aqua;
        }
        </style>
      </body>
      </html>
    `;

           switch (req.url) {
            case '/': res.end('This is DEFAULT Server')
                break;
        
            case '/about': res.end('This is ABOUT Section')
                break;

             case '/home': res.end('This is HOME Section')
                        break;    
          
             case '/vicky': res.end('This is VICKY Section')
                break;    
          
            default:
                   res.end(htmlContent)
        }
    })
    //using switch case for the specified URL

});

mySever.listen(8000,()=>console.log('Server Created')) 