import ProductManager from "../Desafio-2/Product-Manager.js";
let productManager = new ProductManager();
//productManager.addProduct( "Mango", "Muy dulces", 250, "Sin imagen", "abc140", 25)


import express from "express";


const app = express();
const PORT = 8080;



app.get('/products', async (req, res) => {
    let todosLosProductos = await productManager.getProducts();

    let limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        let productosLimitados = todosLosProductos.slice(0, limit);
        res.send(productosLimitados);
    } else {
        res.send(todosLosProductos);
    }

})




app.get('/products/:pid', async (req, res) => {
    let todosLosProductos = await productManager.getProducts();
    let { pid } = req.params;

    const producto = todosLosProductos.find(p => p.id == parseInt(pid))
    if (producto) {
        res.json({ producto })
    }

    res.send({ msg: "Producto no encontrado" })
})


app.listen(PORT, () => {
    console.log(`Server: ${PORT}`);
})