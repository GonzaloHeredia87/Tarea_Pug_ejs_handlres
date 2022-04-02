const express = require('express')
const PORT = 8888;
const app = express()

app.use(express.static('public'))
const producto = require("../api/Producto.js");
const Productos = new producto();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio');
})
app.get('/historial', (req, res) => {
    const productos = Productos.obtenerTodo();
    console.log(productos);
    res.render('historial', { productos });
})
app.post('/productos', (req, res) => {
    const data = req.body;
    if (data.title!=null){
        Productos.crear(data.title, data.price, data.thumbnail);
    }
    //personas.push(req.body);
    console.log(req.body);
    res.redirect('/');
})

app.listen(PORT);