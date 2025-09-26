var books = require("../Model/Book")

var getAllBooks = async(req,res)=>{
    var allBooks = await books.find()
    res.status(200).json(allBooks)

}
var getSingleBooks = async(req,res)=>{
    var bookId = req.params.id
    var myBook = await books.findById(bookId)
    res.status(200).json(myBook)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                

}
var getUpdateBooks = async(req,res)=>{
    var bookId = req.params.id
    var updatedData = req.body
    var UpdatedBooks = await books.findByIdAndUpdate(bookId,updatedData)
    if(UpdatedBooks){
        res.status(200).json(UpdatedBooks)
    }else{
        res.status(404).json({message : "cannot updated"})
    }

}
var getNewBooks = async(req,res)=>{
    var formData = req.body
    var newBook = await books.create(formData)

        res.status(200).json(newBook)
    

}
var getDeleteBooks = async(req,res)=>{
    var bookId = req.params.id
    var DeleteBooks = await books.findByIdAndDelete(bookId)
    if(DeleteBooks){
        res.status(200).json(DeleteBooks)
    }else{
        res.status(404).json({message :"cannot delete"})
    }

}

module.exports={getAllBooks,getSingleBooks,getUpdateBooks,getNewBooks,getDeleteBooks}