
var mongoose = require("mongoose")

var ProductSchema = new mongoose.Schema({
    title : String,
    author : String,
    number : Number

})
module.exports = mongoose.model("product",ProductSchema)