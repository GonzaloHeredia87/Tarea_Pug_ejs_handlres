const express = require('express');

const app = express();
app.use(express.static('public'))
const producto = require("../api/Producto.js");
const Productos = new producto();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const params = req.query;
    // { min: 10, max: 20, nivel: 15, titulo:<i></> }
    res.render('inicio');
});

app.post('/productos', (req, res) => {
    const params = req.body;
    console.log(params);
    // { min: 10, max: 20, nivel: 15, titulo:<i></> }
    //res.render('nivel', params);
});

app.listen(8888);