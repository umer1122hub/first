const { log } = require("console")
const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
const url = "mongodb://0.0.0.0:27017/custom"
const route = require("./route/route")
app.use("/", route)
mongoose.connect(url)
.then(()=>{
    console.log("connected to db");
    app.listen(5000,()=>{
        console.log("postman access");
    })
})
.catch(()=>{
    console.log("error");
})
