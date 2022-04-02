class Producto{

    static item = 0;

    constructor(){
        this.persona = [];
        this.objeto = [];

    }

    crear(title, price, thumbnail){
        const persona = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id : Producto.item+1
        }
        this.objeto.push(persona);
        Producto.item ++;
        return persona;
    }

    buscar(id){
        let persona = {error:'Producto no encontrado'};
        
        if (this.objeto.length>0){
            for(let i = 0; this.objeto.length>i;i++){
                if (this.objeto[i].id==id){
                    persona = this.objeto[i];
                    
                }
            }
        }
        return persona;
    }

    editar(id, title, price, thumbnail){
        let persona = {};
        let resultado = "No existen productos";
        if (this.objeto.length>0){
            for (let i = 0; this.objeto.length>i;i++){
                if(this.objeto[i].id == id){
                    this.objeto[i].title = title;
                    this.objeto[i].price = price;
                    this.objeto[i].thumbnail = thumbnail;
                    persona = this.objeto[i];
                    resultado = {   
                        status: 'proceso realizado con exito',
                        producto: this.objeto[i].id
                    }
                }
            }
        }
        return resultado;
    }

    borra(id){
        let estado = {status: 'Producto no encontrado para borrar'};
        if (this.objeto.length>0){
            for(let i = 0; this.objeto.length>i;i++){
                if (this.objeto[i].id==id){
                    this.objeto.splice(i, 1);
                    estado = {statu: 'Producto borrado con éxito'};
                }
            }
        }
        console.log('estado de borrar: '+ estado);
        return estado;
    }

    obtenerTodo(){
        return this.objeto;
    }

}

module.exports = Producto;
