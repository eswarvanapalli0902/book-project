var mongoose = require("mongoose")

var newSchema = new mongoose.Schema({
    title : String,
    author : String,
    recordNumber : Number
})
module.exports = mongoose.model("books",newSchema)