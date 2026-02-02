/*
const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("Server here dumbo ")
})
server.listen(3000)
*/
/*
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end("Server here at home dumbo ");
  }
  if (req.url == "/cat") {
    res.end("You dont know how a cat looks like???");
  }
});
server.listen(3000);
*/

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("This is server yo")
})
app.get('/profile',(req,res)=>{
    res.send("Name : Alen Alias")
})
app.get('/home',(req,res)=>{
    res.send("This home page will take homeless people ")

})
app.listen(3000,()=>{
    console.log("Server running in port 3000");    
})