const express = require ('express');
const app = express();
const path = require('path');
const mainRouter = require("./routers/main");
const routerProducts = require("./routers/products");

app.set("view engine", "ejs");
app.set("views", path.resolve("views"))

let port = 3030

app.listen (port, () => console.log("Servidor andando"))

app.use(express.static('public'));

app.use("/", mainRouter)

app.use("/products", routerProducts)

app.use((req,res, next) =>{
    res.status(404).render("not-found");
})

