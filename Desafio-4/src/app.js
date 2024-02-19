import  express  from "express";
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import {Server} from 'socket.io';
import viewsRoutes from './routes/views.router.js';


import ProductManager from './Product-Manager.js';
let productManager = new ProductManager();




const app = express();
const PORT = 8080;


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public/'))


//router
app.use('/', viewsRoutes)

let products = await productManager.getProducts();



const httpServer = app.listen(PORT, ()=>{
    console.log(`Server run on port: ${PORT}`);
});


const socketServer = new Server(httpServer);

socketServer.on('connection', socket =>{
    console.log("Nuevo cliente conectado"); 
    socketServer.emit('products', products)
    
    socketServer.on('products', data=>{
        console.log(data);
    })
})