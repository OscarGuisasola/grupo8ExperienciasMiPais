const productsController = {
    createProducts: (req,res) => {

        res.render("./products/createProducts")
    },
    editProducts: (req,res) => {

        res.render("./products/editProducts")
    }

}

module.exports = productsController;
