class ProductManager {
    constructor() {
        this.productos = [];
        this.id = 1;
    }

    // Métodos
    addProduct(title, description, price, thumbail, code, stock) {
        
        const newProduct = {
            id: this.id,
            title,
            description,
            price,
            thumbail,
            code,
            stock
        };

        
        if (!title || !description || !price || !stock || !thumbail || !code) {
            console.log("No pueden existir datos vacíos");
            return;
        }

      
        if (this.productos.some(product => product.code === code)) {
            console.log(`El producto con el codigo ${code} ya existe`);
            return;
        }

        this.productos.push(newProduct);
        this.id++;

    }

    getProducts() {
        return this.productos;
    }

    
    getProductById(Id) {
        const buscarProducto = this.productos.find(product => product.id === Id);

        if (buscarProducto) {
            return buscarProducto;
        } else {
            return "Not found";
        }
    }
}


const nuevoProducto = new ProductManager();




nuevoProducto.addProduct("Arroz", "Blanco y rico", "$200",  10);


nuevoProducto.addProduct("Arroz", "Blanco y rico", "$200", "./Multimedia/imagenes/arroz.png", "abc1" ,10);


const todosLosProductos = nuevoProducto.getProducts();
console.log(todosLosProductos);

console.log("El id buscado:");
console.log(nuevoProducto.getProductById(4));
console.log("El id buscado:")
console.log(nuevoProducto.getProductById(2));