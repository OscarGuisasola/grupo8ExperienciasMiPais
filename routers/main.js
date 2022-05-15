const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/", mainController.index)
router.get("/login", mainController.login)
router.get("/register", mainController.register)
router.post("/register", mainController.register)
router.get("/productCart", mainController.productCart)
router.get("/detalleTrekking", mainController.detalleTrekking)


module.exports = router;
