// const { log } = require('console');
const http= require('http');
const fs=require('fs');

const mySever=http.createServer((req,res)=>{
    // console.log('Recieved new request');
    // console.log(req.headers);

    const log=`${Date.now().toLocaleString()} as Request Recieved \n`;
    fs.appendFile('log.txt',log,(error,data)=>{
        res.end('Hello vicky from port:8003')
    })

});

mySever.listen(8003,()=>console.log('Server Created')) 