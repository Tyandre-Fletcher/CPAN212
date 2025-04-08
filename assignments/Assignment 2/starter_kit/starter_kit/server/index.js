require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const recipeRouter = require("./routers/recipes_router");

const app = express();
const PORT = process.env.PORT || 8001

const cors = require('cors');


mongoose.connect(`${process.env.mongodb}`);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to mongoDB");
});

db.on("error", (err) => {
    console.log("DB error");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/recipe", recipeRouter);

app.get("/", (req,res) => {
    res.send("Welcome to the server");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

app.use("", (req,res) => {
    res.status(400).send("Page not found");
})
