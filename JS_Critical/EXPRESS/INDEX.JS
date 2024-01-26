

// ==================The simplified version using the express Farmework===========================



                                // const express= require('express');
                                // const http=require('http');



                                // const app=express();

                                // app.get('/',(req,res)=>{
                                //     res.end('Hey, there from home page '+req.query.name2);
                                // })


                                // const myServer=http.createServer(app);
                                // myServer.listen(8000,()=> console.log("Server Created"))


 // ==================The More and common simplified version using the express Farmework===========================
    
// const express=require('express');

// const app=express();

// app.get('/',(req,res)=>{
//     res.end("Hey there from home page")
// })

// app.get('/vicky',(req,res)=>{
//     res.end(`Hey there ${req.query.name}, this side and ${req.query.queryid}`)
// })

// app.listen(8000,()=>console.log('Server created via Express'))


const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.end("hey HOME page here")
})

app.get('/about',(req,res)=>{
    res.end("hey about page here")
})

app.listen(8000,()=>console.log("Ok Server Created"))