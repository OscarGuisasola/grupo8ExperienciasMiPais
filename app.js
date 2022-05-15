const express = require ('express');
const app = express();
const path = require('path');
const mainRouter = require("./routers/main");

app.set("view engine", "ejs");
app.set("views", path.resolve("views"))

let port = 3030

app.listen (port, () => console.log("Servidor andando"))

app.use(express.static('public'));

app.use("/", mainRouter)


app.get('/login', mainRouter)


app.get('/register', mainRouter)

app.post('/register', mainRouter)


app.get('/productCart', mainRouter)

app.get('/detalleTrekking', mainRouter)



