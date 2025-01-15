const personas = [
    {
        name:"uno",
        apellido:"otrouno",
        suscrito: true
    },
    {
        name:"dos",
        apellido:"otrodos",
        suscrito: false
    },
    {
        name:"tres",
        apellido:"otrotres",
        suscrito: true
    },
    {
        name:"cuatro",
        apellido:"otrocuatro",
        suscrito: false
    },
    {
        name:"cinco",
        apellido:"otrocinco",
        suscrito: true
    }
];

const suscritos = personas.map((elemento)=>{
    if(elemento.suscrito===true)
        return elemento
});

//console.log(suscritos);

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónica" },
    { id: 3, nombre: "Mesa", precio: 150, categoria: "Muebles" },
    { id: 4, nombre: "Silla", precio: 80, categoria: "Muebles" },
    { id: 5, nombre: "Audífonos", precio: 50, categoria: "Accesorios" }
];

//Obtener solo los nombres de los productos

const nombreProductos=productos.map((producto)=>{
    return producto.nombre;
});

console.log(nombreProductos);

//Aplicar un descuento del 10% a todos los precios

const productosDescuento = productos.map((producto)=>({
     ...producto,
     precio: producto.precio*0.9
}));

console.log(productosDescuento);

//Crear una lista de descripciones para los productos

const descripciones = productos.map(producto =>{
    return `Nombre del producto: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}`;
});

console.log(descripciones);

//Crear un array de objetos id y precio

const idsPrecio = productos.map(({id,precio})=>({id,precio}));
console.log(idsPrecio);