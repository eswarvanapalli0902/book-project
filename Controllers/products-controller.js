var product = require("../Model/product")

var getAllProducts = async(req,res)=>{
    var allproduct = await product.find()
    res.status(200).json(allproduct)

}

var getSingleProducts = async(req,res)=>{
    var productId = req.params.id
    var myproduct = await product.findById(productId)
    res.status(200).json(myproduct)


}

var getNewProduct = async(req,res)=>{
    var productData = req.body
    var newProduct = await product.create(productData)
    res.status(200).json(newProduct)


}

var getUpdateProduct = async(req,res)=>{
    var productId = req.params.id
    var productData = req.body
    var updateProduct = await product.findByIdAndUpdate(productId,productData)
    if(updateProduct){
        res.status(200).json(updateProduct)
    }else{
        res.status(401).json({message:"cannot updated"})
    }

}

var getDeleteProduct = async(req,res)=>{
    var productId = req.params.id
    var deleteProduct = await product.findByIdAndDelete(productId)
    if(deleteProduct){
        res.status(200).json(deleteProduct)
    }else{
        res.status(404).json({message:"cannot deleted"})
    }

}


module.exports = {getAllProducts,getSingleProducts,getNewProduct,getUpdateProduct,getDeleteProduct}