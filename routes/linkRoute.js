const express = require("express");
const router = express.Router()
const linkController = require("../controllers/linkController")
const methodOverride = require("method-override")
router.use(methodOverride("_method"))

router.get("/all", linkController.allLinks)

router.get("/:title", linkController.redirect)

router.get("/", (req,res)=>{
    res.render("index", {error:false, body: {}})
})

router.get("/edit/:id", linkController.loadLink)

router.post("/", express.urlencoded({extended:true}), linkController.addLink)

router.post("/edit/:id",express.urlencoded({extended:true}), linkController.editLink)

router.delete("/:id", linkController.deleteLink)
router.delete("/", express.urlencoded({extended:true}), linkController.deleteLink)



module.exports = router