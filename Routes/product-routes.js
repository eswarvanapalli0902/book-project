var express = require("express")

var router = express.Router()

var{getAllProducts,getSingleProducts,getNewProduct,getUpdateProduct,getDeleteProduct}=require("../Controllers/products-controller")


router.get("/get",getAllProducts)
router.get("/get/:id",getSingleProducts)
router.post("/post",getNewProduct)
router.put("/update/:id",getUpdateProduct)
router.delete("/delete/:id",getDeleteProduct)

module.exports = router