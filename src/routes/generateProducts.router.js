const express = require("express");
const router = express.Router(); 
const GenerateProductsRepository = require("../repositorys/generateProducts.repository.js")
const generateProductsRepository = new GenerateProductsRepository()

router.get("/mockingproducts",generateProductsRepository.mockingproducts )
   

module.exports = router;