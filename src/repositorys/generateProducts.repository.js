const GenerateProducts= require("../utils/generateProducts")

class generateProductsRepository{
    async mockingproducts(req, res){
        const products = [];

        for ( let i = 0; i < 100; i++ ){
            products.push(GenerateProducts());
        }
        res.json(products);
    }
}

module.exports = generateProductsRepository