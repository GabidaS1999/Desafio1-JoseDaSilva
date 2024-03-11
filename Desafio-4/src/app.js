import express from "express";
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewsRoutes from './routes/views.router.js';


import ProductManager from './Product-Manager.js';
let productManager = new ProductManager();




const app = express();
const PORT = 8080;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
    req.io = socketServer;
    next();
});


app.use(express.static(__dirname + '/public/'))


//router
app.use('/', viewsRoutes)





const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
});


const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado");


  socket.on('products', async () => {
    const products = await productManager.getProducts();
    socket.emit('products', products);
});


socketServer.on("newProduct", async (product) => {
    await productManager.addProduct(product);

    const products = await productManager.getProducts();
    socketServer.emit("products", products);
});
});
