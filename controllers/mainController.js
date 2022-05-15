const mainController = {

    index: (req,res) => {

        res.render("home")
    },
    login: (req,res) => {

        res.render("login")
    },
    register: (req,res) => {

        res.render("register")
    },
    productCart: (req,res) => {

        res.render("productCart")
    },
    detalleTrekking: (req,res) => {

        res.render("detalleTrekking")
    }

}

module.exports = mainController;
