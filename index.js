require("dotenv").config()
var express = require("express")
var cors = require("cors")
var router = require("./Routes/book-routes")
var productroute = require("./Routes/product-routes")
var connectToDataBase = require("./DataBase/db")

var app = express()
//connect to the database by calling server
connectToDataBase()
//add middle ware
app.use(express.json())
app.use(cors())
app.use("/api/books/",router)
app.use("/api/products",productroute)
var port = process.env.PORT || 9299
app.listen(port,()=>{
    console.log("the server is running");
    
})

