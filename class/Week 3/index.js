const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//just get no 
app.get("/", (req,res) =>{
    res.send("Welcome to the server this is the get method")
})
//use post for modifying the data.
app.post("/", (req,res) =>{
    res.send("Welcome to the server")
})
//update data not used much.
app.put("/", (req,res) =>{
    res.send("Welcome to the server")
})
//delete information obvi
app.delete("/", (req,res) =>{
    res.send("Welcome to the server")
})

//https://youtube.com/watch?v=kfekfpeowkfewpokfewpj
//


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

app.get("/watch", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    res.send("Welcome to the watch list")
})


//Route
app.get("/itm/:itemID", (req,res)=> {
    console.log("Query call")
    console.log(req.query)
    console.log("param call")
    console.log(req.params)
    res.end("Welcome to the item list")
})