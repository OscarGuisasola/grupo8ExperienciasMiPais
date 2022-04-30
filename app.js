const express = require ('express');

const app = express();

const path = require('path');

let port = 3030

app.listen (port, () => console.log("Servidor andando"))

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./views/index.html'))
});
app.get('/home', (req, res) =>{
    res.sendFile(path.resolve('./views/index.html'))
});

app.get('/index', (req, res) =>{
    res.sendFile(path.resolve('./views/index.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve('./views/login.html'))
});

app.post('/login', (req, res) =>{
    res.sendFile(path.resolve('./views/login.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve('./views/register.html'))
});

app.post('/register', (req, res) =>{
    res.sendFile(path.resolve('./views/register.html'))
});

app.get('/productDetail', (req, res) =>{
    res.sendFile(path.resolve('./views/productDetail'))
});

app.get('/productCart', (req, res) =>{
    res.sendFile(path.resolve('./views/productCart.html'))
});

app.get('/detalleTrekking', (req, res) =>{
    res.sendFile(path.resolve('./views/detalleTrekking.html'))
});

app.get('/detalleMontanismo', (req, res) =>{
    res.sendFile(path.resolve('./views/detalleMontanismo.html'))
});
