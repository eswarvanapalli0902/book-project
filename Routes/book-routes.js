var express = require("express")

var router = express.Router()

var {getAllBooks,getSingleBooks,getUpdateBooks,getNewBooks,getDeleteBooks}= require("../Controllers/book-controller")

router.get("/get",getAllBooks)
router.get("/get/:id",getSingleBooks)
router.post("/post",getNewBooks)
router.put("/update/:id",getUpdateBooks)
router.delete("/delete/:id",getDeleteBooks)

module.exports = router
