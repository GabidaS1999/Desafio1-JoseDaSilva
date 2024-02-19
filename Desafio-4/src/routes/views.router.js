import ProductManager from '../Product-Manager.js';
import router from './products.routes.js';
let productManager = new ProductManager();
let products = await productManager.getProducts();

router.get('/home', (req, res) => {
    res.render('home', {
        products
    })
})
router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts')
});


export default router;