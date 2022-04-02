const express = require('express');
const {Router} = express;
const app = express();
const productoRouter = Router();
app.use(express.static('public'))
const producto = require("./api/Producto.js");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8888;
const Productos = new producto()
productoRouter.use('/api', productoRouter);

productoRouter.get('/', (req, res)=>{
    console.log('Hola estoy en productos');
    
    console.log(Productos.obtenerTodo());
    res.json(Productos.obtenerTodo());
});

productoRouter.get('/:id', (req, res)=>{
    const index = req.params.id;
    const data = Productos.buscar(index);
    console.log('en buscar, id enviado: '+data);
    res.json(data);

});

productoRouter.post('/', (req, res)=>{
    
    let data = {};
    let resultado = {};
    if (req.query.title!=null){
        //console.log('Es query params ');
        data = req.query;
        //console.log(resultado);
        resultado = Productos.crear(data.title, data.price, data.thumbnail);
    }else if(req.body.title!=null){
        //console.log('No es query params, es Body, viene de un post de html');
        data = req.body;
        resultado = Productos.crear(data.title, data.price, data.thumbnail);
        //console.log(resultado);
    }
    
    
    
    res.json(resultado);
});
productoRouter.put('/:id', (req, res)=>{
    const id = req.params.id;
    const data = req.query;
    let resultado = "Favor completalos datos";
    if (id!=null){
        if (data.title!=null && data.price!=null && data.thumbnail!=null ){
            resultado = Productos.editar(id, data.title, data.price, data.thumbnail)
        }
    }
    res.json(resultado);
});

productoRouter.delete('/:id', (req, res)=>{
    const index = req.params.id;
    res.json(Productos.borra(index));
});

app.use('/productos', productoRouter);


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`));