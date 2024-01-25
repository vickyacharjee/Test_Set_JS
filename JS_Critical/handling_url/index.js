const http=require('http');
const fs=require('fs');
const url=require('url');


const myServer=http.createServer((req,res)=>{
if(req.url==='/favicon.ico') return res.end();
const log=`A new Request is recieved at ${Date.now()} & The URL Provoked at ${req.url} and the method is ${req.method} \n`
const myUrl =url.parse(req.url,true);
console.log(myUrl);

//URL module proovides the information like:
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?myName=vicky',
//   query: 'myName=vicky', //query:: the query provides me only the [query part]
//   pathname: '/about',
//   path: '/about?myName=vicky', //here the gives me the complete address 
//   href: '/about?myName=vicky'
// }



fs.appendFile('log.txt',log,(error,data)=>{
    switch (myUrl.pathname) {
        
        case '/': res.end("This is main Main Page")
            break;

        case '/about': //res.end("This about Page")
             const userName=myUrl.query.myname;
             const userId=myUrl.query.querId;

             res.end(`Hi this is Main page of the server and  your name is : ${userName} and ur ID is ${userId}`)
             //http://localhost:8000/about?myname=vicky2_CAharjee&querId=tic+tac+toe //hence this results te putput as:: Hi this is MAin page of the server and  your name is : vicky2_CAharjee and ur ID is tic tac toe
            break;

        case '/vicky': //res.end("This is VICKY Page")

            const userNameVicky=myUrl.query.name;
            const queryId=myUrl.query.qid;
            res.end(`inside Vicky's Page:: ${userNameVicky} and your query id is ${queryId}`)
            break;
           
            default:  res.end("Sorry 404 NOT FOUND");
    }
  })
})
myServer.listen(8000,()=>console.log("Server Created"));