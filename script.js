const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/links", {useUnifiedTopology: true, useNewUrlParser: true})
const linkRoute = require("./routes/linkRoute")
const path = require("path")


let db = mongoose.connection;


db.on("error", ()=>{
    console.log("erro")
})

db.once("open", ()=>{
    console.log("banco carregado")
})

app.use("/", linkRoute)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.listen(port, ()=>{
    console.log(port)
})