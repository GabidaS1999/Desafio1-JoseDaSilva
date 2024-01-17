class ProductManager {
    constructor() {
        this.productos = [];
        this.code = 1;
    }

    // Métodos
    addProduct(title, description, price, thumbail, stock) {
        
        const newProduct = {
            id: this.code,
            title,
            description,
            price,
            thumbail,
            stock
        };

        
        this.productos.push(newProduct);

        
        this.code++;

        
        if (title == 0||description == 0 ||price == 0||stock == 0|| thumbail == 0) {
            console.log("No pueden existir datos vacíos");
        }
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




nuevoProducto.addProduct("Arroz", "Blanco y rico", "$200", "./Multimedia/imagenes/arroz.png", 10);

nuevoProducto.addProduct("Fideo", "El mejor fideo", "$300", "./Multimedia/imagenes/fideo.png", 10)


const todosLosProductos = nuevoProducto.getProducts();
console.log(todosLosProductos);

console.log("El id buscado:");
console.log(nuevoProducto.getProductById(3));
console.log("El id buscado:")
console.log(nuevoProducto.getProductById(2));