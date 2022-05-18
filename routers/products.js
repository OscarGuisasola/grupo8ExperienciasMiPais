const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();


router.get("/createProducts", productsController.createProducts)
// routerProducts.post("/createEditProducts", productsController.createEditProducts)
router.get("/editProducts", productsController.editProducts)
module.exports = router;