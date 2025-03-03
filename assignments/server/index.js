const education = require("./routes/education");
const experience = require("./routes/experience");
const overview = require("./routes/overview");

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8000
const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors());

app.use("/getEdu", education);
app.use("/getExp", experience);
app.use("/getOverview", overview);

app.get("/", (req, res) =>{
    res.send("Server is Live")
});

app.listen(PORT,() =>{
    console.log(`http://localhost:${PORT}`)
});

app.use("", (req, res) =>{
    res.send(`No request for ${req.url} exists`);
});