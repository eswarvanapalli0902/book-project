require("dotenv").config()
var express = require("express")
var router = require("./Routes/book-routes")
var connectToDataBase = require("./DataBase/db")

var app = express()
//connect to the database by calling server
connectToDataBase()
//add middle ware
app.use(express.json())
app.use("/api/books/",router)
var port = process.env.PORT || 9299
app.listen(port,()=>{
    console.log("the server is running");
    
})

