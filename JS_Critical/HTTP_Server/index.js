// const { log } = require('console');
const http= require('http');
const fs=require('fs');

const mySever=http.createServer((req,res)=>{
    // console.log('Recieved new request');
    // console.log(req.headers);

    const log='vicky';

    fs.appendFile('log.txt','log',(error,data)=>{
        res.end('Hello vicky from prot:8003 server---')

    })

});

mySever.listen(8003,()=>console.log('Server Created')) 